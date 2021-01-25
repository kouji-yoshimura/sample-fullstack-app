import { NexusGenTypes } from "../../../../shared/infra/http/graphql/nexus-typegen"
import {
  CreateThreadRequestDTO,
  CreateThreadResponseDTO
} from "./CreateThreadDTO"
import { CreateThreadUseCase } from "./CreateThreadUseCase"

export const CreateThreadResolver = async (
  _: NexusGenTypes["rootTypes"]["Mutation"],
  args: any, // NexusGenTypes["argTypes"]["createThread"],
  context: NexusGenTypes["context"]
): Promise<NexusGenTypes["fieldTypes"]["Mutation"]["createThread"]> =>  {
  const reqDTO = args as CreateThreadRequestDTO
  try {
    const useCase = new CreateThreadUseCase()
    const res = await useCase.execute(reqDTO)
    if (res.isFailed()) {
      throw new Error(res.value.errorValue().message)
    }

    const result: CreateThreadResponseDTO = res.value.getValue()
    return {
      success: true,
      threadId: result.threadId
    }
  } catch (e) {
    return {
      success: false,
      message: e.message,
    }
  }
}
