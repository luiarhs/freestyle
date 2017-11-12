// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCLrUtdDc5XwJF9df7d1BfMo1yUpbD44UY',
    authDomain: 'angularfbapp.firebaseapp.com',
    databaseURL: 'https://angularfbapp.firebaseio.com',
    projectId: 'angularfbapp',
    storageBucket: 'angularfbapp.appspot.com',
    messagingSenderId: '445050979182'
  }
};
