import {NextFunction, Request, Response, Router} from 'express'
import OrderProductModel from '../../model/order.products'

const routes = Router()
const orderProductModel = new OrderProductModel()

routes.get(
	'/:id/products',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const orderProducts = await orderProductModel.index(
				req.params.id as unknown as number
			)
			res.json({
				status: 'success',
				data: {orderProducts},
				message: 'Order Products retrieved successfully',
			})
		} catch (err) {
			next(err)
		}
	}
)
