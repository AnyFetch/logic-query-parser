'use strict';

module.exports = [
  /*
   *    TEST N°1
   */
  {
    string: 'welcome AND bye',

    // TREE
    tree: {
      lexeme: {
        type: 'and'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
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
    }
  },

  /*
   *    TEST N°2
   */
  {
    string: 'welcome OR bye',

    // TREE
    tree: {
      lexeme: {
        type: 'or'
      },
      left: {
        lexeme: {
          type: 'string',
          value: 'welcome'
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: 'string',
          value: 'bye'
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
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
    }
  },

  /*
   *    TEST N°3
   */
  {
    string: 'welcome AND bye AND hello',

    // TREE
    tree: {
      lexeme: {
        type: "and"
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
          type: "and"
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        },
        {
          type: "string",
          value: "hello"
        }
      ]
    }
  },

  /*
   *    TEST N°4
   */
  {
    string: 'welcome OR bye AND hello',

    // TREE
    tree: {
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
          type: "and"
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "bye"
            },
            {
              type: "string",
              value: "hello"
            }
          ]
        }
      ]
    }
  },

  /*
   *    TEST N°5
   */
  {
    string: 'welcome AND bye OR hello',

    // TREE
    tree: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "and"
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
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "and",
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
          type: "string",
          value: "hello"
        }
      ]
    }
  },

  /*
   *    TEST N°6
   */
  {
    string: '(welcome OR bye) AND hello',

    // TREE
    tree: {
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
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
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
          type: "string",
          value: "hello"
        }
      ]
    }
  },

  /*
   *    TEST N°7
   */
  {
    string: '(welcome OR bye) AND (hello OR ahoy)',

    // TREE
    tree: {
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
    },

    // QUERY
    query: {
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
  },

  /*
   *    TEST N°8
   */
  {
    string: '"hello there" OR "welcome here"',

    // TREE
    tree: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "welcome here"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello there"
        },
        {
          type: "string",
          value: "welcome here"
        }
      ]
    }
  },

  /*
   *    TEST N°9
   */
  {
    string: '"hello there" OR welcome here',

    // TREE
    tree: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "and"
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
            value: "here"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello there"
        },
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "welcome"
            },
            {
              type: "string",
              value: "here"
            }
          ]
        }
      ]
    }
  },

  /*
   *    TEST N°10
   */
  {
    string: '"hello OR there"',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "hello OR there"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "hello OR there"
    }
  },

  /*
   *    TEST N°11
   */
  {
    string: '"hello there" AND ("welcome here" OR ahoy)',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "or"
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome here"
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
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello there"
        },
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome here"
            },
            {
              type: "string",
              value: "ahoy"
            }
          ]
        }
      ]
    }
  },

  /*
   *    TEST N°12
   */
  {
    string: '"hello (" AND ") there"',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello ("
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: ") there"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello ("
        },
        {
          type: "string",
          value: ") there"
        }
      ]
    }
  },

  /*
   *    TEST N°13
   */
  {
    string: 'hello (welcome)',

    // TREE
    tree: {
      lexeme: {
        type: "and"
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
          value: "welcome"
        },
        left: null,
        right: null
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello"
        },
        {
          type: "string",
          value: "welcome"
        }
      ]
    }
  },

  /*
   *    TEST N°14
   */
  {
    string: '\\(hello bye\\) welcome',

    // TREE
    tree: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "(hello"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "and"
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye)"
          },
          left: null,
          right: null
        },
        right: {
          lexeme: {
            type: "string",
            value: "welcome"
          },
          left: null,
          right: null
        }
      }
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "(hello"
        },
        {
          type: "string",
          value: "bye)"
        },
        {
          type: "string",
          value: "welcome"
        }
      ]
    }
  },

  /*
   *    TEST N°15
   */
  {
    string: 'hello\\ \\OR\\ there',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "hello OR there"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "hello OR there"
    }
  },

  /*
   *    TEST N°15
   */
  {
    string: '"(welcome hello)"',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "(welcome hello)"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "(welcome hello)"
    }
  },

  /*
   *    TEST N°17
   */
  {
    string: '("hello',
    err: "Can't reach end of quoted string"
  },

  /*
   *    TEST N°18
   */
  {
    string: ')" bye" (',
    err: 'end of string just after startBlock'
  },

  /*
   *    TEST N°19
   */
  {
    string: 'test"',
    err: 'Can\'t reach end of quoted string'
  },

  /*
   *    TEST N°20
   */
  {
    string: 'bye)',
    err: 'Unexpected token endBlock'
  },

  /*
   *    TEST N°21
   */
  {
    string: '',

    // TREE
    tree: {},

    // QUERY
    query: {}
  },

  /*
   *    TEST N°22
   */
  {
    string: 'and test',
    err: 'Nothing before and block'
  },

  /*
   *    TEST N°23
   */
  {
    string: 'or test',
    err: 'Nothing before or block'
  },

  /*
   *    TEST N°24
   */
  {
    string: 'android',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "android"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "android"
    }
  },

  /*
   *    TEST N°25
   */
  {
    string: 'orroid',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "orroid"
      },
      left: null,
      right: null
    },

    // QUERY
    query: {
      type: "string",
      value: "orroid"
    }
  },
];
