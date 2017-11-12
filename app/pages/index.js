export default function getPage (pageName) {
  return import(`./${pageName}`).then(module => module.default)
}
