# Microfrontend Application

A microfrontend application built using Module Federation with multiple independent applications working together.

## Project Structure 

```
.
├── auth/               # Authentication application
├── container/          # Main host application
├── dashboard/          # Analytics dashboard (Vue.js)
└── marketing/          # Marketing pages and content
```

## Applications

- **Container**: Main application shell that hosts other microfrontends
- **Marketing**: Marketing pages including landing page and pricing
- **Auth**: Authentication module (in development)
- **Dashboard**: Analytics dashboard built with Vue.js

## Technologies Used

- React.js
- Vue.js (Dashboard)
- Webpack 5 Module Federation
- Material-UI
- PrimeVue (Dashboard)
- Babel
- React Router

## Getting Started

1. Install dependencies in each application: 
```bash
cd container && npm install
cd ../marketing && npm install
cd ../auth && npm install
cd ../dashboard && npm install
```

2. Start the development servers: 
```bash
# Start container
cd container
npm start

# Start marketing
cd ../marketing
npm start

# Start auth
cd ../auth
npm start

# Start dashboard
cd ../dashboard
npm start
```

3. Access the application in your browser: 
- Container: http://localhost:8080
- Marketing: http://localhost:8081
- Auth: http://localhost:8082
- Dashboard: http://localhost:8083

## Development

Each application can be developed independently or as part of the whole system. The container application coordinates all microfrontends and handles routing between them.

### Module Federation

The project uses Webpack 5's Module Federation to share code between applications. Each microfrontend exposes its components through a `remoteEntry.js` file.

### Styling

- React applications use Material-UI with isolated styles using StylesProvider
- Dashboard uses PrimeVue components with SASS

## Building for Production

Each application can be built independently:

```bash
npm run build
```
