import { UseCase } from "../../../../shared/core/UseCase"
import { UnexpectedError } from "../../../../shared/core/AppError"
import {
  Either,
  Result,
  failed,
  succeed
} from "../../../../shared/core/Result"
import {
  ThreadsRequestDTO,
  ThreadsResponseDTO
} from "./ThreadsDTO"

type Response = Either<
  UnexpectedError,
  Result<ThreadsResponseDTO>
>

export class ThreadsUseCase implements UseCase<ThreadsRequestDTO, Promise<Response>> {
  async execute(req: ThreadsRequestDTO): Promise<Response> {
    try {
      const result = {}
      return succeed(
        Result.ok(result)
      )
    } catch (e) {
      return failed(new UnexpectedError(e.message))
    }
  }
}
