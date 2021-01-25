import { Thread } from "../domain/entities/thread"
import { ThreadId } from "../domain/valueObjects"

export interface IThreadRepo {
  create(thread: Thread): Promise<void>
  findAll(options?: ThreadFindAllOption): Promise<Thread[]>
  findOneByPk(pk: ThreadId, options?: ThreadFindAllOption): Promise<Thread | undefined>
}

export interface ThreadFindAllOption {

}
