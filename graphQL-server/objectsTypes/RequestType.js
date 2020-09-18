const {
	GraphQLString,
	GraphQLObjectType
} = require('graphql');

const fetchHandler = require('../handlers/fetch_handler').Handler;
const UserType = require('../objectsTypes/UserType').obj;
const BookType = require('../objectsTypes/BookType').obj;

module.exports.obj = new GraphQLObjectType({
    name: 'Request',
    description: 'A request type for books',
    fields: ({
        requestid: { type: GraphQLString },
        book: {
            type: BookType,
            resolve: (parent) => {
                var id = parent.bookid;
                var book = await fetchHandler(`/book/${id}`);
                return book; 
            }
        },
        user: {
            type: UserType,
            resolve: async (parent) => {
                var id = parent.userid;
                var user = await fetchHandler(`/user/${id}`);
                return user;                
            }
        },
        requestdate: { type: GraphQLString }
    })
});