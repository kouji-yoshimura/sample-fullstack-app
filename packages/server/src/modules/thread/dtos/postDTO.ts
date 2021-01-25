import { DateTime } from "luxon"
export interface PostDTO {
  id: string
  threadId: string
  body: string
  createdBy: string
  updatedBy: string
  createdAt: DateTime
  updatedAt: DateTime
}
