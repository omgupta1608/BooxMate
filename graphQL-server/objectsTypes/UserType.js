const {
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
	GraphQLList
} = require('graphql');

const BookType = require('../objectsTypes/BookType').obj;
const fetchHandler = require('../handlers/fetch_handler').Handler;

module.exports.obj = new GraphQLObjectType({
    name: 'User',
    description: 'A user object',
    fields:() => ({
        userid: { type: GraphQLInt},
        uname: { type: GraphQLString },
        uspassword: { type: GraphQLString },
        contact: { type: GraphQLString },
        location: { type: GraphQLString },
        uemail: { type: GraphQLString },
        profilepic: { type: GraphQLString },
        
        bookmarked: {
            type: GraphQLList(BookType),
            resolve: async (parent) => {
                var id = parent.userid;
                var data = await fetchHandler(`/bookmark/${id}`);
                return data;
            }
        },
        cart: {
            type: GraphQLList(BookType),
            resolve: async (parent) => {
                var id = parent.userid;
                var data = await fetchHandler(`/cart/${id}`);
                return data;
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve: async (parent) => {
                var id = parent.userid;
                var data = await fetchHandler(`/book-2/${id}`);
                return data;
            }
        }
    })
});