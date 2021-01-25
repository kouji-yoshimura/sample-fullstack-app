import { Result } from "./Result"
import { UseCaseError } from "./UseCaseError"

export class UnexpectedError extends Result<UseCaseError> {
  public constructor(err: Error | string) {
    super(false, {
      message: "An unexpected error occurred.",
      error: err
    } as UseCaseError)
    console.log("[AppError]: An unexpected error occurred")
    console.error(err)
  }

  public static create(err: Error): UnexpectedError {
    return new UnexpectedError(err)
  }
}

export class BadRequestError extends Result<UseCaseError> {
  public constructor(err: Error | string) {
    super(false, {
      message: "Bad request.",
      error: err
    } as UseCaseError)
  }

  public static create(err: Error): BadRequestError {
    return new BadRequestError(err)
  }
}
