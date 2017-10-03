#Getting Started: Building a Formelo Applet

Formelo apps are web apps preferably (mobile optimized PWA) which uses Formelo to distribute and access native components like Bluetooth, Push Notifications like a native app.

##Create your first applet

To create our first applet, we need to do the following
1. Register a team on the Formelo Dashboard
2. Install the Formelo Mobile App
2. Clone a sample Formelo applet Project
3. Preview the applet on our Mobile Device

###Register a team on the Formelo Dashboard

If you don’t have an account already,

1. Go to https://formelo.com/register
2. Enter an email, Team name,  username and password.

###Create a mobile optimized ReactJS Project

Formelo applets can be any website, however we recommend that they should be PWAs optimized solely for mobile views. 

You can use your favorite mobile theme however we recommend Onsen UI (Onsennui.com). We also love and use a lot of mobile components from Material-material.com.


We have a bootstrapped project which will get you started with ReactJS and Onsen alongside some plugin setup and heavy lifting

1. ReactJS
2. OnsenUI
3. Material UI

Now clone the repo

    Git clone https://github.com/oduonye1992/applet-bootstrap

####Install the dependencies

    cd applet-bootstrap
    npm install

####Run your project

    npm start

Go to your browser and enter the URL "localhost:3000" preview your project.


###Preview your applet on the Formelo Mobile app

Formelo will run your app in it’s embedded browser, the advantage of using Formelo as opposed to your browser is that Formelo exposes a rich sets of native APIs not accessible from your default browser. 

To see the list to Formelo APIs visit https://docs.formelo.com/v1/public/applets/apis
    
To preview the your app in the Formelo mobile app, you nedd to have Formelo installed. Formelo Mobile App is currently available for Android and iOS.

1. Install Formelo
    a. Download for Android
    b. Download for iOS
2. Ensure your home and your laptop are connected to the same WiFi
3. Launch the app
    a. Tap Explore > Profile (You might need ot login) > Settings > Developers
    b. Enter your project's local server URL (localhost:3000) in the input box and click "Go" 
    
###Exploring your Applet Project

####Initializing the Formelo SDK

Before you can invoke a native formelo API, you have to ensure that the formelo SDK is ready.

You can listen for this event by attaching a callback to the "deviceIsReady" event
```js+lineNumbers:true
    document.addEventListener('deviceIsReady', function(){
        // Entry point of your app
    })
```   
It is advisable to ensure the callback becomes the entry point of your app. 

###Publishing To Formelo

