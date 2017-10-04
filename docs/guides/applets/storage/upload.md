#Upload Files on Web

Cloud Storage allows developers to quickly and easily upload files to a Google Cloud Storage bucket provided and managed by Formelo.

Since the default Google App Engine app and Formelo share this bucket, configuring public access may make newly uploaded App Engine files publicly accessible as well. Be sure to restrict access to your Storage bucket again when you set up authentication.

##Upload Files

To upload a file to Cloud Storage, you first create a reference to the full path of the file, including the file name.

``` js+lineNumbers:true
// Create a root reference
var storageRef = formelo.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false
```

###Upload from a Blob or File

Once you've created an appropriate reference, you then call the put() method. put() takes files via the JavaScript File and Blob APIs and uploads them to Cloud Storage.

``` js+lineNumbers:true
var file = ... // use the Blob or File API
ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
```

###Upload from a String
If a Blob, File, or Uint8Array isn't available, you can use the putString() method to upload a raw, base64, base64url, or data_url encoded string to Cloud Storage.

``` js+lineNumbers:true
// Raw string is the default if no format is provided
var message = 'This is my message.';
ref.putString(message).then(function(snapshot) {
  console.log('Uploaded a raw string!');
});

// Base64 formatted string
var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'base64').then(function(snapshot) {
  console.log('Uploaded a base64 string!');
});

// Base64url formatted string
var message = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'base64url').then(function(snapshot) {
  console.log('Uploaded a base64url string!');
});

// Data URL string
var message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
});
```

```put()``` and ```putString()``` both return an UploadTask which you can use as a promise, or use to manage and monitor the status of the upload.

Since the reference defines the full path to the file, make sure that you are uploading to a non-empty path.

##Add File Metadata

When uploading a file, you can also specify metadata for that file. This metadata contains typical file metadata properties such as name, size, and contentType (commonly referred to as MIME type). Cloud Storage automatically infers the content type from the file extension where the file is stored on disk, but if you specify a contentType in the metadata it will override the auto-detected type. If no contentType metadata is specified and the file doesn't have a file extension, Cloud Storage defaults to the type application/octet-stream. More information on file metadata can be found in the Use File Metadata section.

``` js+lineNumbers:true
// Create file metadata including the content type
var metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
var uploadTask = storageRef.child('images/mountains.jpg').put(file, metadata);
```

##Error Handling

There are a number of reasons why errors may occur on upload, including the local file not existing, or the user not having permission to upload the desired file. More information on errors can be found in the Handle Errors section of the docs.

``` js+lineNumbers:true
// File or Blob named mountains.jpg
var file = ...

// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(formelo.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case formelo.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case formelo.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://formelo.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    ...

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  var downloadURL = uploadTask.snapshot.downloadURL;
});
```

