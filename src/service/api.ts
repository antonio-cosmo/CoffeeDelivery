import { createServer, Model } from 'miragejs'
import { coffees } from './data'

export function mockApi() {
  createServer({
    models: {
      coffee: Model,
    },

    seeds(server) {
      server.db.loadData({
        coffees: [...coffees],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/coffees', () => {
        return this.schema.all('coffee')
      })

      this.get('/coffees/:id', (schema, resquest) => {
        const coffeeID = resquest.params.id
        const coffeeExist = schema.find('coffee', coffeeID)

        if (coffeeExist) return coffeeExist
        return null
      })

      this.passthrough('https://viacep.com.br/ws/**')
    },
  })
}
