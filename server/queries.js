require('dotenv').config()

// connect to postgres using the node-postgres

const POOL = require('pg').Pool
const pool = new POOL({
    user: 'me',
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost',
    database:'api', 
    port: 5432
})

// // Create all the functions that will be our request handlers in our express server

// // Create a new link in the db

// // Read all the data from db

const getLinks = (req, res) => {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows)
    })
  }
  
//   // Update link in the db
  
//   // Delete link in the db


  // const getLinksById = (request, response) => {
  //   const id = parseInt(request.params.id)
  
  //   pool.query('SELECT * FROM links WHERE id = $1', [id], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).json(results.rows)
  //   })
  // }

  const createLinks = (request, response) => {
    const name = request.body.name
    const url = request.body.url
    if (name && url) {
      pool.query(

      )} else {
        response.status(403).sned("server is expect data object with a name and url paramet")
      }
    
  
    pool.query(
      'INSERT INTO links (name, url) VALUES ($1, $2)', 
      [name, url], 
      (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Links added with ID: ${results.insertId}`)
    },)
  }

  // const updateLinks = (request, response) => {
  //   const id = parseInt(request.params.id)
  //   const { name, url } = request.body
  
  //   pool.query(
  //     'UPDATE links SET name = $1, url = $2 WHERE id = $3',
  //     [name, url, id],
  //     (error, results) => {
  //       if (error) {
  //         throw error
  //       }
  //       response.status(200).send(`Link modified with ID: ${id}`)
  //     }
  //   )
  // }

  // const deleteLinks = (request, response) => {
  //   const id = parseInt(request.params.id)
  
  //   pool.query('DELETE FROM links WHERE id = $1', [id], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).send(`User deleted with ID: ${id}`)
  //   })
  // }

  module.exports = {
    getLinks, 
   // getLinksById,
    createLinks,
    // updateLinks,
    // deleteLinks,
   }

  