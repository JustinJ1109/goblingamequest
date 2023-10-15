const express = require("express")

// itemRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /item.
const itemRoutes = express.Router()

// This will help us connect to the database
const dbo = require("../db/conn")

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId


// This section will help you get a list of all the items.
itemRoutes.route("/item").get(function (req, res) {
    let db_connect = dbo.getDb("Quests")
    db_connect
        .collection("items")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err
            res.json(result)
        })
});

// This section will help you get a single item by id
itemRoutes.route("/item/:id").get(function (req, res) {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId(req.params.id) }
    db_connect
        .collection("items")
        .findOne(myquery, function (err, result) {
            if (err) throw err
            res.json(result)
        })
})

// This section will help you create a new item.
itemRoutes.route("/item/add").post(function (req, response) {
    let db_connect = dbo.getDb()
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    }
    db_connect.collection("items").insertOne(myobj, function (err, res) {
        if (err) throw err
        response.json(res)
    })
})

// This section will help you update a item by id.
itemRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId(req.params.id) }
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    }
    db_connect
        .collection("items")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err
            console.log("1 document updated")
            response.json(res)
        })
})

// This section will help you delete a item
itemRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId(req.params.id) }
    db_connect.collection("items").deleteOne(myquery, function (err, obj) {
        if (err) throw err
        console.log("1 document deleted")
        response.json(obj)
    })
})

module.exports = itemRoutes