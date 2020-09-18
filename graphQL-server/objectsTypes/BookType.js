const {
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
    GraphQLList,
    GraphQLBoolean,
    GraphQLFloat
} = require('graphql');

const fetchHandler = require('../handlers/fetch_handler').Handler;
const UserType = require('../objectsTypes/UserType').obj;
const RequestType = require('../objectsTypes/UserType').obj;

module.exports.obj = new GraphQLObjectType({
    name: 'Book',
    description: 'A book object',
    fields: ({
        bookid: { type: GraphQLString },
        bookname: { type: GraphQLString },
        bookdescription: { type: GraphQLString },
        bookimage: { type: GraphQLString },
        category: { type: GraphQLString },
        price: { type: GraphQLFloat },
        mode: { type: GraphQLString },
        duration: { type: GraphQLString },
        author: { type: GraphQLString },
        publisher: { type: GraphQLString },
        edition: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: async (parent) => {
                var id = parent.userid;
                var user = await fetchHandler(`/user/${id}`);
                return user;                
            }
        },
        requestcount: { type: GraphQLInt },
        issold: { type: GraphQLBoolean },
        postdate: { type: GraphQLString },
        requests: {
            type: GraphQLList(RequestType),
            resole: () => {
                return [];
            }
        } 
    })
});