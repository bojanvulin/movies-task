import axios from 'axios'
import * as env from '../environment'

export const client = axios.create({
    baseURL: `${env.API_BASE_URL}`
})

client.interceptors.request.use((request) => {
    // TODO: Attach JWT
    return request
})
