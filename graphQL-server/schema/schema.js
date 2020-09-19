const fetchHandler = require('../handlers/fetch_handler').Handler;
const postHandler = require('../handlers/fetch_handler').postHandler;
const {
	GraphQLInt,
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema,
	GraphQLString
} = require('graphql');

const UserType = require('../objectsTypes/UserType').obj;
const BookType = require('../objectsTypes/BookType').obj;
const AnswerType = require('../objectsTypes/QuestionType').obj_a;
const DemoType = require('../objectsTypes/DemoType').obj;
const RequestType = require('../objectsTypes/RequestType').obj;
const ReviewType = require('../objectsTypes/ReviewType').obj;
const QuestionType = require('../objectsTypes/QuestionType').obj;
const ResponseType = require('../objectsTypes/ResponseType').obj;

//Query Code

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
				userid: { type: GraphQLString }
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
				bookid: { type: GraphQLString }
			},
			resolve: async (parent, args) => {
				var data = await fetchHandler(`/books/${args.bookid}`);
				return data;
			}
		},
		answers: {
			type: GraphQLList(AnswerType),
			resolve: async () => {
				var data = await fetchHandler(`/answer`);
				return data
			}
		},
		answer: {
			type: AnswerType,
			args: {
				answerid: { type: GraphQLString }
			},
			resolve: async (parent,args) => {
				var data = await fetchHandler(`/answer/${args.answerid}`);
				return data;
			}
		},
		questions: {
			type: GraphQLList(QuestionType),
			resolve: async () => {
				var data = await fetchHandler('/question');
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
				var data = await fetchHandler('/demo');
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

// Mutation Code

const RootMutationType = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Root Mutation Type',
	fields:({
		addUser: {
			type: ResponseType,
			args: {
				user: {type: UserType }
			},
			resolve: async (parent, args) => {
				var data = JSON.stringify(args.user);
				console.log(data);
				var response = await postHandler(`/users/add-user`, data);			
				console.log(response);
				return response;
			}
		},
		addBook: {
			type: ResponseType,
			args: {
				book: { type: BookType }
			},
			resolve: async (parent, args) => {
				var data = JSON.stringify(args.book);
				console.log(data);
				var response = await postHandler(`/books/add-book`, data);			
				console.log(response);
				return response;
			}
		}
		// },
		// addQuestion: {
		// 	type: ResponseType,
		// 	args: {
		// 		question: { type: QuestionType }
		// 	},
		// 	resolve: async (parent, args) => {
		// 		var data = JSON.stringify(args.question);
		// 		console.log(data);
		// 		var response = await postHandler(`/question/add-question`, data);			
		// 		console.log(response);
		// 		return response;
		// 	}
		// },
		// addAnswer: {
		// 	type: ResponseType,
		// 	args: {
		// 		answer: { type: AnswerType }
		// 	},
		// 	resolve: async (parent, args) => {
		// 		var data = JSON.stringify(args.answer);
		// 		console.log(data);
		// 		var response = await postHandler(`/answer/add-answer`, data);			
		// 		console.log(response);
		// 		return response;
		// 	}
		// },
		// addReview: {
		// 	type: ResponseType,
		// 	args: {
		// 		review: { type: ReviewType }
		// 	},
		// 	resolve: async (parent, args) => {
		// 		var data = JSON.stringify(args.book);
		// 		console.log(data);
		// 		var response = await postHandler(`/review/add-review`, data);			
		// 		console.log(response);
		// 		return response;
		// 	}
		// },
		// addRequest: {
		// 	type: ResponseType,
		// 	args: {
		// 		request: { type: RequestType }
		// 	},
		// 	resolve: async (parent, args) => {
		// 		var data = JSON.stringify(args.request);
		// 		console.log(data);
		// 		var response = await postHandler(`/request/add-request`, data);			
		// 		console.log(response);
		// 		return response;
		// 	}
		// },
		// addDemo: {
		// 	type: ResponseType,
		// 	args: {
		// 		demo: { type: DemoType }
		// 	},
		// 	resolve: async (parent, args) => {
		// 		var data = JSON.stringify(args.demo);
		// 		console.log(data);
		// 		var response = await postHandler(`/demo/add-demo`, data);			
		// 		console.log(response);
		// 		return response;
		// 	}
		// },
		,hello: {
			type: ResponseType,
			args: {
				hi: { type: GraphQLString }
			},
			resolve: (parent,args) => {
				return ({data: null,message: args.hi})
			}
		}
	})
})

module.exports.schema = new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType
});