import { NexusGenTypes } from "../../../../shared/infra/http/graphql/nexus-typegen"
import {
  PostRequestDTO,
  PostResponseDTO
} from "./PostDTO"
import { PostUseCase } from "./PostUseCase"

export const PostResolver = async (
  _: NexusGenTypes["rootTypes"]["Mutation"],
  args: any,
  context: NexusGenTypes["context"]
): Promise<NexusGenTypes["fieldTypes"]["Mutation"]["post"]> => {
  const reqDTO = args as PostRequestDTO
  try {
    const useCase = new PostUseCase()
    const res = await useCase.execute(reqDTO)
    if (res.isFailed()) {
      throw new Error(res.value.errorValue().message)
    }

    const result: PostResponseDTO = res.value.getValue()
    return {
      success: true,
      message: "",
      postId: result.postId
    }
  } catch (e) {
    return {
      success: false,
      message: e.message,
    }
  }
}
