export const fetchThis = async (config) => {
  const url = config.fetch.url

  return fetch(url)
}
