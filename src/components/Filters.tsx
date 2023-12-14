import { FC, useState } from "react";

import { ProductsRequestParams, ProductsLimit, ProductsSort } from "~/types";
import { DropDown } from "~/components";

const sortOptions: ProductsSort[] = ["asc", "desc"];
const limitOptions: ProductsLimit[] = ["5", "10", "20"];

type FiltersProps = {
  onFiltersChange: (params: ProductsRequestParams) => void;
};

export const Filters: FC<FiltersProps> = ({ onFiltersChange }) => {
  const [sort, setSort] = useState<ProductsSort>("asc");
  const [limit, setLimit] = useState<ProductsLimit>("20");

  const onSortChange = (value: ProductsSort) => {
    setSort(value);
    onFiltersChange({ sort: value, limit });
  };

  const onLimitChange = (value: ProductsLimit) => {
    setLimit(value);
    onFiltersChange({ limit: value, sort });
  };

  return (
    <div className="flex gap-4">
      <DropDown value={sort} onChange={onSortChange} options={sortOptions} />
      <DropDown value={limit} onChange={onLimitChange} options={limitOptions} />
    </div>
  );
};
