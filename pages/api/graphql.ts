import { processConfig } from "@graphql-mesh/config";
import "@graphql-mesh/graphql"
import "@graphql-mesh/json-schema"
// import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from "@graphql-mesh/runtime";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from 'next'

// In a production environment, we would want to secure this endpoint
export default async (req:NextApiRequest, res:NextApiResponse) => {

  // Literal config object replaces .meshrc.yaml for serverless
  const parsedConfig = await processConfig({
    "sources": [
       {
          "name": "coingecko",
          "handler": {
             "jsonSchema": {
                "baseUrl": "https://api.coingecko.com/api/v3",
                "operations": [
                   {
                      "type": "Query",
                      "field": "trending",
                      "path": "/search/trending",
                      "method": "GET",
                      "responseSample": "./json-samples/trending.json"
                   },
                   {
                      "type": "Query",
                      "field": "markets",
                      "path": "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false",
                      "method": "GET",
                      "responseSample": "./json-samples/markets.json"
                   },
                   {
                      "type": "Query",
                      "field": "coins",
                      "path": "/coins",
                      "method": "GET",
                      "responseSample": "./json-samples/coins.json"
                   },
                   {
                      "type": "Query",
                      "field": "candlestick",
                      "path": "/coins/{args.id}/ohlc?vs_currency={args.vs_currency}&days={args.days}",
                      "method": "GET",
                      "responseSample": "./json-samples/candlestick.json"
                   },
                   {
                      "type": "Query",
                      "field": "ping",
                      "path": "/ping",
                      "method": "GET",
                      "responseSample": "./json-samples/ping.json"
                   }
                ]
             }
          }
       }
    ]});
    
  const { schema, contextBuilder: context } = await getMesh(parsedConfig);

  return new ApolloServer({
    schema,
    context,
    introspection: true, // Required for Hasura Remote Schema introspection
    playground: true, // Optional: Default is `false` in production
  }).createHandler({ path: "/api/graphql" })(req, res);
};

export const config = {
  api: {
    bodyParser: false
  }
};