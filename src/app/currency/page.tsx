"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ExchangePage from "@/components/ExchangePage";

const CurrencyConverterPagee = () => {
  const [data, setData] = useState<Array<ctyObjProps>>([]);
  const[loading,setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const exchangeApi = async () => {
      const exchanges = await axios.get(
        `${process.env.CURRENCY_ENDPOINT!}/live?access_key=${process.env.CURRENCY_KEY!}`
      );
      const data = exchanges.data;
      for (const [key, value] of Object.entries(data.quotes!)) {
        console.log(`${key}: ${value}`);
        setData((prev) => [...prev, { name: key, value: value as number }]);
      }
      setLoading(false)
    };
    exchangeApi();
  }, []);

  return (
    <main className="container pt-6">
      <h2 className="font-bold text-4xl text-center uppercase">
        Currency Exchange
      </h2>

      {loading ? <p className="text-center">Loading...</p> : <ExchangePage quotes={data} />}
    </main>
  );
};

export default CurrencyConverterPagee;
