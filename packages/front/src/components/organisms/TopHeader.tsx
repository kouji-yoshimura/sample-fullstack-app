import React, { Fragment } from "react"
import Title from "../atoms/Title"
import SearchBar from "../molecules/SearchBar"

export interface TopHeaderProps {}
const TopHeader: React.FC<TopHeaderProps> = () => {
  return (
    <Fragment>
      <Title level={1} size={"large"}>
        Thread List
      </Title>
      <SearchBar />
    </Fragment>
  )
}

export default TopHeader
