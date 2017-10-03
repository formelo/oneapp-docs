**Components**

Formelo exposes API that make adding any native functionality you need to your Hybrid mobile app easy.

**Promises**

Formelo API callbacks returns Promise.

```js+lineNumbers:true
    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            formelo().getUserProfile()
                .then(userprofile)
                .catch()
        }
        handleError(e){
            console.log(e);
        }
        render(){
            
        }
    }

```


