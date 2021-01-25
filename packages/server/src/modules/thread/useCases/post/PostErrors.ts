import { UseCaseError } from "../../../../shared/core/UseCaseError"
import { Result } from "../../../../shared/core/Result"

export class PostCreateEntityFailedError extends Result<UseCaseError> {
  constructor() {
    super(false, {
      message: "Failed to create PostEntity"
    } as UseCaseError)
  }
}
