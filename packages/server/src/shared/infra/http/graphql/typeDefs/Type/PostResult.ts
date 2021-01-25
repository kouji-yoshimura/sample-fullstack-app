import { objectType } from "nexus"

export const PostResult = objectType({
  name: "PostResult",
  definition(t) {
    t.boolean("success")
    t.nullable.string("message")
    t.string("postId")
  }
})

