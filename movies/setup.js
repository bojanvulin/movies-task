const { promisify } = require('util')
const { exec } = require('child_process')

const execAsync = promisify(exec)

setup()

async function setup() {
    console.info(`[Movies] - Building master docker image...`)
    await execAsync(`docker compose build`)

    console.info(`[Movies] - Starting all services...`)
    await execAsync(`docker-compose up -d`)
}
