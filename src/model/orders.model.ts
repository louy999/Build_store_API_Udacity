import db from '../database'
import Orders from '../types/orders.type'

class OrdersModel {
	// create

	async create(o: Orders): Promise<Orders> {
		try {
			const connection = await db.connect()
			const sql =
				'INSERT INTO orders (user_id, status) values ($1, $2) RETURNING *'

			const result = await connection.query(sql, [o.userId, o.status])

			const order = result.rows[0]

			connection.release()

			return {
				id: order.id,
				status: order.status,
				userId: +order.user_id,
			}
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}
export default OrdersModel
