import React from 'react'
import { RouteComponentProps } from '@reach/router';
import { ViewerDocument } from '../lib/viewer.graphql'
import { initializeApollo } from '../lib/apollo'
import { TopTemplate } from "../components/templates/TopTemplate"

export interface TopProps extends RouteComponentProps {}

export const Top: React.FC<TopProps> = () => {
  // const { viewer } = useViewerQuery().data!
  // const [newName, setNewName] = useState('')
  // const [updateNameMutation] = useUpdateNameMutation()

  // const onChangeName = () => {
  //   updateNameMutation({
  //     variables: {
  //       name: newName,
  //     },
  //     //Follow apollo suggestion to update cache
  //     //https://www.apollographql.com/docs/angular/features/cache-updates/#update
  //     update: (
  //       store,
  //       {
  //         data: {
  //           updateName: { name },
  //         },
  //       }
  //     ) => {
  //       // Read the data from our cache for this query.
  //       const { viewer } = store.readQuery({ query: ViewerDocument })
  //       const newViewer = { ...viewer }
  //       // Add our comment from the mutation to the end.
  //       newViewer.name = name
  //       // Write our data back to the cache.
  //       store.writeQuery({ query: ViewerDocument, data: { viewer: newViewer } })
  //     },
  //   })
  // }

  return <TopTemplate />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

