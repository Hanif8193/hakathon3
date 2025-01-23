import React from "react";

import {
  Playfair_Display,
  Cinzel,
  Roboto,
  Prata,
  Montserrat,
} from "next/font/google";
const Playfair = Playfair_Display({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"] });
const parata = Prata({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"],weight:"400" });
const montsserrat = Montserrat({ subsets: ["latin"] });

function Center() {
  return (
    <div>
      <div className="bg-black text-white w-full h-[100px] px-8 py-5  mt-5">
        <ul className="flex justify-center space-x-3 md:justify-between items-center text-center flex-wrap">
          <li className={`${Playfair.className}text-2xl md:text-4xl`}>
            {" "}
            VERSAC
          </li>
          <li className={`${cinzel.className}text-2xl md:text-4xl`}>
            {" "}
            ZARA
          </li>

          <li className={`${roboto.className}text-2xl md:text-4xl`}>
            {" "}
            GUCCI
          </li>

          <li className={`${parata.className}text-2xl md:text-4xl`}>PARADA</li>
          <li className={`${montsserrat.className}text-2xl md:text-4xl`}>
            Calvin Klein
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Center;
