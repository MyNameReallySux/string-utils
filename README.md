#String Utils

This is a simple, string manipulation and comparison library. This is intended to be used imported via Node.js (or a bundler like Webpack for client side).

##Installation

###Using NPM
```
npm install 'string-utils'
```

##Usage


###Basic Usage

```javascript
const StringUtils = require('string-utils').StringUtils

let example = 'this is a string'
StringUtils.contains('string') // true
example = StringUtils.toCamleCase(example) // thisIsAString
```

###Stream API
```javascript
const stream = require('string-utils').stream

let example = 'this is a string'
example = stream(example).toCamelCase().capitalize().get() // ThisIsAString

const StringStream = require('string-utils').StringStream

```