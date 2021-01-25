import { extendType, stringArg } from "nexus"
import { PostsResolver } from "../../../../../../modules/thread/useCases/posts/PostsResolver"

export const PostsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("posts", {
      type: "Post",
      args: {
        threadId: stringArg()
      },
      resolve: PostsResolver
    })
  }
})

