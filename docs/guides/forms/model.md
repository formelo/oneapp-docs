#Introduction

This is the basis of every Formelo Form Applet. It contains the structure/content of the Form Applet and is stored in the database, where it could be accessed from during the creation of a Form Applet. A Formelo Model is composed of several attributes, these attributes are the properties of the model that define its function/purpose or content. Hence it is necessary to create these attributes in line with the purpose of the Model. Below are very easy steps involved in editing a Model's attributes.

##Creating a Model

Log into the Formelo Private Realm using your company credentials, then follow these easy steps to create your Formelo Model

###Step 1:
Click on **Setup** > **Databases** > **Models**

###Step 2:
The newly displayed page contains a list of all your Models.
    
    Note: If no model has been created in the past, this list will be empty

Click on New+ at the top right corner of the page, then fill the fields on the newly displayed page with the required information. These fields include:

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| Name     | string | This is the name of the model to be created. It could be the name of your company |
| Description     | string | This gives a brief description of the model |
| Unique reference code     | string | This Serves as a Pointer to your model like a key sort of. Therefore it is necessary that it is meaningful and unique to the model. |

Then click on the **Save** button.

You can create as many Models as you want. To create more Models repeat the process from step 1

##Creating a Model Attribute

Every Model contains Attributes, these are the properties of the model that define its function/purpose or content. Hence it is necessary to create these attributes in line with the purpose of the Model. Below are very easy steps involved in creating a Model's Attributes.

###Step 1:

####Adding a Model Attribute:
On the list containing your Models, click on the drop down option beside your newly created model(or already existing Model) in which you wish to edit, then click on View Attributes.

On the newly displayed page, which contains a list of attributes for this model

    Note: list would be empty, if you haven't created any Models in the past
    
Click on **New+** at the top right corner of the page.

###Step 2:

####Editing the Attribute:
The newly displayed page would contain 3 Navigational Tabs with several fields in them as seen in the image below

Each Navigational Tab contains several Fields to be filled. Which must all be filled with correct information. A detailed description of the content of each Navigational Tab is shown below.

#####General Tab

| Param        | Type           | Details  |
| ------------- |:-------------:|: -----|
| Model Name     | string | This refers to the name of the model to which the attribute belongs) |
| Type     | string | This refers to the data type of your attribute |
| Key     | string | This serves as a pointer to your Form |
| Name     | string | This refers to the name of the attribute |
| Indexed     | string | Set this option if you want to include this attribute as a filterable parameter in reports |

#####Validation Tab

| Param        | Type           | Details  |
| ------------- |:-------------:|: -----|
|   Input Control  | string | This is used to determine the type of input. <Note: If you desire a drop down option use ***Select*** |
|  List   | string | This provides the contents of the list of the drop down option |
|   Required  | string | Set this option if the values of the attribute is very important and required |
|  Unique   | string | Set this option if all values of this attribute are required to be unique |
|  Minimum Value   | string | his refers to the minimum allowable value of the attribute |
|   Maximum Value  | string | This refers to the maximum allowable value of the attribute |
|  Minimum Length   | string | This refers to the minimum allowable length of the attribute |
| Maximum Length    | string | This refers to the maximum allowable length of the attribute |
|   Maximum Width  | string | This refers to the maximum allowable width of the attribute |
|   Maximum Height  | string | This refers to the maximum allowable height of the attribute |


#####Permission Tab


| Param        | Type           | Details  |
| ------------- |:-------------:|: -----|
|   Enable Read Instructions  | string | Only set this option if you want to lock new users by default so that you can activate them manually |
|  Viewer Roles   | string | This refers to the type of individuals who would be able to view this form |
|  Enable Write restrictions   | string | Only set this option if you want to lock new users by default so that you can activate them manually. |
| Editor Roles    | string | This refers to the type of individuals who would be able to edit this form |


After filling all the fields in the Navigational Tab, click on the **Save** button to update your work.

**Note:** After clicking on the **Save** button, ensure that you see a success message at the top of the page highlighted in green. If an error occurred you would receive a message at the top of the page highlighted in red.

Return to the previous the list of Model Attributes to see your newly created Attribute

To create more attributes repeat the above process from Step 1.


##Editing an existing Model Attribute.

On the page containing a list of your Model Attribute, click on the **Drop-down** option beside the Model Attribute you wish to edit, then click on Edit

After filling all the fields in a Navigational Tab, click on the Save button to update your work.

**Note:** After clicking on the **Save** button, ensure that you see a success message at the top of the page highlighted in green. If an error occurred, you would receive a message at the top of the page highlighted in red.