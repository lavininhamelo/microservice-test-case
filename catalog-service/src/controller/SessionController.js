import elasticClient from './client/elasticsearch'

class SessionController {
  async findAll(_request, response) {
    const data = await elasticClient().search({
      index: 'sessions',
      size: 6000
    })
    return response.json(data)
  }

  async findById(request, response) {
    const { id } = request.params
    const data = await elasticClient().search({
      index: 'sessions',
      q: `id:${id}`
    })
    return response.json(data.hits.hits)
  }

  async create(request, response) {
    const data = await elasticClient().index({
      index: 'sessions',
      type: 'type_sessions',
      body: request.body
    })
    return response.json(data)
  }

  async delete(request, response) {
    const { id } = request.params

    const data = await elasticClient().delete({
      index: 'sessions',
      id
    })
    return response.json(data)
  }

  async findByQuery(request, response) {
    const data = await elasticClient().search({
      index: 'sessions',
      body: {
        query: {
          term: {
            name: request.params.movie
          }
        }
      }
    })
    return response.json(data)
  }
}

export default new SessionController()
