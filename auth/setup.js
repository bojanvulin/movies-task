const { promisify } = require('util')
const { exec } = require('child_process')

const execAsync = promisify(exec)

setup()

async function setup() {
    console.info(`[Auth] - Starting all services...`)
    execAsync(`docker-compose up -d`)
}
