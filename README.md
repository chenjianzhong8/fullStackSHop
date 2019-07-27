# CAS FEE PROJEKT 2 : SPA Shop Front End Implementation

## Installation

### Clone repository

```bash
git clone git@github.com:chenjianzhong8/fullStackSHop.git
```

### Install Angular-Cli globally

```bash
npm install -g @angular/cli
```

### Install NPM packages

```bash
cd Angular-6-Demo-Shop
npm install
```

### Run development server

```bash
ng serve
```

Runs a webpack-development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Run unit tests

```bash
ng test
```

Executes the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

```bash
ng e2e
```

Executes the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Build app for prod

```bash
ng build --prod --build-optimizer
```

This builds the app for prod environment into a /dist folder. Uses the Angular-AOT-mode to precompile the the app. This reduces the app-footstep (compiler is around 1/3 of bundle).

## Background

The initial idea for this project was to implement a SPA based shop frontend which can be coupled to existing shop backends via REST API. The performance of a SPA application would be very nice to make the shopping process for users as fluid as possible. Imagine adding items to the cart, browsing and filtering products, typeahead search, updating your favorites/wish list - all handled by the front end application.

Although this would have been cool, it's most likely a bit out of scope to provide all the API mappings for different shops like Shopify, Woocommerce, PrestaShop, Magento and the likes.

So we decided to implement basic shop functionality for now and base the project target more around finding conclusions for challenges we will face during the process.
