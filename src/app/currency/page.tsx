import React from "react";

import ExchangePage from "@/components/ExchangePage";

const CurrencyConverterPagee = async () => {
  //api runs in SSR and give it to client not to be faced loading
  //i have to put api url in directly because of vercel error so i can't put it in .env
  const exchanges = await fetch(
    `http://apilayer.net/api/live?access_key=96d9e5bfa28bd8c1405255b3794776d7`
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
