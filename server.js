const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./config/db');

// Models here...
const User = require('./models/user.model');
const Recipe = require('./models/recipe.model');

// GraphQL Here...
const { typeDefs } = require('./graphQL/schema');
const { resolvers } = require('./graphQL/resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({app, path: '/graphql'});

app.use('/', (req, res) => {
    res.status(200).send('Welcome...');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});