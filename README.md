# ✧٩(•́⌄•́๑) Angular + Sanity.io

This project:

- is a pre-rendered Angular site template using [Angular Universal](https://hubs.ly/H0GZjNC0)
- uses [Sanity.io](https://www.sanity.io/) as the project's headless CMS
- creates a [Netlify Function](https://hubs.ly/H0GZjFn0) to grab data from Sanity.io
- sets up Angular components and a service to use and display the Sanity data

With this project you can also:

- set up CI/CD to [Netlify's Edge](https://hubs.ly/H0GZjRD0)
- build out the site as soon as there is new data entered into Sanity.io

I explain that all in [this blog post](coming soon!).

## Setup

To skip all this you could also just click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/serverless-stripe&utm_source=blog&utm_medium=serverless-stripe-tzm&utm_campaign=devex)

### Local Setup

**Sanity.io Backend**

- in `/backend` run `sanity start`
- head to [`http://localhost:3333/`](http://localhost:3333/)

**Angular + Netlify Parts**

- click the 'Use this template' or clone locally with 'git clone https://github.com/tzmanics/serverless-stripe`
- install with `npm i`
- install the [Netlify CLI](https://hubs.ly/H0GZjQN0) globally `npm i netlify-cli -g`
- run `netlify init` to connect to your Netlify account & `ntl open` to go to the project dashboard
- add your Sanity.io env vars via Site Settings/Build & Deploy/Environment/'Edit variables'
  - `SANITY_DATASET`
  - `SANITY_PROJECT_ID`
  - `SANITY_TOKEN`
- run `netlify dev` to start a local instance connecting to your functions and env vars that can be seen at [`http://localhost:8888/`](http://localhost:8888/)

### Productions Setup

**Sanity.io Backend**

- in `/backend` run `sanity deploy` to initially deploy and deploy changes to your Sanity.io instance

**Angular + Netlify Parts**

- install the Netlify CLI `npm i netlify-cli -g`
- run `netlify init` to setup the project on Netlify & deploy it! (the [/netlify.toml](/netlify.toml) file has the information Netlify needs to deploy your app)
- hooking the project up to Netlify will automatically set up CI/CD so every commit push will deploy the site as well as give [deployment preview](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/)
- run `netlify open` to open the project dashboard, under the 'Functions' tab you can find the endpoint for your function as well as see all the logs.

## The pieces

- this project has a skeleton for a starter Commerce application that can be used as an app shell that can pre-rendered and then hydrated with [Netlify Function](https://www.netlify.com/products/functions/?utm_source=repo&utm_medium=au-prerender-tzm&utm_campaign=devex).
- there are also files added to implement [Angular Universal](https://angular.io/guide/universal) so even though we are only using the pre-render functionalities of AU you are set up to take advantage of the whole SSR technology
- the only other additional file is the [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=repo&utm_medium=au-prerender-tzm&utm_campaign=devex) which tells Netlify how and what to deploy to the CDN :)

# Angular CLI Infos

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
