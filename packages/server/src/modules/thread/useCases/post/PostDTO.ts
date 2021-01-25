export interface PostRequestDTO {
  threadId: string
  body: string
  userId: string
}

export interface PostResponseDTO {
  success: boolean
  message?: string
  postId?: string
}
