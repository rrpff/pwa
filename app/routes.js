import RouteRecognizer from 'route-recognizer'
import getPage from './pages'
import manifest from './manifest'

const routes = new RouteRecognizer()

routes.add([{ path: '/', handler: { name: 'HomePage', get: () => getPage(manifest, 'HomePage') } }])
routes.add([{ path: '/batman', handler: { name: 'BatmanPage', get: () => getPage(manifest, 'BatmanPage') } }])
routes.add([{ path: '/superman', handler: { name: 'SupermanPage', get: () => getPage(manifest, 'SupermanPage') } }])
routes.add([{ path: '/wonderwoman', handler: { name: 'WonderWomanPage', get: () => getPage(manifest, 'WonderWomanPage') } }])

export default routes
