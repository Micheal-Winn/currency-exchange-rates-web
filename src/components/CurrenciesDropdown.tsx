"use client";
import React, { memo, useCallback } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const CurrenciesDropdown = ({
  currencies,
  selectionHandler
}: {
  currencies: Array<ctyObjProps>;
  selectionHandler:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}) => {
  const memoizedFun = useCallback(selectionHandler,[selectionHandler])
  return (
    <div className="w-[16rem]">
    <Select
      label="Currencies"
      labelPlacement="outside"
      placeholder="Please select currency"
      items={currencies!}
      radius="sm"
      onChange={memoizedFun}
    >
      {currencies.map((curr) => (
        <SelectItem key={curr.name} textValue={curr?.name!} value={curr.name}>
          <Chip radius="lg" className="">{`${curr.name}`}</Chip>
        </SelectItem>
      ))}
    </Select>
    </div>
  );
};

export default memo(CurrenciesDropdown);
