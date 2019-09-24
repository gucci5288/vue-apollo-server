import {GraphQLServer} from 'graphql-yoga'
import typeDefs from './types/typeDefs'
import {prisma} from './server/generated/prisma-client'
import {resolvers} from './resolvers'
// const resolvers = {
//   Query: {
//     users: (_,) => {
//       return prisma.users()
//     }
//   },
//   Mutation: {
//     createUser: (_, {name}) => {
//       return prisma.createUser({
//         name: name,
//       })
//     },
//     deleteUser: (_, {id}) => {
//       return prisma.deleteUser({
//         id: id,
//       })
//     },
//   },
//   //訂閱 即時消息
//   // Subscriptions: {
//   // }
// }

//解析器 數值來源
const server = new GraphQLServer({typeDefs, resolvers})
server.start({}, ({port}) => console.log(`Server is running on http://localhost:${port}`))
