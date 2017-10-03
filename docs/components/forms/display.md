**Camera**

Set and Fetch data from a field

**Usage**
```js+lineNumbers:true
    (function(){
        var fieldKey = "last_name"
        var value = "Marley"
        formelo().set(fieldKey, value);
        
        var lastName = formelo().get(fieldKey);
        console.log(lastName); // Marley
    })()
```
**Instance Members**

    get
Fetches the value from a field

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| key     | string | The field key to fetch |

    set
Sets the value of a record

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| key     | string | The field key to update |
| value     | string | The updated value |


                               



