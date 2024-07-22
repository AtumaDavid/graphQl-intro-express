import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema";

// server
const server = new ApolloServer({
  typeDefs, //typeDefs --definitions of types of data
  //resolver
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at", 4000);
