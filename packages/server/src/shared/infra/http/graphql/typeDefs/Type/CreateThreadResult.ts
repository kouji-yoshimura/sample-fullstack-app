import { objectType } from "nexus"

export const CreateThreadResult = objectType({
  name: "CreateThreadResult",
  definition(t) {
    t.boolean("success")
    t.nullable.string("message")
    t.string("threadId")
  }
})

