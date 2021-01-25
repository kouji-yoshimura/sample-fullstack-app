import React, { Fragment } from "react"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

export interface SearchBarProps {}
const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <Fragment>
      <Input
        className=""
        size="medium"
        placeholder="検索ワードを入力"
      />
      <Button
        className=""
      >
        Search
      </Button>
    </Fragment>
  )
}

export default SearchBar
