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

## Roadmap

- [x] accept a config object to perform a GET request
- [ ] add createFetch, same API as fetch, returns a fetch-this config
- [ ] add query params to the config, like `{ query: { a: 'b' } }`
- [ ] add method to the config, like `{ method: POST }` (GET by default)
- [ ] add form params to the config, like `{ form: { a: 'b' } }`
- [ ] add headers to the config, like ` headers: { 'X-Forwarded-For': 'proxy1' } `
