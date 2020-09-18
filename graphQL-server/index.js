const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();

const schema = require('./schema/schema').schema;

app.use(graphqlHTTP({
    schema,
    graphiql: true
}));

var port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Wrapper server started at ${port}`);
});