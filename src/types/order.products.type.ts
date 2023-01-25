import Products from './products.types'

type OrderProducts = {
	id?: number
	quantity: number
	orderId: number
	productId: number
	products?: Products[]
}

export default OrderProducts
