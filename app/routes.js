import RouteRecognizer from 'route-recognizer'
import getPage from './pages'

const routes = new RouteRecognizer()

routes.add([{ path: '/', handler: { name: 'HomePage', get: () => getPage('HomePage') } }])
routes.add([{ path: '/batman', handler: { name: 'BatmanPage', get: () => getPage('BatmanPage') } }])
routes.add([{ path: '/superman', handler: { name: 'SupermanPage', get: () => getPage('SupermanPage') } }])
routes.add([{ path: '/wonderwoman', handler: { name: 'WonderWomanPage', get: () => getPage('WonderWomanPage') } }])

export default routes
