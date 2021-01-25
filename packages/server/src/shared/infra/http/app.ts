import { server } from './graphql/server'

server.listen().then(() => {
  console.log(`🚀 Server ready`)
})
