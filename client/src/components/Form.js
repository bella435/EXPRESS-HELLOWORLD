import { useState } from 'react'

const Form = (props) => {
  const [linkName, setLinkName] = useState('')
  const [linkURL, setLinkURL] = useState('')

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setLinkName(event.target.value)
    } else if (event.target.name === 'URL') {
      setLinkURL(event.target.value)
    }

    /*
            TODO - Logic for changing state based on form changes
        */
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    props.handleSubmit({
      name: linkName,
      URL: linkURL,
    })

    setLinkName('')
    setLinkURL('')
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form onSubmit={onFormSubmit}>
       <label>
        Name:
        <input type="text" name="name" value={linkName} onChange={handleChange} />
      </label>
      <label>
        URL:
        <input type="text" name="URL" value={linkURL} onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    </form>
  )
}

export default Form
