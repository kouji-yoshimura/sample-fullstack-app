import { DateTime } from "luxon"
export interface ThreadDTO {
  id: string
  name: string
  createdBy: string
  updatedBy: string
  createdAt: DateTime
  updatedAt: DateTime
}
