angular-template-url
==========

## Installation

```
meteor add mys:angular-template-url
```

## How to use it
 
Type package name and template url.

```javascript
const tpl = angularTemplateUrl('wieldo:autoformly', 'client/index.ng.html')

console.log('tpl:', tpl);

// on Meteor release lower then 1.2
tpl: /packages/wieldo_autoformly_client/index.ng.html
// otherwise
tpl: /packages/wieldo:autoformly/client/index.ng.html

```