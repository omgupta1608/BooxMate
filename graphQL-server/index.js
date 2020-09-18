const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();

const schema = require('./schema/schema').schema;

app.use(graphqlHTTP({
    schema,
    graphiql: true
}));

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Wrapper server started at ${port}`);
});