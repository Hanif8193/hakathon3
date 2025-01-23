"use client";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React, { useState, useEffect } from "react";



interface IProduct {
  _id: string;
  _type: string;
  name: string;
  price: number;
  image: string; // Adjusted based on Sanity schema
  description: string;
  size: string;
  color: string;
}

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<IProduct | null> {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
        _id,
        _type,
        name,
        price,
        image,
        description,
        size,
        color
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, [slug]);

  
  

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="max-w-10xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 bg-green-100">
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={800}
          height={800}
        />
        <div className="flex flex-col gap-5 items-center ml-5">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold">${product.price}</p>
          <p>{product.description}</p>
          <button
            className="bg-black text-white px-10 py-2 rounded-lg hover:cursor-pointer"
            
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
