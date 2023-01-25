import db from '../database'
import Products from '../types/products.types'

class ProductsModel {
	// create
	async create(p: Products): Promise<Products> {
		try {
			const connect = await db.connect()
			const sql =
				'INSERT INTO products (name, price, category) values ($1, $2, $3) RETURNING *'
			const result = await connect.query(sql, [p.name, p.price, p.category])
			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error('${err}')
		}
	}
	// show
	async show(id: number): Promise<Products> {
		try {
			const sql = 'SELECT * FROM products WHERE id=($1)'

			const connect = await db.connect()

			const result = await connect.query(sql, [id])

			connect.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	// index
	async index(): Promise<Products[]> {
		try {
			const sql = 'SELECT * FROM products '

			const connect = await db.connect()

			const result = await connect.query(sql)

			connect.release()
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}

export default ProductsModel
