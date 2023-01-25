import OrderProducts from '../types/order.products.type'
import db from '../database'

class OrderProductModel {
	async create(op: OrderProducts): Promise<OrderProducts> {
		try {
			const connect = await db.connect()
			const sql =
				'INSERT INTO order_products (quantity, order_id, product_id) values ($1, $2, $3) RETURNING *'
			const result = await connect.query(sql, [
				op.quantity,
				op.orderId,
				op.productId,
			])

			connect.release()

			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}

export default OrderProductModel
