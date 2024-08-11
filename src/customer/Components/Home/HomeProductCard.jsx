import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product, section }) => {
  const navigate = useNavigate();

  const generateUrl = (section) => {
    switch (section) {
      case "Men's Kurta":
        return "/men/clothing/mens_kurta";
      case "Men's Shoes":
        return "/men/clothing/mens_shoes";
      case "Lengha Choli":
        return "/women/clothing/lengha_choli";
      case "Saree":
        return "/women/clothing/saree";
      case "Dress":
        return "/women/clothing/dress";
      case "Women's Gouns":
        return "/women/clothing/womens_gouns";
      case "Women's Kurtas":
        return "/women/clothing/womens_kurtas";
      default:
        return "/";
    }
  };

  const url = generateUrl(section);

  return (
    <div
      onClick={() => navigate(url)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
