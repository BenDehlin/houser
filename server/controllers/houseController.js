module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  postHouse: (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, house_state, zip, img, mortgage, rent} = req.body
    db.post_house([name, address, city, house_state, zip, img, mortgage, rent]).then(() => {
      res.sendStatus(200)
    }).catch(err => res.status(500).send(err))
  },
  deleteHouse: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_house(id).then(() => {
      res.sendStatus(200)
    }).catch(err => res.status(500).send(err))
  }
}