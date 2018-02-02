import nock from 'nock'

import { fetchThis, getResult } from './fetch-this'

const config = {
  fetch: {
    url: 'http://localhost/test',
  },
  result: 'nested.some.values[2]',
}

const mockResponse = { nested: { some: { values: [11, 13, 17] } } }

test('simple request', async () => {
  nock('http://localhost')
    .get('/test')
    .reply(200, mockResponse)

  const response = await fetchThis(config)
  const json = await response.json()

  expect(json).toEqual(mockResponse)
})

test('get proper result', async () => {
  nock('http://localhost')
    .get('/test')
    .reply(200, mockResponse)

  const response = await fetch('http://localhost/test')
  const value = await getResult(response, config)

  expect(value).toEqual(17)
})
