# Webpack config for html, scss, js

## Overview
Use Webpack to configure the build of HTML, SCSS, and JS for each separate page.


## A typical top-level directory layout
```
.
├── config    // Contains config files (exp: webpack.config)
├── dist    // Contains Compiled files
│   ├── scripts
│   │   ├── home.js
│   │   └── document.js
│   └── styles
│   │   ├── home.css
│   │   └── document.css
└── src    // Source files
```

## Source folder

```
.
├── constants    // Constant, unchanged values (e.g. export const MINUTES_PER_HOUR = 60)
│   ├── index.js
│   └── document.js
├── global-styles    // Defined global styles used for all pages
│   ├── partials
│   │   ├── _index.scss
│   │   ├── _main.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   └── global.scss // Import all styles
├── pages    // Defining entry-point components for pages.
│   ├── page1
│   │   ├── components    // Define components of the page
│   │   │   ├── table
│   │   │   │   ├── styles
│   │   │   │   │   ├── _index.scss
│   │   │   │   │   └── _main.scss
│   │   │   │   ├── table.component.js
│   │   │   │   └── table.module.js
│   │   │   └── component-styles.scss
│   │   ├── styles    // Define styles of the page
│   │   │   ├── _index.scss
│   │   │   ├── _main.scss
│   │   │   └── _responsive.scss
│   │   ├── page1.module.js    // This is a root page file which initials of the page
│   │   ├── page1.page.js    // Define init, bindEvent, ... handle logic of the page
│   │   └── page1.page.scss    // Import all page styles.
│   ├── page2
│   └── ...n
├── services    // Define for logic that communicates with the server(s).
│   ├── base.service.js    // Basic API
│   ├── contact.service.js    // Define all API used for Contact which extends from base.service 
│   └── document.service.js
├── shared    // Share common components for all pages
│   ├── footer
│   │   ├── styles
│   │   │   ├── _index.scss
│   │   │   └── _main.scss
│   │   ├── footer.component.js
│   │   └── footer.module.js
│   ├── header
│   └── component-styles.scss    // Import all styles
└── test    // unit, intergration test
└── utils    // Utilities for universal logic that is not related to business logic or any technologies, e.g. string manipulations, mathematic calculations, etc.
    └── validate.js
```
