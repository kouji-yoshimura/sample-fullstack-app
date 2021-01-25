import { NexusGenTypes } from "../../../../shared/infra/http/graphql/nexus-typegen"
import { PostDTO } from "../../dtos/postDTO"
import {
  PostsRequestDTO,
  PostsResponseDTO
} from "./PostsDTO"
import { PostsUseCase } from "./PostsUseCase"

export const PostsResolver = async (
  _: any,
  args: any
): Promise<NexusGenTypes["fieldTypes"]["Query"]["posts"]> => {
  const reqDTO = args as PostsRequestDTO
  try {
    const useCase = new PostsUseCase()
    const res = await useCase.execute(reqDTO)
    if (res.isFailed()) {
      throw new Error(res.value.errorValue().message)
    }
    const result: PostsResponseDTO = res.value.getValue()
    return result.posts.map((post: PostDTO) => {
      return {
        id: post.id,
        threadId: post.threadId,
        body: post.body,
        createdBy: post.createdBy,
        updatedBy: post.updatedBy,
        createdAt: post.createdAt.toISO(),
        updatedAt: post.updatedAt.toISO()
      }
    })
  } catch (e) {
    console.log(e)
    return []
  }
}
