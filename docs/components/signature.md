**Signature**

Captures a signature.

**Usage**
    
    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            const options = {
                  destinationType: formelo().camera.DestinationType.DATA_URL
            }
            formelo().biometrics.signature(options).then((signatureData) => {
                 // signatureData is either a base64 encoded string or a file URI
                 // If it's base64:
                 let base64Image = signatureData;
            })
            .then(()=>{
                // Handle error
            })
        }
        render(){
            
        }
    }


**Instance Members**

    signature()
Opens up a signature pad enabling the user to draw his signature

