import { objectType } from "nexus"

export const Thread = objectType({
  name: "Thread",
  definition(t) {
    t.id("id")
    t.string("name")
    t.string("postCount")
    t.string("createdBy")
    t.string("updatedBy")
    t.string("createdAt")
    t.string("updatedAt")
  }
})

