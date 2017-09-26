**Camera**

Take a photo or capture video.

    
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




