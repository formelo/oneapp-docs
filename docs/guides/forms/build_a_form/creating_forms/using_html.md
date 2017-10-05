#Using HTML to Add Images, Links, and Text Formatting
 
HTML formatting is supported in lots of places across Wufoo:

1. Section Break Fields
2. Instructions for User
3. Confirmation Emails & Messages
4. Field Labels

This article goes over a few popular ways to use HTML in Wufoo, but w3schools.com is a great resource where you can learn how to do more with HTML.

##Embedding Images & Media

Learn how to add visuals into your form with HTML.

``` js+lineNumbers:true
TIP! Use a Section Break Field We suggest pasting the HTML code for images, videos, maps, and other media into the Instructions for User field setting in a Section Break field, which doesn't collect any data. It's a blank canvas perfect for embedding media in your form!
```

###Images
To add an image, enter the following HTML:


``` 
<iframe width="420" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ" frameborder="0" allowfullscreen></iframe>
```
Just replace http://example.com/puppy.gif with your own image URL.
```$xslt
TIP! Add Logos in the Theme Designer You don't need to use HTML to add a logo to the upper-left corner of your form. Instead, use the Theme Designer. Learn more: Adding a Logo
```
###Videos
To embed a video, grab the embed code from a video website like YouTube or Vimeo and paste it into your form. You can usually find the embed code for a video in the Share options for that video.

The embed code will look something like this:

```$xslt
<iframe width="420" height="315" src="https://www.youtube.com/embed/fJ9rUzIMcZQ" frameborder="0" allowfullscreen></iframe>
```

###Maps
To embed a map, grab the embed code from a maps website like Google Maps and paste it into your form. You can usually find the embed code for a video in the Share or the Link options for that map.

You can usually find iframe codes in the Share or Embed options for a map, and the HTML will look something like this:

```$xslt
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228611.25294358036!2d-82.59650605382204!3d27.997780751096553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C+FL!5e0!3m2!1sen!2sus!4v1462565615208" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
```


___________________________________________________________________________
##Formattiing Text

Learn how to style text in your form (like bold or underline), or make text into a link, with HTML.

______________________________________________________________________________
###Style(Bold,Italic,etc.)
Here are some popular tags you can use to format specific text in your form.


| Tag         | Description          | Example Text  | 
| ------------- |:-------------:| -----:|
 |    <b>Your text here</b>	 | Bold | 