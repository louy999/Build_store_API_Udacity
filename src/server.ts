//import tools from node
import express, {Request, Response, Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
//import files
import config from './config'
import errorHandelMiddleware from './middleware/error.handel.middleware'
import routes from './routes'
console.log(config)

const app: Application = express()
const port = config.port || 3000

app.use(morgan('common'))
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api', routes)

app.get('/test', (_req: Request, res: Response) => {
	res.json({
		message: 'hello',
	})
})
app.use(errorHandelMiddleware)
app.listen(port, () => {
	console.log(`server is start with port :${port}`)
})
