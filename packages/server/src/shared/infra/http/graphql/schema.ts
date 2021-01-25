import { makeSchema } from "nexus"
import { join } from "path"
import * as typeDefs from "./typeDefs"

export const schema = makeSchema({
  types: typeDefs,
  outputs: {
    typegen: join(__dirname, ".", "nexus-typegen.ts"),
    schema: join(__dirname, ".", "schema.graphql"),
  },
  // sourceTypes: {
  //   modules: [
  //     {
  //       module: require.resolve("./context"),
  //       alias: "ContextModule",
  //     }
  //   ],
  // }
})
