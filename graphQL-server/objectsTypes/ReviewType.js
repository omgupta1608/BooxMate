const {
	GraphQLString,
	GraphQLObjectType
} = require('graphql');

const fetchHandler = require('../handlers/fetch_handler').Handler;
const UserType = require('../objectsTypes/UserType').obj;

module.exports.obj = new GraphQLObjectType({
    name: 'Review',
    description: 'A review type for Demos',
    fields: () => ({
        reviewid: { type: GraphQLString },
        review: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: async (parent) => {
                var id = parent.user.userid;
                var user = await fetchHandler(`/user/${id}`);
                return user; 
            }
        },
        reviewdate: { type: GraphQLString }
    })
});