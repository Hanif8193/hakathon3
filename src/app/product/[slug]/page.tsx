
// Replace with your Sanity Client path
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const query = `*[_type == "products" && slug.current == $slug][0]{
    image, 
    name, 
    price, 
    description
  }`;

  const product = await client.fetch(query, { slug: params.slug });

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      {product.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name || "Product Image"}
          width={800}
          height={500}
          className="w-full rounded-lg shadow-md"
        />
      )}

      <div className="mt-6 space-y-4">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-2xl font-semibold text-green-600">${product.price}</p>

        <div className="text-gray-700 mt-4">
          <PortableText value={product.description} />
        </div>

        <Button className="bg-black text-white px-6 py-3 rounded-lg">
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
