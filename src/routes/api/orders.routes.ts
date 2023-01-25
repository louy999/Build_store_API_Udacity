import {Router, Request, Response} from 'express'
import OrdersModel from '../../model/orders.model'
const ordersModel = new OrdersModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const order = await ordersModel.create(req.body)
		res.json({
			status: 'success',
			data: {...order},
			message: 'Order created successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
