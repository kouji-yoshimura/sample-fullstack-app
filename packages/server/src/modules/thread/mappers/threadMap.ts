import { DateTime } from "luxon"
import { Result } from "../../../shared/core/Result"
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID"
import { Thread } from "../domain/entities/thread"
import {
  ThreadName,
  UserId
} from "../domain/valueObjects"

export interface ThreadRawProps {
  threadId?: string
  name: string
  createdBy: string
  updatedBy: string
  createdAt: DateTime
  updatedAt: DateTime
}

export class ThreadMap {
  public static dtoToDomain(raw: ThreadRawProps): Thread | undefined {
    return this.toDomain(
      raw.threadId,
      ThreadName.create(raw.name),
      UserId.create(new UniqueEntityID(raw.createdBy)),
      UserId.create(new UniqueEntityID(raw.updatedBy)),
      raw.createdAt,
      raw.updatedAt
    )
  }

  // public static persistentToDomain(raw: PostRawProps): Post | undefined {
  //   return this.toDomain(
  //     raw.accountId,
  //     UserId.create(new UniqueEntityID(raw.userId)),
  //     AuthType.create(raw.authType ?? ""),
  //     UserEmail.create(raw.email),
  //     PostPassword.createByHashed(raw.password),
  //     DateTime.fromJSDate(raw.createdAt),
  //     DateTime.fromJSDate(raw.updatedAt)
  //   )
  // }

  private static toDomain(
    threadId: string | undefined,
    nameOrError: Result<ThreadName>,
    createdByOrError: Result<UserId>,
    updatedByOrError: Result<UserId>,
    createdAt: DateTime,
    updatedAt: DateTime
  ): Thread {
    const threadOrError = Thread.create(
      {
        name: nameOrError.getValue(),
        createdBy: createdByOrError.getValue(),
        updatedBy: updatedByOrError.getValue(),
        createdAt: createdAt,
        updatedAt: updatedAt
      },
      new UniqueEntityID(threadId)
    )
    threadOrError.isFailure ? console.log(threadOrError.error) : ""

    return threadOrError.getValue()
  }

  // public static toCreateParam(
  //   accountEntity: Post
  // ): {
  //   account: PostCreationParam
  // } {
  //   const account = {
  //     id: accountEntity.id.toString(),
  //     userId: accountEntity.userId.id.toString(),
  //     email: accountEntity.email.value,
  //     authTypeId: undefined,
  //     password: accountEntity.password.value,
  //     createdAt: accountEntity.createdAt.toJSDate(),
  //     updatedAt: accountEntity.updatedAt.toJSDate()
  //   }
  //
  //   return { account }
  // }
}
