import { NexusGenTypes } from "../../../../shared/infra/http/graphql/nexus-typegen"
import { ThreadDTO } from "../../dtos/threadDTO"
import {
  ThreadsRequestDTO,
  ThreadsResponseDTO
} from "./ThreadsDTO"
import { ThreadsUseCase } from "./ThreadsUseCase"

export const ThreadsResolver = async (
  _: any,
  args: any,
  context: NexusGenTypes["context"]
): Promise<NexusGenTypes["fieldTypes"]["Query"]["threads"]> => {
  const reqDTO = args as ThreadsRequestDTO
  try {
    const useCase = new ThreadsUseCase()
    const res = await useCase.execute(reqDTO)
    if (res.isFailed()) {
      throw new Error(res.value.errorValue().message)
    }

    const result: ThreadsResponseDTO = res.value.getValue()
    return result.threads.map((thread: ThreadDTO) => {
      return {
        id: thread.id,
        name: thread.name,
        createdBy: thread.createdBy,
        updatedBy: thread.updatedBy,
        createdAt: thread.createdAt.toISO(),
        updatedAt: thread.updatedAt.toISO()
      }
    })
  } catch (e) {
    return []
  }
}
