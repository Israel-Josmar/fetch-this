import nock from 'nock'

import fetchThis from './fetch-this'

test('simple request', async () => {
  const config = {
    url: 'http://localhost/test',
  }

  const mockResponse = { nested: { result: 111 } }

  nock('http://localhost')
    .get('/test')
    .reply(200, mockResponse)

  const response = await fetchThis(config)
  const json = await response.json()

  expect(json).toEqual(mockResponse)
})

test('passing payload for interpolation', async () => {
  const config = {
    url: 'http://localhost/{{path}}',
  }

  const payload = {
    path: 'test',
  }

  const mockResponse = { nested: { result: 111 } }

  nock('http://localhost')
    .get('/test')
    .reply(200, mockResponse)

  const response = await fetchThis(config, payload)
  const json = await response.json()

  expect(json).toEqual(mockResponse)
})
