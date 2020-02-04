import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getHouses} from '../redux/houseReducer'

const House = ({house, getHouses}) => {
  const {id, name} = house
  return(
    <div>
      <h1>{name}</h1>
      <button onClick ={() => {
        axios.delete(`/api/houses/${id}`).then(() => {
          getHouses()
        }).catch(err => console.log(err))
        }}>Delete</button>
    </div>
  )
}

const mapDispatchToProp = {getHouses}

export default connect(null, mapDispatchToProp)(withRouter(House))