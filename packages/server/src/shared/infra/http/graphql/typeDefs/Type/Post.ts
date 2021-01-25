import { objectType } from "nexus"

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.id("id")
    t.string("threadId")
    t.string("body")
    t.string("createdBy")
    t.string("updatedBy")
    t.string("createdAt")
    t.string("updatedAt")
  }
})

