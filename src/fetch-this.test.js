import nock from 'nock'

import { fetchThis } from './fetch-this'

const config = {
  url: 'http://localhost/test',
}

const mockResponse = { nested: { result: 111 } }

test('simple request', async () => {
  nock('http://localhost')
    .get('/test')
    .reply(200, mockResponse)

  const response = await fetchThis(config)
  const json = await response.json()

  expect(json).toEqual(mockResponse)
})
