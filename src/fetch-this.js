import get from 'lodash.get'

export const fetchThis = async (config) => {
  const url = config.fetch.url

  return fetch(url)
}

export const getResult = async (response, config) => {
  const json = await response.json()

  if (!config.result) {
    return json
  }

  return get(json, config.result)
}
