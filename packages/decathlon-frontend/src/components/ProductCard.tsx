import { FaCheck } from "react-icons/fa";
import type { Product } from "../types";
import maillot1 from "../assets/families/maillot/maillot1.png";
import maillot2 from "../assets/families/maillot/maillot2.png";
import maillot3 from "../assets/families/maillot/maillot3.png";

import cone1 from "../assets/families/cones/cone1.png";
import cone2 from "../assets/families/cones/cone2.png";
import cone3 from "../assets/families/cones/cone3.png";

const maillotImages = [maillot1, maillot2, maillot3];
const coneImages = [cone1, cone2, cone3];

type Props = {
  product: Product;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
  index: number;
};

const NO_IMAGE =
  "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";

export default function ProductCard({
  product,
  isSelected,
  isDisabled,
  onSelect,
  index,
}: Props) {
  let imagesToUse;
  if (product.family === "cone") {
    imagesToUse = coneImages;
  } else {
    imagesToUse = maillotImages;
  }

  return (
    <div
      onClick={onSelect}
      className={`
      relative flex flex-col items-start text-start cursor-pointer p-4 rounded-xl shadow-sm border-2 transition-all duration-200
      ${isSelected ? "border-blue-600 bg-blue-100 scale-103" : ""}
      ${
        !isSelected && isDisabled
          ? "pointer-events-none opacity-60 filter grayscale cursor-not-allowed"
          : ""
      }
      hover:!bg-blue-50 hover:border-blue-300
    `}
    >
      {/* Image */}
      <div className="relative inline-block">
        <img
          src={imagesToUse[index] || NO_IMAGE}
          alt={`Maillot ${index + 1}`}
          className="w-[240px] h-[180px] object-contain rounded-md block"
          onError={(e) => {
            (e.target as HTMLImageElement).src = NO_IMAGE;
          }}
        />
        <span
          className={`
          absolute top-0 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center text-blue-600
          ${isSelected ? "bg-blue-600 text-white" : "bg-transparent"}
          pointer-events-none
        `}
        >
          {isSelected ? <FaCheck className="text-sm" /> : null}
        </span>
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
        {product.brand}
      </h3>
      <h4 className="text-xs text-gray-700 mb-0.5">
        {product.small_description}
      </h4>
      <div className="flex items-center gap-2 mb-1 text-xs text-gray-600">
        <p className="m-0 p-0">
          Code article: <strong>{product.code}</strong>
        </p>
      </div>
    </div>
  );
}
