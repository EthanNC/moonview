import { gql } from "urql";

export const TrendingQuery = gql`
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

export const MarketQuery = gql`
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

export const CandleStickQuery = gql`
  query getCandlestick($days: ID, $id: ID, $currency: ID) {
    candlestick(days: $days, id: $id, vs_currency: $currency)
  }
`;

export const CoinsQuery = gql`
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

export const PingQuery = gql`
query getPing {
  ping{
    gecko_says
  }
}
`
