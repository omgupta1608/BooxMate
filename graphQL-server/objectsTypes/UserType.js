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
    fields: ({
        userid: { type: GraphQLInt},
        uname: { type: GraphQLString },
        uspassword: { type: GraphQLString },
        contact: { type: GraphQLString },
        location: { type: GraphQLString },
        uemail: { type: GraphQLString },
        profilepic: { type: GraphQLString },
        
        bookmarked: {
            type: GraphQLList(BookType),
            resolve: (parent) => {
                return [];
            }
        },
        cart: {
            type: GraphQLList(BookType),
            resolve: (parent) => {
                return [];
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve: (parent) => {
                return [];
            }
        }
    })
});