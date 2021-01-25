import { extendType } from "nexus"

export const ThreadsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("threads", {
      type: "Thread",
    })
  }
})

