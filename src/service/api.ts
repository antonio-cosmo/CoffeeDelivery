import { createServer, Model } from 'miragejs'
import { coffes } from './data'

export function mockApi() {
  createServer({
    models: {
      coffe: Model,
    },

    seeds(server) {
      server.db.loadData({
        coffes: [...coffes],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/coffes', () => {
        return this.schema.all('coffe')
      })

      this.get('/coffes/:id', (schema, resquest) => {
        const coffeID = resquest.params.id
        const coffeExist = schema.find('coffe', coffeID)

        if (coffeExist) return coffeExist
        return null
      })
    },
  })
}
