import { DateTime } from "luxon"
import { AggregateRoot } from "../../../../shared/domain/AggregateRoot"
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID"
import { Guard } from "../../../../shared/core/Guard"
import { Result } from "../../../../shared/core/Result"
import {
  ThreadName,
  UserId,
} from "../valueObjects"

interface ThreadProps {
  name: ThreadName
  createdBy: UserId
  updatedBy: UserId
  createdAt: DateTime
  updatedAt: DateTime
}

export class Thread extends AggregateRoot<ThreadProps> {
  get name(): ThreadName {
    return this.props.name
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

  private constructor(props: ThreadProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(
    props: ThreadProps,
    id?: UniqueEntityID
  ): Result<Thread> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.name, argumentName: "name" },
      { argument: props.createdBy, argumentName: "createdBy" },
      { argument: props.updatedBy, argumentName: "updatedBy" },
      { argument: props.createdAt, argumentName: "createdAt" },
      { argument: props.updatedAt, argumentName: "updatedAt" }
    ])

    if (!guardResult.succeeded) {
      return Result.fail<Thread>(guardResult.message ?? "")
    }

    const thread = new Thread(
      {
        ...props
      },
      id
    )

    return Result.ok<Thread>(thread)
  }
}
