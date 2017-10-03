**Picker**

Display an list for a user to choose

**Usage**
```js+lineNumbers:true
    (function(){
            var options = {
                name : 'Chose your preferred school'
            }
            var data = [
                {
                     title : 'London School of business',
                     description: 'London school, 10 park view, London',
                     image: 'https://unsplash.it/200/300',
                     floatingText : '7 hours ago
                     extra : {
                        meta : 'Extra information'
                     }
                 }
            ]
           formelo().picker(options, data)
            .then(selectedData => {
                
            })
            .catch()
           
    })()
```
**Instance Members**

    options


| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| name     | string | The question to ask the user  |
| multiple     | boolean | Allow users to select multiple items  | 


    data(reference)
The array of fields for tbe

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| title     | string | The title of the record |
| description     | string | 100 characters. Describe the field |
| image     | string | An image to show |
| floatingText     | string | 10 Characters. Extra text to show on the right |
| extra     | object | Extra information to pass to the record. It will be returned alongside the selected record  |


***The Response Object***

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| title     | string | The title of the record |
| description     | string | 100 characters. Describe the field |
| image     | string | An image to show |
| floatingText     | string | 10 Characters. Extra text to show on the right |
| extra     | object | Extra information to pass to the record. It will be returned alongside the selected record  |


