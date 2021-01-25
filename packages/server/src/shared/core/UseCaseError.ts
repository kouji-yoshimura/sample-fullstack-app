interface IUseCaseError {
  message: string
  error: Error | string
}

export abstract class UseCaseError implements IUseCaseError {
  public readonly message: string
  public readonly error: Error | string

  constructor(message: string, error: Error | string = "") {
    this.message = message
    this.error = error
  }
}
