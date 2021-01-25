import { ValueObject } from "../../../../shared/domain/ValueObject"
import { Result } from "../../../../shared/core/Result"

export interface UserNameProps {
  value: string
}

export class UserName extends ValueObject<UserNameProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: UserNameProps) {
    super(props)
  }

  private static isValidUserName(userName: string) {
    const re = /^.{3,32}$/
    return re.test(userName)
  }

  public static create(userName: string): Result<UserName> {
    if (!this.isValidUserName(userName)) {
      return Result.fail<UserName>("user name not valid")
    } else {
      return Result.ok<UserName>(
        new UserName({ value: userName })
      )
    }
  }
}
