
import Image from "next/image";

import { IoIosStar } from "react-icons/io";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  reting?: string;
  full_price?: string;
  img_url: string;
}

const product: Iproducts[] = [
  {
    title: "T-shirt with Tape Details",
    id: 1,
    price: "$120",
    img_url: "/TS.png",
  },

  {
    title: "Skinny Fit Jeans",
    id: 2,
    price: "$240 ",
    img_url: "/P1.png",
    full_price: "$260",
  },
  {
    title: "Checkered Shirt",
    id: 3,
    price: "$180",
    img_url: "/TS1.png",
  },
  {
    title: "Sleeve Strped T-Shirt",
    id: 4,
    price: "$130",
    img_url: "/TS2.png",
    full_price: "$160",
  },
];

const star = [
  <IoIosStar key={1} />,
  <IoIosStar key={2} />,
  <IoIosStar key={3} />,
  <IoIosStar key={4} />,
  <IoIosStar key={5} />,
];

export default function Items() {
  return (
    <div className="w-full  min-h-full sm:min-h-[500px] px-10 mt-10 p-4 sm:p-6 md:p-8">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
       NEW ARRIVAL
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
        
        {product.map((data) => {
          return (
            <div key={data.id}>
              <div className="w-[150px]h-[150px] bg-gray-300 rounded-lg">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className=" w-full h-full rounded-lg"
                  width={100}
                  height={100}
                ></Image>
              </div>

              <p className="font-bold">{data.title}</p>
              <p className="flex text-yellow-500">{star}</p>
              <p className="font-bold">
                {data.price}{" "}
                <span className="text-gray-300 font-bold line-through">
                  {data.full_price}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
