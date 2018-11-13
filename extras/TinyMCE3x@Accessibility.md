---
layout: default
title: Accessibility
---

Working with the Adaptive Technology Resource Centre (ATRC) at the University of Toronto, Moxiecode introduced an accessible TinyMCE in version 2.0\. The work was part of a project called Culturall, which had a main focus of making Canadian cultural content accessible to everyone, including people with disabilities. Working to make TinyMCE accessible was one of several sub projects. The benefits of this work have spread exponentially, with the accessibility features added to TinyMCE making it into dozens of popular Web authoring applications, introducing accessible authoring practices to a very large number of content authors who happen to use these systems.

[Culturall: Inclusive Authoring Tool](http://culturall1.atrc.utoronto.ca/index.php?option=com_content&task=category&sectionid=12&id=15&Itemid=35)

There were two primary aspects to the accessibility work done on TinyMCE.

*   Make TinyMCE itself accessible, so adaptive technology users could author with it.
*   Add features to assist content developers in authoring accessible content.

## Making TinyMCE Accessible

Making TinyMCE itself accessible involved making the interface navigable by keyboard, and adding text equivalents for all interface elements so they could be read by adaptive technologies (i.e. Alt text for all images).

As part of making the interface keyboard navigable, three shortcuts (i.e. accesskeys) were added to allow movement between the Tool Buttons at the top of TinyMCE, the Editor Window area below that, and the Element Path at the bottom of the interface. These shortcuts are invisible to the average user, who would likely use a mouse pointer to move through the interface and not need them, but they are visible to adaptive technologies, such as a screen reader reading the page out loud.

As a screen reader begins reading the TinyMCE interface it will announce:

*   Jump to Tool Buttons Alt-F1
*   Jump to Editor Esc
*   Jump to Element Path Alt-F11
*   Close window/dropdown Esc
*   Open accessibility help instructions Alt+0

These three accesskeys are the primary means of navigating through the TinyMCE interface. Once the cursor's focus is inside the editor, the Tab and arrow keys can also be used to navigate. Keyboard users can discover their location within the HTML markup displayed in the Editor Window, if they cannot see it for instance, by using the arrow keys to move to an element, then pressing Alt-F11 to jump to the Element Path. Then, using the Tab and Shift-Tab keys within the Element Path they can move through the HTML elements listed there. Selecting an element in the Element Path sends the cursor back to that point in the Editor Window where editing can continue. Similarly, if a tool button/dialog has been used, the cursor will jump to the point where the markup is being added or modified in the Editor Window. An adaptive technology user might also choose to use the Tab key from the Element Path to Exit TinyMCE and move on to any content that might appear after the editor.

## Helping Authors Produce Accessible Content

The second part of the work was to add features to TinyMCE that would help authors create accessible content. This work was also used to help validate the upcoming Authoring Tool Accessibility Guidelines (ATAG 2.0), the development of which is led by the ATRC in conjunction with the W3C. ATAG 2.0 was in draft when these features were added, so technically TinyMCE is not ATAG conformant, but practically speaking it does conform with the developing specification as it exists in its draft state. The assumption is when ATAG 2.0 is released as a stable document, only minor changes will be required to make TinyMCE ATAG conformant (if any changes are needed at all).

The key features added to assist with accessible authoring were:

*   Replacing Font with Span and style elements,
*   Adding a check and prompt to the image editor to ensure Alt text is added for images,
*   Adding the "scope" attribute to the table editor,
*   Making navigation through the HTML element hierarchy possible (as described above),
*   Added information to the Help documentation about creating accessible content,
*   Creating a plugin for the AChecker accessibility verifier Web service.

## AChecker Accessibility Verifier

As part of its work developing accessibility guidelines, the ATRC has created a tool called AChecker, the 2nd generation of its previous accessibility evaluation and repair tool called APrompt. AChecker can be used to evaluate the accessibility of HTML documents against a number of international guidelines including the W3C Web Content Accessibility Guidelines (WCAG 1.0 & 2.0draft), section 508 of the U.S. Rehabilitation Act, guidelines of the Stanca Act in Italy, and Barrierefreie Informationstechnik-Verordnung (BITV) in Germany. Users of AChecker can simply insert a URL or upload an HTML file to have its accessibility accessed.

[Use AChecker](http://www.achecker.ca/)

AChecker also includes a Web services API through which HTML can be sent from external applications, and returned a report back that can be displayed within that application. AChecker Web services have been implemented in the ACheck plugin for TinyMCE. To install it with your TinyMCE implementation, download the plugin and unzip it into the TinyMCE plugins directory, then enable it in the TinyMCE init script by adding "acheck" to the plugins line. A standard accessibility icon will then appear in the Tool Buttons. Clicking on the icon will result in the content of the Editor Window being sent to the AChecker Web service, which will then open an accessibility report. Based on the results an author then makes the recommended changes, then presses the ACheck button again until all potential barriers are eliminated, and a pass report is generated.

[Download AChecker Plugin for TinyMCE](http://www.atutor.ca/achecker/download.php)

An implemented version of TinyMCE with the AChecker plugin can be found in ATutor, an accessible Learning Content Management System used to deliver online courses, also developed by the ATRC. Follow the link below to the ATutor demo, open a content page in ATutor from the menu on the right, then click "Edit this Page" to open the content editor.

[ATutor with TinyMCE and the AChecker Plugin](http://www.atutor.ca/atutor/demo.php)

## Browser Differences

Note that Accesskeys (Q, Z, X) function by default in Internet Explorer. In Mozilla based browers accessibility.accesskeycausesactivation needs to be disabled, otherwise the browser will attempt to download. To disable accessibility.accesskeycausesactivation type "about:config" into the Mozilla or Firefox location bar, then double click accessibility.accesskeycausesactivation to disable it.

## Closing Inline Dialogs

The "Escape" key can be used to close Inline Dialogs.