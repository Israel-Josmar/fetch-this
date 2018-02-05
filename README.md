# fetch-this
Make requests based on stored configuration

> :construction: This lib is under development. Expect breaking changes until 1.0.

This tool allows you to express fetch requests as a json.
Some use cases:
- avoid repeating yourself by looping into a collection of "fetches to be performed"
- make requests to endpoints that you will only know at runtime
- hide fetch details from code, loading it's details at runtime

## Install
```
npm install fetch-this
```

## Usage
Let's assume:
```bash
$ curl http://localhost:9876/test
{"nested":{"some":{"values":[11,13,17]}}}
```
So, we can do:
```javascript
import {
  fetchThis,
  getResult,
} from 'fetch-this'

// `fetchThis()` returns a fetch()` response promise, you can just use it as you wish
const fetchConfig = {
  url: 'http://localhost/test',
}
const response = await fetchThis(fetchConfig, payload)

// or you can use `getResult()` for a promise to the value you really want
const result = 'nested.some.values[2]'
const value = await getResult(response, result)

console.log(value) // 17
```

## Roadmap

- [x] accept a config object to perform a GET request
- [x] add `getResult()` that maps a response promise to a single value inside it
- [ ] add createFetch, same API as fetch, returns a fetch-this config
- [ ] add query params to the config, like `{ query: { a: 'b' } }`
- [ ] add method to the config, like `{ method: POST }` (GET by default)
- [ ] add form params to the config, like `{ form: { a: 'b' } }`
- [ ] add headers to the config, like ` headers: { 'X-Forwarded-For': 'proxy1' } `
