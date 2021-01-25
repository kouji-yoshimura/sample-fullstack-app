import { DateTime } from "luxon"
import { Result } from "../../../shared/core/Result"
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID"
import { Post } from "../domain/entities/post"
import { PostDTO } from "../dtos/postDTO"
import {
  ThreadId,
  PostBody,
  UserId
} from "../domain/valueObjects"

export interface PostRawProps {
  postId?: string
  threadId: string
  body: string
  createdBy: string
  updatedBy: string
  createdAt: DateTime
  updatedAt: DateTime
}

export interface PostPersistentProps {
  postId: string
  threadId: string
  body: string
  createdBy: string
  updatedBy: string
  createdAt: DateTime
  updatedAt: DateTime
}

export class PostMap {
  public static dtoToDomain(raw: PostRawProps): Post | undefined {
    return this.toDomain(
      raw.postId,
      ThreadId.create(new UniqueEntityID(raw.threadId)),
      PostBody.create(raw.body),
      UserId.create(new UniqueEntityID(raw.createdBy)),
      UserId.create(new UniqueEntityID(raw.updatedBy)),
      raw.createdAt,
      raw.updatedAt
    )
  }

  public static persistentToDomain(raw: PostRawProps): Post | undefined {
    return this.toDomain(
      raw.postId,
      ThreadId.create(new UniqueEntityID(raw.threadId)),
      PostBody.create(raw.body),
      UserId.create(new UniqueEntityID(raw.createdBy)),
      UserId.create(new UniqueEntityID(raw.updatedBy)),
      raw.createdAt,
      raw.updatedAt
    )
  }

  private static toDomain(
    postId: string | undefined,
    threadIdOrError: Result<ThreadId>,
    bodyOrError: Result<PostBody>,
    createdByOrError: Result<UserId>,
    updatedByOrError: Result<UserId>,
    createdAt: DateTime,
    updatedAt: DateTime
  ): Post {
    const postOrError = Post.create(
      {
        threadId: threadIdOrError.getValue(),
        body: bodyOrError.getValue(),
        createdBy: createdByOrError.getValue(),
        updatedBy: updatedByOrError.getValue(),
        createdAt: createdAt,
        updatedAt: updatedAt
      },
      new UniqueEntityID(postId)
    )
    postOrError.isFailure ? console.log(postOrError.error) : ""

    return postOrError.getValue()
  }

  public static toDTO(postEntity: Post): PostDTO {
    return {
      id: postEntity.id.toString(),
      threadId: postEntity.threadId.id.toString(),
      body: postEntity.body.value,
      createdBy: postEntity.createdBy.id.toString(),
      updatedBy: postEntity.updatedBy.id.toString(),
      createdAt: postEntity.createdAt,
      updatedAt: postEntity.updatedAt
    }
  }

  public static toCreateParam(postEntity: Post) {
    const post = {
        id: postEntity.id.toString(),
        threadId: postEntity.threadId.id.toString(),
        body: postEntity.body.value,
        createdBy: postEntity.createdBy.id.toString(),
        updatedBy: postEntity.updatedBy.id.toString(),
        createdAt: postEntity.createdAt.toISO(),
        updatedat: postEntity.createdAt.toISO()
    }

    return { post }
  }
}
