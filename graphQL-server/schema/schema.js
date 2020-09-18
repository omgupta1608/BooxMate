const fetchHandler = require('../handlers/fetch_handler').Handler;
const {
	GraphQLInt,
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema,
	GraphQLString
} = require('graphql');

const UserType = require('../objectsTypes/UserType').obj;
const BookType = require('../objectsTypes/BookType').obj;
//const AnswerType = require('../objectsTypes/AnswerType').obj;
const DemoType = require('../objectsTypes/DemoType').obj;
const RequestType = require('../objectsTypes/RequestType').obj;
const ReviewType = require('../objectsTypes/ReviewType').obj;
const QuestionType = require('../objectsTypes/QuestionType').obj;

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: '...',
	fields: () => ({
		users:{
			type: GraphQLList(UserType),
			resolve: async () => {
				var data = await fetchHandler(`/users`);
				console.log(data);
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
		},
		// answers: {
		// 	type: GraphQLList(AnswerType),
		// 	resolve: async () => {
		// 		var data = await fetchHandler(`/answers`);
		// 		return data
		// 	}
		// },
		// answer: {
		// 	type: AnswerType,
		// 	args: {
		// 		answerid: { type: GraphQLString }
		// 	},
		// 	resolve: async (parent,args) => {
		// 		var data = await fetchHandler(`/answer/${args.answerid}`);
		// 		return data;
		// 	}
		// },
		questions: {
			type: GraphQLList(QuestionType),
			resolve: async () => {
				var data = await fetchHandler('/questions');
				return data;
			}
		},
		question: {
			type: QuestionType,
			args: {
				questionid: { type: GraphQLString }
			},
			resolve: async (parent,args) => {
				var data = await fetchHandler(`/question/${args.questionid}`);
				return data;
			}
		},
		demos: {
			type: GraphQLList(DemoType),
			resolve: async () => {
				var data = await fetchHandler('/demos');
				return data;
			}
		},
		demo: {
			type: DemoType,
			args: {
				demoid: { type: GraphQLString }
			},
			resolve: async (parent,args) => {
				var data = await fetchHandler(`/demo/${args.demoid}`);
				return data;
			}
		},
		reviews: {
			type: GraphQLList(ReviewType),
			resolve: async () => {
				var data = await fetchHandler('/reviews');
				return data;
			}
		},
		review: {
			type: ReviewType,
			args: {
				reviewid: { type: GraphQLString }
			},
			resolve:  async (parent,args) => {
				var data = await fetchHandler(`/review/${args.reviewid}`);
				return data;
			}
		},
		requests: {
			type: GraphQLList(RequestType),
			resolve: async () => {
				var data = await fetchHandler('/requests');
				return data;
			}
		},
		request: {
			type: RequestType,
			args: {
				requestid: { type: GraphQLString }
			},
			resolve: async (parent,args) => {
				var data = await fetchHandler(`/request/${args.requestid}`);
				return data;
			}
		}
	})
});

module.exports.schema = new GraphQLSchema({
	query: RootQueryType
});