const invertHash = (hash) =>
  Object.keys(hash).reduce((acc, key) => Object.assign({}, acc, { [hash[key]]: key }), {})

export default function getPage (gqlClient, manifest, pageName, params) {
  return import(`./${pageName}`)
    .then(mod => mod.default)
    .then(component => {
      const invertedHash = invertHash(component.dependencies)
      const dependencyManifestNames = Object.keys(invertedHash)
      const retrieveDependencies = Promise.all(dependencyManifestNames.map(name => manifest.retrieve(name, pageName)))

      return retrieveDependencies.then(dependencyModules => {
        const dependencyArray = dependencyModules.map(mod => mod.default)
        const dependencies = dependencyManifestNames.reduce((acc, dependencyName, index) => {
          return Object.assign({}, acc, { [invertedHash[dependencyName]]: dependencyArray[index] })
        }, {})

        return { component, dependencies }
      }).then(({ component, dependencies }) => {
        if (!component.query) return { component, dependencies, data: {} }
        return component.query(gqlClient, params).then(({ data }) => {
          return { component, dependencies, data }
        })
      })
    })
}
