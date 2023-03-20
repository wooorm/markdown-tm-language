/* eslint-disable no-template-curly-in-string */
/** @type {import("@wooorm/starry-night").Grammar} */
const grammar = {
  "scopeName": "source.mdx",
  "extensions": [
    ".mdx"
  ],
  "names": [
    "mdx"
  ],
  "patterns": [
    {
      "include": "#markdown-frontmatter"
    },
    {
      "include": "#markdown-sections"
    }
  ],
  "repository": {
    "markdown-frontmatter": {
      "patterns": [
        {
          "include": "#extension-toml"
        },
        {
          "include": "#extension-yaml"
        }
      ]
    },
    "markdown-sections": {
      "patterns": [
        {
          "include": "#commonmark-block-quote"
        },
        {
          "include": "#commonmark-code-fenced"
        },
        {
          "include": "#extension-gfm-footnote-definition"
        },
        {
          "include": "#commonmark-definition"
        },
        {
          "include": "#commonmark-heading-atx"
        },
        {
          "include": "#commonmark-thematic-break"
        },
        {
          "include": "#commonmark-heading-setext"
        },
        {
          "include": "#commonmark-list-item"
        },
        {
          "include": "#extension-gfm-table"
        },
        {
          "include": "#extension-math-flow"
        },
        {
          "include": "#extension-mdx-esm"
        },
        {
          "include": "#extension-mdx-expression-flow"
        },
        {
          "include": "#extension-mdx-jsx-flow"
        },
        {
          "include": "#commonmark-paragraph"
        }
      ]
    },
    "markdown-string": {
      "patterns": [
        {
          "include": "#commonmark-character-escape"
        },
        {
          "include": "#commonmark-character-reference"
        }
      ]
    },
    "markdown-text": {
      "patterns": [
        {
          "include": "#commonmark-attention"
        },
        {
          "include": "#commonmark-character-escape"
        },
        {
          "include": "#commonmark-character-reference"
        },
        {
          "include": "#commonmark-code-text"
        },
        {
          "include": "#commonmark-hard-break-trailing"
        },
        {
          "include": "#commonmark-hard-break-escape"
        },
        {
          "include": "#commonmark-label-end"
        },
        {
          "include": "#extension-gfm-footnote-call"
        },
        {
          "include": "#commonmark-label-start"
        },
        {
          "include": "#extension-gfm-autolink-literal"
        },
        {
          "include": "#extension-gfm-strikethrough"
        },
        {
          "include": "#extension-github-gemoji"
        },
        {
          "include": "#extension-github-mention"
        },
        {
          "include": "#extension-github-reference"
        },
        {
          "include": "#extension-math-text"
        },
        {
          "include": "#extension-mdx-expression-text"
        },
        {
          "include": "#extension-mdx-jsx-text"
        }
      ]
    },
    "commonmark-attention": {
      "patterns": [
        {
          "match": "(?<=\\S)\\*{3,}|\\*{3,}(?=\\S)",
          "name": "punctuation.definition.string.strong.emphasis.asterisk.mdx"
        },
        {
          "match": "(?<=[\\p{L}\\p{N}])_{3,}(?![\\p{L}\\p{N}])|(?<=\\p{P})_{3,}|(?<![\\p{L}\\p{N}]|\\p{P})_{3,}(?!\\s)",
          "name": "punctuation.definition.string.strong.emphasis.underscore.mdx"
        },
        {
          "match": "(?<=\\S)\\*{2}|\\*{2}(?=\\S)",
          "name": "punctuation.definition.string.strong.asterisk.mdx"
        },
        {
          "match": "(?<=[\\p{L}\\p{N}])_{2}(?![\\p{L}\\p{N}])|(?<=\\p{P})_{2}|(?<![\\p{L}\\p{N}]|\\p{P})_{2}(?!\\s)",
          "name": "punctuation.definition.string.strong.underscore.mdx"
        },
        {
          "match": "(?<=\\S)\\*|\\*(?=\\S)",
          "name": "punctuation.definition.string.emphasis.asterisk.mdx"
        },
        {
          "match": "(?<=[\\p{L}\\p{N}])_(?![\\p{L}\\p{N}])|(?<=\\p{P})_|(?<![\\p{L}\\p{N}]|\\p{P})_(?!\\s)",
          "name": "punctuation.definition.string.emphasis.underscore.mdx"
        }
      ]
    },
    "commonmark-block-quote": {
      "begin": "(?:^|\\G)[\\t ]*(>)[ ]?",
      "beginCaptures": {
        "0": {
          "name": "markup.quote.mdx"
        },
        "1": {
          "name": "punctuation.definition.quote.begin.mdx"
        }
      },
      "patterns": [
        {
          "include": "#markdown-sections"
        }
      ],
      "while": "(?:^|\\G)[\\t ]*(>)[ ]?",
      "whileCaptures": {
        "0": {
          "name": "markup.quote.mdx"
        },
        "1": {
          "name": "punctuation.definition.quote.begin.mdx"
        }
      }
    },
    "commonmark-character-escape": {
      "match": "\\\\(?:[!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])",
      "name": "support.constant.character.escape.mdx"
    },
    "commonmark-character-reference": {
      "patterns": [
        {
          "include": "#whatwg-html-data-character-reference-named-terminated"
        },
        {
          "match": "(&)(#)([Xx])([0-9A-Fa-f]{1,6})(;)",
          "name": "constant.character-reference.numeric.hexadecimal.html",
          "captures": {
            "1": {
              "name": "punctuation.definition.character-reference.begin.html"
            },
            "2": {
              "name": "punctuation.definition.character-reference.numeric.html"
            },
            "3": {
              "name": "punctuation.definition.character-reference.numeric.hexadecimal.html"
            },
            "4": {
              "name": "constant.numeric.integer.hexadecimal.html"
            },
            "5": {
              "name": "punctuation.definition.character-reference.end.html"
            }
          }
        },
        {
          "match": "(&)(#)([0-9]{1,7})(;)",
          "name": "constant.character-reference.numeric.decimal.html",
          "captures": {
            "1": {
              "name": "punctuation.definition.character-reference.begin.html"
            },
            "2": {
              "name": "punctuation.definition.character-reference.numeric.html"
            },
            "3": {
              "name": "constant.numeric.integer.decimal.html"
            },
            "4": {
              "name": "punctuation.definition.character-reference.end.html"
            }
          }
        }
      ]
    },
    "commonmark-code-fenced": {
      "patterns": [
        {
          "include": "#commonmark-code-fenced-c"
        },
        {
          "include": "#commonmark-code-fenced-c++"
        },
        {
          "include": "#commonmark-code-fenced-cs"
        },
        {
          "include": "#commonmark-code-fenced-css"
        },
        {
          "include": "#commonmark-code-fenced-less"
        },
        {
          "include": "#commonmark-code-fenced-scss"
        },
        {
          "include": "#commonmark-code-fenced-diff"
        },
        {
          "include": "#commonmark-code-fenced-md"
        },
        {
          "include": "#commonmark-code-fenced-go"
        },
        {
          "include": "#commonmark-code-fenced-graphql"
        },
        {
          "include": "#commonmark-code-fenced-ini"
        },
        {
          "include": "#commonmark-code-fenced-java"
        },
        {
          "include": "#commonmark-code-fenced-js"
        },
        {
          "include": "#commonmark-code-fenced-json"
        },
        {
          "include": "#commonmark-code-fenced-kotlin"
        },
        {
          "include": "#commonmark-code-fenced-lua"
        },
        {
          "include": "#commonmark-code-fenced-makefile"
        },
        {
          "include": "#commonmark-code-fenced-objc"
        },
        {
          "include": "#commonmark-code-fenced-perl"
        },
        {
          "include": "#commonmark-code-fenced-python"
        },
        {
          "include": "#commonmark-code-fenced-r"
        },
        {
          "include": "#commonmark-code-fenced-ruby"
        },
        {
          "include": "#commonmark-code-fenced-rust"
        },
        {
          "include": "#commonmark-code-fenced-shell"
        },
        {
          "include": "#commonmark-code-fenced-sql"
        },
        {
          "include": "#commonmark-code-fenced-swift"
        },
        {
          "include": "#commonmark-code-fenced-ts"
        },
        {
          "include": "#commonmark-code-fenced-vbnet"
        },
        {
          "include": "#commonmark-code-fenced-yaml"
        },
        {
          "include": "#commonmark-code-fenced-basic"
        },
        {
          "include": "#commonmark-code-fenced-php"
        },
        {
          "include": "#commonmark-code-fenced-xml"
        },
        {
          "include": "#commonmark-code-fenced-svg"
        },
        {
          "include": "#commonmark-code-fenced-unknown"
        }
      ]
    },
    "commonmark-code-fenced-unknown": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?:[^\\t\\n\\r` ])+)(?:[\\t ]+(?:[^\\n\\r`])+)?)?(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "markup.raw.code.fenced.mdx",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.other.mdx"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?:[^\\t\\n\\r ])+)(?:[\\t ]+(?:[^\\n\\r])+)?)?(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "markup.raw.code.fenced.mdx",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.other.mdx"
        }
      ]
    },
    "commonmark-code-text": {
      "match": "(?<!`)(`+)(?!`)(.+?)(?<!`)(\\1)(?!`)",
      "name": "markup.code.other.mdx",
      "captures": {
        "1": {
          "name": "punctuation.definition.string.begin.code.mdx"
        },
        "2": {
          "name": "markup.raw.code.text.mdx"
        },
        "3": {
          "name": "punctuation.definition.string.end.code.mdx"
        }
      }
    },
    "commonmark-definition": {
      "match": "(?:^|\\G)[\\t ]*(\\[)((?:[^\\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+?)(\\])(:)[ \\t]*(?:(<)((?:[^\\n<\\\\>]|\\\\[<\\\\>]?)*)(>)|(\\g<destination_raw>))(?:[\\t ]+(?:(\")((?:[^\"\\\\]|\\\\[\"\\\\]?)*)(\")|(')((?:[^'\\\\]|\\\\['\\\\]?)*)(')|(\\()((?:[^\\)\\\\]|\\\\[\\)\\\\]?)*)(\\))))?$(?<destination_raw>(?!\\<)(?:(?:[^\\p{Cc}\\ \\\\\\(\\)]|\\\\[\\(\\)\\\\]?)|\\(\\g<destination_raw>*\\))+){0}",
      "name": "meta.link.reference.def.mdx",
      "captures": {
        "1": {
          "name": "punctuation.definition.string.start.mdx"
        },
        "2": {
          "name": "entity.name.identifier.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "3": {
          "name": "punctuation.definition.string.end.mdx"
        },
        "4": {
          "name": "punctuation.separator.key-value.mdx"
        },
        "5": {
          "name": "punctuation.definition.string.begin.destination.mdx"
        },
        "6": {
          "name": "string.other.link.destination.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "7": {
          "name": "punctuation.definition.string.end.destination.mdx"
        },
        "8": {
          "name": "string.other.link.destination.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "9": {
          "name": "punctuation.definition.string.begin.mdx"
        },
        "10": {
          "name": "string.quoted.double.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "11": {
          "name": "punctuation.definition.string.begin.mdx"
        },
        "12": {
          "name": "punctuation.definition.string.begin.mdx"
        },
        "13": {
          "name": "string.quoted.single.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "14": {
          "name": "punctuation.definition.string.begin.mdx"
        },
        "15": {
          "name": "punctuation.definition.string.begin.mdx"
        },
        "16": {
          "name": "string.quoted.paren.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "17": {
          "name": "punctuation.definition.string.end.mdx"
        }
      }
    },
    "commonmark-hard-break-escape": {
      "match": "\\\\$",
      "name": "support.constant.character.escape.line-ending.mdx"
    },
    "commonmark-hard-break-trailing": {
      "match": "( ){2,}$",
      "name": "carriage-return support.constant.character.escape.line-ending.mdx"
    },
    "commonmark-heading-atx": {
      "patterns": [
        {
          "match": "(?:^|\\G)[\\t ]*(#{1}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$",
          "name": "markup.heading.atx.1.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.heading.mdx"
            },
            "2": {
              "name": "entity.name.section.mdx",
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            },
            "3": {
              "name": "punctuation.definition.heading.mdx"
            }
          }
        },
        {
          "match": "(?:^|\\G)[\\t ]*(#{2}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$",
          "name": "markup.heading.atx.2.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.heading.mdx"
            },
            "2": {
              "name": "entity.name.section.mdx",
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            },
            "3": {
              "name": "punctuation.definition.heading.mdx"
            }
          }
        },
        {
          "match": "(?:^|\\G)[\\t ]*(#{3}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$",
          "name": "markup.heading.atx.2.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.heading.mdx"
            },
            "2": {
              "name": "entity.name.section.mdx",
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            },
            "3": {
              "name": "punctuation.definition.heading.mdx"
            }
          }
        },
        {
          "match": "(?:^|\\G)[\\t ]*(#{4}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$",
          "name": "markup.heading.atx.2.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.heading.mdx"
            },
            "2": {
              "name": "entity.name.section.mdx",
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            },
            "3": {
              "name": "punctuation.definition.heading.mdx"
            }
          }
        },
        {
          "match": "(?:^|\\G)[\\t ]*(#{5}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$",
          "name": "markup.heading.atx.2.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.heading.mdx"
            },
            "2": {
              "name": "entity.name.section.mdx",
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            },
            "3": {
              "name": "punctuation.definition.heading.mdx"
            }
          }
        },
        {
          "match": "(?:^|\\G)[\\t ]*(#{6}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$",
          "name": "markup.heading.atx.2.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.heading.mdx"
            },
            "2": {
              "name": "entity.name.section.mdx",
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            },
            "3": {
              "name": "punctuation.definition.heading.mdx"
            }
          }
        }
      ]
    },
    "commonmark-heading-setext": {
      "patterns": [
        {
          "match": "(?:^|\\G)[\\t ]*(={1,})[ \\t]*$",
          "name": "markup.heading.setext.1.mdx"
        },
        {
          "match": "(?:^|\\G)[\\t ]*(-{1,})[ \\t]*$",
          "name": "markup.heading.setext.2.mdx"
        }
      ]
    },
    "commonmark-label-end": {
      "patterns": [
        {
          "match": "(\\])(\\()[\\t ]*(?:(?:(<)((?:[^\\n<\\\\>]|\\\\[<\\\\>]?)*)(>)|(\\g<destination_raw>))(?:[\\t ]+(?:(\")((?:[^\"\\\\]|\\\\[\"\\\\]?)*)(\")|(')((?:[^'\\\\]|\\\\['\\\\]?)*)(')|(\\()((?:[^\\)\\\\]|\\\\[\\)\\\\]?)*)(\\))))?)?[\\t ]*(\\))(?<destination_raw>(?!\\<)(?:(?:[^\\p{Cc}\\ \\\\\\(\\)]|\\\\[\\(\\)\\\\]?)|\\(\\g<destination_raw>*\\))+){0}",
          "captures": {
            "1": {
              "name": "punctuation.definition.string.end.mdx"
            },
            "2": {
              "name": "punctuation.definition.string.start.mdx"
            },
            "3": {
              "name": "punctuation.definition.string.begin.destination.mdx"
            },
            "4": {
              "name": "string.other.link.destination.mdx",
              "patterns": [
                {
                  "include": "#markdown-string"
                }
              ]
            },
            "5": {
              "name": "punctuation.definition.string.end.destination.mdx"
            },
            "6": {
              "name": "string.other.link.destination.mdx",
              "patterns": [
                {
                  "include": "#markdown-string"
                }
              ]
            },
            "7": {
              "name": "punctuation.definition.string.begin.mdx"
            },
            "8": {
              "name": "string.quoted.double.mdx",
              "patterns": [
                {
                  "include": "#markdown-string"
                }
              ]
            },
            "9": {
              "name": "punctuation.definition.string.begin.mdx"
            },
            "10": {
              "name": "punctuation.definition.string.begin.mdx"
            },
            "11": {
              "name": "string.quoted.single.mdx",
              "patterns": [
                {
                  "include": "#markdown-string"
                }
              ]
            },
            "12": {
              "name": "punctuation.definition.string.begin.mdx"
            },
            "13": {
              "name": "punctuation.definition.string.begin.mdx"
            },
            "14": {
              "name": "string.quoted.paren.mdx",
              "patterns": [
                {
                  "include": "#markdown-string"
                }
              ]
            },
            "15": {
              "name": "punctuation.definition.string.end.mdx"
            },
            "16": {
              "name": "punctuation.definition.string.end.mdx"
            }
          }
        },
        {
          "match": "(\\])(\\[)((?:[^\\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+?)(\\])",
          "captures": {
            "1": {
              "name": "punctuation.definition.string.end.mdx"
            },
            "2": {
              "name": "punctuation.definition.string.start.mdx"
            },
            "3": {
              "name": "entity.name.identifier.mdx",
              "patterns": [
                {
                  "include": "#markdown-string"
                }
              ]
            },
            "4": {
              "name": "punctuation.definition.string.end.mdx"
            }
          }
        },
        {
          "match": "(\\])",
          "captures": {
            "1": {
              "name": "punctuation.definition.string.end.mdx"
            }
          }
        }
      ]
    },
    "commonmark-label-start": {
      "patterns": [
        {
          "match": "\\!\\[(?!\\^)",
          "name": "punctuation.definition.string.begin.image.mdx"
        },
        {
          "match": "\\[",
          "name": "punctuation.definition.string.begin.link.mdx"
        }
      ]
    },
    "commonmark-list-item": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*((?:[*+-]))(?:[ ]{4}(?![ ])|\\t)(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "variable.unordered.list.mdx"
            },
            "2": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{1}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*((?:[*+-]))(?:[ ]{3}(?![ ]))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "variable.unordered.list.mdx"
            },
            "2": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*((?:[*+-]))(?:[ ]{2}(?![ ]))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "variable.unordered.list.mdx"
            },
            "2": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)[ ]{3}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*((?:[*+-]))(?:[ ]{1}|(?=\\n))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "variable.unordered.list.mdx"
            },
            "2": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)[ ]{2}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*([0-9]{9})((?:\\.|\\)))(?:[ ]{4}(?![ ])|\\t(?![\\t ]))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){3}[ ]{2}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{9})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{8})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){3}[ ]{1}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{9})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{8})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{7})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){3}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{9})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{8})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{7})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{6})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "string.other.number.mdx"
            },
            "8": {
              "name": "variable.ordered.list.mdx"
            },
            "9": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}[ ]{3}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{8})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{7})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{6})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{5})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "string.other.number.mdx"
            },
            "8": {
              "name": "variable.ordered.list.mdx"
            },
            "9": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}[ ]{2}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{7})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{6})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{5})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{4})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "string.other.number.mdx"
            },
            "8": {
              "name": "variable.ordered.list.mdx"
            },
            "9": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}[ ]{1}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{6})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{5})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{4})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{3})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "string.other.number.mdx"
            },
            "8": {
              "name": "variable.ordered.list.mdx"
            },
            "9": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{5})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{4})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{3})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{2})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "string.other.number.mdx"
            },
            "8": {
              "name": "variable.ordered.list.mdx"
            },
            "9": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{3}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{4})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{3})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{2})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{1})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "string.other.number.mdx"
            },
            "8": {
              "name": "variable.ordered.list.mdx"
            },
            "9": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{2}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{3})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{2})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{1})((?:\\.|\\)))(?:[ ]{3}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "string.other.number.mdx"
            },
            "6": {
              "name": "variable.ordered.list.mdx"
            },
            "7": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{1}"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(?:([0-9]{2})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9])((?:\\.|\\)))(?:[ ]{2}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "string.other.number.mdx"
            },
            "4": {
              "name": "variable.ordered.list.mdx"
            },
            "5": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)"
        },
        {
          "begin": "(?:^|\\G)[\\t ]*([0-9])((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?",
          "beginCaptures": {
            "1": {
              "name": "string.other.number.mdx"
            },
            "2": {
              "name": "variable.ordered.list.mdx"
            },
            "3": {
              "name": "keyword.other.tasklist.mdx"
            }
          },
          "patterns": [
            {
              "include": "#markdown-sections"
            }
          ],
          "while": "^(?=[\\t ]*$)|(?:^|\\G)[ ]{3}"
        }
      ]
    },
    "commonmark-paragraph": {
      "begin": "(?:^|\\G)[\\t ]*(?![\\t\\n\\r ])",
      "name": "meta.paragraph.mdx",
      "patterns": [
        {
          "include": "#markdown-text"
        }
      ],
      "while": "(?:^|\\G)(?:[ ]{4}|\\t)"
    },
    "commonmark-thematic-break": {
      "match": "(?:^|\\G)[\\t ]*([-*_])[ \\t]*(?:\\1[ \\t]*){2,}$",
      "name": "meta.separator.mdx"
    },
    "extension-gfm-autolink-literal": {
      "patterns": [
        {
          "match": "(?<=^|[\\t\\n\\r \\(\\*\\_\\[\\]~])(?=(?i:www)\\.[^\\n\\r])(?:(?:[\\p{L}\\p{N}]|-|[\\._](?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+\\g<path>?)?(?<path>(?:(?:[^\\t\\n\\r !\"&'\\(\\)\\*,\\.:;<\\?\\]_~]|&(?![A-Za-z]*;(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))|[!\"'\\)\\*,\\.:;\\?_~](?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))|\\(\\g<path>*\\))+){0}",
          "name": "string.other.link.autolink.literal.www.mdx"
        },
        {
          "match": "(?<=^|[^A-Za-z])(?i:https?://)(?=[\\p{L}\\p{N}])(?:(?:[\\p{L}\\p{N}]|-|[\\._](?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+\\g<path>?)?(?<path>(?:(?:[^\\t\\n\\r !\"&'\\(\\)\\*,\\.:;<\\?\\]_~]|&(?![A-Za-z]*;(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))|[!\"'\\)\\*,\\.:;\\?_~](?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))|\\(\\g<path>*\\))+){0}",
          "name": "string.other.link.autolink.literal.http.mdx"
        },
        {
          "match": "(?<=^|[^A-Za-z/])(?i:mailto:|xmpp:)?(?:[0-9A-Za-z+\\-\\._])+@(?:(?:[0-9A-Za-z]|[-_](?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+(?:\\.(?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))))+(?:[A-Za-z]|[-_](?!(?:[!\"'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+",
          "name": "string.other.link.autolink.literal.email.mdx"
        }
      ]
    },
    "extension-gfm-footnote-call": {
      "match": "(\\[)(\\^)((?:[^\\t\\n\\r \\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+)(\\])",
      "captures": {
        "1": {
          "name": "punctuation.definition.string.begin.link.mdx"
        },
        "2": {
          "name": "punctuation.definition.string.begin.footnote.mdx"
        },
        "3": {
          "name": "entity.name.identifier.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "4": {
          "name": "punctuation.definition.string.end.footnote.mdx"
        }
      }
    },
    "extension-gfm-footnote-definition": {
      "begin": "(?:^|\\G)[\\t ]*(\\[)(\\^)((?:[^\\t\\n\\r \\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+)(\\])(:)[\\t ]*",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.string.begin.link.mdx"
        },
        "2": {
          "name": "punctuation.definition.string.begin.footnote.mdx"
        },
        "3": {
          "name": "entity.name.identifier.mdx",
          "patterns": [
            {
              "include": "#markdown-string"
            }
          ]
        },
        "4": {
          "name": "punctuation.definition.string.end.footnote.mdx"
        }
      },
      "patterns": [
        {
          "include": "#markdown-sections"
        }
      ],
      "while": "^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)"
    },
    "extension-gfm-strikethrough": {
      "match": "(?<=\\S)(?<!~)~{1,2}(?!~)|(?<!~)~{1,2}(?=\\S)(?!~)",
      "name": "punctuation.definition.deleted.strikethrough.mdx"
    },
    "extension-gfm-table": {
      "begin": "(?:^|\\G)[\\t ]*(?=\\|[^\\n\\r]+\\|[ \\t]*$)",
      "patterns": [
        {
          "match": "(?<=\\||(?:^|\\G))[\\t ]*((?:[^\\n\\r\\\\\\|]|\\\\[\\\\\\|]?)+?)[\\t ]*(?=\\||$)",
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#markdown-text"
                }
              ]
            }
          }
        },
        {
          "match": "(?:\\|)",
          "name": "markup.list.table-delimiter.mdx"
        }
      ],
      "end": "^(?=[\\t ]*$)"
    },
    "extension-github-gemoji": {
      "match": "(:)((?:(?:(?:hand_with_index_finger_and_thumb_cros|mailbox_clo|fist_rai|confu)s|r(?:aised_hand_with_fingers_splay|e(?:gister|l(?:iev|ax)))|disappointed_reliev|confound|(?:a(?:ston|ngu)i|flu)sh|unamus|hush)e|(?:chart_with_(?:down|up)wards_tre|large_orange_diamo|small_(?:orang|blu)e_diamo|large_blue_diamo|parasol_on_grou|loud_sou|rewi)n|s(?:un_behind_(?:large|small|rain)_clou|hallow_pan_of_foo|tar_of_davi|leeping_be|kateboar|a(?:tisfie|uropo)|hiel|oun|qui)|(?:hourglass_flowing_s|r(?:aised_back_of|ightwards)_h|(?:(?:(?:clippert|ascensi)on|norfolk)_is|christmas_is|desert_is|bouvet_is|new_zea|thai|eng|fin|ire)l|(?:palm_(?:down|up)|pinching|call_me|writing)_h|leftwards_h|s(?:w(?:itzer|azi)|cot)l|magic_w|ok_h|icel)an|(?:ear_with_hearing_a|pouring_liqu)i|(?:identification_c|(?:arrow_(?:back|for)|fast_for)w|credit_c|woman_be|biohaz|man_be|l(?:eop|iz))ar|m(?:usical_key|ortar_)boar|(?:drop_of_bl|canned_f)oo|c(?:apital_abc|upi)|person_bal|(?:clip|key)boar|mermai|(?:cust|plac)ar|worrie|po(?:la|u)n|threa|dv)d|(?:(?:(?:face_with_open_eyes_and_hand_over|face_with_diagonal|hand_over|open|no)_mou|mammo)t|running_shirt_with_sas|(?:fishing_pole_and_fi|(?:tropical_f|petri_d)i|(?:paint|tooth)bru|b(?:anglade|lowfi))s|(?:camera_fl|wavy_d)as|triump|menora|pouc|blus|watc|das|has)h|(?:s(?:o(?:(?:uth_georgia_south_sandwich|lomon)_island|ck)|miling_face_with_three_heart|t_kitts_nevi|weat_drop|agittariu|c(?:orpiu|issor)|ymbol|hort)|twisted_rightwards_arrow|(?:northern_mariana|heard_mcdonald|(?:british_virgi|us_virgi|pitcair|cayma)n|turks_caicos|us_outlying|(?:falk|a)land|marshall|c(?:anary|ocos)|faroe)_island|(?:face_holding_back_tea|(?:c(?:ard_index_divid|rossed_fing)|pinched_fing)e|night_with_sta)r|(?:two_(?:wo)?men_holding|people_holding|heart|open)_hand|(?:sunrise_over_mountai|(?:congratul|united_n)atio|jea)n|(?:caribbean_)?netherland|(?:f(?:lower_playing_car|ace_in_clou)|crossed_swor|prayer_bea)d|(?:money_with_win|nest_with_eg|crossed_fla|hotsprin)g|revolving_heart|(?:high_brightne|expressionle|(?:tumbler|wine)_gla|milk_gla|compa|dre)s|performing_art|(?:earth_americ|hondur)a|orthodox_cros|l(?:ow_brightnes|a(?:tin_cros|o)|ung)|no_pedestrian|c(?:ontrol_kno|lu)b|b(?:ookmark_tab|ahama|rick|ean)|nesting_doll|cook_island|(?:fleur_de_l|tenn)i|(?:o(?:ncoming_b|phiuch|ctop)|hi(?:ppopotam|bisc)|trolleyb|m(?:(?:rs|x)_cla|auriti|inib)|belar|cact|abac|(?:cyp|tau)r)u|medal_sport|(?:chopstic|firewor)k|rhinocero|(?:p(?:aw_prin|eanu)|footprin)t|two_heart|princes|barbado|aquariu|c(?:ustom|hain)|comoro|flag|wale|hug|vh)s|(?:(?:diamond_shape_with_a_dot_ins|playground_sl)id|(?:(?:first_quarter|last_quarter|full|new)_moon_with|(?:zipper|money)_mouth|dotted_line|upside_down|c(?:rying_c|owboy_h)at|(?:disguis|nauseat)ed|neutral|monocle|panda|tired|woozy|clown|nerd|zany|fox)_fac|s(?:t(?:uck_out_tongue_winking_ey|eam_locomotiv)|(?:lightly_(?:frown|smil)|neez|hush)ing_fac|(?:tudio_micropho|(?:hinto_shr|lot_mach)i|ierra_leo|axopho)n|mall_airplan|un_with_fac|a(?:luting_fac|tellit|k)|haved_ic|y(?:nagogu|ring)|n(?:owfl)?ak|urinam|pong)|(?:black_(?:medium_)?small|white_(?:(?:medium_)?small|large)|(?:black|white)_medium|black_large|orange|purple|yellow|b(?:rown|lue)|red)_squar|(?:(?:perso|woma)n_with_|man_with_)?probing_can|(?:arrows_c(?:ounterc)?lockwi|computer_mou|derelict_hou|carousel_hor|c(?:ity_sunri|hee)|heartpul|briefca|racehor|pig_no)s|(?:p(?:ut_litter_in_its_pl|outing_f)|frowning_f|cold_f|wind_f|hot_f)ac|(?:(?:face_with_head_band|ideograph_advant|adhesive_band|under|pack)a|currency_exchan|l(?:eft_l)?ugga|woman_jud|name_bad|man_jud|jud)g|face_with_peeking_ey|(?:(?:e(?:uropean_post_off|ar_of_r)|post_off)i|information_sour|ambulan)c|artificial_satellit|(?:busts?_in_silhouet|(?:vulcan_sal|parach)u|m(?:usical_no|ayot)|ro(?:ller_ska|set)|timor_les|ice_ska)t|(?:(?:incoming|red)_envelo|s(?:ao_tome_princi|tethosco)|(?:micro|tele)sco|citysca)p|(?:(?:(?:convenience|department)_st|musical_sc)o|f(?:light_depar|ramed_pic)tu|love_you_gestu|heart_on_fi|japanese_og|cote_divoi|perseve|singapo)r|b(?:ullettrain_sid|eliz|on)|(?:(?:female_|male_)?dete|radioa)ctiv|(?:christmas|deciduous|evergreen|tanabata|palm)_tre|(?:vibration_mo|cape_ver)d|(?:fortune_cook|neckt|self)i|(?:fork_and_)?knif|athletic_sho|(?:p(?:lead|arty)|drool|curs|melt|yawn|ly)ing_fac|vomiting_fac|(?:(?:c(?:urling_st|ycl)|meat_on_b|repeat_|headst)o|(?:fire_eng|tanger|ukra)i|rice_sce|(?:micro|i)pho|champag|pho)n|(?:cricket|video)_gam|(?:boxing_glo|oli)v|(?:d(?:ragon|izzy)|monkey)_fac|(?:m(?:artin|ozamb)iq|fond)u|wind_chim|test_tub|flat_sho|m(?:a(?:ns_sho|t)|icrob|ut)|(?:handsh|fish_c|moon_c|cupc)ak|nail_car|zimbabw|ho(?:neybe|l)|ice_cub|lacross|airplan|pensiv|c(?:a(?:n(?:dl|o)|k)|o(?:ffe|oki))|tongu|purs|d(?:at|ov)|n(?:iu|os)|fiv|kit|rag|ax)e|(?:(?:british_indian_ocean_territo|(?:plate_with_cutl|batt)e|medal_milita|low_batte|hunga|wea)r|family_(?:woman_(?:woman_(?:girl|boy)|girl|boy)|man_(?:woman_(?:girl|boy)|man_(?:girl|boy)|girl|boy))_bo|person_feeding_bab|woman_feeding_bab|s(?:u(?:spension_railwa|nn)|t(?:atue_of_libert|_barthelem|rawberr))|(?:m(?:ountain_cable|ilky_)|aerial_tram)wa|articulated_lorr|man_feeding_bab|mountain_railwa|partly_sunn|(?:vatican_c|infin)it|(?:outbox_tr|inbox_tr|birthd|motorw|paragu|urugu|norw|x_r)a|butterfl|ring_buo|t(?:urke|roph)|angr|fogg)y|(?:(?:perso|woma)n_in_motorized_wheelchai|(?:(?:notebook_with_decorative_c|four_leaf_cl)ov|(?:index_pointing_at_the_vie|white_flo)w|(?:face_with_thermome|non\\-potable_wa|woman_firefigh|desktop_compu|m(?:an_firefigh|otor_scoo)|(?:ro(?:ller_coa|o)|oy)s|potable_wa|kick_scoo|thermome|firefigh|helicop|ot)t|(?:woman_factory_wor|(?:woman_office|woman_health|health)_wor|man_(?:factory|office|health)_wor|(?:factory|office)_wor|rice_crac|black_jo|firecrac)k|telephone_receiv|(?:palms_up_toget|f(?:ire_extinguis|eat)|teac)h|(?:(?:open_)?file_fol|level_sli)d|police_offic|f(?:lying_sauc|arm)|woman_teach|roll_of_pap|(?:m(?:iddle_f|an_s)in|woman_sin|hambur|plun|dag)g|do_not_litt|wilted_flow|woman_farm|man_(?:teach|farm)|(?:bell_pe|hot_pe|fli)pp|l(?:o(?:udspeak|ve_lett|bst)|edg|add)|tokyo_tow|c(?:ucumb|lapp|anc)|b(?:e(?:ginn|av)|adg)|print|hamst)e|(?:perso|woma)n_in_manual_wheelchai|m(?:an(?:_in_motorized|(?:_in_man)?ual)|otorized)_wheelchai|(?:person_(?:white|curly|red)_|wheelc)hai|triangular_rule|(?:film_project|e(?:l_salv|cu)ad|elevat|tract|anch)o|s(?:traight_rul|pace_invad|crewdriv|nowboard|unflow|peak|wimm|ing|occ|how|urf|ki)e|r(?:ed_ca|unne|azo)|d(?:o(?:lla|o)|ee)|barbe)r|(?:(?:cloud_with_(?:lightning_and_)?ra|japanese_gobl|round_pushp|liechtenste|mandar|pengu|dolph|bahra|pushp|viol)i|(?:couple(?:_with_heart_wo|kiss_)man|construction_worker|(?:mountain_bik|bow|row)ing|lotus_position|(?:w(?:eight_lift|alk)|climb)ing|white_haired|curly_haired|raising_hand|super(?:villain|hero)|red_haired|basketball|s(?:(?:wimm|urf)ing|assy)|haircut|no_good|(?:vampir|massag)e|b(?:iking|ald)|zombie|fairy|mage|elf|ng)_(?:wo)?ma|(?:(?:couple_with_heart_man|isle_of)_m|(?:couplekiss_woman_|(?:b(?:ouncing_ball|lond_haired)|tipping_hand|pregnant|kneeling|deaf)_|frowning_|s(?:tanding|auna)_|po(?:uting_|lice)|running_|blonde_|o(?:lder|k)_)wom|(?:perso|woma)n_with_turb|(?:b(?:ouncing_ball|lond_haired)|tipping_hand|pregnant|kneeling|deaf)_m|man_with_turb|frowning_m|(?:turkmen|afghan|pak)ist|s(?:tanding_m|(?:outh_s)?ud|auna_m)|po(?:uting_|lice)m|running_m|azerbaij|k(?:yrgyz|azakh)st|tajikist|uzbekist|o(?:lder_m|k_m|ce)|(?:orang|bh)ut|taiw|jord)a|s(?:mall_red_triangle_dow|(?:valbard_jan_may|int_maart|ev)e|afety_pi|top_sig|t_marti|(?:corpi|po|o)o|wede)|(?:heavy_(?:d(?:ivision|ollar)|equals|minus|plus)|no_entry|female|male)_sig|(?:arrow_(?:heading|double)_d|p(?:erson_with_cr|oint_d)|arrow_up_d|thumbsd)ow|(?:house_with_gard|l(?:ock_with_ink_p|eafy_gre)|dancing_(?:wo)?m|fountain_p|keycap_t|chick|ali|yem|od)e|(?:izakaya|jack_o)_lanter|(?:funeral_u|(?:po(?:stal_h|pc)|capric)o|unico)r|chess_paw|b(?:a(?:llo|c)o|eni|rai)|l(?:anter|io)|c(?:o(?:ff)?i|row)|melo|rame|oma|yar)n|(?:s(?:t(?:uck_out_tongue_closed_ey|_vincent_grenadin)|kull_and_crossbon|unglass|pad)|(?:french_souther|palestinia)n_territori|(?:face_with_spiral|kissing_smiling)_ey|united_arab_emirat|kissing_closed_ey|(?:clinking_|dark_sun|eye)glass|(?:no_mobile_|head)phon|womans_cloth|b(?:allet_sho|lueberri)|philippin|(?:no_bicyc|seychel)l|roll_ey|(?:cher|a)ri|p(?:ancak|isc)|maldiv|leav)es|(?:f(?:amily_(?:woman_(?:woman_)?|man_(?:woman_|man_)?)girl_gir|earfu)|(?:woman_playing_hand|m(?:an_playing_hand|irror_)|c(?:onfetti|rystal)_|volley|track|base|8)bal|(?:(?:m(?:ailbox_with_(?:no_)?m|onor)|cockt|e\\-m)a|(?:person|bride|woman)_with_ve|man_with_ve|light_ra|braz|ema)i|(?:transgender|baby)_symbo|passport_contro|(?:arrow_(?:down|up)_sm|rice_b|footb)al|(?:dromedary_cam|ferris_whe|love_hot|high_he|pretz|falaf|isra)e|page_with_cur|me(?:dical_symbo|ta)|(?:n(?:ewspaper_ro|o_be)|bellhop_be)l|rugby_footbal|s(?:chool_satche|(?:peak|ee)_no_evi|oftbal|crol|anda|nai|hel)|(?:peace|atom)_symbo|hear_no_evi|cora|hote|bage|labe|rof|ow)l|(?:(?:negative_squared_cross|heavy_exclamation|part_alternation)_mar|(?:eight_spoked_)?asteris|(?:ballot_box_with_che|(?:(?:mantelpiece|alarm|timer)_c|un)lo|(?:ha(?:mmer_and_p|tch(?:ing|ed)_ch)|baby_ch|joyst)i|railway_tra|lipsti|peaco)c|heavy_check_mar|white_check_mar|tr(?:opical_drin|uc)|national_par|pickup_truc|diving_mas|floppy_dis|s(?:tar_struc|hamroc|kun|har)|chipmun|denmar|duc|hoo|lin)k|(?:leftwards_arrow_with_h|arrow_right_h|(?:o(?:range|pen)|closed|blue)_b)ook|(?:woman_playing_water_pol|m(?:an(?:_(?:playing_water_pol|with_gua_pi_ma|in_tuxed)|g)|ontenegr|o(?:roc|na)c|e(?:xic|tr|m))|(?:perso|woma)n_in_tuxed|(?:trinidad_toba|vir)g|water_buffal|b(?:urkina_fas|a(?:mbo|nj)|ent)|puerto_ric|water_pol|flaming|kangaro|(?:mosqu|burr)it|(?:avoc|torn)ad|curaca|lesoth|potat|ko(?:sov|k)|tomat|d(?:ang|od)|yo_y|hoch|t(?:ac|og)|zer)o|(?:c(?:entral_african|zech)|dominican)_republic|(?:eight_pointed_black_s|six_pointed_s|qa)tar|(?:business_suit_levitat|(?:classical_buil|breast_fee)d|(?:woman_cartwhee|m(?:an_(?:cartwhee|jugg)|en_wrest)|women_wrest|woman_jugg|face_exha|cartwhee|wrest|dump)l|c(?:hildren_cross|amp)|woman_facepalm|woman_shrugg|man_(?:facepalm|shrugg)|people_hugg|(?:person_fe|woman_da|man_da)nc|fist_oncom|horse_rac|(?:no_smo|thin)k|laugh|s(?:eedl|mok)|park|w(?:arn|edd))ing|f(?:a(?:mily(?:_(?:woman_(?:woman_(?:girl|boy)|girl|boy)|man_(?:woman_(?:girl|boy)|man_(?:girl|boy)|girl|boy)))?|ctory)|o(?:u(?:ntain|r)|ot|g)|r(?:owning)?|i(?:re|s[ht])|ly|u)|(?:(?:(?:information_desk|handball|bearded)_|(?:frowning|ok)_|juggling_|mer)pers|(?:previous_track|p(?:lay_or_p)?ause|black_square|white_square|next_track|r(?:ecord|adio)|eject)_butt|(?:wa[nx]ing_(?:crescent|gibbous)_m|bowl_with_sp|crescent_m|racc)o|(?:b(?:ouncing_ball|lond_haired)|tipping_hand|pregnant|kneeling|deaf)_pers|s(?:t(?:_pierre_miquel|op_butt|ati)|tanding_pers|peech_ballo|auna_pers)|r(?:eminder_r)?ibb|thought_ballo|watermel|badmint|c(?:amero|ray)|le(?:ban|m)|oni|bis)on|(?:heavy_heart_exclama|building_construc|heart_decora|exclama)tion|(?:(?:triangular_flag_on_po|(?:(?:woman_)?technolog|m(?:ountain_bicycl|an_technolog)|bicycl)i|(?:wo)?man_scienti|(?:wo)?man_arti|s(?:afety_ve|cienti)|empty_ne)s|(?:vertical_)?traffic_ligh|(?:rescue_worker_helm|military_helm|nazar_amul|city_suns|wastebask|dropl|t(?:rump|oil)|bouqu|buck|magn|secr)e|one_piece_swimsui|(?:(?:arrow_(?:low|upp)er|point)_r|bridge_at_n|copyr|mag_r)igh|(?:bullettrain_fro|(?:potted_pl|croiss|e(?:ggpl|leph))a)n|s(?:t(?:ar_and_cresc|ud)en|cream_ca|mi(?:ley?|rk)_ca|(?:peed|ail)boa|hir)|(?:arrow_(?:low|upp)er|point)_lef|woman_astronau|r(?:o(?:tating_ligh|cke|bo)|eceip)|heart_eyes_ca|man_astronau|(?:woman_stud|circus_t|man_stud|trid)en|(?:ringed_pla|file_cabi)ne|nut_and_bol|(?:older_)?adul|k(?:i(?:ssing_ca|wi_frui)|uwai|no)|(?:h(?:iking_bo|oney_p)|woman_pil|man_pil|[cp]arr|teap)o|(?:pouting_c|c(?:ut_of_m|old_sw)e|womans_h|montserr|(?:(?:motor_|row)b|lab_c)o|heartbe|toph)a|arrow_lef|fist_righ|flashligh|f(?:ist_lef|ee)|black_ca|astronau|(?:c(?:hest|oco)|dough)nu|innocen|joy_ca|artis|(?:acce|egy)p|co(?:me|a)|pilo)t|(?:heavy_multiplication_|t\\-re)x|(?:s(?:miling_face_with_te|piral_calend)|oncoming_police_c|chocolate_b|ra(?:ilway|cing)_c|police_c|polar_be|teddy_be|madagasc|blue_c|calend|myanm)ar|c(?:l(?:o(?:ud(?:_with_lightning)?|ck(?:1[0-2]?|[2-9]))|ap)?|o(?:uple(?:_with_heart|kiss)?|nstruction|mputer|ok|p|w)|a(?:r(?:d_index)?|mera)|r(?:icket|y)|h(?:art|ild))|(?:m(?:artial_arts_unifo|echanical_a)r|(?:cherry_)?blosso|b(?:aggage_clai|roo)|ice_?crea|facepal|mushroo|restroo|vietna|dru|yu)m|(?:woman_with_headscar|m(?:obile_phone_of|aple_lea)|fallen_lea|wol)f|(?:(?:closed_lock_with|old)_|field_hoc|ice_hoc|han)key|g(?:lobe_with_meridians|r(?:e(?:y_(?:exclama|ques)tion|e(?:n(?:_(?:square|circle|salad|apple|heart|book)|land)|ce)|nada)|i(?:mac|nn)ing|apes)|u(?:inea_bissau|ernsey|am|n)|(?:(?:olfing|enie)_(?:wo)?|uards(?:wo)?)man|(?:uadeloup|ame_di|iraff)e|ift_heart|i(?:braltar|rl)|(?:uatemal|(?:eorg|amb)i|orill|uyan|han)a|uide_dog|(?:oal_ne|hos)t|(?:oggl|lov)es|arlic|emini|uitar|abon|oat|ear|b)|construction_worker|(?:(?:envelope_with|bow_and)_ar|left_right_ar|raised_eyeb)row|(?:(?:oncoming_automob|crocod)i|right_anger_bubb|l(?:eft_speech_bubb|otion_bott|ady_beet)|congo_brazzavil|eye_speech_bubb|(?:large_blue|orange|purple|yellow|brown)_circ|(?:(?:european|japanese)_cas|baby_bot)t|b(?:alance_sca|eet)|s(?:ewing_need|weat_smi)|(?:black|white|red)_circ|(?:motor|re)cyc|pood|turt|tama|waff|musc|eag)le|first_quarter_moon|s(?:m(?:all_red_triangle|i(?:ley?|rk))|t(?:uck_out_tongue|ar)|hopping|leeping|p(?:arkle|ider)|unrise|nowman|chool|cream|k(?:ull|i)|weat|ix|a)|(?:(?:b(?:osnia_herzegovi|ana)|wallis_futu|(?:french_gui|botsw)a|argenti|st_hele)n|(?:(?:equatorial|papua_new)_guin|north_kor|eritr)e|t(?:ristan_da_cunh|ad)|(?:(?:(?:french_poly|indo)ne|tuni)s|(?:new_caledo|ma(?:urita|cedo)|lithua|(?:tanz|alb|rom)a|arme|esto)n|diego_garc|s(?:audi_arab|t_luc|lov(?:ak|en)|omal|erb)|e(?:arth_as|thiop)|m(?:icrone|alay)s|(?:austra|mongo)l|c(?:ambod|roat)|(?:bulga|alge)r|(?:colom|nami|zam)b|boliv|l(?:iber|atv))i|(?:wheel_of_dhar|cine|pana)m|(?:(?:(?:closed|beach|open)_)?umbrel|ceuta_melil|venezue|ang(?:uil|o)|koa)l|c(?:ongo_kinshas|anad|ub)|(?:western_saha|a(?:mpho|ndor)|zeb)r|american_samo|video_camer|m(?:o(?:vie_camer|ldov)|alt|eg)|(?:earth_af|costa_)ric|s(?:outh_afric|ri_lank|a(?:mo|nt))|bubble_te|(?:antarct|jama)ic|ni(?:caragu|geri|nj)|austri|pi(?:nat|zz)|arub|k(?:eny|aab)|indi|u7a7|l(?:lam|ib[ry])|dn)a|l(?:ast_quarter_moon|o(?:tus|ck)|ips|eo)|(?:hammer_and_wren|c(?:ockroa|hur)|facepun|wren|crut|pun)ch|s(?:nowman_with_snow|ignal_strength|weet_potato|miling_imp|p(?:ider_web|arkle[rs])|w(?:im_brief|an)|a(?:n(?:_marino|dwich)|lt)|topwatch|t(?:a(?:dium|r[2s])|ew)|l(?:e(?:epy|d)|oth)|hrimp|yria|carf|(?:hee|oa)p|ea[lt]|h(?:oe|i[pt])|o[bs])|(?:s(?:tuffed_flatbre|p(?:iral_notep|eaking_he))|(?:exploding_h|baguette_br|flatbr)e)ad|(?:arrow_(?:heading|double)_u|(?:p(?:lace_of_wor|assenger_)sh|film_str|tul)i|page_facing_u|biting_li|(?:billed_c|world_m)a|mouse_tra|(?:curly_lo|busst)o|thumbsu|lo(?:llip)?o|clam|im)p|(?:anatomical|sparkling|kissing|mending|orange|purple|yellow|broken|b(?:rown|l(?:ack|ue)))_heart|(?:(?:transgender|black)_fla|mechanical_le|(?:checkered|pirate)_fla|electric_plu|rainbow_fla|poultry_le|service_do|white_fla|luxembour|fried_eg|moneyba|h(?:edgeh|otd)o|shru)g|(?:cloud_with|mountain)_snow|(?:(?:antigua_barb|berm)u|ugan|rwan)da|(?:3r|2n)d_place_medal|1(?:st_place_medal|234|00)|lotus_position|(?:w(?:eight_lift|alk)|climb)ing|(?:(?:cup_with_str|auto_ricksh)a|carpentry_sa|windo|jigsa)w|(?:(?:couch_and|diya)_la|f(?:ried_shri|uelpu))mp|(?:woman_mechan|man_mechan|alemb)ic|(?:european_un|accord|collis|reun)ion|(?:flight_arriv|hospit|portug|seneg|nep)al|card_file_box|(?:(?:oncoming_)?tax|m(?:o(?:unt_fuj|ya)|alaw)|s(?:paghett|ush|ar)|b(?:r(?:occol|une)|urund)|(?:djibou|kiriba)t|hait|fij)i|(?:shopping_c|white_he|bar_ch)art|d(?:isappointed|ominica|e(?:sert)?)|raising_hand|super(?:villain|hero)|b(?:e(?:verage_box|ers|d)|u(?:bbles|lb|g)|i(?:k(?:ini|e)|rd)|o(?:o(?:ks|t)|a[rt]|y)|read|a[cn]k)|ra(?:ised_hands|bbit2|t)|(?:hindu_tem|ap)ple|thong_sandal|a(?:r(?:row_(?:right|down|up)|t)|bc?|nt)?|r(?:a(?:i(?:sed_hand|nbow)|bbit|dio|m)|u(?:nning)?|epeat|i(?:ng|ce)|o(?:ck|se))|takeout_box|(?:flying_|mini)disc|(?:(?:interrob|yin_y)a|b(?:o(?:omera|wli)|angba)|(?:ping_p|hong_k)o|calli|mahjo)ng|b(?:a(?:llot_box|sket|th?|by)|o(?:o(?:k(?:mark)?|m)|w)|u(?:tter|s)|e(?:ll|er?|ar))?|heart_eyes|basketball|(?:paperclip|dancer|ticket)s|point_up_2|(?:wo)?man_cook|n(?:ew(?:spaper)?|o(?:tebook|_entry)|iger)|t(?:e(?:lephone|a)|o(?:oth|p)|r(?:oll)?|wo)|h(?:o(?:u(?:rglass|se)|rse)|a(?:mmer|nd)|eart)|paperclip|full_moon|(?:b(?:lack_ni|athtu|om)|her)b|(?:long|oil)_drum|pineapple|(?:clock(?:1[0-2]?|[2-9])3|u6e8)0|p(?:o(?:int_up|ut)|r(?:ince|ay)|i(?:ck|g)|en)|e(?:nvelope|ight|u(?:ro)?|gg|ar|ye|s)|m(?:o(?:u(?:ntain|se)|nkey|on)|echanic|a(?:ilbox|g|n)|irror)?|new_moon|d(?:iamonds|olls|art)|question|k(?:iss(?:ing)?|ey)|haircut|no_good|(?:vampir|massag)e|g(?:olf(?:ing)?|u(?:inea|ard)|e(?:nie|m)|ift|rin)|h(?:a(?:ndbag|msa)|ouses|earts|ut)|postbox|toolbox|(?:pencil|t(?:rain|iger)|whale|cat|dog)2|belgium|(?:volca|kimo)no|(?:vanuat|tuval|pala|naur|maca)u|tokelau|o(?:range|ne?|m|k)?|office|dancer|ticket|dragon|pencil|zombie|w(?:o(?:mens|rm|od)|ave|ink|c)|m(?:o(?:sque|use2)|e(?:rman|ns)|a(?:li|sk))|jersey|tshirt|w(?:heel|oman)|dizzy|j(?:apan|oy)|t(?:rain|iger)|whale|fairy|a(?:nge[lr]|bcd|tm)|c(?:h(?:a(?:ir|d)|ile)|a(?:ndy|mel)|urry|rab|o(?:rn|ol|w2)|[dn])|p(?:ager|e(?:a(?:ch|r)|ru)|i(?:g2|ll|e)|oop)|n(?:otes|ine)|t(?:onga|hree|ent|ram|[mv])|f(?:erry|r(?:ies|ee|og)|ax)|u(?:7(?:533|981|121)|5(?:5b6|408|272)|6(?:307|70[89]))|mage|e(?:yes|nd)|i(?:ra[nq]|t)|cat|dog|elf|z(?:zz|ap)|yen|j(?:ar|p)|leg|id|u[kps]|ng|o[2x]|vs|kr|[\\+\\x2D]1|x|v)(:)",
      "name": "string.emoji.mdx",
      "captures": {
        "1": {
          "name": "punctuation.definition.gemoji.begin.mdx"
        },
        "2": {
          "name": "keyword.control.gemoji.mdx"
        },
        "3": {
          "name": "punctuation.definition.gemoji.end.mdx"
        }
      }
    },
    "extension-github-mention": {
      "match": "(?<![0-9A-Za-z_`])(@)((?:[0-9A-Za-z][0-9A-Za-z-]{0,38})(?:\\/(?:[0-9A-Za-z][0-9A-Za-z-]{0,38}))?)(?![0-9A-Za-z_`])",
      "name": "string.mention.mdx",
      "captures": {
        "1": {
          "name": "punctuation.definition.mention.begin.mdx"
        },
        "2": {
          "name": "string.other.link.mention.mdx"
        }
      }
    },
    "extension-github-reference": {
      "patterns": [
        {
          "match": "(?<![0-9A-Za-z_])(?:((?i:ghsa-|cve-))([A-Za-z0-9]+)|((?i:gh-|#))([0-9]+))(?![0-9A-Za-z_])",
          "name": "string.reference.mdx",
          "captures": {
            "1": {
              "name": "punctuation.definition.reference.begin.mdx"
            },
            "2": {
              "name": "string.other.link.reference.security-advisory.mdx"
            },
            "3": {
              "name": "punctuation.definition.reference.begin.mdx"
            },
            "4": {
              "name": "string.other.link.reference.issue-or-pr.mdx"
            }
          }
        },
        {
          "match": "(?<![^\\t\\n\\r \\(@\\[\\{])((?:[0-9A-Za-z][0-9A-Za-z-]{0,38})(?:\\/(?:(?:\\.git[0-9A-Za-z_-]|\\.(?!git)|[0-9A-Za-z_-])+))?)(#)([0-9]+)(?![0-9A-Za-z_])",
          "name": "string.reference.mdx",
          "captures": {
            "1": {
              "name": "string.other.link.reference.user.mdx"
            },
            "2": {
              "name": "punctuation.definition.reference.begin.mdx"
            },
            "3": {
              "name": "string.other.link.reference.issue-or-pr.mdx"
            }
          }
        }
      ]
    },
    "extension-math-flow": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(\\${2,})[^\\n\\r\\$]*?$",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.math.flow.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "markup.raw.math.flow.mdx",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.math.flow.mdx"
            }
          },
          "name": "markup.code.other.mdx"
        }
      ]
    },
    "extension-math-text": {
      "match": "(?<!\\$)(\\${2,})(?!\\$)(.+?)(?<!\\$)(\\1)(?!\\$)",
      "captures": {
        "1": {
          "name": "punctuation.definition.string.begin.math.mdx"
        },
        "2": {
          "name": "markup.raw.math.mdx"
        },
        "3": {
          "name": "punctuation.definition.string.end.math.mdx"
        }
      }
    },
    "extension-mdx-esm": {
      "begin": "(?:^|\\G)(?=(?i:export|import)[ ])",
      "end": "^(?=[\\t ]*$)",
      "patterns": [
        {
          "include": "source.tsx#statements"
        }
      ]
    },
    "extension-mdx-expression-flow": {
      "begin": "(?:^|\\G)[\\t ]*(\\{)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.string.begin.expression.mdx.js"
        }
      },
      "end": "(\\})(?:[\\t ]*$)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.string.begin.expression.mdx.js"
        }
      },
      "patterns": [
        {
          "include": "source.tsx#expression"
        }
      ]
    },
    "extension-mdx-expression-text": {
      "begin": "\\{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.expression.mdx.js"
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.expression.mdx.js"
        }
      },
      "patterns": [
        {
          "include": "source.tsx#expression"
        }
      ]
    },
    "extension-mdx-jsx-flow": {
      "begin": "(?<=^|\\G|\\>)[\\t ]*(<)(?=(?![\\t\\n\\r ]))(?:\\s*(/))?(?:\\s*(?:(?:((?:[_$[:alpha:]][-_$[:alnum:]]*))\\s*(:)\\s*((?:[_$[:alpha:]][-_$[:alnum:]]*)))|((?:(?:[_$[:alpha:]][_$[:alnum:]]*)(?:\\s*\\.\\s*(?:[_$[:alpha:]][-_$[:alnum:]]*))+))|((?:[_$[:upper:]][_$[:alnum:]]*))|((?:[_$[:alpha:]][-_$[:alnum:]]*))))?",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.tag.end.jsx"
        },
        "2": {
          "name": "punctuation.definition.tag.closing.jsx"
        },
        "3": {
          "name": "entity.name.tag.namespace.jsx"
        },
        "4": {
          "name": "punctuation.separator.namespace.jsx"
        },
        "5": {
          "name": "entity.name.tag.local.jsx"
        },
        "6": {
          "name": "support.class.component.jsx"
        },
        "7": {
          "name": "support.class.component.jsx"
        },
        "8": {
          "name": "entity.name.tag.jsx"
        }
      },
      "patterns": [
        {
          "include": "source.tsx#jsx-tag-attributes"
        }
      ],
      "end": "(?:(\\/)\\s*)?(>)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.tag.self-closing.jsx"
        },
        "2": {
          "name": "punctuation.definition.tag.end.jsx"
        }
      }
    },
    "extension-mdx-jsx-text": {
      "begin": "(<)(?=(?![\\t\\n\\r ]))(?:\\s*(/))?(?:\\s*(?:(?:((?:[_$[:alpha:]][-_$[:alnum:]]*))\\s*(:)\\s*((?:[_$[:alpha:]][-_$[:alnum:]]*)))|((?:(?:[_$[:alpha:]][_$[:alnum:]]*)(?:\\s*\\.\\s*(?:[_$[:alpha:]][-_$[:alnum:]]*))+))|((?:[_$[:upper:]][_$[:alnum:]]*))|((?:[_$[:alpha:]][-_$[:alnum:]]*))))?",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.tag.end.jsx"
        },
        "2": {
          "name": "punctuation.definition.tag.closing.jsx"
        },
        "3": {
          "name": "entity.name.tag.namespace.jsx"
        },
        "4": {
          "name": "punctuation.separator.namespace.jsx"
        },
        "5": {
          "name": "entity.name.tag.local.jsx"
        },
        "6": {
          "name": "support.class.component.jsx"
        },
        "7": {
          "name": "support.class.component.jsx"
        },
        "8": {
          "name": "entity.name.tag.jsx"
        }
      },
      "patterns": [
        {
          "include": "source.tsx#jsx-tag-attributes"
        }
      ],
      "end": "(?:(\\/)\\s*)?(>)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.tag.self-closing.jsx"
        },
        "2": {
          "name": "punctuation.definition.tag.end.jsx"
        }
      }
    },
    "extension-toml": {
      "begin": "\\A\\+{3}$",
      "end": "^\\+{3}$",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.start.toml"
        }
      },
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.toml"
        }
      },
      "contentName": "meta.embedded.toml",
      "patterns": [
        {
          "include": "source.toml"
        }
      ]
    },
    "extension-yaml": {
      "begin": "\\A-{3}$",
      "end": "^-{3}$",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.start.yaml"
        }
      },
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.yaml"
        }
      },
      "contentName": "meta.embedded.yaml",
      "patterns": [
        {
          "include": "source.yaml"
        }
      ]
    },
    "whatwg-html-data-character-reference-named-terminated": {
      "match": "(&)((?:C(?:(?:o(?:unterClockwiseCo)?|lockwiseCo)ntourIntegra|cedi)|(?:(?:Not(?:S(?:quareSu(?:per|b)set|u(?:cceeds|(?:per|b)set))|Precedes|Greater|Tilde|Less)|Not(?:Righ|Lef)tTriangle|(?:Not(?:(?:Succeed|Precede|Les)s|Greater)|(?:Precede|Succeed)s|Less)Slant|SquareSu(?:per|b)set|(?:Not(?:Greater|Tilde)|Tilde|Less)Full|RightTriangle|LeftTriangle|Greater(?:Slant|Full)|Precedes|Succeeds|Superset|NotHump|Subset|Tilde|Hump)Equ|int(?:er)?c|DotEqu)a|DoubleContourIntegra|(?:n(?:short)?parall|shortparall|p(?:arall|rur))e|(?:rightarrowta|l(?:eftarrowta|ced|ata|Ata)|sced|rata|perm|rced|rAta|ced)i|Proportiona|smepars|e(?:qvpars|pars|xc|um)|Integra|suphso|rarr[pt]|n(?:pars|tg)|l(?:arr[pt]|cei)|Rarrt|(?:hybu|fora)l|ForAl|[GKLNR-Tcknt]cedi|rcei|iexc|gime|fras|[uy]um|oso|dso|ium|Ium)l|D(?:o(?:uble(?:(?:L(?:ong(?:Left)?R|eftR)ight|L(?:ongL)?eft|UpDown|Right|Up)Arrow|Do(?:wnArrow|t))|wn(?:ArrowUpA|TeeA|a)rrow)|iacriticalDot|strok|ashv|cy)|(?:(?:(?:N(?:(?:otN)?estedGreater|ot(?:Greater|Less))|Less(?:Equal)?)Great|GreaterGreat|l[lr]corn|mark|east)e|Not(?:Double)?VerticalBa|(?:Not(?:Righ|Lef)tTriangleB|(?:(?:Righ|Lef)tDown|Right(?:Up)?|Left(?:Up)?)VectorB|RightTriangleB|Left(?:Triangle|Arrow)B|RightArrowB|V(?:er(?:ticalB|b)|b)|UpArrowB|l(?:ur(?:ds|u)h|dr(?:us|d)h|trP|owb|H)|profal|r(?:ulu|dld)h|b(?:igst|rvb)|(?:wed|ve[er])b|s(?:wn|es)w|n(?:wne|ese|sp|hp)|gtlP|d(?:oll|uh|H)|(?:hor|ov)b|u(?:dh|H)|r(?:lh|H)|ohb|hb|St)a|D(?:o(?:wn(?:(?:Left(?:Right|Tee)|RightTee)Vecto|(?:(?:Righ|Lef)tVector|Arrow)Ba)|ubleVerticalBa)|a(?:gge|r)|sc|f)|(?:(?:(?:Righ|Lef)tDown|(?:Righ|Lef)tUp)Tee|(?:Righ|Lef)tUpDown)Vecto|VerticalSeparato|(?:Left(?:Right|Tee)|RightTee)Vecto|less(?:eqq?)?gt|e(?:qslantgt|sc)|(?:RightF|LeftF|[lr]f)loo|u(?:[lr]corne|ar)|timesba|(?:plusa|cirs|apa)ci|U(?:arroci|f)|(?:dzigr|s(?:u(?:pl|br)|imr|[lr])|zigr|angz|nvH|l(?:tl|B)|r[Br])ar|UnderBa|(?:plus|harr|top|mid|of)ci|O(?:verBa|sc|f)|dd?agge|s(?:olba|sc)|g(?:t(?:rar|ci)|sc|f)|c(?:opys|u(?:po|ep)|sc|f)|(?:n(?:(?:v[lr]|w|r)A|l[Aa]|h[Aa]|eA)|x[hlr][Aa]|u(?:ua|da|A)|s[ew]A|rla|o[lr]a|rba|rAa|l[Ablr]a|h(?:oa|A)|era|d(?:ua|A)|cra|vA)r|o(?:lci|sc|ro|pa)|ropa|roar|l(?:o(?:pa|ar)|sc|Ar)|i(?:ma|s)c|ltci|dd?ar|a(?:ma|s)c|R(?:Bar|sc|f)|I(?:mac|f)|(?:u(?:ma|s)|oma|ema|Oma|Ema|[wyz]s|qs|ks|fs|Zs|Ys|Xs|Ws|Vs|Us|Ss|Qs|Ns|Ms|Ks|Is|Gs|Fs|Cs|Bs)c|Umac|x(?:sc|f)|v(?:sc|f)|rsc|n(?:ld|f)|m(?:sc|ld|ac|f)|rAr|h(?:sc|f)|b(?:sc|f)|psc|P(?:sc|f)|L(?:sc|ar|f)|jsc|J(?:sc|f)|E(?:sc|f)|[HT]sc|[yz]f|wf|tf|qf|pf|kf|jf|Zf|Yf|Xf|Wf|Vf|Tf|Sf|Qf|Nf|Mf|Kf|Hf|Gf|Ff|Cf|Bf)r|(?:Diacritical(?:Double)?A|[EINOSYZaisz]a)cute|(?:(?:N(?:egative(?:VeryThin|Thi(?:ck|n))|onBreaking)|NegativeMedium|ZeroWidth|VeryThin|Medium|Thi(?:ck|n))Spac|Filled(?:Very)?SmallSquar|Empty(?:Very)?SmallSquar|(?:N(?:ot(?:Succeeds|Greater|Tilde|Less)T|t)|DiacriticalT|VerticalT|PrecedesT|SucceedsT|NotEqualT|GreaterT|TildeT|EqualT|LessT|at|Ut|It)ild|(?:(?:DiacriticalG|[EIOUaiu]g)ra|(?:u|U)?bre|(?:o|e)?gra)v|(?:doublebar|curly|big|x)wedg|H(?:orizontalLin|ilbertSpac)|Double(?:Righ|Lef)tTe|(?:(?:measured|uw)ang|exponentia|dwang|ssmi|fema)l|(?:Poincarepla|reali|pho|oli)n|(?:black)?lozeng|(?:VerticalL|(?:prof|imag)l)in|SmallCircl|(?:black|dot)squar|rmoustach|l(?:moustach|angl)|(?:b(?:ack)?pr|(?:tri|xo)t|[qt]pr)im|[Tt]herefor|(?:DownB|[Gag]b)rev|(?:infint|nv[lr]tr)i|b(?:arwedg|owti)|an(?:dslop|gl)|(?:cu(?:rly)?v|rthr|lthr|b(?:ig|ar)v|xv)e|n(?:s(?:qsu[bp]|ccu)|prcu)|orslop|NewLin|maltes|Becaus|rangl|incar|(?:otil|Otil|t(?:ra|il))d|[inu]tild|s(?:mil|imn)|(?:sc|pr)cu|Wedg|Prim|Brev)e|(?:CloseCurly(?:Double)?Quo|OpenCurly(?:Double)?Quo|[ry]?acu)te|(?:Reverse(?:Up)?|Up)Equilibrium|C(?:apitalDifferentialD|(?:oproduc|(?:ircleD|enterD|d)o)t|on(?:grue|i)nt|conint|upCap|o(?:lone|pf)|OPY|hi)|(?:(?:(?:left)?rightsquig|(?:longleftr|twoheadr|nleftr|nLeftr|longr|hookr|nR|Rr)ight|(?:twohead|hook)left|longleft|updown|Updown|nright|Right|nleft|nLeft|down|up|Up)a|L(?:(?:ong(?:left)?righ|(?:ong)?lef)ta|eft(?:(?:right)?a|RightA|TeeA))|RightTeeA|LongLeftA|UpTeeA)rrow|(?:(?:RightArrow|Short|Upper|Lower)Left|(?:L(?:eftArrow|o(?:wer|ng))|LongLeft|Short|Upper)Right|ShortUp)Arrow|(?:b(?:lacktriangle(?:righ|lef)|ulle|no)|RightDoubleBracke|RightAngleBracke|Left(?:Doub|Ang)leBracke|(?:vartriangle|downharpoon|c(?:ircl|urv)earrow|upharpoon|looparrow)righ|(?:vartriangle|downharpoon|c(?:ircl|urv)earrow|upharpoon|looparrow|mapsto)lef|(?:UnderBrack|OverBrack|emptys|targ|Sups)e|diamondsui|c(?:ircledas|lubsui|are)|(?:spade|heart)sui|(?:(?:c(?:enter|t)|lmi|ino)d|(?:Triple|mD)D|n(?:otin|e)d|(?:ncong|doteq|su[bp]e|e[gl]s)d|l(?:ess|t)d|isind|c(?:ong|up|ap)?d|b(?:igod|N)|t(?:(?:ri)?d|opb)|s(?:ub|im)d|midd|g(?:tr?)?d|Lmid|DotD|(?:xo|ut|z)d|e(?:s?d|rD|fD|DD)|dtd|Zd|Id|Gd|Ed)o|realpar|i(?:magpar|iin)|S(?:uchTha|qr)|su[bp]mul|(?:(?:lt|i)que|gtque|(?:mid|low)a|e(?:que|xi))s|Produc|s(?:updo|e[cx])|r(?:parg|ec)|lparl|vangr|hamil|(?:homt|[lr]fis|ufis|dfis)h|phmma|t(?:wix|in)|quo|o(?:do|as)|fla|eDo)t|(?:(?:Square)?Intersecti|(?:straight|back|var)epsil|SquareUni|expectati|upsil|epsil|Upsil|eq?col|Epsil|(?:omic|Omic|rca|lca|eca|Sca|[NRTt]ca|Lca|Eca|[Zdz]ca|Dca)r|scar|ncar|herc|ccar|Ccar|iog|Iog)on|Not(?:S(?:quareSu(?:per|b)set|u(?:cceeds|(?:per|b)set))|Precedes|Greater|Tilde|Less)?|(?:(?:(?:Not(?:Reverse)?|Reverse)E|comp|E)leme|NotCongrue|(?:n[gl]|l)eqsla|geqsla|q(?:uat)?i|perc|iiii|coni|cwi|awi|oi)nt|(?:(?:rightleftharpo|leftrightharpo|quaterni)on|(?:(?:N(?:ot(?:NestedLess|Greater|Less)|estedLess)L|(?:eqslant|gtr(?:eqq?)?)l|LessL)e|Greater(?:Equal)?Le|cro)s|(?:rightright|leftleft|upup)arrow|rightleftarrow|(?:(?:(?:righ|lef)tthree|divideon|b(?:igo|ox)|[lr]o)t|InvisibleT)ime|downdownarrow|(?:(?:smallset|tri|dot|box)m|PlusM)inu|(?:RoundImpli|complex|Impli|Otim)e|C(?:ircle(?:Time|Minu|Plu)|ayley|ros)|(?:rationa|mode)l|NotExist|(?:(?:UnionP|MinusP|(?:b(?:ig[ou]|ox)|tri|s(?:u[bp]|im)|dot|xu|mn)p)l|(?:xo|u)pl|o(?:min|pl)|ropl|lopl|epl)u|otimesa|integer|e(?:linter|qual)|setminu|rarrbf|larrb?f|olcros|rarrf|mstpo|lesge|gesle|Exist|[lr]time|strn|napo|fltn|ccap|apo)s|(?:b(?:(?:lack|ig)triangledow|etwee)|(?:righ|lef)tharpoondow|(?:triangle|mapsto)dow|(?:nv|i)infi|ssetm|plusm|lagra|d(?:[lr]cor|isi)|c(?:ompf|aro)|s?frow|(?:hyph|curr)e|kgree|thor|ogo|ye)n|Not(?:Righ|Lef)tTriangle|(?:Up(?:Arrow)?|Short)DownArrow|(?:(?:n(?:triangle(?:righ|lef)t|succ|prec)|(?:trianglerigh|trianglelef|sqsu[bp]se|ques)t|backsim)e|lvertneq|gvertneq|(?:suc|pre)cneq|a(?:pprox|symp)e|(?:succ|prec|vee)e|circe)q|(?:UnderParenthes|OverParenthes|xn)is|(?:(?:Righ|Lef)tDown|Right(?:Up)?|Left(?:Up)?)Vector|D(?:o(?:wn(?:RightVector|LeftVector|Arrow|Tee)|t)|el|D)|l(?:eftrightarrows|br(?:k(?:sl[du]|e)|ac[ek])|tri[ef]|s(?:im[eg]|qb|h)|hard|a(?:tes|ngd|p)|o[pz]f|rm|gE|fr|eg|cy)|(?:NotHumpDownHum|(?:righ|lef)tharpoonu|big(?:(?:triangle|sqc)u|c[au])|HumpDownHum|m(?:apstou|lc)|(?:capbr|xsq)cu|smash|rarr[al]|(?:weie|sha)r|larrl|velli|(?:thin|punc)s|h(?:elli|airs)|(?:u[lr]c|vp)ro|d[lr]cro|c(?:upc[au]|apc[au])|thka|scna|prn?a|oper|n(?:ums|va|cu|bs)|ens|xc[au]|Ma)p|l(?:eftrightarrow|e(?:ftarrow|s(?:dot)?)?|moust|a(?:rrb?|te?|ng)|t(?:ri)?|sim|par|oz|l|g)|n(?:triangle(?:righ|lef)t|succ|prec)|SquareSu(?:per|b)set|(?:I(?:nvisibleComm|ot)|(?:varthe|iio)t|varkapp|(?:vars|S)igm|(?:diga|mco)mm|Cedill|lambd|Lambd|delt|Thet|omeg|Omeg|Kapp|Delt|nabl|zet|to[es]|rdc|ldc|iot|Zet|Bet|Et)a|b(?:lacktriangle|arwed|u(?:mpe?|ll)|sol|o(?:x[HVhv]|t)|brk|ne)|(?:trianglerigh|trianglelef|sqsu[bp]se|ques)t|RightT(?:riangl|e)e|(?:(?:varsu[bp]setn|su(?:psetn?|bsetn?))eq|nsu[bp]seteq|colone|(?:wedg|sim)e|nsime|lneq|gneq)q|DifferentialD|(?:(?:fall|ris)ingdots|(?:suc|pre)ccurly|ddots)eq|A(?:pplyFunction|ssign|(?:tild|grav|brev)e|acute|o(?:gon|pf)|lpha|(?:mac|sc|f)r|c(?:irc|y)|ring|Elig|uml|nd|MP)|(?:varsu[bp]setn|su(?:psetn?|bsetn?))eq|L(?:eft(?:T(?:riangl|e)e|Arrow)|l)|G(?:reaterEqual|amma)|E(?:xponentialE|quilibrium|sim|cy|TH|NG)|(?:(?:RightCeil|LeftCeil|varnoth|ar|Ur)in|(?:b(?:ack)?co|uri)n|vzigza|roan|loan|ffli|amal|sun|rin|n(?:tl|an)|Ran|Lan)g|(?:thick|succn?|precn?|less|g(?:tr|n)|ln|n)approx|(?:s(?:traightph|em)|(?:rtril|xu|u[lr]|xd|v[lr])tr|varph|l[lr]tr|b(?:sem|eps)|Ph)i|(?:circledd|osl|n(?:v[Dd]|V[Dd]|d)|hsl|V(?:vd|D)|Osl|v[Dd]|md)ash|(?:(?:RuleDelay|imp|cuw)e|(?:n(?:s(?:hort)?)?|short|rn)mi|D(?:Dotrah|iamon)|(?:i(?:nt)?pr|peri)o|odsol|llhar|c(?:opro|irmi)|(?:capa|anda|pou)n|Barwe|napi|api)d|(?:cu(?:rlyeq(?:suc|pre)|es)|telre|[ou]dbla|Udbla|Odbla|radi|lesc|gesc|dbla)c|(?:circled|big|eq|[is]|c|x|a|S|[hw]|W|H|G|E|C)circ|rightarrow|R(?:ightArrow|arr|e)|Pr(?:oportion)?|(?:longmapst|varpropt|p(?:lustw|ropt)|varrh|numer|(?:rsa|lsa|sb)qu|m(?:icr|h)|[lr]aqu|bdqu|eur)o|UnderBrace|ImaginaryI|B(?:ernoullis|a(?:ckslash|rv)|umpeq|cy)|(?:(?:Laplace|Mellin|zee)tr|Fo(?:uriertr|p)|(?:profsu|ssta)r|ordero|origo|[ps]op|nop|mop|i(?:op|mo)|h(?:op|al)|f(?:op|no)|dop|bop|Rop|Pop|Nop|Lop|Iop|Hop|Dop|[GJKMOQSTV-Zgjkoqvwyz]op|Bop)f|nsu[bp]seteq|t(?:ri(?:angleq|e)|imesd|he(?:tav|re4)|au)|O(?:verBrace|r)|(?:(?:pitchfo|checkma|t(?:opfo|b)|rob|rbb|l[bo]b)r|intlarh|b(?:brktbr|l(?:oc|an))|perten|NoBrea|rarrh|s[ew]arh|n[ew]arh|l(?:arrh|hbl)|uhbl|Hace)k|(?:NotCupC|(?:mu(?:lti)?|x)m|cupbrc)ap|t(?:riangle|imes|heta|opf?)|Precedes|Succeeds|Superset|NotEqual|(?:n(?:atural|exist|les)|s(?:qc[au]p|mte)|prime)s|c(?:ir(?:cled[RS]|[Ee])|u(?:rarrm|larrp|darr[lr]|ps)|o(?:mmat|pf)|aps|hi)|b(?:sol(?:hsu)?b|ump(?:eq|E)|ox(?:box|[Vv][HLRhlr]|[Hh][DUdu]|[DUdu][LRlr])|e(?:rnou|t[ah])|lk(?:34|1[24])|cy)|(?:l(?:esdot|squ|dqu)o|rsquo|rdquo|ngt)r|a(?:n(?:g(?:msda[a-h]|st|e)|d[dv])|st|p[Ee]|mp|fr|c[Edy])|(?:g(?:esdoto|E)|[lr]haru)l|(?:angrtvb|lrhar|nis)d|(?:(?:th(?:ic)?k|succn?|p(?:r(?:ecn?|n)?|lus)|rarr|l(?:ess|arr)|su[bp]|par|scn|g(?:tr|n)|ne|sc|n[glv]|ln|eq?)si|thetasy|ccupss|alefsy|botto)m|trpezium|(?:hks[ew]|dr?bk|bk)arow|(?:(?:[lr]a|d|c)empty|b(?:nequi|empty)|plank|nequi|odi)v|(?:(?:sc|rp|n)pol|point|fpart)int|(?:c(?:irf|wco)|awco)nint|PartialD|n(?:s(?:u[bp](?:set)?|c)|rarr|ot(?:ni|in)?|warr|e(?:arr)?|a(?:tur|p)|vlt|p(?:re?|ar)|um?|l[et]|ge|i)|n(?:atural|exist|les)|d(?:i(?:am(?:ond)?|v(?:ide)?)|tri|ash|ot|d)|backsim|l(?:esdot|squ|dqu)o|g(?:esdoto|E)|U(?:p(?:Arrow|si)|nion|arr)|angrtvb|p(?:l(?:anckh|us(?:d[ou]|[be]))|ar(?:sl|t)|r(?:od|nE|E)|erp|iv|m)|n(?:ot(?:niv[a-c]|in(?:v[a-c]|E))|rarr[cw]|s(?:u[bp][Ee]|c[er])|part|v(?:le|g[et])|g(?:es|E)|c(?:ap|y)|apE|lE|iv|Ll|Gg)|m(?:inus(?:du|b)|ale|cy|p)|rbr(?:k(?:sl[du]|e)|ac[ek])|(?:suphsu|tris|rcu|lcu)b|supdsub|(?:s[ew]a|n[ew]a)rrow|(?:b(?:ecaus|sim)|n(?:[lr]tri|bump)|csu[bp])e|equivDD|u(?:rcorn|lcorn|psi)|timesb|s(?:u(?:p(?:set)?|b(?:set)?)|q(?:su[bp]|u)|i(?:gma|m)|olb?|dot|mt|fr|ce?)|p(?:l(?:anck|us)|r(?:op|ec?)?|ara?|i)|o(?:times|r(?:d(?:er)?)?)|m(?:i(?:nusd?|d)|a(?:p(?:sto)?|lt)|u)|rmoust|g(?:e(?:s(?:dot|l)?|q)?|sim|n(?:ap|e)|t|l|g)|(?:spade|heart)s|c(?:u(?:rarr|larr|p)|o(?:m(?:ma|p)|lon|py|ng)|lubs|heck|cups|irc?|ent|ap)|colone|a(?:p(?:prox)?|n(?:g(?:msd|rt)?|d)|symp|f|c)|S(?:quare|u[bp]|c)|Subset|b(?:ecaus|sim)|vsu[bp]n[Ee]|s(?:u(?:psu[bp]|b(?:su[bp]|n[Ee]|E)|pn[Ee]|p[1-3E]|m)|q(?:u(?:ar[ef]|f)|su[bp]e)|igma[fv]|etmn|dot[be]|par|mid|hc?y|c[Ey])|f(?:rac(?:78|5[68]|45|3[458]|2[35]|1[2-68])|fr)|e(?:m(?:sp1[34]|ptyv)|psiv|c(?:irc|y)|t[ah]|ng|ll|fr|e)|(?:kappa|isins|vBar|fork|rho|phi|n[GL]t)v|divonx|V(?:dashl|ee)|gammad|G(?:ammad|cy|[Tgt])|[Ldhlt]strok|[HT]strok|(?:c(?:ylct|hc)|(?:s(?:oft|hch)|hard|S(?:OFT|HCH)|jser|J(?:ser|uk)|HARD|tsh|TSH|juk|iuk|I(?:uk|[EO])|zh|yi|nj|lj|k[hj]|gj|dj|ZH|Y[AIU]|NJ|LJ|K[HJ]|GJ|D[JSZ])c|ubrc|Ubrc|(?:yu|i[eo]|dz|v|p|f)c|TSc|SHc|CHc|Vc|Pc|Mc|Fc)y|(?:(?:wre|jm)at|dalet|a(?:ngs|le)p|imat|[lr]ds)h|[CLRUceglnou]acute|ff?llig|(?:f(?:fi|[ij])|sz|oe|ij|ae|OE|IJ)lig|r(?:a(?:tio|rr|ng)|tri|par|eal)|s[ew]arr|s(?:qc[au]p|mte)|prime|rarrb|i(?:n(?:fin|t)?|sin|t|i|c)|e(?:quiv|m(?:pty|sp)|p(?:si|ar)|cir|l|g)|kappa|isins|ncong|doteq|(?:wedg|sim)e|nsime|rsquo|rdquo|[lr]haru|V(?:dash|ert)|Tilde|lrhar|gamma|Equal|UpTee|n(?:[lr]tri|bump)|C(?:olon|up|ap)|v(?:arpi|ert)|u(?:psih|ml)|vnsu[bp]|r(?:tri[ef]|e(?:als|g)|a(?:rr[cw]|ng[de]|ce)|sh|lm|x)|rhard|sim[gl]E|i(?:sin[Ev]|mage|f[fr]|cy)|harrw|(?:n[gl]|l)eqq|g(?:sim[el]|tcc|e(?:qq|l)|nE|l[Eaj]|gg|ap)|ocirc|starf|utrif|d(?:trif|i(?:ams|e)|ashv|sc[ry]|fr|eg)|[du]har[lr]|T(?:HORN|a[bu])|(?:TRAD|[gl]vn)E|odash|[EUaeu]o(?:gon|pf)|alpha|[IJOUYgjuy]c(?:irc|y)|v(?:arr|ee)|succ|sim[gl]|harr|ln(?:ap|e)|lesg|(?:n[gl]|l)eq|ocir|star|utri|vBar|fork|su[bp]e|nsim|lneq|gneq|csu[bp]|zwn?j|yacy|x(?:opf|i)|scnE|o(?:r(?:d[fm]|v)|mid|lt|hm|gt|fr|cy|S)|scap|rsqb|ropf|ltcc|tsc[ry]|QUOT|[EOUYao]uml|rho|phi|n[GL]t|e[gl]s|ngt|I(?:nt|m)|nis|rfr|rcy|lnE|lEg|ufr|S(?:um|cy)|R(?:sh|ho)|psi|Ps?i|[NRTt]cy|L(?:sh|cy|[Tt])|kcy|Kcy|Hat|REG|[Zdz]cy|wr|lE|wp|Xi|Nu|Mu)(;)",
      "name": "constant.character-reference.named.html",
      "captures": {
        "1": {
          "name": "punctuation.definition.character-reference.begin.html"
        },
        "2": {
          "name": "keyword.control.character-reference.html"
        },
        "3": {
          "name": "punctuation.definition.character-reference.end.html"
        }
      }
    },
    "commonmark-code-fenced-c": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:dtrace|dtrace\\x2dscript|oncrpc|rpc|rpcgen|unified\\x2dparallel\\x2dc|x\\x2dbitmap|x\\x2dpixmap|xdr|\\.?(?:c|cats|cl|d|h|idc|opencl|pm|upc|x|xbm|xpm|xs)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.c",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.c.mdx",
          "patterns": [
            {
              "include": "source.c"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:dtrace|dtrace\\x2dscript|oncrpc|rpc|rpcgen|unified\\x2dparallel\\x2dc|x\\x2dbitmap|x\\x2dpixmap|xdr|\\.?(?:c|cats|cl|d|h|idc|opencl|pm|upc|x|xbm|xpm|xs)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.c",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.c.mdx",
          "patterns": [
            {
              "include": "source.c"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-c++": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:ags|ags\\x2dscript|asymptote|c\\+\\+|edje\\x2ddata\\x2dcollection|game\\x2dmaker\\x2dlanguage|swig|\\.?(?:asc|ash|asy|c\\+\\+|cc|cp|cpp|cppm|cxx|edc|gml|h|h\\+\\+|hh|hpp|hxx|i|inc|inl|ino|ipp|ixx|metal|re|tcc|tpp)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.c++",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.c++.mdx",
          "patterns": [
            {
              "include": "source.c++"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:ags|ags\\x2dscript|asymptote|c\\+\\+|edje\\x2ddata\\x2dcollection|game\\x2dmaker\\x2dlanguage|swig|\\.?(?:asc|ash|asy|c\\+\\+|cc|cp|cpp|cppm|cxx|edc|gml|h|h\\+\\+|hh|hpp|hxx|i|inc|inl|ino|ipp|ixx|metal|re|tcc|tpp)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.c++",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.c++.mdx",
          "patterns": [
            {
              "include": "source.c++"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-cs": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:beef|c#|cakescript|csharp|\\.?(?:bf|cake|cs|csx|eq|linq|uno)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.cs",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.cs.mdx",
          "patterns": [
            {
              "include": "source.cs"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:beef|c#|cakescript|csharp|\\.?(?:bf|cake|cs|csx|eq|linq|uno)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.cs",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.cs.mdx",
          "patterns": [
            {
              "include": "source.cs"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-css": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?css))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.css",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.css.mdx",
          "patterns": [
            {
              "include": "source.css"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?css))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.css",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.css.mdx",
          "patterns": [
            {
              "include": "source.css"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-less": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:less\\x2dcss|\\.?less))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.less",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.less.mdx",
          "patterns": [
            {
              "include": "source.css.less"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:less\\x2dcss|\\.?less))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.less",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.less.mdx",
          "patterns": [
            {
              "include": "source.css.less"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-scss": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?scss))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.scss",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.scss.mdx",
          "patterns": [
            {
              "include": "source.css.scss"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?scss))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.scss",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.scss.mdx",
          "patterns": [
            {
              "include": "source.css.scss"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-diff": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:udiff|\\.?(?:diff|patch)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.diff",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.diff.mdx",
          "patterns": [
            {
              "include": "source.diff"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:udiff|\\.?(?:diff|patch)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.diff",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.diff.mdx",
          "patterns": [
            {
              "include": "source.diff"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-md": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:pandoc|rmarkdown|\\.?(?:livemd|markdown|md|mdown|mdwn|mkd|mkdn|mkdown|qmd|rmd|ronn|scd|workbook)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.md",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.md.mdx",
          "patterns": [
            {
              "include": "source.md"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:pandoc|rmarkdown|\\.?(?:livemd|markdown|md|mdown|mdwn|mkd|mkdn|mkdown|qmd|rmd|ronn|scd|workbook)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.md",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.md.mdx",
          "patterns": [
            {
              "include": "source.md"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-go": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:golang|\\.?go))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.go",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.go.mdx",
          "patterns": [
            {
              "include": "source.go"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:golang|\\.?go))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.go",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.go.mdx",
          "patterns": [
            {
              "include": "source.go"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-graphql": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?(?:gql|graphql|graphqls)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.graphql",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.graphql.mdx",
          "patterns": [
            {
              "include": "source.graphql"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?(?:gql|graphql|graphqls)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.graphql",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.graphql.mdx",
          "patterns": [
            {
              "include": "source.graphql"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-ini": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:altium|altium\\x2ddesigner|dosini|\\.?(?:cfg|cnf|dof|ini|lektorproject|outjob|pcbdoc|prefs|prjpcb|pro|properties|schdoc|url)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.ini",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.ini.mdx",
          "patterns": [
            {
              "include": "source.ini"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:altium|altium\\x2ddesigner|dosini|\\.?(?:cfg|cnf|dof|ini|lektorproject|outjob|pcbdoc|prefs|prjpcb|pro|properties|schdoc|url)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.ini",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.ini.mdx",
          "patterns": [
            {
              "include": "source.ini"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-java": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:apex|chuck|unrealscript|\\.?(?:ck|cls|jav|java|jsh|uc)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.java",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.java.mdx",
          "patterns": [
            {
              "include": "source.java"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:apex|chuck|unrealscript|\\.?(?:ck|cls|jav|java|jsh|uc)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.java",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.java.mdx",
          "patterns": [
            {
              "include": "source.java"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-js": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:cycript|javascript\\+erb|json\\x2dwith\\x2dcomments|node|qt\\x2dscript|\\.?(?:_js|bones|cjs|code\\x2dsnippets|cy|es|es6|frag|gs|jake|javascript|js|js\\.erb|jsb|jscad|jsfl|jslib|jsm|json5|jsonc|jsonld|jspre|jss|jsx|mjs|njs|pac|qs|sjs|ssjs|sublime\\x2dbuild|sublime\\x2dcommands|sublime\\x2dcompletions|sublime\\x2dkeymap|sublime\\x2dmacro|sublime\\x2dmenu|sublime\\x2dmousemap|sublime\\x2dproject|sublime\\x2dsettings|sublime\\x2dtheme|sublime\\x2dworkspace|sublime_metrics|sublime_session|xsjs|xsjslib)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.js",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.js.mdx",
          "patterns": [
            {
              "include": "source.js"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:cycript|javascript\\+erb|json\\x2dwith\\x2dcomments|node|qt\\x2dscript|\\.?(?:_js|bones|cjs|code\\x2dsnippets|cy|es|es6|frag|gs|jake|javascript|js|js\\.erb|jsb|jscad|jsfl|jslib|jsm|json5|jsonc|jsonld|jspre|jss|jsx|mjs|njs|pac|qs|sjs|ssjs|sublime\\x2dbuild|sublime\\x2dcommands|sublime\\x2dcompletions|sublime\\x2dkeymap|sublime\\x2dmacro|sublime\\x2dmenu|sublime\\x2dmousemap|sublime\\x2dproject|sublime\\x2dsettings|sublime\\x2dtheme|sublime\\x2dworkspace|sublime_metrics|sublime_session|xsjs|xsjslib)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.js",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.js.mdx",
          "patterns": [
            {
              "include": "source.js"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-json": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:ecere\\x2dprojects|ipython\\x2dnotebook|jupyter\\x2dnotebook|max|max/msp|maxmsp|oasv2\\x2djson|oasv3\\x2djson|\\.?(?:4dform|4dproject|avsc|epj|geojson|gltf|har|ice|ipynb|json|json|json|json\\x2dtmlanguage|jsonl|maxhelp|maxpat|maxproj|mcmeta|mxt|pat|tfstate|tfstate\\.backup|topojson|webapp|webmanifest|yy|yyp)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.json",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.json.mdx",
          "patterns": [
            {
              "include": "source.json"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:ecere\\x2dprojects|ipython\\x2dnotebook|jupyter\\x2dnotebook|max|max/msp|maxmsp|oasv2\\x2djson|oasv3\\x2djson|\\.?(?:4dform|4dproject|avsc|epj|geojson|gltf|har|ice|ipynb|json|json|json|json\\x2dtmlanguage|jsonl|maxhelp|maxpat|maxproj|mcmeta|mxt|pat|tfstate|tfstate\\.backup|topojson|webapp|webmanifest|yy|yyp)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.json",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.json.mdx",
          "patterns": [
            {
              "include": "source.json"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-kotlin": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:kotlin|\\.?(?:kt|ktm|kts)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.kotlin",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.kotlin.mdx",
          "patterns": [
            {
              "include": "source.kotlin"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:kotlin|\\.?(?:kt|ktm|kts)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.kotlin",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.kotlin.mdx",
          "patterns": [
            {
              "include": "source.kotlin"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-lua": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?(?:fcgi|lua|nse|p8|pd_lua|rbxs|rockspec|wlua)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.lua",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.lua.mdx",
          "patterns": [
            {
              "include": "source.lua"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?(?:fcgi|lua|nse|p8|pd_lua|rbxs|rockspec|wlua)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.lua",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.lua.mdx",
          "patterns": [
            {
              "include": "source.lua"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-makefile": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:bsdmake|mf|\\.?(?:d|mak|make|makefile|mk|mkfile)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.makefile",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.makefile.mdx",
          "patterns": [
            {
              "include": "source.makefile"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:bsdmake|mf|\\.?(?:d|mak|make|makefile|mk|mkfile)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.makefile",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.makefile.mdx",
          "patterns": [
            {
              "include": "source.makefile"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-objc": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:obj\\x2dc|objc|objective\\x2dc|objectivec|\\.?(?:h|m)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.objc",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.objc.mdx",
          "patterns": [
            {
              "include": "source.objc"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:obj\\x2dc|objc|objective\\x2dc|objectivec|\\.?(?:h|m)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.objc",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.objc.mdx",
          "patterns": [
            {
              "include": "source.objc"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-perl": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:cperl|\\.?(?:al|cgi|fcgi|perl|ph|pl|plx|pm|psgi|t)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.perl",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.perl.mdx",
          "patterns": [
            {
              "include": "source.perl"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:cperl|\\.?(?:al|cgi|fcgi|perl|ph|pl|plx|pm|psgi|t)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.perl",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.perl.mdx",
          "patterns": [
            {
              "include": "source.perl"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-python": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:bazel|easybuild|python|python3|rusthon|snakemake|starlark|xonsh|\\.?(?:bzl|cgi|eb|fcgi|gyp|gypi|lmi|py|py3|pyde|pyi|pyp|pyt|pyw|rpy|sage|sagews|smk|snakefile|spec|star|tac|wsgi|xpy|xsh)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.python",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.python.mdx",
          "patterns": [
            {
              "include": "source.python"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:bazel|easybuild|python|python3|rusthon|snakemake|starlark|xonsh|\\.?(?:bzl|cgi|eb|fcgi|gyp|gypi|lmi|py|py3|pyde|pyi|pyp|pyt|pyw|rpy|sage|sagews|smk|snakefile|spec|star|tac|wsgi|xpy|xsh)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.python",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.python.mdx",
          "patterns": [
            {
              "include": "source.python"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-r": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:rscript|splus|\\.?(?:r|rd|rsx)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.r",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.r.mdx",
          "patterns": [
            {
              "include": "source.r"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:rscript|splus|\\.?(?:r|rd|rsx)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.r",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.r.mdx",
          "patterns": [
            {
              "include": "source.r"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-ruby": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:jruby|macruby|\\.?(?:builder|druby|duby|eye|fcgi|gemspec|god|jbuilder|mirah|mspec|pluginspec|podspec|prawn|rabl|rake|rb|rbi|rbuild|rbw|rbx|ru|ruby|spec|thor|watchr)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.ruby",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.ruby.mdx",
          "patterns": [
            {
              "include": "source.ruby"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:jruby|macruby|\\.?(?:builder|druby|duby|eye|fcgi|gemspec|god|jbuilder|mirah|mspec|pluginspec|podspec|prawn|rabl|rake|rb|rbi|rbuild|rbw|rbx|ru|ruby|spec|thor|watchr)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.ruby",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.ruby.mdx",
          "patterns": [
            {
              "include": "source.ruby"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-rust": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:rust|\\.?(?:rs|rs\\.in)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.rust",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.rust.mdx",
          "patterns": [
            {
              "include": "source.rust"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:rust|\\.?(?:rs|rs\\.in)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.rust",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.rust.mdx",
          "patterns": [
            {
              "include": "source.rust"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-shell": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:abuild|alpine\\x2dabuild|apkbuild|gentoo\\x2debuild|gentoo\\x2declass|openrc|openrc\\x2drunscript|shell|shell\\x2dscript|\\.?(?:bash|bats|cgi|command|csh|ebuild|eclass|fcgi|ksh|sh|sh\\.in|tcsh|tmux|tool|zsh|zsh\\x2dtheme)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.shell",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.shell.mdx",
          "patterns": [
            {
              "include": "source.shell"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:abuild|alpine\\x2dabuild|apkbuild|gentoo\\x2debuild|gentoo\\x2declass|openrc|openrc\\x2drunscript|shell|shell\\x2dscript|\\.?(?:bash|bats|cgi|command|csh|ebuild|eclass|fcgi|ksh|sh|sh\\.in|tcsh|tmux|tool|zsh|zsh\\x2dtheme)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.shell",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.shell.mdx",
          "patterns": [
            {
              "include": "source.shell"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-sql": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:plpgsql|sqlpl|\\.?(?:cql|db2|ddl|inc|mysql|pgsql|prc|sql|sql|sql|tab|udf|viw)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.sql",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.sql.mdx",
          "patterns": [
            {
              "include": "source.sql"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:plpgsql|sqlpl|\\.?(?:cql|db2|ddl|inc|mysql|pgsql|prc|sql|sql|sql|tab|udf|viw)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.sql",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.sql.mdx",
          "patterns": [
            {
              "include": "source.sql"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-swift": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?swift))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.swift",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.swift.mdx",
          "patterns": [
            {
              "include": "source.swift"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?swift))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.swift",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.swift.mdx",
          "patterns": [
            {
              "include": "source.swift"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-ts": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:typescript|\\.?(?:cts|mts|ts)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.ts",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.ts.mdx",
          "patterns": [
            {
              "include": "source.ts"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:typescript|\\.?(?:cts|mts|ts)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.ts",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.ts.mdx",
          "patterns": [
            {
              "include": "source.ts"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-vbnet": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:classic\\x2dvisual\\x2dbasic|fb|freebasic|realbasic|vb\\x2d\\.net|vb\\x2d6|vb\\.net|vb6|vbnet|vbscript|visual\\x2dbasic|visual\\x2dbasic\\x2d\\.net|visual\\x2dbasic\\x2d6|visual\\x2dbasic\\x2d6\\.0|visual\\x2dbasic\\x2dclassic|visual\\x2dbasic\\x2dfor\\x2dapplications|\\.?(?:bas|bas|bi|cls|cls|ctl|dsr|frm|frm|rbbas|rbfrm|rbmnu|rbres|rbtbar|rbuistate|vb|vba|vbhtml|vbs)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.vbnet",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.vbnet.mdx",
          "patterns": [
            {
              "include": "source.vbnet"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:classic\\x2dvisual\\x2dbasic|fb|freebasic|realbasic|vb\\x2d\\.net|vb\\x2d6|vb\\.net|vb6|vbnet|vbscript|visual\\x2dbasic|visual\\x2dbasic\\x2d\\.net|visual\\x2dbasic\\x2d6|visual\\x2dbasic\\x2d6\\.0|visual\\x2dbasic\\x2dclassic|visual\\x2dbasic\\x2dfor\\x2dapplications|\\.?(?:bas|bas|bi|cls|cls|ctl|dsr|frm|frm|rbbas|rbfrm|rbmnu|rbres|rbtbar|rbuistate|vb|vba|vbhtml|vbs)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.vbnet",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.vbnet.mdx",
          "patterns": [
            {
              "include": "source.vbnet"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-yaml": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:jar\\x2dmanifest|kaitai\\x2dstruct|oasv2\\x2dyaml|oasv3\\x2dyaml|unity3d\\x2dasset|\\.?(?:anim|asset|ksy|lookml|mask|mat|meta|mir|model\\.lkml|prefab|raml|reek|rviz|sublime\\x2dsyntax|syntax|unity|view\\.lkml|yaml|yaml|yaml|yaml\\x2dtmlanguage|yaml\\.sed|yml|yml|yml|yml\\.mysql)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.yaml",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.yaml.mdx",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:jar\\x2dmanifest|kaitai\\x2dstruct|oasv2\\x2dyaml|oasv3\\x2dyaml|unity3d\\x2dasset|\\.?(?:anim|asset|ksy|lookml|mask|mat|meta|mir|model\\.lkml|prefab|raml|reek|rviz|sublime\\x2dsyntax|syntax|unity|view\\.lkml|yaml|yaml|yaml|yaml\\x2dtmlanguage|yaml\\.sed|yml|yml|yml|yml\\.mysql)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.yaml",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.yaml.mdx",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-basic": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?(?:hta|htm|html|html\\.hl|inc|kit|mtml|xht|xhtml)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.basic",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.basic.mdx",
          "patterns": [
            {
              "include": "text.html.basic"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?(?:hta|htm|html|html\\.hl|inc|kit|mtml|xht|xhtml)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.basic",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.basic.mdx",
          "patterns": [
            {
              "include": "text.html.basic"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-php": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:html\\+php|\\.?(?:aw|ctp|fcgi|inc|php|php3|php4|php5|phps|phpt|phtml)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.php",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.php.mdx",
          "patterns": [
            {
              "include": "text.html.php"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:html\\+php|\\.?(?:aw|ctp|fcgi|inc|php|php3|php4|php5|phps|phpt|phtml)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.php",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.php.mdx",
          "patterns": [
            {
              "include": "text.html.php"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-xml": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:collada|eagle|labview|web\\x2dontology\\x2dlanguage|xpages|\\.?(?:adml|admx|ant|axaml|axml|brd|builds|ccproj|ccxml|clixml|cproject|cscfg|csdef|csl|csproj|ct|dae|depproj|dita|ditamap|ditaval|dll\\.config|dotsettings|filters|fsproj|fxml|glade|gml|gmx|grxml|gst|hzp|iml|ivy|jelly|jsproj|kml|launch|lvclass|lvlib|lvproj|mdpolicy|mjml|mm|mod|mxml|natvis|ncl|ndproj|nproj|nuspec|odd|osm|owl|pkgproj|pluginspec|proj|props|ps1xml|psc1|pt|qhelp|rdf|res|resx|rs|rss|sch|sch|scxml|sfproj|shproj|srdf|storyboard|sublime\\x2dsnippet|sw|targets|tml|ts|ui|urdf|ux|vbproj|vcxproj|vsixmanifest|vssettings|vstemplate|vxml|wixproj|workflow|wsdl|wsf|wxi|wxl|wxs|x3d|xacro|xaml|xib|xlf|xliff|xmi|xml|xml\\.dist|xmp|xpl|xproc|xproj|xsd|xsp\\x2dconfig|xsp\\.metadata|xspec|xul|zcml)))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.xml",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.xml.mdx",
          "patterns": [
            {
              "include": "text.xml"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:collada|eagle|labview|web\\x2dontology\\x2dlanguage|xpages|\\.?(?:adml|admx|ant|axaml|axml|brd|builds|ccproj|ccxml|clixml|cproject|cscfg|csdef|csl|csproj|ct|dae|depproj|dita|ditamap|ditaval|dll\\.config|dotsettings|filters|fsproj|fxml|glade|gml|gmx|grxml|gst|hzp|iml|ivy|jelly|jsproj|kml|launch|lvclass|lvlib|lvproj|mdpolicy|mjml|mm|mod|mxml|natvis|ncl|ndproj|nproj|nuspec|odd|osm|owl|pkgproj|pluginspec|proj|props|ps1xml|psc1|pt|qhelp|rdf|res|resx|rs|rss|sch|sch|scxml|sfproj|shproj|srdf|storyboard|sublime\\x2dsnippet|sw|targets|tml|ts|ui|urdf|ux|vbproj|vcxproj|vsixmanifest|vssettings|vstemplate|vxml|wixproj|workflow|wsdl|wsf|wxi|wxl|wxs|x3d|xacro|xaml|xib|xlf|xliff|xmi|xml|xml\\.dist|xmp|xpl|xproc|xproj|xsd|xsp\\x2dconfig|xsp\\.metadata|xspec|xul|zcml)))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.xml",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.xml.mdx",
          "patterns": [
            {
              "include": "text.xml"
            }
          ]
        }
      ]
    },
    "commonmark-code-fenced-svg": {
      "patterns": [
        {
          "begin": "(?:^|\\G)[\\t ]*(`{3,})(?:[\\t ]*((?i:\\.?svg))(?:[\\t ]+(?:[^\\n\\r`])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.svg",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.svg.mdx",
          "patterns": [
            {
              "include": "text.xml.svg"
            }
          ]
        },
        {
          "begin": "(?:^|\\G)[\\t ]*(~{3,})(?:[\\t ]*((?i:\\.?svg))(?:[\\t ]+(?:[^\\n\\r])+)?)(?:[\\t ]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.string.begin.code.fenced.mdx"
            },
            "2": {
              "name": "entity.name.function.mdx"
            }
          },
          "contentName": "meta.embedded.svg",
          "end": "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.code.fenced.mdx"
            }
          },
          "name": "markup.code.svg.mdx",
          "patterns": [
            {
              "include": "text.xml.svg"
            }
          ]
        }
      ]
    }
  }
}
export default grammar
