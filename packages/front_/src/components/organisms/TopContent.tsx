import React, { Fragment, ReactNode } from "react"

export interface TopContentProps {
  children?: ReactNode
}
const TopContent: React.FC<TopContentProps> = ({ children }) => {
  return (
    <Fragment>
      { children }
    </Fragment>
  )
}

export default TopContent
