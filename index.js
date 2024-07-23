import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      //parents, args, contextValues --three arguments
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      //parents, args, contextValues --three arguments
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      //parents, args, contextValues --three arguments
      return db.reviews.find((review) => review.id === args.id);
    },
  },
};

// server
const server = new ApolloServer({
  typeDefs, //typeDefs --definitions of types of data
  resolvers, //resolver
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at", 4000);
