import {prisma} from "./server/generated/prisma-client"

export const resolvers = {
  Query: {
    users: (_,) => {
      return prisma.users()
    }
  },
  Mutation: {
    createUser: (_, {name}) => {
      return prisma.createUser({
        name: name,
      })
    },
    deleteUser: (_, {id}) => {
      return prisma.deleteUser({
        id: id,
      })
    },
  },
  //訂閱 即時消息
  // Subscriptions: {
  // }
}
