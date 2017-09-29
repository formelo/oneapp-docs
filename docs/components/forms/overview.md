**Formelo Form API Docs**

In the API docs, you’ll find the APIs to enable you extend your Mobile Forms.

**How to extend a Form**

Building a Formelo form typically involves the following:
1. Create a Page
2. For each Page, create a Section
3. For each Section, insert a field. This could be a text, image, gps or a host of other input formats

To extend any of these fields, you need to write some javascript code in the "Onclick", "OnSelect" or "onValidate" options when configuring your field.

1. On Click - THe code written here will be trigerred when the field is clicked. This only applies to buttons
2. On Change - The code written here will e trigerred when the value of a field is changed. This is a good place to add custom validation logic. You can flag a field aas invalid using the Formelo API described in later sections.
3. On Validate - This code wil be trigerred when at the poing of Form submission. When a user indicates that he wants to submit a form, All the fields are validated for basic checks ike valid email, min -max length .e.t.c Custom validators are also trigerred here.

Formelo exposes a rich set of APIs to enable you manipulate fields from you code. 