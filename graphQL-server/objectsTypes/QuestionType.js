const {
	GraphQLString,
	GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} = require('graphql');

const fetchHandler = require('../handlers/fetch_handler').Handler;
const UserType = require('../objectsTypes/UserType').obj;
//const AnswerType = require('../objectsTypes/AnswerType').obj;

const AnswerType = new GraphQLObjectType({
    name: 'Answer',
    description: 'A question type for Community',
    fields: () => ({
        answerid: { type: GraphQLString },
        question: { 
            type: QuestionType,
            resolve: async (parent) => {
                var id = parent.question.questionid;
                var question = await fetchHandler(`/question/${id}`);
                return question;
            }
        },
        answer: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: async (parent) => {
                var id = parent.user.userid;
                var user = await fetchHandler(`/user/${id}`);
                return user; 
            }
        },
        answersdate: { type: GraphQLInt }, 
        hearts: { type: GraphQLInt }
    })
});

const QuestionType = new GraphQLObjectType({
    name: 'Question',
    description: 'A question type for Community',
    fields: () => ({
        questionid: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: async (parent) => {
                var id = parent.user.userid;
                var user = await fetchHandler(`/user/${id}`);
                return user; 
            }
        },
        answerscount: { type: GraphQLInt }, 
        answers: {
            type: GraphQLList(AnswerType),
            resolve: async (parent) => {
                var id = parent.questionid;
                var answers = await fetchHandler(`/answer/${id}`);
                return answers;
            }
        },
        askdate: { type: GraphQLString },
        isClosed: { type: GraphQLBoolean },
        category: { type: GraphQLString }
    })
});

module.exports.obj = QuestionType;
module.exports.obj_a = AnswerType;