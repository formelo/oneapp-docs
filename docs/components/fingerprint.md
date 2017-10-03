**Fingerprint**

Captures a fingerprint. This requires the use of an external bluetooth fingerprint reader.

Pass an "includeTemplate" option to the function call in order to alco sapture the template

**Usage**

```js+lineNumbers:true
    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            const options = {
                  includeTemplate : true
            }
            
            formelo().biometrics.getFingerprint(options).then((fingerprintData) => {
                 // fingerprintData is an object that contains the base64 image and an optional base64 template 
                 let image = imageData.image;
                 let template = imageData.template;
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

 ```js+lineNumbers:true
    getFingerprint(options)
 ```
 
| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| includeTemplate     | boolean | Indicate is the fingerprint device should also capture a template of the user's fingerprint |


