const {
	GraphQLString,
	GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const fetchHandler = require('../handlers/fetch_handler').Handler;
const UserType = require('../objectsTypes/UserType').obj;
const ReviewType = require('../objectsTypes/ReviewType').obj;

module.exports.obj = new GraphQLObjectType({
    name: 'Demo',
    description: 'A Demo',
    fields: () => ({
        demoid: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        file: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: async (parent) => {
                var id = parent.user.userid;
                var user = await fetchHandler(`/user/${id}`);
                return user; 
            }
        },
        starcount: { type: GraphQLInt },
        ratedcount: { type: GraphQLInt },
        reviewscount: { type: GraphQLInt },
        reviews: {
            type: GraphQLList(ReviewType),
            resolve: async (parent) => {
                var id = parent.user.userid;
                var reviews = await fetchHandler(`/review/${id}`);
                return reviews;
            }
        },
        demodate: { type: GraphQLString }
    })
});