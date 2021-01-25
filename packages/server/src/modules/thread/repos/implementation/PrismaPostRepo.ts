import { DateTime } from "luxon"
import { PrismaClient } from "@prisma/client"
import {
  IPostRepo,
} from "../postRepo"
import { Post } from "../../domain/entities/post"
import { ThreadId } from "../../domain/valueObjects"
import { PostMap } from "../../mappers/postMap"

export class PrismaPostRepo implements IPostRepo {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(post: Post): Promise<void> {
    const createData = PostMap.toCreateParam(post)
    await this.prisma.post.create({ data: createData })
  }

  async findAllByThreadId(
    threadId: ThreadId
  ): Promise<Post[]> {
    const threadIdValue = threadId.id.toString()
    const posts = await this.prisma.post.findMany({
      where: {
        threadId: threadIdValue
      }
    })
    console.log(posts)
    const hoge = [] as any
    // return posts.map((post: any) => {
    return hoge.map((post: any) => {
      PostMap.persistentToDomain({
        postId: post.id,
        threadId: post.threadId,
        body: post.body,
        createdBy: post.createdBy,
        updatedBy: post.updatedBy,
        createdAt: DateTime.utc(),
        updatedAt: DateTime.utc()
      })
    })
  }
}
