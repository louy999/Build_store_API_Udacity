import db from '../database'
import User from '../types/user.types'
import bcrypt from 'bcrypt'
import config from '../config'
import jsonwebtoken from 'jsonwebtoken'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

class UserModel {
	//create user
	//create
	async create(u: User): Promise<User> {
		try {
			//open connection with DB
			const connect = await db.connect()
			const sql =
				'INSERT INTO users ( first_name, last_name, password) values ($1, $2, $3) returning id, first_name, last_name'
			//run query
			const result = await connect.query(sql, [
				u.first_name,
				u.last_name,
				hashPassword(u.password),
			])
			//release connection
			connect.release()
			//return created user
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get all users
	async index(): Promise<User[]> {
		try {
			//open connection with DB
			const connect = await db.connect()
			const sql = `SELECT * from users`
			//run query
			const result = await connect.query(sql)
			//release connection
			connect.release()
			//return created user
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get one users
	async show(id): Promise<User> {
		try {
			const sql = 'SELECT * FROM users WHERE id=($1)'

			const connection = await db.connect()

			const result = await connection.query(sql, [id])

			connection.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//authenticate user
	async authenticate(firstName, password): Promise<User | null | undefined> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM users WHERE first_name=$1`
			const result = await connect.query(sql, [firstName])
			if (result.rows.length) {
				const {password: hashedPassword} = result.rows[0]
				bcrypt.compareSync(`${password}${config.pepper}`, hashedPassword)
				const isPass = (password = result.rows[0])
				if (isPass) {
					const userInfo = await connect.query(
						`SELECT	 id,  first_name, last_name FROM users WHERE first_name=($1)`,
						[firstName]
					)

					return userInfo.rows[0]
					connect.release()
					return null
				}
			}
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
export default UserModel
