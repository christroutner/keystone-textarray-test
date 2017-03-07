# keystone-textarray-test
This repository contains a test script for validating the Keystone TextArray field. I had some difficulty
saving changes to a TextArray element, so I did some digging and found 
[Issue 3170](https://github.com/keystonejs/keystone/issues/3170), which described a very similar issue.


##Installation

This installation assumes that the test script will be served up by a newly installed, up-to-date
version of KeystoneJS. Follow these steps to install the test files:

1. Copy this code into `routes/index.js` to open up the test API.

```
app.get('/api/textarray/list', keystone.middleware.api, routes.api.textarray.list);
app.get('/api/textarray/:id', keystone.middleware.api, routes.api.textarray.get);
app.all('/api/textarray/:id/update', keystone.middleware.api, routes.api.textarray.update);
app.all('/api/textarray/create', keystone.middleware.api, routes.api.textarray.create);
app.get('/api/textarray/:id/remove', keystone.middleware.api, routes.api.textarray.remove);
```

2. Copy the `textarraymodel.js` file to the `models/` directory.

3. Copy `textarray.js` API handler file to the `routes/api/` directory.

4. Copy the `textarray-test1.html` and `textarray-test2.html` files to the `public/` directory.

5. Start up KeystoneJS and navigate to `/textarray-test1.html` or `/textarray-test2.html`
