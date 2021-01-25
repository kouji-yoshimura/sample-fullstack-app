import { ValueObject } from "../../../../shared/domain/ValueObject"
import { Result } from "../../../../shared/core/Result"

export interface PostBodyProps {
  value: string
}

export class PostBody extends ValueObject<PostBodyProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: PostBodyProps) {
    super(props)
  }

  private static isValidPostBody(postBody: string) {
    const re = /^.{1,1000}$/
    return re.test(postBody)
  }

  public static create(postBody: string): Result<PostBody> {
    if (!this.isValidPostBody(postBody)) {
      return Result.fail<PostBody>("post body not valid")
    } else {
      return Result.ok<PostBody>(
        new PostBody({ value: postBody })
      )
    }
  }
}
