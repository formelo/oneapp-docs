**Barcode Scanner**

The Barcode Scanner APi opens a camera view and automatically scans a barcode, returning the data back to you.

**Usage**  
   
    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            formelo().barcode.scan(options).then((barcodeData) => {
                  // Success! Barcode data is here
            })
            .then(()=>{
                // An error occurred
            })
        }
        
        render(){
            
        }
    }




