import {GraphQLServer} from 'graphql-yoga'
import typeDefs from './types/typeDefs'
import {resolvers} from './resolvers'

//解析器 數值來源
const server = new GraphQLServer({typeDefs, resolvers})
server.start({}, ({port}) => console.log(`Server is running on http://localhost:${port}`))
