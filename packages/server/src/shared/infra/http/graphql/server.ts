import { ApolloServer } from "apollo-server"
import { schema } from "./schema"
import { initContext } from "./context/initContext"
// import { initDataSources } from "./dataSources/initDataSources"

export const server = new ApolloServer({
  schema,
  context: initContext(),
  // dataSources: initDataSources(),
})
