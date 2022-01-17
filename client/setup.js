const { promisify } = require('util')
const { exec } = require('child_process')

const execAsync = promisify(exec)

async function setup() {
    console.info(`[Client] - Building the app...`)
    await execAsync(`yarn build`)

    console.info(`[Client] - Starting the app...`)
    await execAsync(`yarn start`)
}

setup()
