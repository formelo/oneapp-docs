#Read and Write Data on the Web

##Get a database reference

To read or write data from the database, you need an instance of formelo.database.Reference
```js+lineNumbers:true
    // Get a reference to the database service
    var database = formelo.database();
```
##Reading and writing data
This document covers the basics of retrieving data and how to order and filter Formelo data.

###Basic write operations
For basic write operations, you can use set() to save data to a specified reference, replacing any existing data at that path. For example a social blogging application might add a user with set() as follows:

```js+lineNumbers:true
function writeUserData(userId, name, email, imageUrl) {
  formelo.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
```

Using ```set()``` overwrites data at the specified location, including any child nodes.

###Listen for value events

To read data at a path and listen for changes, use the on() oronce() methods of formelo.database.Reference to observe events.

| Event        | Typical usage           |   |
| ------------- |:-------------:| -----:|
| value     | Read and listen for changes to the entire contents of a path. |  |

You can use the value event to read a static snapshot of the contents at a given path, as they existed at the time of the event. This method is triggered once when the listener is attached and again every time the data, including children, changes. The event callback is passed a snapshot containing all data at that location, including child data. If there is no data, the snapshot returned is null

The following example demonstrates a social blogging application retrieving the star count of a post from the database:

```js+lineNumbers:true
var starCountRef = formelo.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
```

###Read data once
n some cases you may want a snapshot of your data without listening for changes, such as when initializing a UI element that you don't expect to change. You can use the once() method to simplify this scenario: it triggers once and then does not trigger again.

This is useful for data that only needs to be loaded once and isn't expected to change frequently or require active listening. For instance, the blogging app in the previous examples uses this method to load a user's profile when they begin authoring a new post:

``` js+lineNumbers:true
var userId = formelo.auth().currentUser.uid;
return formelo.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});
```

##Updating or deleting data

###Update specific fields

To simultaneously write to specific children of a node without overwriting other child nodes, use the update() method.

When calling update(), you can update lower-level child values by specifying a path for the key. If data is stored in multiple locations to scale better, you can update all instances of that data using data fan-out.

For example, a social blogging app might create a post and simultaneously update it to the recent activity feed and the posting user's activity feed using code like this:

``` js+lineNumbers:true
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = formelo.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return formelo.database().ref().update(updates);
}
```

This example uses push() to create a post in the node containing posts for all users at /posts/$postid and simultaneously retrieve the key. The key can then be used to create a second entry in the user's posts at /user-posts/$userid/$postid.

Using these paths, you can perform simultaneous updates to multiple locations in the JSON tree with a single call to update(), such as how this example creates the new po

###Delete data
The simplest way to delete data is to call remove() on a reference to the location of that data.

You can also delete by specifying null as the value for another write operation such as set() or update(). You can use this technique with update() to delete multiple children in a single API call.


##Detach listeners
Callbacks are removed by calling the off() method on your Formelo database reference.

You can remove a single listener by passing it as a parameter to off(). Calling off() on the location with no arguments removes all listeners at that location.

Calling off() on a parent listener does not automatically remove listeners registered on its child nodes; off() must also be called on any child listeners to remove the callback.

##Write data offline
If a client loses its network connection, your app will continue functioning correctly.

Every client connected to a Formelo database maintains its own internal version of any active data. When data is written, it's written to this local version first. The Formelo client then synchronizes that data with the remote database servers and with other clients on a "best-effort" basis.

As a result, all writes to the database trigger local events immediately, before any data is written to the server. This means your app remains responsive regardless of network latency or connectivity.

Once connectivity is reestablished, your app receives the appropriate set of events so that the client syncs with the current server state, without having to write any custom code.