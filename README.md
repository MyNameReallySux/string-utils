# String Utils

This is a simple, string manipulation and comparison library. This is intended to be used imported via Node.js (or a bundler like Webpack for client side).

### View On
 - [Code Climate](https://codeclimate.com/github/MyNameReallySux/string-utils)

## Installation

### Using NPM or Yarn
```
npm install '@beautiful-code/string-utils'
yard add '@beautiful-code/string-utils'
```

## Usage

### Basic Usage

```javascript
const StringUtils = require('@beautiful-code/string-utils').StringUtils

let example = 'this is a string'
StringUtils.contains('string') // true
example = StringUtils.toCamelCase(example) // thisIsAString
```

###Stream API
```javascript
const stream = require('@beautiful-code/string-utils').stream

let example = 'this is a string'
example = stream(example).toCamelCase().capitalize().get() // ThisIsAString

const StringStream = require('string-utils').StringStream

```
