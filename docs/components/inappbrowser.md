**In App Browser**

Launches in app Browser

**Usage**  
```js+lineNumbers:true
    import {React, Component} from 'react'
    Class TestClass extends Component {
        componentDidMount(){
           const browser = formelo().iab.create('https://formelo.com/');
           browser.executeScript(...);
           browser.insertCSS(...);
           browser.close();
        }
        
        render(){
            
        }
    }
```
**Instance Members**
```js+lineNumbers:true
    create(url, target, options)
```
Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| url     | string | The URL to load. |
| target      | string      |  The target in which to load the URL, an optional parameter that defaults to _self  |
| options | string      |   Options for the InAppBrowser. Optional, defaulting to: location=yes. The options string must not contain any blank space, and each feature's name/value pairs must be separated by a comma. Feature names are case insensitive. |


    show()
Displays an InAppBrowser window that was opened hidden. Calling this has no effect if the InAppBrowser was already visible.

    close()
Closes the InAppBrowser window.

    hide()
Hides an InAppBrowser window that is currently shown. Calling this has no effect if the InAppBrowser was already hidden.

    executeScript(script)
Injects JavaScript code into the InAppBrowser window.

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| script     | Object | Details of the script to run, specifying either a file or code key |


