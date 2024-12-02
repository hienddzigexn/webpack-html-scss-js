### webpack-html-scss-js
============================

### SRC Folder Structure

```
.
├── constants  // Contains images, logos,...
│   ├── index.js
│   └── document.js
├── global-styles
│   ├── partials
│   │   ├── _index.scss
│   │   └── _main.scss
│   └── global.scss
├── pages
│   ├── page1
│   │   ├── components
│   │   │   ├── table
│   │   │   │   ├── styles
│   │   │   │   │   ├── _index.scss
│   │   │   │   │   └── _main.scss
│   │   │   │   ├── table.component.js
│   │   │   │   └── table.module.js
│   │   │   └── component-styles.scss
│   │   ├── styles
│   │   │   ├── _index.scss
│   │   │   ├── _main.scss
│   │   │   └── _responsive.scss
│   │   ├── page1.module.js
│   │   ├── page1.page.js
│   │   └── page1.page.scss
│   ├── page2
│   └── ...n
├── services
│   ├── base.service.js
│   ├── contact.service.js
│   └── document.service.js
├── shared
│   ├── footer
│   │   ├── styles
│   │   │   ├── _index.scss
│   │   │   └── _main.scss
│   │   ├── footer.component.js
│   │   └── footer.module.js
│   ├── header
│   └── component-styles.scss
└── utils
    └── validate.js
```
