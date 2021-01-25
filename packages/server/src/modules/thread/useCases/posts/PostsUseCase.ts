import { UseCase } from "../../../../shared/core/UseCase"
import {
  UnexpectedError,
  BadRequestError
} from "../../../../shared/core/AppError"
import {
  Either,
  Result,
  failed,
  succeed
} from "../../../../shared/core/Result"
import { PostMap } from "../../mappers/postMap"
import { ThreadId } from "../../domain/valueObjects"
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID"
import {
  PostsRequestDTO,
  PostsResponseDTO
} from "./PostsDTO"
import { IPostRepo } from "../../repos/postRepo"
import { PrismaPostRepo } from "../../repos/implementation/PrismaPostRepo"

type Response = Either<
  | BadRequestError
  | UnexpectedError,
  Result<PostsResponseDTO>
>

export class PostsUseCase implements UseCase<PostsRequestDTO, Promise<Response>> {
  private postRepo: IPostRepo

  constructor() {
    this.postRepo = new PrismaPostRepo()
  }

  async execute(req: PostsRequestDTO): Promise<Response> {
    try {
      const threadIdOrError = ThreadId.create(new UniqueEntityID(req.threadId))
      if (threadIdOrError.isFailure) {
        return failed(new BadRequestError("threadId validation error"))
      }
      const threadId = threadIdOrError.getValue()
      const posts = await this.postRepo.findAllByThreadId(threadId)

      return succeed(
        Result.ok({
          posts: posts.map(PostMap.toDTO)
        })
      )
    } catch (e) {
      return failed(
        Result.fail(e.message)
      )
    }
  }
}
