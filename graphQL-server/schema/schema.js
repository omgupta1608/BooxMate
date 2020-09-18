const {
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema
} = require('graphql');


const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: '...'
});

module.exports.schema = new GraphQlSchema({
	query: RootQueryType
});