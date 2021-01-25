import { UseCaseError } from "../../../../shared/core/UseCaseError"
import { Result } from "../../../../shared/core/Result"

export class ThreadsError extends Result<UseCaseError> {
  constructor() {
    super(false, {
      message: ""
    } as UseCaseError)
  }
}
