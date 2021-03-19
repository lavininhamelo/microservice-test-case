import Session from '../models/Session'

class SessionController {
  async index(req, res) {
    const sessions = await Session.find({}).populate('genders')
    return res.json(sessions)
  }

  async show(req, res) {
    const { id } = req.params
    try {
      const session = await Session.findById(id).populate('genders')

      if (!session) {
        return res.status(404).json({ error: 'Session was not found!' })
      }

      return res.status(200).json(session)
    } catch (err) {
      return res.status(400).json({ error: 'Error retrieving data!' })
    }
  }

  async create(req, res) {
    let { name, genders } = req.body
    try {
      let session = {
        name,
        genders
      }

      const session_data = await Session.create(session)

      return res.status(201).json(session_data)
    } catch (err) {
      return res.status(400).json({ error: 'Error registering session' })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const session = await Session.findById(id)

      if (!session) {
        return res.status(404).json({ error: 'Session was not found!' })
      }

      await session.remove()

      return res
        .status(204)
        .json({ message: 'Session annotation has been deleted!' })
    } catch (err) {
      return res.status(400).json({ error: 'Error deleting data!' })
    }
  }
}

export default new SessionController()
