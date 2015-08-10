#Three Hearts Farm

This is the start of a project to build a website for an organic farm.  The site has a couple of static splash pages, a blog, and a store to help reduce ordering problems for the client.  It will also have admin pannels for managing the store and the blog.  The project is built with [Node.js](https://nodejs.org/), [React](http://facebook.github.io/react/), [React Router](http://rackt.github.io/react-router/), [Gulp](http://gulpjs.com/), [WebdriverIO](http://webdriver.io/)(for testing), [Material-UI](http://material-ui.com/#/), [Reflux](https://github.com/reflux/refluxjs), and  [Firebase](https://www.firebase.com/).  Thanks to [echenley](https://github.com/echenley/react-news) with his great react-news repo which was a huge help.  

To run just:
```bash
npm install
gulp
```

To run tests:
```bash
gulp test
```

##Folder Structure

```
config/
  config.js
dist/
  assets
    images/
    main.js
    index.html
    style.css
src/
  components/
    svgIcons/
  pages/
    static/
  sass/
  stores/
  utils/
    staticAssets/
    styles/
      components/
        svgIcons/
      pages/
        static/
      styles.jsx
    utl.jsx
  actions.jsx
  app.jsx
  main.jsx
  routes.jsx
test/
  components/
    svgIcons/
  pages/
    static/
  config.js
.gitigonre
gulpfile.js
package.json
README.md
```
####Gulpfile
Contains all gulp commands:
```bash
gulp serve - runs the server
gulp bulid - builds main.js from .jsx files in the src directory.  App entry point is app.jsx -> routes.jsx -> main.jsx
gulp sass - builds style.css from .scss files in the sass directory
gulp watch - watches for changes in .jsx and .scss files
gulp test - runs test server and associated selenium tests in the test directory
gulp create --component <componentName> - Creates new component with boilerplate and associated test and styles file
            --svgIcon <svgIconName> -  Creates new svgIcon with boilerplate and associated test and styles file
            --page <pageName> -  Creates new page with boilerplate and associated test and styles file
            --static <staticPageName> -  Creates new staticPage with boilerplate and associated test and styles file
            --store <storeName> -  Creates new store with boilerplate
```
####App Entry Point
```
app.jsx -> routes.jsx -> main.jsx
```
Note: Routing tree for application is in routes.jsx.  Also all associated react-router set-up

####React Component Storage
'Pages' are stored in the <code>src/pages/</code> directory.  They are top level components made up of 'components' <code>src/components</code> and 'svgIcons' <code>src/components/svgIcons</code>.  'Static Pages' are held in <code>src/pages/static/</code> and the associated text is stored in <code>src/utils/staticAssets/</code>

####<code>src/utils/utl.jsx</code>
Holds constants, text, themes, and other assorted information like name constants and employee information

####<code>src/uitls/styles/styles.jsx</code>
Holds all style objects to modify default styles in Material-UI components.  Organized as a mirror of the component storage to reduce confusion.

####<code>test/</code>
Holds all test files.  One per component.  Organized in a mirror of the component storage to reduce confusion.

####Run App in Docker container
First pull app to local folder and run <code>npm install</code>.
If running on an OSx machine, have boot2docker installed then:
```bash
docker build -t <username>/<repo-name>:<tag> .
docker run -d -p 8000:8000 --name three-hearts-farm <username>:<repo-name>:<tag>
```
