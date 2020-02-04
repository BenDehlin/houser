import React from 'react'
import {withRouter} from 'react-router-dom'

const Header = ({history}) => (
  <header>
    <button
    onClick = {() => history.push('/')}
    >Dashboard</button>
    <button
    onClick = {() => history.push('/form')}
    >Add House</button>
  </header>
)

export default withRouter(Header)