**Storage**

Native storage of variables in Android and iOS

**Usage**

    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
            formelo().storage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
              .then(
                () => console.log('Stored item!'),
                error => console.error('Error storing item', error)
              );
            
            formelo().storage.getItem('myitem')
              .then(
                data => console.log(data),
                error => console.error(error)
              );
        }
        
        render(){
            
        }
    }

**Instance Members**

    setItem(reference, value)
Stores a value

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| reference     | string |  |


Returns: Promise<any>

    getItem(reference)
Gets a stored item

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| reference     | string |  |


    keys()
Retrieving all keys

Returns: Promise<any>

    remove(reference)
Removes a single stored item

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| reference     | string |  |

    clear()
Removes all stored values.

Returns: Promise<any>
                               



