
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const path = require('path')

const db = require('./queries')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

app.get('/api', (req, res) => {
    res.json({ message: "From API route server!"}); 
});
// app.post('/links',(req, res) => {
//   res.send(req.body)
// })

//CRUD

// READ - get data from db
   app.get('/links', db.getLinks)
  // app.get('/links/:id', db.getLinksById)
// CREATE - add data to db
   app.post('/links', db.createLinks)
// UPDATE - update data in db
  // app.put('/links/:id', db.updateLinks)
// DELETE - remove data from db
  // app.delete('/links/:id', db.deleteLinks)



app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`)
})

