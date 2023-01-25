import {Router} from 'express'
import usersRoutes from './api/users.routes'
import productsRoutes from './api/products.routes'
import orderRoutes from './api/orders.routes'

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/products', productsRoutes)
routes.use('/orders', orderRoutes)
export default routes
