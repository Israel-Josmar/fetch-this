# fetch-this
Make requests based on stored configuration

> :construction: This lib is under development. There is no stable version yet.

This tool allows you to express fetch requests as a json.
Some use cases:
- avoid repeating yourself by looping into a colection of fetchs to be performed
- make requests to endpoints that you will only know at runtime
- hide fetch details from code, loading the config at runtime

## Install
```
npm install fetch-this
```
## Roadmap

- [x] accept a config object to perform a GET request
- [ ] dynamic values
  - accept payload for interpolation
  - compile config object values as template passing the payload as template data
- [ ] add query params to the config, like `{ query: { a: 'b' } }`
- [ ] add method to the config, like `{ method: POST }` (GET by default)
- [ ] add form params to the config, like `{ form: { a: 'b' } }`
