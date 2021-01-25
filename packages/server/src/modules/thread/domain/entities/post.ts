import { DateTime } from "luxon"
import { AggregateRoot } from "../../../../shared/domain/AggregateRoot"
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID"
import { Guard } from "../../../../shared/core/Guard"
import { Result } from "../../../../shared/core/Result"
import {
  ThreadId,
  PostBody,
  UserId
} from "../valueObjects"

interface PostProps {
  threadId: ThreadId
  body: PostBody
  createdBy: UserId
  updatedBy: UserId
  createdAt: DateTime
  updatedAt: DateTime
}

export class Post extends AggregateRoot<PostProps> {
  get threadId(): ThreadId {
    return this.props.threadId
  }

  get body(): PostBody {
    return this.props.body
  }

  get createdBy(): UserId {
    return this.props.createdBy
  }

  get updatedBy(): UserId {
    return this.props.updatedBy
  }

  get createdAt(): DateTime {
    return this.props.createdAt
  }

  get updatedAt(): DateTime {
    return this.props.updatedAt
  }

  private constructor(props: PostProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(
    props: PostProps,
    id?: UniqueEntityID
  ): Result<Post> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.threadId, argumentName: "threadId" },
      { argument: props.body, argumentName: "body" },
      { argument: props.createdBy, argumentName: "createdBy" },
      { argument: props.updatedBy, argumentName: "updatedBy" },
      { argument: props.createdAt, argumentName: "createdAt" },
      { argument: props.updatedAt, argumentName: "updatedAt" }
    ])

    if (!guardResult.succeeded) {
      return Result.fail<Post>(guardResult.message ?? "")
    }

    const post = new Post(
      {
        ...props
      },
      id
    )

    return Result.ok<Post>(post)
  }
}
