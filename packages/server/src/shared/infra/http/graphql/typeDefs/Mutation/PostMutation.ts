import { extendType } from "nexus"

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("post", {
      type: "PostResult",
    })
  }
})

