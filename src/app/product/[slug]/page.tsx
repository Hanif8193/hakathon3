"use client";
// Replace with your Sanity Client path
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartslice";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const [productState, setProductState] = useState<ProductType | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "products" && slug.current == $slug][0]{
        image, 
        name, 
        price, 
        description
      }`;

      const product = await client.fetch(query, { slug: params.slug });
      setProductState(product);
    };

    fetchProduct();
  }, [params.slug]);

  type ProductType = {
    image: string;
    name: string;
    price: number;
    description: string;
  };

  if (!productState) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }
  const handleAdd = (product: ProductType) => {
    const cartItem = {
      id: Date.now(), // Using current timestamp as a unique identifier
      title: product.name,
      price: product.price,
      image: product.image,
    };
    dispatch(add(cartItem));
  };

  return (
    <div className="bg-green-200">
    <div className="p-10 max-w-5xl mx-auto ">
      {productState.image && (
        <Image
          src={urlFor(productState.image).url()}
          alt={productState.name || "Product Image"}
          width={800}
          height={500}
          className="w-full rounded-lg shadow-md"
        />
      )}

      <div className="mt-6 space-y-4">
        <h1 className="text-4xl font-bold">{productState.name}</h1>
        <p className="text-2xl font-semibold text-green-600">${productState.price}</p>
          <p className="text-xl">{productState.description}</p>
        <div className="text-gray-700 mt-4">
        <PortableText value={productState.description} />
          
        </div>
        <button onClick={()=>handleAdd(productState)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </button>
        
        </div>
      </div>
    </div>
  );
}