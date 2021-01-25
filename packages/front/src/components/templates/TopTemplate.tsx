import React, { Fragment } from "react"
import TopHeader from "../organisms/TopHeader"
import TopContent from "../organisms/TopContent"
import ThreadListContainer from "../../containers/ThreadListContainer"

export interface TopTemplateProps {}
export const TopTemplate: React.FC<TopTemplateProps> = () => {
  return (
    <Fragment>
      <TopHeader />
      <TopContent>
        <ThreadListContainer />
      </TopContent>
    </Fragment>
  )
}
