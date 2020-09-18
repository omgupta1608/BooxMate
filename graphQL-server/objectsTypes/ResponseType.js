const {
    GraphQLString, 
    GraphQLObjectType
} = require('graphql');

module.exports.obj = new GraphQLObjectType({
    name: 'Response',
    description: 'Response to all Mutations',
    fields: () => ({
        data: {
            type: GraphQLString
        },
        message: {
            type: GraphQLString
        }
    })
});