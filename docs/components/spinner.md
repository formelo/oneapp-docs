**Profile**

The profile API provides your app to be able to get the information of the currently logged in Formelo user


**Usage**

    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            formelo().profile.getUserProfile(options)
              .then(() => console.log('Stored item!'));
              .catch(() => {
                    // user declined to share details
              }) 
        }
        
        render(){
            
        }
    }

**Instance Members**

    getUserProfile(options)

Returns: Promise<any>
