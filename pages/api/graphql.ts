import "@graphql-mesh/graphql"
import "@graphql-mesh/json-schema"
import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from "@graphql-mesh/runtime";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from 'next'

// In a production environment, we would want to secure this endpoint
export default async (req:NextApiRequest, res:NextApiResponse) => {

  // Literal config object replaces .meshrc.yaml for serverless
  const parsedConfig = await findAndParseConfig()

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