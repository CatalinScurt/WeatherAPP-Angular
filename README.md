## Mandatory for a running app:

- `[DONE]` Aplicația trebuie sa fie funcționala si să ruleze pe un localhost (node intregration, etc.)
- `[DONE]` Codul trebuie să fie încărcat si accesibil pe un GitHub/Bitbucket, pentru a îl putea clona și rula.
- `[DONE]` Aplicația trebuie legata la un Weather API, pentru a avea data reale in aplicație.(datele inițiale ar trebui să fie cu locația actuala)
- `[DONE]` Aplicația trebuie să fie responsive pentru Desktop cât și pentru Mobile.
- `[DONE]` Folosirea semantică a elementelor Web.

## Optional features done:

- `[DONE]` Aplicația ar trebui să permită utilizatorului să facă forecast pe mai multe zile/ore. (nu mai mult de 7 zile, si nu mai mult de 24 ore)
- `[DONE]` Aplicația ar trebui să permită vizualizarea mai multor orașe.
- `[DONE]` Aplicația ar trebui să permită adăugarea unor orașe ca Favorite.
- `[DONE]` Aplicația ar trebui să aibă mai multe Teme (themes/desings). (day, night, rain, etc.)

## To run this application:

You can access the following link to see the live version: https://weather-project-angular.web.app

- `OR...`

You cand clone this project and run the app locally, and to do this, you need to make the following steps:
- run: git clone https://github.com/CatalinScurt/WeatherAPP-Angular.git
- after the clone you need to run "npm install" on the root directory.
- after all dependencies were installed, you need to run "ng serve" to run the app on localhost.

## Functionality:

When you run the application for the first time, a message will appear on the top-left corner, and ask for your permission to access your location. 

![accept-location](https://user-images.githubusercontent.com/72908672/231210430-8142f2e2-3535-4cc3-ab7b-b9f5f5fd7287.jpg)

If you accept, you will be redirected to the landing page where you will see the weather for your current location. If you don't accept, you can click on the link from page content to go on the page with weather for the default location (this location is Cluj-Napoca).

The landing page looks like this: 

![landing-page-description](https://user-images.githubusercontent.com/72908672/231210821-790bc320-1166-460f-9d3a-846a5d275089.jpg)

- 1: Current city (or city that you are searching for)
- 2: Search button - by clicking in this area a popup will open where you can search for another location.
- 3: Heart icon - from there you can add the displayed city (from 1.) to the favorite list. If the city is already on this list, the heart will be red, and you can delete the city from the same icon.
- 4: Favorite city list. This list will appear only if you have at least one city as favorite. By clicking the button with city name you will be redirect on that city page.
- 5: Details button: by clicking this button you will be redirect on the page with 7 days hourly forecast.
- 6: 7 days forecast.

The page with hourly forecast looks like this:

![details-page](https://user-images.githubusercontent.com/72908672/231210901-6398d80c-c255-44e1-bdfe-5b863dca408b.jpg)

- 1: Current day hourly forecast.
- 2: A slider with hourly forecast for the next 7 days.

If you are looking for a non-existent city you will see something like this:

![404-page](https://user-images.githubusercontent.com/72908672/231211165-760563ee-f2c6-434b-a2f6-96a2d101afba.jpg)

By clicking the `Return to the homepage` button you will be redirect to the landing page.

For this project I implemented 8 types of themes: clear sky, cloudy, rain, snow, for both night and day.

- Down below you can see 4 different types of themes for day:

![day-themes](https://user-images.githubusercontent.com/72908672/231219191-295b4974-6221-4375-a445-bbd7c814dd19.jpg)

- And here you can see 4 different types of themes for night:

![night-themes](https://user-images.githubusercontent.com/72908672/231219228-ba451fab-4740-46a1-8005-552e6a12e54d.jpg)

# WeatherAPP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
