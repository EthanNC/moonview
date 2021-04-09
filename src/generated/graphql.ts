import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** Represents NULL values */
  Void: any;
};

export type CoinsJsonResponse = {
  __typename?: 'CoinsJsonResponse';
  id?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<CoinsJsonResponseImage>;
};

export type CoinsJsonResponseImage = {
  __typename?: 'CoinsJsonResponseImage';
  thumb?: Maybe<Scalars['URL']>;
};



export type MarketsJsonResponse = {
  __typename?: 'MarketsJsonResponse';
  id?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['URL']>;
  current_price?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  market_cap_rank?: Maybe<Scalars['Int']>;
  fully_diluted_valuation?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Float']>;
  high_24h?: Maybe<Scalars['Int']>;
  low_24h?: Maybe<Scalars['Int']>;
  price_change_24h?: Maybe<Scalars['Float']>;
  price_change_percentage_24h?: Maybe<Scalars['Float']>;
  market_cap_change_24h?: Maybe<Scalars['Int']>;
  market_cap_change_percentage_24h?: Maybe<Scalars['Float']>;
  circulating_supply?: Maybe<Scalars['Int']>;
  total_supply?: Maybe<Scalars['Int']>;
  max_supply?: Maybe<Scalars['Int']>;
  ath?: Maybe<Scalars['Int']>;
  ath_change_percentage?: Maybe<Scalars['Float']>;
  ath_date?: Maybe<Scalars['DateTime']>;
  atl?: Maybe<Scalars['Float']>;
  atl_change_percentage?: Maybe<Scalars['Float']>;
  atl_date?: Maybe<Scalars['DateTime']>;
  roi?: Maybe<Scalars['Void']>;
  last_updated?: Maybe<Scalars['DateTime']>;
};

export type PingJsonResponse = {
  __typename?: 'PingJsonResponse';
  gecko_says?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** GET /search/trending */
  trending?: Maybe<TrendingJsonResponse>;
  /** GET /ping */
  ping?: Maybe<PingJsonResponse>;
  /** GET /coins */
  coins?: Maybe<Array<Maybe<CoinsJsonResponse>>>;
  /** GET /coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false */
  markets?: Maybe<Array<Maybe<MarketsJsonResponse>>>;
  /** GET /coins/{args.id}/ohlc?vs_currency={args.vs_currency}&days={args.days} */
  candlestick?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};


export type QueryCandlestickArgs = {
  id?: Maybe<Scalars['ID']>;
  vs_currency?: Maybe<Scalars['ID']>;
  days?: Maybe<Scalars['ID']>;
};

export type TrendingJsonResponse = {
  __typename?: 'TrendingJsonResponse';
  coins?: Maybe<Array<Maybe<TrendingJsonResponseCoins>>>;
  exchanges?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type TrendingJsonResponseCoins = {
  __typename?: 'TrendingJsonResponseCoins';
  item?: Maybe<TrendingJsonResponseCoinsItem>;
};

export type TrendingJsonResponseCoinsItem = {
  __typename?: 'TrendingJsonResponseCoinsItem';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  market_cap_rank?: Maybe<Scalars['Int']>;
  thumb?: Maybe<Scalars['URL']>;
  large?: Maybe<Scalars['URL']>;
  score?: Maybe<Scalars['Int']>;
};



export type GetTrendingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrendingQuery = (
  { __typename?: 'Query' }
  & { trending?: Maybe<(
    { __typename?: 'TrendingJsonResponse' }
    & { coins?: Maybe<Array<Maybe<(
      { __typename?: 'TrendingJsonResponseCoins' }
      & { item?: Maybe<(
        { __typename?: 'TrendingJsonResponseCoinsItem' }
        & Pick<TrendingJsonResponseCoinsItem, 'id' | 'name' | 'symbol' | 'large' | 'market_cap_rank'>
      )> }
    )>>> }
  )> }
);

export type GetMarketQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMarketQuery = (
  { __typename?: 'Query' }
  & { markets?: Maybe<Array<Maybe<(
    { __typename?: 'MarketsJsonResponse' }
    & Pick<MarketsJsonResponse, 'id' | 'image' | 'symbol' | 'name' | 'current_price' | 'price_change_percentage_24h' | 'market_cap' | 'total_volume'>
  )>>> }
);

export type GetCandlestickQueryVariables = Exact<{
  days?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  currency?: Maybe<Scalars['ID']>;
}>;


export type GetCandlestickQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'candlestick'>
);

export type GetCoinsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoinsQuery = (
  { __typename?: 'Query' }
  & { coins?: Maybe<Array<Maybe<(
    { __typename?: 'CoinsJsonResponse' }
    & Pick<CoinsJsonResponse, 'id' | 'name' | 'symbol'>
    & { image?: Maybe<(
      { __typename?: 'CoinsJsonResponseImage' }
      & Pick<CoinsJsonResponseImage, 'thumb'>
    )> }
  )>>> }
);

export type GetPingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPingQuery = (
  { __typename?: 'Query' }
  & { ping?: Maybe<(
    { __typename?: 'PingJsonResponse' }
    & Pick<PingJsonResponse, 'gecko_says'>
  )> }
);


export const GetTrendingDocument = gql`
    query getTrending {
  trending {
    coins {
      item {
        id
        name
        symbol
        large
        market_cap_rank
      }
    }
  }
}
    `;

export function useGetTrendingQuery(options: Omit<Urql.UseQueryArgs<GetTrendingQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTrendingQuery>({ query: GetTrendingDocument, ...options });
};
export const GetMarketDocument = gql`
    query getMarket {
  markets {
    id
    image
    symbol
    name
    current_price
    price_change_percentage_24h
    market_cap
    total_volume
  }
}
    `;

export function useGetMarketQuery(options: Omit<Urql.UseQueryArgs<GetMarketQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMarketQuery>({ query: GetMarketDocument, ...options });
};
export const GetCandlestickDocument = gql`
    query getCandlestick($days: ID, $id: ID, $currency: ID) {
  candlestick(days: $days, id: $id, vs_currency: $currency)
}
    `;

export function useGetCandlestickQuery(options: Omit<Urql.UseQueryArgs<GetCandlestickQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCandlestickQuery>({ query: GetCandlestickDocument, ...options });
};
export const GetCoinsDocument = gql`
    query getCoins {
  coins {
    id
    name
    symbol
    image {
      thumb
    }
  }
}
    `;

export function useGetCoinsQuery(options: Omit<Urql.UseQueryArgs<GetCoinsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCoinsQuery>({ query: GetCoinsDocument, ...options });
};
export const GetPingDocument = gql`
    query getPing {
  ping {
    gecko_says
  }
}
    `;

export function useGetPingQuery(options: Omit<Urql.UseQueryArgs<GetPingQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPingQuery>({ query: GetPingDocument, ...options });
};