import React from "react";

interface ListItemProps<T> {
  item: T;
  isSelected: boolean;
  className?: string;
}

const NumberListItem: React.FC<ListItemProps<number>> = ({
  item,
  isSelected,
  className,
}) => {
  return (
    <li className={className}>{isSelected ? <strong>{item}</strong> : item}</li>
  );
};

export default NumberListItem;
