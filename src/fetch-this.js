const fetchThis = async (config) => {
  const url = config.url

  return fetch(url)
}

export default fetchThis
