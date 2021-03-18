import Order from '../models/Order'

class OrderController {
  async index(req, res) {
    const orders = await Order.find({})
    return res.json(orders)
  }

  async show(req, res) {
    const { id } = req.params
    try {
      const order = await Order.findById(id)

      if (!order) {
        return res.status(404).json({ error: 'Order was not found!' })
      }

      return res.status(200).json(order)
    } catch (err) {
      return res.status(400).json({ error: 'Error retrieving data!' })
    }
  }

  async create(req, res) {
    const { name, quantity, session, user, value, date, status } = req.body

    const order = new Order({
      name,
      quantity,
      session,
      user,
      value,
      date,
      status
    })

    await order.save(function (err, order) {
      if (err) return console.log('ERRO', err)
      res.send({ data: order, message: 'Order was created successfully' })
    })
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const order = await Order.findById(id)

      if (!order) {
        return res.status(404).json({ error: 'Order was not found!' })
      }

      await order.remove()

      return res
        .status(204)
        .json({ message: 'Order annotation has been deleted!' })
    } catch (err) {
      return res.status(400).json({ error: 'Error deleting data!' })
    }
  }
}

export default new OrderController()
