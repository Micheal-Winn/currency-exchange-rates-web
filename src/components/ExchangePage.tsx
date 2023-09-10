"use client";
import React, { memo, useCallback, useMemo, useState } from "react";
import CurrenciesDropdown from "./CurrenciesDropdown";
import { Selection, Button } from "@nextui-org/react";
import NumberInput from "./NumberInput";

const ExchangePage = ({ quotes }: { quotes: CurrencyCountry }) => {
  const [value, setValue] = React.useState<Selection>(new Set([]));
  const [amount, setAmount] = useState<string>("");
  const [currenciesResult, setCurrenciesResult] = useState<Array<number>>([]);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(new Set([e.target.value]));
  };

  //change reponse data from api to currencies and store in cache
  const currencies = useMemo(() => {
    const quotesData = quotes ?? {};
    const currenciesArr: Array<ctyObjProps> = [];
    for (const [key, value] of Object.entries(quotesData!)) {
      console.log(`${key}: ${value}`);
      currenciesArr.push({ name: key, value: value as number });
    }
    return currenciesArr;
  }, [quotes]);

  //select currency from currenciesvalue
  const cur = Array.from(value)[0] as string;
  const selectedCurrencyRate = useMemo(() => {
    console.log("amount", cur);
    const rate = currencies?.filter((curr) => curr?.name === cur)[0];
    return rate;
  }, [currencies, cur]);

  //conversion fun which is cached
  const handleConvertFun = useCallback((amount: string, rate: number) => {
    const result = +amount * rate;
    console.log(result, "reee");
    setCurrenciesResult((prev) => [...prev, result]);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center pt-14  gap-10 ">
      <section className="flex flex-col justify-center  pt-14 items-center gap-10 w-full lg:w-1/2">
        <section className="flex flex-col gap-8 items-center">
          <section className="w-[16rem]">
            <NumberInput amount={amount} setAmount={setAmount} />
          </section>
          <section className="flex flex-col gap-8">
            <CurrenciesDropdown
              currencies={currencies}
              selectionHandler={handleSelectionChange}
            />
            <p className="flex flex-col gap-1 text-lg font-bold">
              Exchange Rate{" "}
              <span className="block text-xl">
                {selectedCurrencyRate?.value ?? 0}
              </span>
            </p>
          </section>
        </section>
        <Button
          className="bg-[#1D1DFF] text-white w-[16rem]"
          onClick={() =>
            handleConvertFun(amount!, selectedCurrencyRate?.value as number)
          }
          radius="sm"
          isDisabled={amount === "" &&  !selectedCurrencyRate?.value}
        >
          Convert
        </Button>
      </section>
      <section className="flex flex-col w-full lg:w-1/2 text-center lg:text-left overflow-y-scroll">
        <p className="text-lg lg:text-2xl font-semibold mb-4">Result</p>
        {currenciesResult.map((res, i) => (
          <p key={i} className="font-bold text-medium lg:text-lg">
            From {cur?.slice(0, 3)} To {cur?.slice(3)} ={" "}
            <span className="inline-block ml-1">{res}</span>{" "}
          </p>
        ))}
      </section>
    </section>
  );
};

export default memo(ExchangePage);
