#Using the Rule Builder
You can create rules to build a dynamic form that can show and hide fields, skip pages, and show custom confirmation messages based on what people select or type when filling out your form.

Jump to...

1. Video Overview
2. Types of Rules
3. Conditions & Actions
4. Adding & Deleting Rules
5. Using Multiple Rules
6. Using Multiple Conditions
 
_____________
 
 
###Types Of Rules

| Type      || Description 
| ------------- |:-------------:|: -----|
|   Form Rules|  When someone submits your form, you can redirect them to another site, create a customized confirmation message, or trigger an email.
|  Field Rules   | Dynamically show or hide fields in your form—make sure people only see fields relevant to them.
|  Page Rules   |   Skip people to different pages in your form—make sure people only see pages relevant to them.

___

###Conditions and Actions

Building rules is as easy as creating logical sentences based on the fields in your form. Every rule is made up of two bits: a condition and an action.

#####Condition
Conditions define the fields you want to base the rule on, and how you want us to evaluate those fields. Conditions are made up of three parts:

| Part       | Description         | Examples
| ------------- |:-------------:| -----:|
 | Subject     | The field you want to base the rule on. (It can't be a File Upload, Section Break, or Page Break field.) |Do you want to subscribe to our newsletter?
| Comparison  | Tells us how to evaluate the subject's value to make the condition true. You can use several different operators (things like is, is not, contains, ends with, etc.) to define the relationship between the subject and the value.	 | is
| Value       | The value of the subject you're basing the rule on. This could be the answer choice someone selects or what they type into your form. The possible values depend on the field you're basing the rule off of.	 | Yes

#####Action
The action is what you want to happen if the condition is met (is true). An action only occurs when the condition of the rule is true.

Each type of rule has different actions available for you to choose from, like showing and hiding fields, skipping pages, and showing custom confirmation messages.

For example, if "Do you want to subscribe to our newsletter? is Yes" is the condition, your action might be to "SHOW an Email field".
```$xslt
TIP! If you're feeling overwhelmed, just read the rule bit by bit as if it were a sentence—it'll help you break it down and understand what's going on.
```
