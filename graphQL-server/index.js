const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const cors = require('cors');
const schema = require('./schema/schema').schema;

app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

var port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log(`Wrapper server started at ${port}`);
});