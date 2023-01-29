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
			message: 'user created successfully',
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
			message: 'users retrieved successfully',
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
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.post('/auth', async (req: Request, res: Response, next) => {
	try {
		const {first_name, password} = req.body
		const user = await userModel.authenticate(first_name, password)
		const token = jwt.sign({user}, config.tokenSecret as unknown as string)
		res.json({
			status: 'success',
			data: {...user, token},
			message: 'user authenticated successfully ',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
