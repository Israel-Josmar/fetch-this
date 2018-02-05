import get from 'lodash.get'

export const fetchThis = async (fetchConfig) => {
  const url = fetchConfig.url

  return fetch(url)
}

export const getResult = async (response, resultConfig) => {
  const json = await response.json()

  if (!resultConfig) {
    return json
  }

  return get(json, resultConfig)
}
