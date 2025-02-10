import React from "react";
import { star } from "../assets/icons";

const ProductPopularCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat leading-normal">
          (4.6)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
        {name}
      </h3>
      <p className="mt-2 text-coral-red text-2xl font-montserrat font-semibold leading-normal">
        {price}
      </p>
    </div>
  );
};

export default ProductPopularCard;
