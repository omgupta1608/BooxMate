const fetchHandler = require('../handlers/fetch_handler').Handler;
const {
	GraphQLInt,
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema
} = require('graphql');

const UserType = require('../objectsTypes/UserType').obj;
const BookType = require('../objectsTypes/BookType').obj;

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: '...',
	fields: ({
		users:{
			type: GraphQLList(UserType),
			resolve: async () => {
				var data = await fetchHandler(`/users`);
				return data
			}
		},
		user: {
			type: UserType,
			args: {
				userid: { type: GraphQLInt }
			},
			resolve: async (parent, args) => {
				var data = await fetchHandler(`/user/${args.userid}`);
				return data;
			}
		},
		books: {
			type: GraphQLList(BookType),
			resolve: async () => {
				var data = await fetchHandler(`/books`);
				return data;
			}
		},
		book: {
			type: BookType,
			args: {
				bookid: { type: GraphQLInt }
			},
			resolve: async (parent, args) => {
				var data = await fetchHandler(`/book/${args.bookid}`);
				return data;
			}
		}
	})
});

module.exports.schema = new GraphQLSchema({
	query: RootQueryType
});