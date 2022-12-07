import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = 8800

const connect = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error
    }
}

app.get('/', (req, res) => {
    res.status(200).send({ message: 'initial route' })
})

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected')
})

app.listen(port, () => {
    connect()
    console.log(`App running on ${port}`)
})

