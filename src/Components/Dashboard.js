import React, {useEffect} from "react"
import { connect } from "react-redux"
import { getHouses } from "../redux/houseReducer"
import House from './House'

const Dashboard = ({houses, getHouses}) => {
  useEffect(() => {getHouses()}, [])
  return (
    <div>
      {houses && houses.map(house => (
        <House key={house.id} house={house} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {houses} = state.houseReducer
  return {houses}
}

const mapDispatchToProps = {getHouses}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)