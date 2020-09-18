// const {
// 	GraphQLString,
// 	GraphQLObjectType,
//     GraphQLInt
// } = require('graphql');

// const fetchHandler = require('../handlers/fetch_handler').Handler;
// const UserType = require('../objectsTypes/UserType').obj;
// const QuestionType = require('../objectsTypes/QuestionType').obj;

// module.exports.obj = new GraphQLObjectType({
//     name: 'Question',
//     description: 'A question type for Community',
//     fields: () => ({
//         answerid: { type: GraphQLString },
//         question: { 
//             type: QuestionType,
//             resolve: async (parent) => {
//                 var id = parent.question.questionid;
//                 var question = await fetchHandler(`/question/${id}`);
//                 return question;
//             }
//         },
//         answer: { type: GraphQLString },
//         user: {
//             type: UserType,
//             resolve: async (parent) => {
//                 var id = parent.user.userid;
//                 var user = await fetchHandler(`/user/${id}`);
//                 return user; 
//             }
//         },
//         answersdate: { type: GraphQLInt }, 
//         hearts: { type: GraphQLInt }
//     })
// });