import OrderProducts from '../types/order.products.type'
import db from '../database'

class OrderProductModel {
	async index(orderId: number): Promise<OrderProducts[]> {
		try {
			const connect = await db.connect()
			const sql =
				"SELECT o.id AS id, op.order_id, op.product_id, JSON_AGG(JSONB_BUILD_OBJECT('productId', p.id, 'name', p.name,'category', p.category, 'price', p.price, 'quantity', op.quantity)) AS products FROM orders AS o LEFT JOIN order_products AS op ON o.id = op.order_id LEFT JOIN products AS p ON op.product_id = p.id WHERE o.id=$1 GROUP BY o.id, op.order_id, op.product_id"
			const result = await connect.query(sql, [orderId])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(
				`Error at retrieving products in order: ${orderId} ${err.message}`
			)
		}
	}
}

export default OrderProductModel
