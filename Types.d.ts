interface CurrencyCountry{
    [key:string]:number
}
interface CurrenciesProps{
    quotes :Array<CurrencyCountry>
}

type ctyObjProps = {
    name:string,
    value:number
}