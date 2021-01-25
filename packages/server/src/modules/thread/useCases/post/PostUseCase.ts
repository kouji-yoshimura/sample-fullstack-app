import { DateTime } from "luxon"
import { UseCase } from "../../../../shared/core/UseCase"
import {
  UnexpectedError,
  BadRequestError
} from "../../../../shared/core/AppError"
import { PostCreateEntityFailedError } from "./PostErrors"
import {
  Either,
  Result,
  failed,
  succeed
} from "../../../../shared/core/Result"
import { Post } from "../../domain/entities/post"
import {
  ThreadId,
  PostBody,
  UserId
} from "../../domain/valueObjects"
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID"
import {
  PostRequestDTO,
  PostResponseDTO
} from "./PostDTO"
import { IPostRepo } from "../../repos/postRepo"
import { PrismaPostRepo } from "../../repos/implementation/PrismaPostRepo"

type Response = Either<
  | PostCreateEntityFailedError
  | UnexpectedError
  | BadRequestError,
  Result<PostResponseDTO>
>

export class PostUseCase implements UseCase<PostRequestDTO, Promise<Response>> {
  private postRepo: IPostRepo

  constructor() {
    this.postRepo = new PrismaPostRepo()
  }

  async execute(req: PostRequestDTO): Promise<Response> {
    try {
      const threadIdOrError = ThreadId.create(new UniqueEntityID(req.threadId))
      const userIdOrError = UserId.create(new UniqueEntityID(req.body))
      const bodyOrError = PostBody.create(req.body)
      const dtoResult = Result.combine([
        threadIdOrError,
        userIdOrError,
        bodyOrError
      ])
      if (dtoResult.isFailure) {
        return failed(new BadRequestError(dtoResult.error))
      }
      const threadId = threadIdOrError.getValue()
      const userId = userIdOrError.getValue()
      const body = bodyOrError.getValue()

      const now = DateTime.utc()
      const postEntityOrError = Post.create({
        threadId: threadId,
        body: body,
        createdBy: userId,
        updatedBy: userId,
        createdAt: now,
        updatedAt: now
      })
      if (postEntityOrError.isFailure) {
        return failed(new PostCreateEntityFailedError())
      }

      const postEntity = postEntityOrError.getValue()
      await this.postRepo.create(postEntity)

      return succeed(
        Result.ok({
          success: true,
          postId: postEntity.id.toString()
        })
      )
    } catch (e) {
      return failed(
        Result.fail(e.message)
      )
    }
  }
}
