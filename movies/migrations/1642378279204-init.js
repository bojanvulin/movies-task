require('dotenv').config()
const { connect } = require('mongoose')
const movies = require('./data/movies.json')
const series = require('./data/series.json')

const { MIGRATE_dbConnectionUri: dbUri } = process.env

async function up() {
    const { connection } = await connect(dbUri, {
        authSource: 'admin'
    })

    const { db } = connection
    const movieCollection = db.collection('movie')
    await movieCollection.createIndex(
        {
            'meta.search': 'text',
            title: 'text',
            cast: 'text',
            director: 'text',
            releaseDate: 'text'
        },
        {
            weights: {
                'meta.search': 20,
                title: 10,
                cast: 5,
                director: 2,
                releaseDate: 1
            }
        }
    )
    await movieCollection.insertMany([...movies, ...series])
}

async function down() {
    const { connection } = await connect(dbUri, {
        authSource: 'admin'
    })

    const { db } = connection

    await db.dropCollection('movie')
}

module.exports = { up, down }
