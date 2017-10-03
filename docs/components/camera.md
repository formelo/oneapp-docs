**Camera**

Take a photo or capture video.

**Usage**
```js+lineNumbers:true
    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            const options: CameraOptions = {
                  quality: 100,
                  destinationType: formelo().camera.DestinationType.DATA_URL,
                  encodingType: formelo().camera.EncodingType.JPEG,
                  mediaType: formelo().camera.MediaType.PICTURE
            }
            
            formelo().camera.getPicture(options).then((imageData) => {
                 // imageData is either a base64 encoded string or a file URI
                 // If it's base64:
                 let base64Image = 'data:image/jpeg;base64,' + imageData;
            })
            .then(()=>{
                // Handle error
            })
        }
        
        render(){
            
        }
    }
```
**Instance Members**

    DestinationType
Constant for possible destination types

    EncodingType
Convenience constant

    MediaType
Convenience constant

    PictureSourceType
Convenience constant

    Direction
Convenience constant

    getPicture(options)
Take a picture or video, or load one from the library.


| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| options     | object | Options that you want to pass to the camera. Encoding type, quality, etc |


**Camera Options**

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| quality     | number | Picture quality in range 0-100. Default is 50 |
| destinationType      | number      |  Choose the format of the return value. Defined in Camera.DestinationType. Default is FILE_URI. DATA_URL : 0, Return image as base64-encoded string, FILE_URI : 1, Return image file URI, NATIVE_URI : 2 Return image native URI (e.g., assets-library:// on iOS or content:// on Android) (optional) |
| sourceType | number      |  Set the source of the picture. Defined in Camera.PictureSourceType. Default is CAMERA. PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2 (optional) |
| allowEdit      | boolean      |  Allow simple editing of image before selection. (optional) |
| encodingType | number      |  Choose the returned image file's encoding. Defined in Camera.EncodingType. Default is JPEG JPEG : 0 Return JPEG encoded image PNG : 1 Return PNG encoded image (optional)|
| targetWidth | number      |  Width in pixels to scale image. Must be used with targetHeight. Aspect ratio remains constant. (optional)|
| targetHeight | number      |  Height in pixels to scale image. Must be used with targetWidth. Aspect ratio remains constant.(optional) |
| mediaType | number      |  Set the type of media to select from. Only works when PictureSourceType is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType PICTURE: 0 allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType VIDEO: 1 allow selection of video only, WILL ALWAYS RETURN FILE_URI ALLMEDIA : 2 allow selection from all media types (optional) |
| correctOrientation | number      |  Rotate the image to correct for the orientation of the device during capture. (optional) |
| saveToPhotoAlbum | boolean      |  Save the image to the photo album on the device after capture. (optional)  |
| cameraDirection | number      |  Choose the camera to use (front- or back-facing). Defined in Camera.Direction. Default is BACK. BACK: 0 FRONT: 1 (optional)|



                               



