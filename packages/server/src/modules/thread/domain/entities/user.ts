import { DateTime } from "luxon"
import { AggregateRoot } from "../../../../shared/domain/AggregateRoot"
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID"
import { Guard } from "../../../../shared/core/Guard"
import { Result } from "../../../../shared/core/Result"
import { UserName } from "../valueObjects"

interface UserProps {
  name: UserName
  createdAt: DateTime
  updatedAt: DateTime
}

export class User extends AggregateRoot<UserProps> {
  get name(): UserName {
    return this.props.name
  }

  get createdAt(): DateTime {
    return this.props.createdAt
  }

  get updatedAt(): DateTime {
    return this.props.updatedAt
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(
    props: UserProps,
    id?: UniqueEntityID
  ): Result<User> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.name, argumentName: "name" },
      { argument: props.createdAt, argumentName: "createdAt" },
      { argument: props.updatedAt, argumentName: "updatedAt" }
    ])

    if (!guardResult.succeeded) {
      return Result.fail<User>(guardResult.message ?? "")
    }

    const thread = new User(
      {
        ...props
      },
      id
    )

    return Result.ok<User>(thread)
  }
}
