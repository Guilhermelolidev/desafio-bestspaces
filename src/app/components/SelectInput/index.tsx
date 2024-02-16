import { ChangeEvent } from "react";
import "./styles.css";

type Options = {
  key: string;
  tech: string;
};

interface SelectInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: Options[];
}

export const SelectInput = ({
  value,
  onChange,
  options = [],
}: SelectInputProps) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Escolha uma opção</option>
      {options.map((item: Options) => (
        <option value={item.tech} key={item.key}>
          {item.tech}
        </option>
      ))}
    </select>
  );
};
