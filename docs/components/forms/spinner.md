**Spinner Dialog**

Native storage of variables in Android and iOS

**Usage**

    (function(){
          formelo().spinnerDialog.show();
          
          formelo().spinnerDialog.hide();
    })()

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
                               



