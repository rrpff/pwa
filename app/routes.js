import RouteRecognizer from 'route-recognizer'
import getPage from './pages'
import manifest from './manifest'

const routes = new RouteRecognizer()

routes.add([{ path: '/', handler: { name: 'HomePage', get: (gqlClient, params) => getPage(gqlClient, manifest, 'HomePage', params) } }])
routes.add([{ path: '/posts/:slug', handler: { name: 'PostPage', get: (gqlClient, params) => getPage(gqlClient, manifest, 'PostPage', params) } }])

export default routes
