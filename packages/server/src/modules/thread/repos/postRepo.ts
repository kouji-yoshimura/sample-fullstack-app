import { Post } from "../domain/entities/post"
import { ThreadId } from "../domain/valueObjects/threadId"

export interface IPostRepo {
  create(post: Post): Promise<void>
  findAllByThreadId(threadId: ThreadId, options?: PostFindAllOption): Promise<Post[]>
}

export interface PostFindAllOption {

}
