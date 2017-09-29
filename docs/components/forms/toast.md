**Toast**

This API allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.

**Usage**

    (function(){
           this.toast.show(`I'm a toast`, '5000', 'center');
    })()

**Instance Members**

    show(message, duration, position)
Show a native toast for the given duration at the specified position.

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| message     | string | The message to display. |
| duration     | string | Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'. |
| position     | string | Where to position the toast, either 'top', 'center', or 'b |


    hide()
Manually hide any currently visible toast.

| Param        | Type           | Details  |
| ------------- |:-------------:| -----:|
| reference     | string |  |




