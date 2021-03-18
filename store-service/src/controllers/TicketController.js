import Ticket from '../models/Ticket'

class TicketController {
  async index(req, res) {
    const tickets = await Ticket.find({})
    return res.json(tickets)
  }

  async show(req, res) {
    const { id } = req.params
    try {
      const ticket = await Ticket.findById(id)

      if (!ticket) {
        return res.status(404).json({ error: 'Ticket was not found!' })
      }

      return res.status(200).json(ticket)
    } catch (err) {
      return res.status(400).json({ error: 'Error retrieving data!' })
    }
  }

  async create(req, res) {
    const { name, user, session } = req.body

    const ticket = new Ticket({
      name,
      session,
      user
    })

    await ticket.save(function (err, ticket) {
      if (err) return console.log('ERRO', err)
      res.send({ data: ticket, message: 'Ticket was created successfully' })
    })
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const ticket = await Ticket.findById(id)

      if (!ticket) {
        return res.status(404).json({ error: 'Ticket was not found!' })
      }

      await ticket.remove()

      return res
        .status(204)
        .json({ message: 'Ticket annotation has been deleted!' })
    } catch (err) {
      return res.status(400).json({ error: 'Error deleting data!' })
    }
  }
}

export default new TicketController()
