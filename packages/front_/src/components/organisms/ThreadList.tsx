import React, { Fragment } from "react"
import ThreadCell, { ThreadCellProps } from "../molecules/ThreadCell"

export interface ThreadListProps {
  threads: ThreadCellProps[]
}
const ThreadList: React.FC<ThreadListProps> = ({ threads }) => {
  return (
    <Fragment>
      {threads.map((thread: ThreadCellProps) => {
        return <ThreadCell { ...thread } />
      })}
    </Fragment>
  )
}

export default ThreadList
