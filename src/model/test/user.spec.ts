import UserModel from '../user.model'
import db from '../../database'
import User from '../../types/user.type'

const userModel = new UserModel()

describe('User Model', () => {
	describe('Test methods exist', () => {
		it('should have an index method', () => {
			expect(userModel.index).toBeDefined()
		})

		it('should have a show method', () => {
			expect(userModel.show).toBeDefined()
		})

		it('should have a create method', () => {
			expect(userModel.create).toBeDefined()
		})

		it('should have an Authenticate method', () => {
			expect(userModel.authenticate).toBeDefined()
		})
	})

	describe('Test Model logic', () => {
		const user = {
			firstName: 'louy',
			lastName: 'hany',
			password: 'test123',
		} as User

		afterAll(async () => {
			const connection = await db.connect()
			const sql =
				'DELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;'
			await connection.query(sql)
			connection.release()
		})

		it('Create method should return a User', async () => {
			const createdUser = await userModel.create(user)
			expect(createdUser).toEqual({
				id: createdUser.id,
				firstName: 'louy',
				lastName: 'hany',
			} as User)
		})

		it('Index method should return All available users in DB', async () => {
			const users = await userModel.index()
			expect(users.length).toBe(1)
			expect(users[0].userName).toBe('testUser')
		})

		it('Show method should return testUser when called with ID (1)', async () => {
			const returnedUser = await userModel.show(1)
			expect(returnedUser.id).toBe(1)
			expect(returnedUser.firstName).toBe('louy')
			expect(returnedUser.lastName).toBe('hany')
		})

		it('Authenticate method should return the authenticated user', async () => {
			const authenticatedUser = await userModel.authenticate('louy', 'test123')
			if (authenticatedUser) {
				expect(authenticatedUser.firstName).toBe('louy')
				expect(authenticatedUser.lastName).toBe('hany')
			}
		})

		it('Authenticate method should return null for wrong credentials', async () => {
			const authenticatedUser = await userModel.authenticate('louy', 'fakeUser')
			expect(authenticatedUser).toBe(null)
		})
	})
})
