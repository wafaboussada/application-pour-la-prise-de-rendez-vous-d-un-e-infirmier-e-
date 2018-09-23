const express = require ('express')
const bodyParser = require ('body-parser')
const {MongoClient,ObjectId} = require ('mongodb') 
const assert = require ('assert')

const app = express();
app.use(bodyParser.json())

const MongoUrl ='mongodb://localhost:27017';
const dataBase = 'ClientsList';



MongoClient.connect(MongoUrl, { useNewUrlParser: true },(err,client)=>{
    assert.equal(err,null,"Database connexion failed");
    const db = client.db(dataBase);
    app.post("/add-contact", (req,res)=>{
        let newContact = req.body;
        db.collection("clients").insertOne(newContact,(err,data)=>{
            if(err) res.send('can not added');
            else res.send("new contact added");
        })
    })
    app.get("/contacts", (req,res)=>{
        db.collection("clients").find().toArray((err,data)=>{
            if(err) res.send('can not get contact list');
            else res.send(data);
        })
    })
    app.delete('/deletecontact/:id',(req,res)=>{
        let contactToRemoveId = ObjectId(req.params.id)
        db.collection('clients').findOneAndDelete({_id : contactToRemoveId},(err,data)=>{
            if(err) res.send ("can't delete contact")
            else res.send("contact was deleted")
        })
    })

})

app.listen(3007,err =>{
    if (err) console.log('server erreur')
    else console.log('server is running on port 3007')
})