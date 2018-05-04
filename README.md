# Moviedb UI

A frontend for `themoviedb.org` API.

## API Key

You should have the env var `API_KEY` set with your API Key. E.g.:

`API_KEY=xyz npm run dev`

## Installation & Usage

```sh
npm install # install deps
npm run dev # run webpack devserver and open app in browser
npm run build # build a standalone version of the app into 'build/'
npm run test # run tests
```

Please note currently the app was only tested on the latest version of Chrome.

## Todo

- Error handling:
  - inform user of errors
  - catch rejected promises
  - handle API errors
- Add more tests
  - unit
  - snapshot
- Code splitting
- Production ready
  - Extract styles into external stylesheet
  - Load some libraries from CDN as externals
- Browser support
  - Test on additional browsers
