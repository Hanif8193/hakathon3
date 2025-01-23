import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Hero from "./components/Hero";
import Center from "./components/Center";
import SecLast from "./components/SecLast";
import Image from "next/image";
import Link from "next/link";
interface IProduct {
  id: string; // Add the id property
  name: string;
  price: number;
  image: string; // Use `any` if you're processing images via the builder
  slug: { current: string }; // Slug is an object in Sanity
}

// Initialize Sanity image builder
const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

async function Home() {
  // Fetch data from Sanity
  const res: IProduct[] = await client.fetch(
    `*[_type == "products"]{
    id,
      name,
      price,
      image,
      slug,
    }`
  );

  return (
    <div>
      <Hero />
      <Center />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {res.map((product: IProduct) => (
          <div key={product.name}>
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={600}
              height={600}
              className="w-auto h-auto"
            ></Image>
            <h2>{product.id}</h2>
            <h2>{product.name}</h2>
            <p>{product.price}</p>

            <Link href={`/product/${product.slug.current}`}>
              <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </p>{" "}
            </Link>
          </div>
        ))}
      </div>
      <SecLast />
    </div>
  );
}

export default Home;
