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
    },
  })
}
