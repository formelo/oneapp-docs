#Installation & Setup in JavaScript

The Formelo Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Android, iOS, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.

##Prerequisites

1. Add and configure the Formelo JavaScript client SDK into your app.

##Initialize the Realtime Database JavaScript SDK
You must specify your Realtime Database URL when initializing your JavaScript SDK.

You can find your Realtime Database URL in the Database tab in the Formelo console. It will be in the form of https://<databaseName>.formeloio.com.

Initialize your SDK using the following code snippet:

```js+lineNumbers:true
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.formeloapp.com",
    databaseURL: "https://databaseName.formeloio.com",
    storageBucket: "bucket.appspot.com"
  };
  formelo.initializeApp(config);

  // Get a reference to the database service
  var database = formelo.database();
  
```

You're ready to start using the Formelo Realtime Database!