const { gql } = require('apollo-server-express');
const typeDefs = gql`

    type Recipe {
        name: String!
        category: String!
        description: String!
        instructions: String!
        likes: Int
        username: String
        createAt: String
    }

    type User {
        username: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        favourites: [Recipe]
        createdAt: String
    }

    type Query {
        getAllRecipes: [Recipe]
    }

    type Mutation {
        addRecipe(name: String!,
            category: String!,
            description: String!,
            instructions: String!,
            username: String!): Recipe
    }
`;

module.exports = {
    typeDefs
}