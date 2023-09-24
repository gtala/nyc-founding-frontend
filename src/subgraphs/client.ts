import { cacheExchange, Client, fetchExchange } from '@urql/core'
import {identiyNextAPI} from './queries'

const GRAPH_URL = 'https://relation-service.next.id/'

export const graphClient = new Client({
  url: GRAPH_URL,
  exchanges: [cacheExchange, fetchExchange],
})

export const graphServiceRKey = () => {
  return {
    identityService: (platform: string, identity: string) => {
      return graphClient.query(identiyNextAPI(platform, identity), undefined).toPromise()
    },
  }
}