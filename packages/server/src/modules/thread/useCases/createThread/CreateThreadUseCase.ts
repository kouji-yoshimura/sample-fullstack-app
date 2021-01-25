import { UseCase } from "../../../../shared/core/UseCase"
import { UnexpectedError } from "../../../../shared/core/AppError"
import {
  Either,
  Result,
  failed,
  succeed
} from "../../../../shared/core/Result"
import {
  CreateThreadRequestDTO,
  CreateThreadResponseDTO
} from "./CreateThreadDTO"

type Response = Either<
  UnexpectedError,
  Result<CreateThreadResponseDTO>
>

export class CreateThreadUseCase implements UseCase<CreateThreadRequestDTO, Promise<Response>> {
  async execute(req: CreateThreadRequestDTO): Promise<Response> {
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

