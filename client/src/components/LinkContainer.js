import { useEffect, useState } from 'react'

import Table from './Table';
 import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([
    {
      name: 'Google',
      url: 'https://www.google.com',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
    },
  ])

  const fetchLinks = async () =>{

    try {
      let response = await fetch('/links')
      console.log(response)
      let data = await response.json()
      setFavLinks(data)
      console.log(data)
    }catch (error){
      console.log(error)
    }
    }
    const postLinks = async (testLink) =>{
    // let testLink = {
    //   name: 'Test',
    //   url: 'text.com',
    // }
    try {
      let response = await fetch('/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(testLink),
      })
      console.log(response)
      let message = await response.text()
      console.log(message)
    }catch (error){
     console.log(error)
    }
    }
    useEffect(() => {
      fetchLinks()
       postLinks()
    }, [])
  
  const removeLink = (index) => {
    const newFavLinks = [...favLinks]
    newFavLinks.splice(index, 1)
    setFavLinks(newFavLinks)
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    //setFavLinks([...favLinks, favLink])
    postLinks(favLink)

    fetchLinks()
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      
      {/*TODO - Add Table Component */}
      <Table linkData={favLinks} removeLink={removeLink} />
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form handleSubmit={handleSubmit} />
       
    </div>
  )
}

export default LinkContainer
