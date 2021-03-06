import { GraphQLSchema, DocumentNode } from "graphql"

// Fetcher types

export interface GraphQLRequest {
  query?: string | DocumentNode
  variables?: { [key: string]: any }
  operationName?: string
}

export interface FetchResult {
  data: any
  errors?: any
  extensions?: any
}

export interface FetcherOptions {
  channel?: string
  timeout?: number
}

// Executor types

export interface ExecutorProps {
  schema: GraphQLSchema
  rootValue?: any
  contextValue?: any
}

export interface ExecutorOptions extends ExecutorProps {
  channel?: string
}
