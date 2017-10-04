#Get Started on Web

Cloud Storage for Formelo lets you upload and share user generated content, such as images and video, which allows you to build rich media content into your apps. Your data is stored in a Google Cloud Storage bucket, an exabyte scale object storage solution with high availability and global redundancy. Cloud Storage lets you securely upload these files directly from mobile devices and web browsers, handling spotty networks with ease.

##Set up Cloud Storage

You must add your bucket to your Formelo SDK configuration.

You'll need your Storage Bucket URL from the Formelo console Storage page, under the FILES tab, in the header of the file viewer. Then add the storageBucket attribute to your config Object:

```
 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
  formelo.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = formelo.storage();
```

