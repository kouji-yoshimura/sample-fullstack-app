import React, { Fragment } from "react"
import { RouteComponentProps } from "@reach/router";
import Anchor from "../components/atoms/Anchor"

export interface AboutProps extends RouteComponentProps {}

const About: React.FC<AboutProps> = () => {
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

export default About
