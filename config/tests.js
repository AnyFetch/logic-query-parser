'use strict';

module.exports = [
	/*
	 *    TEST N°1
	 */
	{
		string: 'welcome AND bye',
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
		}
	},

	/*
	 *    TEST N°2
	 */
	{
		string: 'welcome OR bye',
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
		}
	},

	/*
	 *    TEST N°3
	 */
	{
		string: 'welcome AND bye AND hello',
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
		}
	},

	/*
	 *    TEST N°4
	 */
	{
		string: 'welcome OR bye AND hello',
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
		}
	},

	/*
	 *    TEST N°5
	 */
	{
		string: 'welcome AND bye OR hello',
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
		}
	},

	/*
	 *    TEST N°6
	 */
	{
		string: '(welcome OR bye) AND hello',
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
		}
	},

	/*
	 *    TEST N°7
	 */
	{
		string: '(welcome OR bye) AND (hello OR ahoy)',
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
		}
	},

	/*
	 *    TEST N°8
	 */
	{
		string: '"hello there" OR "welcome here"',
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
		}
	},

	/*
	 *    TEST N°9
	 */
	{
		string: '"hello there" OR welcome here',
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
		}
	},

	/*
	 *    TEST N°10
	 */
	{
		string: '"hello OR there"',
		tree: {
		  lexeme: {
		    type: "string",
		    value: "hello OR there"
		  },
		  left: null,
		  right: null
		}
	},

	/*
	 *    TEST N°11
	 */
	{
		string: '"hello there" AND ("welcome here" OR ahoy)',
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
		}
	},

	/*
	 *    TEST N°12
	 */
	{
		string: '"hello (" AND ") there"',
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
		}
	},

	/*
	 *    TEST N°13
	 */
	{
		string: '("hello',
		err: "Can't reach end of quoted string"
	},

	/*
	 *    TEST N°14
	 */
	{
		string: ')" bye" (',
		err: 'end of string just after startBlock'
	}
];