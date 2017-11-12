class Manifest {
  constructor () {
    this.dependencyLookup = {}
    this.pageManifests = {}
  }

  register (name, retrieve) {
    this.dependencyLookup[name] = retrieve
  }

  page (pageName) {
    this.pageManifests[pageName] = new Manifest()
    return this.pageManifests[pageName]
  }

  has (name) {
    return this.dependencyLookup[name] !== undefined
  }

  retrieve (name, pageName) {
    if (this.pageManifests[pageName] && this.pageManifests[pageName].has(name)) {
      return this.pageManifests[pageName].retrieve(name)
    }

    const retriever = this.dependencyLookup[name]
    if (!retriever) throw new Error(`Cannot find dependency "${name}" for "${pageName}"`)

    return retriever()
  }
}

const manifest = new Manifest()

manifest.register('components/Sidebar', () => import('./components/Sidebar'))
manifest.page('WonderWomanPage').register('components/Sidebar', () => import('./components/FancySidebar'))

export default manifest
