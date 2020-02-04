import React, { useState } from "react"
import axios from "axios"

const Form = props => {
  const {history} = props
  const [state, setState] = useState({
    name: "",
    address: "",
    city: "",
    house_state: "",
    zip: "",
    img: "",
    mortgage: "",
    rent: ""
  })
  const { name, address, city, house_state, zip, img, mortgage, rent } = state
  const handleChange = ({ name, value }) => setState({...state, [name]: value })
  return (
    <div>
      <input
        name="name"
        value={name}
        type="text"
        placeholder="name"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="address"
        value={address}
        type="text"
        placeholder="address"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="city"
        value={city}
        type="text"
        placeholder="city"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="house_state"
        value={house_state}
        type="text"
        placeholder="state"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="zip"
        value={zip}
        type="number"
        placeholder="zip"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="img"
        value={img}
        type="text"
        placeholder="img"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="mortgage"
        value={mortgage}
        type="number"
        placeholder="mortgage"
        onChange={e => handleChange(e.target)}
      />
      <input
        name="rent"
        value={rent}
        type="number"
        placeholder="rent"
        onChange={e => handleChange(e.target)}
      />
      <button
      onClick ={() => {
        axios.post('/api/houses', state).then(() => {
          history.push('/')
        })
      }}
      >Add House</button>
    </div>
  )
}

export default Form