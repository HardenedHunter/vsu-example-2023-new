/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";

import { Product } from "~/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex h-96 w-64 flex-col gap-3">
        <div className="flex h-96 w-64 items-center justify-center bg-white p-4">
          <img
            className="object-contain"
            src={product.image}
            alt={product.title}
            width={256}
          />
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {product.title}
        </p>
      </div>
    </Link>
  );
};
