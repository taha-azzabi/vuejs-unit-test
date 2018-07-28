# Test VueJs with Mocha, Karma and Chai

> Karma: is a test runner
Mocka: is a testing framework for JavaScript.
Chai : is an assertion library which can be used with Mocha
1. `describe()` is merely for grouping, which you can nest as deep - test suite
2. `it()` is a test case
3. Render HTML in memory(the HTML gets built and the variables in our template) ex:
 `const ListComponent = new Constructor().$mount();`


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
