import Handlebars from 'handlebars'

const fetchThis = async ({ url = '' }, payload) => {
  const _url = Handlebars.compile(url)(payload)

  return fetch(_url)
}

export default fetchThis
