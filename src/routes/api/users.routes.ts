import {Router, Request, Response} from 'express'

import UserModel from '../../model/users.model'
import jwt from 'jsonwebtoken'
import config from '../../config'
const userModel = new UserModel()

const routes = Router()

//create
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.create(req.body)
		res.json({
			status: 'success',
			data: {...user},
			message: 'user created ',
		})
	} catch (err) {
		next(err)
	}
})
//get all user
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.index()
		res.json({
			status: 'success',
			data: user,
			message: 'user created ',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.show(req.params.id as unknown as number)
		res.json({
			status: 'success',
			data: user,
			message: 'user created ',
		})
	} catch (err) {
		next(err)
	}
})
routes.post('/auth', async (req: Request, res: Response, next) => {
	try {
		const {firstName, password} = req.body
		const user = await userModel.authenticate(firstName, password)
		const token = jwt.sign({user}, config.tokenSecret as unknown as string)
		res.json({
			status: 'success',
			data: {...user, token},
			message: 'user created ',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
