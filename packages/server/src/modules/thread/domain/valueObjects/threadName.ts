import { ValueObject } from "../../../../shared/domain/ValueObject"
import { Result } from "../../../../shared/core/Result"

export interface ThreadNameProps {
  value: string
}

export class ThreadName extends ValueObject<ThreadNameProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: ThreadNameProps) {
    super(props)
  }

  private static isValidThreadName(threadName: string) {
    const re = /^.{3,32}$/
    return re.test(threadName)
  }

  public static create(threadName: string): Result<ThreadName> {
    if (!this.isValidThreadName(threadName)) {
      return Result.fail<ThreadName>("thread name not valid")
    } else {
      return Result.ok<ThreadName>(
        new ThreadName({ value: threadName })
      )
    }
  }
}
