import React from "react";
import Image from "next/image";
import F from "../../../public/Frame 27 (1).png";
import TS from "../../../public/Frame 33 (2).png";
import TS1 from "../../../public/Frame 34 (2).png";
import TS2 from "../../../public/Frame 38 (2).png";
import S1 from "../../../public/S1.png";
import S from "../../../public/S.png";
import S5 from "../../../public/S5.png";

import G from "../../../public/Group 9.png";
import G1 from "../../../public/Group 10.png";

function NewArrival() {
  return (
    <div id="new-arrival">
    <div className="  grid grid-cols-4 mt-5 px-5 h-full sm:h-full">
      <div className=" row-span-4">
        <Image src={F} alt="F" width={210} height={210} />{" "}
      </div> 
        
      <div className=" col-span-3 flex gap-2 sm:flex flex-wrap mt-5 ">
        <Image src={TS} alt="TS" width={200} height={200} />
        <Image src={TS1} alt="TS" width={200} height={200} />
        <Image src={TS2} alt="TS" width={200} height={200} />
      </div>
      <div className=" flex gap-10 col-span-3 sm:flex flex-wrap">
        <div className="flex-row-reverse ">
          Gradiant Graphic T-shirt
          <Image src={S1} alt="S" width={125} height={125} />
          $145
        </div>
        <div className="flex-col">
          Polo With Tripping Detail
          <Image src={S} alt="S" width={125} height={125} />
          $180
        </div>
        <div className="flex-col">
          Black Stripped T-shirt
          <Image src={S5} alt="S" width={125} height={125} />
          $120 $160{" "}
        </div>
      </div>

      <div className="  col-span-3">
        <Image src={G} alt="G" width={600} height={600} />{" "}
      </div>
      <div className=" col-span-3">
        <Image src={G1} alt="G1" width={600} height={600} />{" "}
      </div>
    </div>
    </div>
  );
}

export default NewArrival;
