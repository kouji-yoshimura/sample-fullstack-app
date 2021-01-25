import { PostDTO } from "../../dtos/postDTO"
export interface PostsRequestDTO {
  threadId: string
}

export interface PostsResponseDTO {
  posts: PostDTO[]
}
