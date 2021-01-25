import React, { Fragment } from "react"
import Anchor from "../atoms/Anchor"

export interface ThreadCellProps {
  id: number
  name: string
  post_count: number
}
const ThreadCell: React.FC<ThreadCellProps> = ({ id, name, post_count }) => {
  return (
    <Fragment>
      <Anchor href="/about">
        <p>{ id }: { name } : { post_count }</p>
      </Anchor>
    </Fragment>
  )
}

export default ThreadCell
