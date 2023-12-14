import { Listbox } from "@headlessui/react";

type DropDownProps<T> = {
  value: T;
  options: T[];
  onChange: (value: T) => void;
};

export const DropDown = <T extends string>({
  value,
  options,
  onChange,
}: DropDownProps<T>) => {
  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button className="w-16 rounded-md bg-white px-4 py-2">
          {value}
        </Listbox.Button>
        <Listbox.Options className="w-16 rounded-md bg-white px-4 py-2">
          {options.map((option) => (
            <Listbox.Option key={option} value={option}>
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
