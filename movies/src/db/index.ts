import { connect } from 'mongoose'

type ConnectionOptions = {
    host: string
    port: number
    user: string
    pass: string
    name: string
}

export function connectToDb(options: ConnectionOptions) {
    return connect(formatConnectionUrl(options), {
        authSource: 'admin'
    })
}

function formatConnectionUrl(options: ConnectionOptions) {
    const { host, port, user, pass, name } = options
    return `mongodb://${user}:${pass}@${host}:${port}/${name}`
}
