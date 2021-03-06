// π€ λ³΄ν΅μ λ³λμ API νμμ λν΄μλ νμΌμ λ§λ€κ³ , import export λ₯Ό ν΅ν΄ κ°μ Έμ¨λ€!
// ( λΉμ§λμ€ λ‘μ§μ λΆλ¦¬νμ. )
export interface Country {
  Country: string;
  ContryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Global {
  Newconfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
}

export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  Country: string;
  CountryCode: string;
  CitytCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];

export enum CovidStatus {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths',
}
