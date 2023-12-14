import { FC, useState } from "react";

import { ProductsRequestParams, ProductsLimit, ProductsOrder } from "~/types";
import { DropDown } from "~/components";

const orderOptions: ProductsOrder[] = ["asc", "desc"];
const limitOptions: ProductsLimit[] = ["5", "10", "20"];

type FiltersProps = {
  onFiltersChange: (params: ProductsRequestParams) => void;
};

export const Filters: FC<FiltersProps> = ({ onFiltersChange }) => {
  const [order, setOrder] = useState<ProductsOrder>("asc");
  const [limit, setLimit] = useState<ProductsLimit>("20");

  const onOrderChange = (value: ProductsOrder) => {
    setOrder(value);
    onFiltersChange({ order: value, limit });
  };

  const onLimitChange = (value: ProductsLimit) => {
    setLimit(value);
    onFiltersChange({ limit: value, order });
  };

  return (
    <div className="flex gap-4">
      <DropDown value={order} onChange={onOrderChange} options={orderOptions} />
      <DropDown value={limit} onChange={onLimitChange} options={limitOptions} />
    </div>
  );
};
