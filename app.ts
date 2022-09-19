import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors';
import logger from 'morgan';
import notesRouter from './routes/api/notes'
// import authRouter from './routes/api/auth'

const dotenv = require('dotenv');
dotenv.config()


const app: Express = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/notes', notesRouter)
// app.use('/api/auth', authRouter)

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Not found' })
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message })
})

export default app