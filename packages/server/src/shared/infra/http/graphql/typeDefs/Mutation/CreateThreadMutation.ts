import { extendType } from "nexus"

export const CreateThreadMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createThread", {
      type: "CreateThreadResult",
    })
  }
})

