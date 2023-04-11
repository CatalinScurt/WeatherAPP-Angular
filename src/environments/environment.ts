// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.weatherapi.com/v1/forecast.json?',
  apiKEY: 'b8728d0881cd4fa6acc53116230504',
  firebase: {
    projectId: 'weather-project-angular',
    appId: '1:197693476641:web:7fdba671ff695d14807860',
    storageBucket: 'weather-project-angular.appspot.com',
    apiKey: 'AIzaSyDGS5MIUlI9-F-MC0goU-UdGuMUadmF6NI',
    authDomain: 'weather-project-angular.firebaseapp.com',
    messagingSenderId: '197693476641',
    measurementId: 'G-S8ZEPEJMQ5',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
