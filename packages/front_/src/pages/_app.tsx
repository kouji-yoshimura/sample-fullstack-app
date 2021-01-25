import React, { Fragment } from "react"
import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { Router } from "@reach/router";
import { useApollo } from "../lib/apollo"
import { Top } from "./Top"
import About from "./About"

export default function App({ pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Router primary={false} component={Fragment}>
        {/* <Component {...pageProps} /> */}
        <Top path="/" />
        <About path="/about" />
      </Router>
    </ApolloProvider>
  )
}
