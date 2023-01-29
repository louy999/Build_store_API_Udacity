import {Router, Request, Response} from 'express'
import ProductsModel from '../../model/products.model'
const productsModel = new ProductsModel()

const routes = Router()

//create
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const product = await productsModel.create(req.body)
		res.json({
			status: 'success',
			data: {...product},
			message: 'Product created successfully ',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const product = await productsModel.show(req.params.id as unknown as number)
		res.json({
			status: 'success',
			data: {product},
			message: 'Product retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const product = await productsModel.index()
		res.json({
			status: 'success',
			data: {product},
			message: 'Products retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
