import React, { Fragment } from "react"
import Anchor from "../atoms/Anchor"

export interface AboutTemplateProps {}

export const AboutTemplate: React.FC<AboutTemplateProps> = () => {
  return (
    <Fragment>
      Welcome to the about page. Go to the{" "}
      <Anchor href="/">
        Home
      </Anchor>{" "}
      page.
    </Fragment>
  )
}
