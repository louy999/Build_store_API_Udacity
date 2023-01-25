import {NextFunction, Request, Response, Router} from 'express'
import OrderProductModel from '../../model/order.products'

const routes = Router()
const orderProductModel = new OrderProductModel()

routes.post('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const orderProduct = await orderProductModel.create(req.body)
		res.json({
			status: 'success',
			data: {...orderProduct},
			message: 'Order Product created successfully',
		})
	} catch (err) {
		next(err)
	}
})
