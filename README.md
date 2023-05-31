# Frontend Technical Assessment

A horse listing and viewing dashboard application.

### System Requirements
- Node 12
- Yarn

### Setup
#### Install dependencies
```bash
yarn install
```

#### Start the server
```bash
yarn serve
```

The project is now running at `http://localhost:8090`

#### Run tests
```bash
yarn test:unit
```

## Architecture

The architecture of this application is intentionally meant to mimic the Brrng studio.
We use Vue as our framework, SCSS for our css and Typescript as our main Javascript superset.
Vuex is what we use for state management and logic execution.

### Directory structure [src]

    src
    ├── assets                # Assets
    ├── components            # Re-usable features
    ├── pages                 # Application pages
    ├── router                # Page Routing
    ├── services              # External integrations [http, firebase]
    ├── store                 # Vuex store and abstraction library
    ├── utils                 # Mixins, Filters & utility functions
    ├── main.ts               # Main Logic entryp[oint
    └── App.vue               # Application entrypint


## Designs

[![Horse Listing](design/Interview%20-%20Feature.png "Horse Listing")](design/Interview%20-%20Feature.png)

[![Horse View](design/Interview%20-%20Feature%20–%20View.png "Horse view")](design/Interview%20-%20Feature%20–%20View.png)

