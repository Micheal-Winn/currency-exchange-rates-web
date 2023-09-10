import React, { useEffect, useState } from "react";
import axios from "axios";
import ExchangePage from "@/components/ExchangePage";

const CurrencyConverterPagee = async () => {
  //api runs in SSR and give it to client not to be faced loading
  const exchanges = await fetch(
    `${process.env.CURRENCY_ENDPOINT}/live?access_key=${process.env.CURRENCY_KEY}`
  );
  const data = await exchanges.json();

  return (
    <main className="container pt-6">
      <h2 className="font-bold text-4xl text-center uppercase">
        Currency Exchange
      </h2>

      <ExchangePage quotes={data.quotes} />
    </main>
  );
};

export default CurrencyConverterPagee;
