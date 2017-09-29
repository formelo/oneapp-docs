**Field MetaData**

Update a field's meta data

**Usage**

    (function(){
           formelo().updateMetaData(key, options);
    })();

**Instance Members**

    updateMetaData(key, options)
Update the meta values of a form field

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| key     | string | The field key to update |

    getItem(reference)
    
Gets a stored item

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| options     |  object |   |


**Options**
The available field options you can modify


| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| isValid     | boolean | Mark a field as valid or invalid |
| errorComment     | string | A comment to state the reason why a field is invalid. This comment will only be displayed for invalid fields |
| isRequired     | boolean | Mark a field as required or not. Only required fields are validated |

**Batch Field Update**
If you wish to update multiple fields with the same options call

    batchUpdateMetaData(keys, options)
    
| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| keys     | array | A list of field ketys to apply the batch updates to |
| options     | object | Parameters to update same as stated  |
    
