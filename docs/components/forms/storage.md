**Storage**

Native storage of variables in Android and iOS

**Usage**
```js+lineNumbers:true
    (function(){
           formelo().storage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
               .then(() => console.log('Stored item!'))
               ,catch(error => console.error('Error storing item', error))
                       
           formelo().storage.getItem('myitem')
               .then(() => console.log('Stored item!'))
               .catch(error => console.error('Error storing item', error))
    })()
```
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
                               



