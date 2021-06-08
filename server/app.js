const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

let mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect("mongodb+srv://admin:chickens3000@realmcluster.f8cbs.mongodb.net/gql-learning?retryWrites=true&w=majority", mongoOptions);
mongoose.connection.once("open", () => { console.log("connected to db") });

const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening on port 4000");
});
