<!-- Code Review -->

<!-- book-search.component -->

* Functions and variables should have the public


<!-- book-search.component.html -->

* Image tag should have attribute property on source element and alt attribute is missed.
* Instead of submit we can use ngSubmit.
* DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.
* we can minimise the code to get the value of terms instead directly accessing them 


<!-- Accessibility light House report -->

* Search do not have an accessible name.
* Background and foreground colors do not have a sufficient contrast ratio.

<!-- Accessiblity Manual check -->

* [aria-hidden="true"] is not present on the document <body>
* alt attribute is missed in the image tag.
* other labels are missing in the tags

<!-- Test cases -->

* Test cases failed for failedAddToReadingList, failedRemoveFromReadingList



 