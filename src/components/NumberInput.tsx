import { Input } from "@nextui-org/react";
import React, { memo, useCallback } from "react";

const NumberInput: React.FC<Props> = ({ amount, setAmount }) => {
  const memoizedAmountFunc = useCallback(setAmount, [setAmount]);
  return (
    <Input
      type="number"
      label="Amount"
      labelPlacement="outside"
      placeholder="Enter Amount"
      radius="sm"
      value={amount}
      onValueChange={memoizedAmountFunc}
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">$</span>
        </div>
      }
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">USD</span>
        </div>
      }
    />
  );
};

export default memo(NumberInput);

type Props = {
  amount: string | undefined;
  setAmount: (e: string) => void;
};
