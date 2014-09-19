# Logic Query Parser
> Visit http://anyfetch.com for details about AnyFetch.

Generate binary tree with a logic query string as input

# How to install?
```
npm install
```

Check everything is working with `npm test`.

# How to use it

This lib provider a function parse whick take an object of options (optionnal) and a string as paramater, it returns a binary tree.
As binary trees are not simple this lib provide an util function which convert binaryTree to a better form of query

Avalaible options are for now :
* spaces : A string / array which contains all of spaces characters. Default : " \n\t"
* defaultOperator : A default operator uses between two strings. Default : 'and'

Avalaible operators for now : AND, OR, parentheses, double quote

# Example

So, here is an example :

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('hello AND welcome');
```

The binaryTree for this example will be :
```js
{
  lexeme: { 
    type: 'and'
  },
  left: {
    lexeme: {
      type: 'string',
      value: 'hello'
    },
    left: null,
    right: null
  },
  right: {
    lexeme: {
      type: 'string',
      value: 'welcome'
    },
    left: null,
    right: null
  }
}
```

Another example which is more complexe :

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('(welcome OR bye) AND (hello OR ahoy)');
```

And the binary tree :
```js
{
  lexeme: {
    type: "and"
  },
  left: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "bye"
      },
      left: null,
      right: null
    }
  },
  right: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "ahoy"
      },
      left: null,
      right: null
    }
  }
}
```

So, here is an example of the util function with the second example query :

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('(welcome OR bye) AND (hello OR ahoy)');
var query = parser.utils.binaryTreeToQueryJson(binaryTree);
```

Now query is like that :
```js
{
  type: "and",
  values: [
    {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    },
    {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello"
        },
        {
          type: "string",
          value: "ahoy"
        }
      ]
    }
  ]
}
```

It's more simple and small than the binary tree !


For others examples you can watch the file `config/tests.js`.

Support: `support@anyfetch.com`.
