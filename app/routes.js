import RouteRecognizer from 'route-recognizer'
import getPage from './pages'
import manifest from './manifest'

const routes = new RouteRecognizer()

routes.add([{ path: '/', handler: { name: 'HomePage', get: (gqlClient) => getPage(gqlClient, manifest, 'HomePage') } }])
routes.add([{ path: '/batman', handler: { name: 'BatmanPage', get: (gqlClient) => getPage(gqlClient, manifest, 'BatmanPage') } }])
routes.add([{ path: '/superman', handler: { name: 'SupermanPage', get: (gqlClient) => getPage(gqlClient, manifest, 'SupermanPage') } }])
routes.add([{ path: '/wonder-woman', handler: { name: 'WonderWomanPage', get: (gqlClient) => getPage(gqlClient, manifest, 'WonderWomanPage') } }])

export default routes
