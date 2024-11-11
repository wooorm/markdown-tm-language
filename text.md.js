/* eslint-disable no-template-curly-in-string */
/**
 * @import {Grammar} from "@wooorm/starry-night"
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.md',
    '.livemd',
    '.markdown',
    '.mdown',
    '.mdwn',
    '.mkd',
    '.mkdn',
    '.mkdown',
    '.ronn',
    '.scd',
    '.workbook'
  ],
  names: ['markdown', 'md', 'pandoc'],
  patterns: [
    {
      include: '#markdown-frontmatter'
    },
    {
      include: '#markdown-sections'
    }
  ],
  repository: {
    'markdown-frontmatter': {
      patterns: [
        {
          include: '#extension-toml'
        },
        {
          include: '#extension-yaml'
        }
      ]
    },
    'markdown-sections': {
      patterns: [
        {
          include: '#commonmark-block-quote'
        },
        {
          include: '#commonmark-code-fenced'
        },
        {
          include: '#commonmark-code-indented'
        },
        {
          include: '#extension-gfm-footnote-definition'
        },
        {
          include: '#commonmark-definition'
        },
        {
          include: '#commonmark-heading-atx'
        },
        {
          include: '#commonmark-thematic-break'
        },
        {
          include: '#commonmark-heading-setext'
        },
        {
          include: '#commonmark-html-flow'
        },
        {
          include: '#commonmark-list-item'
        },
        {
          include: '#extension-directive-leaf'
        },
        {
          include: '#extension-directive-container'
        },
        {
          include: '#extension-gfm-table'
        },
        {
          include: '#extension-math-flow'
        },
        {
          include: '#commonmark-paragraph'
        }
      ]
    },
    'markdown-string': {
      patterns: [
        {
          include: '#commonmark-character-escape'
        },
        {
          include: '#commonmark-character-reference'
        }
      ]
    },
    'markdown-text': {
      patterns: [
        {
          include: '#commonmark-attention'
        },
        {
          include: '#commonmark-autolink'
        },
        {
          include: '#commonmark-character-escape'
        },
        {
          include: '#commonmark-character-reference'
        },
        {
          include: '#commonmark-code-text'
        },
        {
          include: '#commonmark-hard-break-trailing'
        },
        {
          include: '#commonmark-hard-break-escape'
        },
        {
          include: '#commonmark-html-text'
        },
        {
          include: '#commonmark-label-end'
        },
        {
          include: '#extension-gfm-footnote-call'
        },
        {
          include: '#commonmark-label-start'
        },
        {
          include: '#extension-directive-text'
        },
        {
          include: '#extension-gfm-autolink-literal'
        },
        {
          include: '#extension-gfm-strikethrough'
        },
        {
          include: '#extension-github-gemoji'
        },
        {
          include: '#extension-github-mention'
        },
        {
          include: '#extension-github-reference'
        },
        {
          include: '#extension-math-text'
        }
      ]
    },
    'commonmark-autolink': {
      patterns: [
        {
          match:
            "(<)((?:[0-9A-Za-z!\"#$%&'*+\\-\\/=?^_`{|}~'])+@(?:[0-9A-Za-z](?:[0-9A-Za-z-]{0,61}[0-9A-Za-z])?(?:\\.[0-9A-Za-z](?:[0-9A-Za-z-]{0,61}[A-Za-z])?)*))(>)",
          captures: {
            1: {
              name: 'string.other.begin.autolink.md'
            },
            2: {
              name: 'string.other.link.autolink.email.md'
            },
            3: {
              name: 'string.other.end.autolink.md'
            }
          }
        },
        {
          match: '(<)((?:[A-Za-z][+\\-.0-9A-Za-z]{0,31}):[^\\p{Cc}\\ ]*?)(>)',
          captures: {
            1: {
              name: 'string.other.begin.autolink.md'
            },
            2: {
              name: 'string.other.link.autolink.protocol.md'
            },
            3: {
              name: 'string.other.end.autolink.md'
            }
          }
        }
      ]
    },
    'commonmark-attention': {
      patterns: [
        {
          match: '(?<=\\S)\\*{3,}|\\*{3,}(?=\\S)',
          name: 'string.other.strong.emphasis.asterisk.md'
        },
        {
          match:
            '(?<=[\\p{L}\\p{N}])_{3,}(?![\\p{L}\\p{N}])|(?<=\\p{P})_{3,}|(?<![\\p{L}\\p{N}]|\\p{P})_{3,}(?!\\s)',
          name: 'string.other.strong.emphasis.underscore.md'
        },
        {
          match: '(?<=\\S)\\*{2}|\\*{2}(?=\\S)',
          name: 'string.other.strong.asterisk.md'
        },
        {
          match:
            '(?<=[\\p{L}\\p{N}])_{2}(?![\\p{L}\\p{N}])|(?<=\\p{P})_{2}|(?<![\\p{L}\\p{N}]|\\p{P})_{2}(?!\\s)',
          name: 'string.other.strong.underscore.md'
        },
        {
          match: '(?<=\\S)\\*|\\*(?=\\S)',
          name: 'string.other.emphasis.asterisk.md'
        },
        {
          match:
            '(?<=[\\p{L}\\p{N}])_(?![\\p{L}\\p{N}])|(?<=\\p{P})_|(?<![\\p{L}\\p{N}]|\\p{P})_(?!\\s)',
          name: 'string.other.emphasis.underscore.md'
        }
      ]
    },
    'commonmark-block-quote': {
      begin: '(?:^|\\G)[ ]{0,3}(>)[ ]?',
      beginCaptures: {
        0: {
          name: 'markup.quote.md'
        },
        1: {
          name: 'punctuation.definition.quote.begin.md'
        }
      },
      patterns: [
        {
          include: '#markdown-sections'
        }
      ],
      name: 'markup.quote.md',
      while: '(>)[ ]?',
      whileCaptures: {
        0: {
          name: 'markup.quote.md'
        },
        1: {
          name: 'punctuation.definition.quote.begin.md'
        }
      }
    },
    'commonmark-character-escape': {
      match: '\\\\(?:[!"#$%&\'()*+,\\-.\\/:;<=>?@\\[\\\\\\]^_`{|}~])',
      name: 'constant.language.character-escape.md'
    },
    'commonmark-character-reference': {
      patterns: [
        {
          include: '#whatwg-html-data-character-reference-named-terminated'
        },
        {
          match: '(&)(#)([Xx])([0-9A-Fa-f]{1,6})(;)',
          name: 'constant.language.character-reference.numeric.hexadecimal.html',
          captures: {
            1: {
              name: 'punctuation.definition.character-reference.begin.html'
            },
            2: {
              name: 'punctuation.definition.character-reference.numeric.html'
            },
            3: {
              name: 'punctuation.definition.character-reference.numeric.hexadecimal.html'
            },
            4: {
              name: 'constant.numeric.integer.hexadecimal.html'
            },
            5: {
              name: 'punctuation.definition.character-reference.end.html'
            }
          }
        },
        {
          match: '(&)(#)([0-9]{1,7})(;)',
          name: 'constant.language.character-reference.numeric.decimal.html',
          captures: {
            1: {
              name: 'punctuation.definition.character-reference.begin.html'
            },
            2: {
              name: 'punctuation.definition.character-reference.numeric.html'
            },
            3: {
              name: 'constant.numeric.integer.decimal.html'
            },
            4: {
              name: 'punctuation.definition.character-reference.end.html'
            }
          }
        }
      ]
    },
    'commonmark-code-fenced': {
      patterns: [
        {
          include: '#commonmark-code-fenced-apib'
        },
        {
          include: '#commonmark-code-fenced-asciidoc'
        },
        {
          include: '#commonmark-code-fenced-c'
        },
        {
          include: '#commonmark-code-fenced-clojure'
        },
        {
          include: '#commonmark-code-fenced-coffee'
        },
        {
          include: '#commonmark-code-fenced-console'
        },
        {
          include: '#commonmark-code-fenced-cpp'
        },
        {
          include: '#commonmark-code-fenced-cs'
        },
        {
          include: '#commonmark-code-fenced-css'
        },
        {
          include: '#commonmark-code-fenced-diff'
        },
        {
          include: '#commonmark-code-fenced-dockerfile'
        },
        {
          include: '#commonmark-code-fenced-elixir'
        },
        {
          include: '#commonmark-code-fenced-elm'
        },
        {
          include: '#commonmark-code-fenced-erlang'
        },
        {
          include: '#commonmark-code-fenced-gitconfig'
        },
        {
          include: '#commonmark-code-fenced-go'
        },
        {
          include: '#commonmark-code-fenced-graphql'
        },
        {
          include: '#commonmark-code-fenced-haskell'
        },
        {
          include: '#commonmark-code-fenced-html'
        },
        {
          include: '#commonmark-code-fenced-ini'
        },
        {
          include: '#commonmark-code-fenced-java'
        },
        {
          include: '#commonmark-code-fenced-js'
        },
        {
          include: '#commonmark-code-fenced-json'
        },
        {
          include: '#commonmark-code-fenced-julia'
        },
        {
          include: '#commonmark-code-fenced-kotlin'
        },
        {
          include: '#commonmark-code-fenced-less'
        },
        {
          include: '#commonmark-code-fenced-less'
        },
        {
          include: '#commonmark-code-fenced-lua'
        },
        {
          include: '#commonmark-code-fenced-makefile'
        },
        {
          include: '#commonmark-code-fenced-md'
        },
        {
          include: '#commonmark-code-fenced-mdx'
        },
        {
          include: '#commonmark-code-fenced-objc'
        },
        {
          include: '#commonmark-code-fenced-perl'
        },
        {
          include: '#commonmark-code-fenced-php'
        },
        {
          include: '#commonmark-code-fenced-php'
        },
        {
          include: '#commonmark-code-fenced-python'
        },
        {
          include: '#commonmark-code-fenced-r'
        },
        {
          include: '#commonmark-code-fenced-raku'
        },
        {
          include: '#commonmark-code-fenced-ruby'
        },
        {
          include: '#commonmark-code-fenced-rust'
        },
        {
          include: '#commonmark-code-fenced-scala'
        },
        {
          include: '#commonmark-code-fenced-scss'
        },
        {
          include: '#commonmark-code-fenced-shell'
        },
        {
          include: '#commonmark-code-fenced-shell-session'
        },
        {
          include: '#commonmark-code-fenced-sql'
        },
        {
          include: '#commonmark-code-fenced-svg'
        },
        {
          include: '#commonmark-code-fenced-swift'
        },
        {
          include: '#commonmark-code-fenced-toml'
        },
        {
          include: '#commonmark-code-fenced-ts'
        },
        {
          include: '#commonmark-code-fenced-tsx'
        },
        {
          include: '#commonmark-code-fenced-vbnet'
        },
        {
          include: '#commonmark-code-fenced-xml'
        },
        {
          include: '#commonmark-code-fenced-yaml'
        },
        {
          include: '#commonmark-code-fenced-unknown'
        }
      ]
    },
    'commonmark-code-fenced-unknown': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?:[^\\t\\n\\r` ])+)(?:[\\t ]+((?:[^\\n\\r`])+))?)?(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          contentName: 'markup.raw.code.fenced.md',
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.other.md'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?:[^\\t\\n\\r ])+)(?:[\\t ]+((?:[^\\n\\r])+))?)?(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          contentName: 'markup.raw.code.fenced.md',
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.other.md'
        }
      ]
    },
    'commonmark-code-indented': {
      match: '(?:^|\\G)(?:[ ]{4}|\\t)(.+?)$',
      captures: {
        1: {
          name: 'markup.raw.code.indented.md'
        }
      },
      name: 'markup.code.other.md'
    },
    'commonmark-code-text': {
      match: '(?<!`)(`+)(?!`)(.+?)(?<!`)(\\1)(?!`)',
      name: 'markup.code.other.md',
      captures: {
        1: {
          name: 'string.other.begin.code.md'
        },
        2: {
          name: 'markup.raw.code.md markup.inline.raw.code.md'
        },
        3: {
          name: 'string.other.end.code.md'
        }
      }
    },
    'commonmark-definition': {
      match:
        '(?:^|\\G)[ ]{0,3}(\\[)((?:[^\\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+?)(\\])(:)[ \\t]*(?:(<)((?:[^\\n<\\\\>]|\\\\[<\\\\>]?)*)(>)|(\\g<destination_raw>))(?:[\\t ]+(?:(")((?:[^"\\\\]|\\\\["\\\\]?)*)(")|(\')((?:[^\'\\\\]|\\\\[\'\\\\]?)*)(\')|(\\()((?:[^\\)\\\\]|\\\\[\\)\\\\]?)*)(\\))))?$(?<destination_raw>(?!\\<)(?:(?:[^\\p{Cc}\\ \\\\\\(\\)]|\\\\[\\(\\)\\\\]?)|\\(\\g<destination_raw>*\\))+){0}',
      name: 'meta.link.reference.def.md',
      captures: {
        1: {
          name: 'string.other.begin.md'
        },
        2: {
          name: 'entity.name.identifier.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        3: {
          name: 'string.other.end.md'
        },
        4: {
          name: 'punctuation.separator.key-value.md'
        },
        5: {
          name: 'string.other.begin.destination.md'
        },
        6: {
          name: 'string.other.link.destination.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        7: {
          name: 'string.other.end.destination.md'
        },
        8: {
          name: 'string.other.link.destination.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        9: {
          name: 'string.other.begin.md'
        },
        10: {
          name: 'string.quoted.double.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        11: {
          name: 'string.other.end.md'
        },
        12: {
          name: 'string.other.begin.md'
        },
        13: {
          name: 'string.quoted.single.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        14: {
          name: 'string.other.end.md'
        },
        15: {
          name: 'string.other.begin.md'
        },
        16: {
          name: 'string.quoted.paren.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        17: {
          name: 'string.other.end.md'
        }
      }
    },
    'commonmark-hard-break-escape': {
      match: '\\\\$',
      name: 'constant.language.character-escape.line-ending.md'
    },
    'commonmark-hard-break-trailing': {
      match: '( ){2,}$',
      name: 'carriage-return constant.language.character-escape.line-ending.md'
    },
    'commonmark-heading-atx': {
      patterns: [
        {
          match:
            '(?:^|\\G)[ ]{0,3}(#{1}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$',
          name: 'markup.heading.atx.1.md',
          captures: {
            1: {
              name: 'punctuation.definition.heading.md'
            },
            2: {
              name: 'entity.name.section.md',
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.heading.md'
            }
          }
        },
        {
          match:
            '(?:^|\\G)[ ]{0,3}(#{2}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$',
          name: 'markup.heading.atx.2.md',
          captures: {
            1: {
              name: 'punctuation.definition.heading.md'
            },
            2: {
              name: 'entity.name.section.md',
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.heading.md'
            }
          }
        },
        {
          match:
            '(?:^|\\G)[ ]{0,3}(#{3}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$',
          name: 'markup.heading.atx.3.md',
          captures: {
            1: {
              name: 'punctuation.definition.heading.md'
            },
            2: {
              name: 'entity.name.section.md',
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.heading.md'
            }
          }
        },
        {
          match:
            '(?:^|\\G)[ ]{0,3}(#{4}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$',
          name: 'markup.heading.atx.4.md',
          captures: {
            1: {
              name: 'punctuation.definition.heading.md'
            },
            2: {
              name: 'entity.name.section.md',
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.heading.md'
            }
          }
        },
        {
          match:
            '(?:^|\\G)[ ]{0,3}(#{5}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$',
          name: 'markup.heading.atx.5.md',
          captures: {
            1: {
              name: 'punctuation.definition.heading.md'
            },
            2: {
              name: 'entity.name.section.md',
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.heading.md'
            }
          }
        },
        {
          match:
            '(?:^|\\G)[ ]{0,3}(#{6}(?!#))(?:[ \\t]+([^\\r\\n]+?)(?:[ \\t]+(#+?))?)?[ \\t]*$',
          name: 'markup.heading.atx.6.md',
          captures: {
            1: {
              name: 'punctuation.definition.heading.md'
            },
            2: {
              name: 'entity.name.section.md',
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            },
            3: {
              name: 'punctuation.definition.heading.md'
            }
          }
        }
      ]
    },
    'commonmark-heading-setext': {
      patterns: [
        {
          match: '(?:^|\\G)[ ]{0,3}(={1,})[ \\t]*$',
          name: 'markup.heading.setext.1.md'
        },
        {
          match: '(?:^|\\G)[ ]{0,3}(-{1,})[ \\t]*$',
          name: 'markup.heading.setext.2.md'
        }
      ]
    },
    'commonmark-html-flow': {
      patterns: [
        {
          match: '(?:^|\\G)[ ]{0,3}<!---?>[^\\n\\r]*$',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          begin: '(?=(?:^|\\G)[ ]{0,3}<!--)',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '(?<=-->)([^\\n\\r]*)$',
          endCaptures: {
            1: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          match: '(?:^|\\G)[ ]{0,3}<\\?>[^\\n\\r]*$',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          begin: '(?=(?:^|\\G)[ ]{0,3}<\\?)',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '(?<=\\?>)([^\\n\\r]*)$',
          endCaptures: {
            1: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          begin: '(?=(?:^|\\G)[ ]{0,3}<![A-Za-z])',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '(?<=\\>)([^\\n\\r]*)$',
          endCaptures: {
            1: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          begin: '(?=(?:^|\\G)[ ]{0,3}<!\\[CDATA\\[)',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '(?<=\\]\\]>)([^\\n\\r]*)$',
          endCaptures: {
            1: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          begin:
            '(?=(?:^|\\G)[ ]{0,3}<(?i:textarea|script|style|pre)[\\t\\n\\r >])',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '</(?i:textarea|script|style|pre)[^\\n\\r]*$',
          endCaptures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          begin:
            '(?=(?:^|\\G)[ ]{0,3}</?(?i:figcaption|(?:blockquot|ifram|figur)e|(?:menuite|para)m|optgroup|c(?:olgroup|aption|enter)|(?:f(?:rame|ield)se|tfoo)t|b(?:asefont|ody)|(?:noframe|detail)s|section|summary|a(?:(?:rticl|sid)e|ddress)|search|l(?:egend|ink)|d(?:i(?:alog|[rv])|[dlt])|header|footer|option|frame|track|thead|tbody|t(?:it|ab)le|menu|head|base|h(?:tml|[1-6r])|form|main|col|nav|t[hr]|li|td|ol|ul|p)(?:[\\t >]|\\/>|$))',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '^(?=[\\t ]*$)|$'
        },
        {
          begin:
            '(?=(?:^|\\G)[ ]{0,3}</[A-Za-z][-0-9A-Za-z]*[\\t\\n\\r ]*>(?:[\\t ]*$))',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '^(?=[\\t ]*$)|$'
        },
        {
          begin:
            '(?=(?:^|\\G)[ ]{0,3}<[A-Za-z][-0-9A-Za-z]*(?:[\\t\\n\\r ]+[:A-Z_a-z][\\-\\.0-9:A-Z_a-z]*(?:[\\t\\n\\r ]*=[\\t\\n\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\r "\'\\/<=>`]+))?)*(?:[\\t\\n\\r ]*\\/)?[\\t\\n\\r ]*>(?:[\\t ]*$))',
          name: 'text.html.basic',
          patterns: [
            {
              include: '#whatwg-html'
            }
          ],
          end: '^(?=[\\t ]*$)|$'
        }
      ]
    },
    'commonmark-html-text': {
      patterns: [
        {
          match: '<!--.*?-->',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          match: '<\\?.*?\\?>',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          match: '<![A-Za-z].*?>',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          match: '<!\\[CDATA\\[.*?\\]\\]>',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          match: '</[A-Za-z][-0-9A-Za-z]*[\\t\\n\\r ]*>',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        },
        {
          match:
            '<[A-Za-z][-0-9A-Za-z]*(?:[\\t\\n\\r ]+[:A-Z_a-z][\\-\\.0-9:A-Z_a-z]*(?:[\\t\\n\\r ]*=[\\t\\n\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\r "\'\\/<=>`]+))?)*(?:[\\t\\n\\r ]*\\/)?[\\t\\n\\r ]*>',
          name: 'text.html.basic',
          captures: {
            0: {
              patterns: [
                {
                  include: '#whatwg-html'
                }
              ]
            }
          }
        }
      ]
    },
    'commonmark-label-end': {
      patterns: [
        {
          match:
            '(\\])(\\()[\\t ]*(?:(?:(<)((?:[^\\n<\\\\>]|\\\\[<\\\\>]?)*)(>)|(\\g<destination_raw>))(?:[\\t ]+(?:(")((?:[^"\\\\]|\\\\["\\\\]?)*)(")|(\')((?:[^\'\\\\]|\\\\[\'\\\\]?)*)(\')|(\\()((?:[^\\)\\\\]|\\\\[\\)\\\\]?)*)(\\))))?)?[\\t ]*(\\))(?<destination_raw>(?!\\<)(?:(?:[^\\p{Cc}\\ \\\\\\(\\)]|\\\\[\\(\\)\\\\]?)|\\(\\g<destination_raw>*\\))+){0}',
          captures: {
            1: {
              name: 'string.other.end.md'
            },
            2: {
              name: 'string.other.begin.md'
            },
            3: {
              name: 'string.other.begin.destination.md'
            },
            4: {
              name: 'string.other.link.destination.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            5: {
              name: 'string.other.end.destination.md'
            },
            6: {
              name: 'string.other.link.destination.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            7: {
              name: 'string.other.begin.md'
            },
            8: {
              name: 'string.quoted.double.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            9: {
              name: 'string.other.end.md'
            },
            10: {
              name: 'string.other.begin.md'
            },
            11: {
              name: 'string.quoted.single.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            12: {
              name: 'string.other.end.md'
            },
            13: {
              name: 'string.other.begin.md'
            },
            14: {
              name: 'string.quoted.paren.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            15: {
              name: 'string.other.end.md'
            },
            16: {
              name: 'string.other.end.md'
            }
          }
        },
        {
          match: '(\\])(\\[)((?:[^\\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+?)(\\])',
          captures: {
            1: {
              name: 'string.other.end.md'
            },
            2: {
              name: 'string.other.begin.md'
            },
            3: {
              name: 'entity.name.identifier.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            4: {
              name: 'string.other.end.md'
            }
          }
        },
        {
          match: '(\\])',
          captures: {
            1: {
              name: 'string.other.end.md'
            }
          }
        }
      ]
    },
    'commonmark-label-start': {
      patterns: [
        {
          match: '\\!\\[(?!\\^)',
          name: 'string.other.begin.image.md'
        },
        {
          match: '\\[',
          name: 'string.other.begin.link.md'
        }
      ]
    },
    'commonmark-list-item': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}((?:[*+-]))(?:[ ]{4}(?![ ])|\\t)(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'variable.unordered.list.md'
            },
            2: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{1}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}((?:[*+-]))(?:[ ]{3}(?![ ]))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'variable.unordered.list.md'
            },
            2: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}((?:[*+-]))(?:[ ]{2}(?![ ]))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'variable.unordered.list.md'
            },
            2: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)[ ]{3}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}((?:[*+-]))(?:[ ]{1}|(?=\\n))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'variable.unordered.list.md'
            },
            2: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)[ ]{2}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}([0-9]{9})((?:\\.|\\)))(?:[ ]{4}(?![ ])|\\t(?![\\t ]))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){3}[ ]{2}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{9})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{8})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){3}[ ]{1}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{9})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{8})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{7})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){3}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{9})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{8})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{7})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{6})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'string.other.number.md'
            },
            8: {
              name: 'variable.ordered.list.md'
            },
            9: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}[ ]{3}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{8})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{7})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{6})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{5})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'string.other.number.md'
            },
            8: {
              name: 'variable.ordered.list.md'
            },
            9: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}[ ]{2}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{7})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{6})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{5})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{4})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'string.other.number.md'
            },
            8: {
              name: 'variable.ordered.list.md'
            },
            9: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}[ ]{1}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{6})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{5})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{4})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{3})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'string.other.number.md'
            },
            8: {
              name: 'variable.ordered.list.md'
            },
            9: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t){2}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{5})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{4})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{3})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{2})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'string.other.number.md'
            },
            8: {
              name: 'variable.ordered.list.md'
            },
            9: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{3}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{4})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{3})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{2})((?:\\.|\\)))(?:[ ]{3}(?![ ]))|([0-9]{1})((?:\\.|\\)))(?:[ ]{4}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'string.other.number.md'
            },
            8: {
              name: 'variable.ordered.list.md'
            },
            9: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{2}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{3})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9]{2})((?:\\.|\\)))(?:[ ]{2}(?![ ]))|([0-9]{1})((?:\\.|\\)))(?:[ ]{3}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'string.other.number.md'
            },
            6: {
              name: 'variable.ordered.list.md'
            },
            7: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)[ ]{1}'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(?:([0-9]{2})((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))|([0-9])((?:\\.|\\)))(?:[ ]{2}(?![ ])))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'string.other.number.md'
            },
            4: {
              name: 'variable.ordered.list.md'
            },
            5: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)'
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}([0-9])((?:\\.|\\)))(?:[ ]{1}|(?=[ \\t]*\\n))(\\[[\\t Xx]\\](?=[\\t\\n\\r ]+(?:$|[^\\t\\n\\r ])))?',
          beginCaptures: {
            1: {
              name: 'string.other.number.md'
            },
            2: {
              name: 'variable.ordered.list.md'
            },
            3: {
              name: 'keyword.other.tasklist.md'
            }
          },
          patterns: [
            {
              include: '#markdown-sections'
            }
          ],
          while: '^(?=[\\t ]*$)|(?:^|\\G)[ ]{3}'
        }
      ]
    },
    'commonmark-paragraph': {
      begin: '(?![\\t ]*$)',
      name: 'meta.paragraph.md',
      patterns: [
        {
          include: '#markdown-text'
        }
      ],
      while: '(?:^|\\G)(?:[ ]{4}|\\t)'
    },
    'commonmark-thematic-break': {
      match: '(?:^|\\G)[ ]{0,3}([-*_])[ \\t]*(?:\\1[ \\t]*){2,}$',
      name: 'meta.separator.md'
    },
    'extension-directive-text': {
      match:
        '(?<!:)(:)((?:[A-Za-z][0-9A-Za-z\\-_]*))(?![0-9A-Za-z\\-_:])(?:(\\[)(\\g<directive_label>*)(\\]))?(?:(\\{)((?:(?:[A-Za-z:_][0-9A-Za-z\\-\\.:_]*)(?:[\\t ]*=[\\t ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\r "\'<=>`\\}]+))?|[\\.#](?:[^\\t\\n\\r "#\'\\.<=>`\\}][^\\t\\n\\r "#\'\\.<=>`\\}]*)|[\\t ])*)(\\}))?(?<directive_label>(?:[^\\\\\\[\\]]|\\\\[\\\\\\[\\]]?)|\\[\\g<directive_label>*\\]){0}',
      name: 'meta.tag.${2:/downcase}.md',
      captures: {
        1: {
          name: 'string.other.begin.directive.md'
        },
        2: {
          name: 'entity.name.function.md'
        },
        3: {
          name: 'string.other.begin.directive.label.md'
        },
        4: {
          patterns: [
            {
              include: '#markdown-text'
            }
          ]
        },
        5: {
          name: 'string.other.end.directive.label.md'
        },
        6: {
          name: 'string.other.begin.directive.attributes.md'
        },
        7: {
          patterns: [
            {
              include: '#extension-directive-attribute'
            }
          ]
        },
        8: {
          name: 'string.other.end.directive.attributes.md'
        }
      }
    },
    'extension-directive-leaf': {
      match:
        '(?:^|\\G)[ ]{0,3}(:{2})((?:[A-Za-z][0-9A-Za-z\\-_]*))(?:(\\[)(\\g<directive_label>*)(\\]))?(?:(\\{)((?:(?:[A-Za-z:_][0-9A-Za-z\\-\\.:_]*)(?:[\\t ]*=[\\t ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\r "\'<=>`\\}]+))?|[\\.#](?:[^\\t\\n\\r "#\'\\.<=>`\\}][^\\t\\n\\r "#\'\\.<=>`\\}]*)|[\\t ])*)(\\}))?(?:[\\t ]*$)(?<directive_label>(?:[^\\\\\\[\\]]|\\\\[\\\\\\[\\]]?)|\\[\\g<directive_label>*\\]){0}',
      name: 'meta.tag.${2:/downcase}.md',
      captures: {
        1: {
          name: 'string.other.begin.directive.md'
        },
        2: {
          name: 'entity.name.function.md'
        },
        3: {
          name: 'string.other.begin.directive.label.md'
        },
        4: {
          patterns: [
            {
              include: '#markdown-text'
            }
          ]
        },
        5: {
          name: 'string.other.end.directive.label.md'
        },
        6: {
          name: 'string.other.begin.directive.attributes.md'
        },
        7: {
          patterns: [
            {
              include: '#extension-directive-attribute'
            }
          ]
        },
        8: {
          name: 'string.other.end.directive.attributes.md'
        }
      }
    },
    'extension-directive-container': {
      begin:
        '(?:^|\\G)[ ]{0,3}(:{3,})((?:[A-Za-z][0-9A-Za-z\\-_]*))(?:(\\[)(\\g<directive_label>*)(\\]))?(?:(\\{)((?:(?:[A-Za-z:_][0-9A-Za-z\\-\\.:_]*)(?:[\\t ]*=[\\t ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\r "\'<=>`\\}]+))?|[\\.#](?:[^\\t\\n\\r "#\'\\.<=>`\\}][^\\t\\n\\r "#\'\\.<=>`\\}]*)|[\\t ])*)(\\}))?(?:[\\t ]*$)(?<directive_label>(?:[^\\\\\\[\\]]|\\\\[\\\\\\[\\]]?)|\\[\\g<directive_label>*\\]){0}',
      beginCaptures: {
        1: {
          name: 'string.other.begin.directive.md'
        },
        2: {
          name: 'entity.name.function.md'
        },
        3: {
          name: 'string.other.begin.directive.label.md'
        },
        4: {
          patterns: [
            {
              include: '#markdown-text'
            }
          ]
        },
        5: {
          name: 'string.other.end.directive.label.md'
        },
        6: {
          name: 'string.other.begin.directive.attributes.md'
        },
        7: {
          patterns: [
            {
              include: '#extension-directive-attribute'
            }
          ]
        },
        8: {
          name: 'string.other.end.directive.attributes.md'
        }
      },
      patterns: [
        {
          include: '#markdown-sections'
        }
      ],
      end: '(\\1)(?:[\\t ]*$)',
      endCaptures: {
        1: {
          name: 'string.other.end.directive.md'
        }
      }
    },
    'extension-directive-attribute': {
      match:
        '((?:[A-Za-z:_][0-9A-Za-z\\-\\.:_]*))(?:[\\t ]*(=)[\\t ]*(?:(")([^"]*)(")|(\')([^\']*)(\')|([^\\t\\n\\r "\'<=>`\\}]+)))?|(\\.)((?:[^\\t\\n\\r "#\'\\.<=>`\\}][^\\t\\n\\r "#\'\\.<=>`\\}]*))|(#)((?:[^\\t\\n\\r "#\'\\.<=>`\\}][^\\t\\n\\r "#\'\\.<=>`\\}]*))',
      captures: {
        1: {
          name: 'entity.other.attribute-name.md'
        },
        2: {
          name: 'punctuation.separator.key-value.md'
        },
        3: {
          name: 'string.other.begin.md'
        },
        4: {
          name: 'string.quoted.double.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        },
        5: {
          name: 'string.other.end.md'
        },
        6: {
          name: 'string.other.begin.md'
        },
        7: {
          name: 'string.quoted.single.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        },
        8: {
          name: 'string.other.end.md'
        },
        9: {
          name: 'string.unquoted.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        },
        10: {
          name: 'entity.other.attribute-name.class.md'
        },
        11: {
          name: 'string.unquoted.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        },
        12: {
          name: 'entity.other.attribute-name.id.md'
        },
        13: {
          name: 'string.unquoted.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        }
      }
    },
    'extension-gfm-autolink-literal': {
      patterns: [
        {
          match:
            '(?<=^|[\\t\\n\\r \\(\\*\\_\\[\\]~])(?=(?i:www)\\.[^\\n\\r])(?:(?:[\\p{L}\\p{N}]|-|[\\._](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+\\g<path>?)?(?<path>(?:(?:[^\\t\\n\\r !"&\'\\(\\)\\*,\\.:;<\\?\\]_~]|&(?![A-Za-z]*;(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))|[!"\'\\)\\*,\\.:;\\?_~](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))|\\(\\g<path>*\\))+){0}',
          name: 'string.other.link.autolink.literal.www.md'
        },
        {
          match:
            '(?<=^|[^A-Za-z])(?i:https?://)(?=[\\p{L}\\p{N}])(?:(?:[\\p{L}\\p{N}]|-|[\\._](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+\\g<path>?)?(?<path>(?:(?:[^\\t\\n\\r !"&\'\\(\\)\\*,\\.:;<\\?\\]_~]|&(?![A-Za-z]*;(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))|[!"\'\\)\\*,\\.:;\\?_~](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))|\\(\\g<path>*\\))+){0}',
          name: 'string.other.link.autolink.literal.http.md'
        },
        {
          match:
            '(?<=^|[^A-Za-z/])(?i:mailto:|xmpp:)?(?:[0-9A-Za-z+\\-\\._])+@(?:(?:[0-9A-Za-z]|[-_](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+(?:\\.(?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))))+(?:[A-Za-z]|[-_](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+',
          name: 'string.other.link.autolink.literal.email.md'
        }
      ]
    },
    'extension-gfm-footnote-call': {
      match: '(\\[)(\\^)((?:[^\\t\\n\\r \\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+)(\\])',
      captures: {
        1: {
          name: 'string.other.begin.link.md'
        },
        2: {
          name: 'string.other.begin.footnote.md'
        },
        3: {
          name: 'entity.name.identifier.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        4: {
          name: 'string.other.end.footnote.md'
        }
      }
    },
    'extension-gfm-footnote-definition': {
      begin:
        '(?:^|\\G)[ ]{0,3}(\\[)(\\^)((?:[^\\t\\n\\r \\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+)(\\])(:)[\\t ]*',
      beginCaptures: {
        1: {
          name: 'string.other.begin.link.md'
        },
        2: {
          name: 'string.other.begin.footnote.md'
        },
        3: {
          name: 'entity.name.identifier.md',
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        },
        4: {
          name: 'string.other.end.footnote.md'
        }
      },
      patterns: [
        {
          include: '#markdown-sections'
        }
      ],
      while: '^(?=[\\t ]*$)|(?:^|\\G)(?:[ ]{4}|\\t)'
    },
    'extension-gfm-strikethrough': {
      match: '(?<=\\S)(?<!~)~{1,2}(?!~)|(?<!~)~{1,2}(?=\\S)(?!~)',
      name: 'string.other.strikethrough.md'
    },
    'extension-gfm-table': {
      begin: '(?:^|\\G)[ ]{0,3}(?=\\|[^\\n\\r]+\\|[ \\t]*$)',
      patterns: [
        {
          match:
            '(?<=\\||(?:^|\\G))[\\t ]*((?:[^\\n\\r\\\\\\|]|\\\\[\\\\\\|]?)+?)[\\t ]*(?=\\||$)',
          captures: {
            1: {
              patterns: [
                {
                  include: '#markdown-text'
                }
              ]
            }
          }
        },
        {
          match: '(?:\\|)',
          name: 'markup.list.table-delimiter.md'
        }
      ],
      end: '^(?=[\\t ]*$)|$'
    },
    'extension-github-gemoji': {
      match:
        '(:)((?:(?:(?:hand_with_index_finger_and_thumb_cros|mailbox_clo|fist_rai|confu)s|r(?:aised_hand_with_fingers_splay|e(?:gister|l(?:iev|ax)))|disappointed_reliev|confound|(?:a(?:ston|ngu)i|flu)sh|unamus|hush)e|(?:chart_with_(?:down|up)wards_tre|large_orange_diamo|small_(?:orang|blu)e_diamo|large_blue_diamo|parasol_on_grou|loud_sou|rewi)n|(?:rightwards_pushing_h|hourglass_flowing_s|leftwards_(?:pushing_)?h|(?:raised_back_of|palm_(?:down|up)|call_me)_h|(?:(?:(?:clippert|ascensi)on|norfolk)_is|christmas_is|desert_is|bouvet_is|new_zea|thai|eng|fin|ire)l|rightwards_h|pinching_h|writing_h|s(?:w(?:itzer|azi)|cot)l|magic_w|ok_h|icel)an|s(?:un_behind_(?:large|small|rain)_clou|hallow_pan_of_foo|tar_of_davi|leeping_be|kateboar|a(?:tisfie|uropo)|hiel|oun|qui)|(?:ear_with_hearing_a|pouring_liqu)i|(?:identification_c|(?:arrow_(?:back|for)|fast_for)w|credit_c|woman_be|biohaz|man_be|l(?:eop|iz))ar|m(?:usical_key|ortar_)boar|(?:drop_of_bl|canned_f)oo|c(?:apital_abc|upi)|person_bal|(?:black_bi|(?:cust|plac)a)r|(?:clip|key)boar|mermai|pea_po|worrie|po(?:la|u)n|threa|dv)d|(?:(?:(?:face_with_open_eyes_and_hand_over|face_with_diagonal|open|no)_mou|h(?:and_over_mou|yacin)|mammo)t|running_shirt_with_sas|(?:(?:fishing_pole_and_|blow)fi|(?:tropical_f|petri_d)i|(?:paint|tooth)bru|banglade|jellyfi)s|(?:camera_fl|wavy_d)as|triump|menora|pouc|blus|watc|das|has)h|(?:s(?:o(?:(?:uth_georgia_south_sandwich|lomon)_island|ck)|miling_face_with_three_heart|t_kitts_nevi|weat_drop|agittariu|c(?:orpiu|issor)|ymbol|hort)|twisted_rightwards_arrow|(?:northern_mariana|heard_mcdonald|(?:british_virgi|us_virgi|pitcair|cayma)n|turks_caicos|us_outlying|(?:falk|a)land|marshall|c(?:anary|ocos)|faroe)_island|(?:face_holding_back_tea|(?:c(?:ard_index_divid|rossed_fing)|pinched_fing)e|night_with_sta)r|(?:two_(?:wo)?men_holding|people_holding|heart|open)_hand|(?:sunrise_over_mountai|(?:congratul|united_n)atio|jea)n|(?:caribbean_)?netherland|(?:f(?:lower_playing_car|ace_in_clou)|crossed_swor|prayer_bea)d|(?:money_with_win|nest_with_eg|crossed_fla|hotsprin)g|revolving_heart|(?:high_brightne|(?:expression|wire)le|(?:tumbler|wine)_gla|milk_gla|compa|dre)s|performing_art|earth_america|orthodox_cros|l(?:ow_brightnes|a(?:tin_cros|o)|ung)|no_pedestrian|c(?:ontrol_kno|lu)b|b(?:ookmark_tab|rick|ean)|nesting_doll|cook_island|(?:fleur_de_l|tenn)i|(?:o(?:ncoming_b|phiuch|ctop)|hi(?:ppopotam|bisc)|trolleyb|m(?:(?:rs|x)_cla|auriti|inib)|belar|cact|abac|(?:cyp|tau)r)u|medal_sport|(?:chopstic|firewor)k|rhinocero|(?:p(?:aw_prin|eanu)|footprin)t|two_heart|princes|(?:hondur|baham)a|barbado|aquariu|c(?:ustom|hain)|maraca|comoro|flag|wale|hug|vh)s|(?:(?:diamond_shape_with_a_dot_ins|playground_sl)id|(?:(?:first_quarter|last_quarter|full|new)_moon_with|(?:zipper|money)_mouth|dotted_line|upside_down|c(?:rying_c|owboy_h)at|(?:disguis|nauseat)ed|neutral|monocle|panda|tired|woozy|clown|nerd|zany|fox)_fac|s(?:t(?:uck_out_tongue_winking_ey|eam_locomotiv)|(?:lightly_(?:frown|smil)|neez|h(?:ush|ak))ing_fac|(?:tudio_micropho|(?:hinto_shr|lot_mach)i|ierra_leo|axopho)n|mall_airplan|un_with_fac|a(?:luting_fac|tellit|k)|haved_ic|y(?:nagogu|ring)|n(?:owfl)?ak|urinam|pong)|(?:black_(?:medium_)?small|white_(?:(?:medium_)?small|large)|(?:black|white)_medium|black_large|orange|purple|yellow|b(?:rown|lue)|red)_squar|(?:(?:perso|woma)n_with_|man_with_)?probing_can|(?:p(?:ut_litter_in_its_pl|outing_f)|frowning_f|cold_f|wind_f|hot_f)ac|(?:arrows_c(?:ounterc)?lockwi|computer_mou|derelict_hou|carousel_hor|c(?:ity_sunri|hee)|heartpul|briefca|racehor|pig_no|lacros)s|(?:(?:face_with_head_band|ideograph_advant|adhesive_band|under|pack)a|currency_exchan|l(?:eft_l)?ugga|woman_jud|name_bad|man_jud|jud)g|face_with_peeking_ey|(?:(?:e(?:uropean_post_off|ar_of_r)|post_off)i|information_sour|ambulan)c|artificial_satellit|(?:busts?_in_silhouet|(?:vulcan_sal|parach)u|m(?:usical_no|ayot)|ro(?:ller_ska|set)|timor_les|ice_ska)t|(?:(?:incoming|red)_envelo|s(?:ao_tome_princi|tethosco)|(?:micro|tele)sco|citysca)p|(?:(?:(?:convenience|department)_st|musical_sc)o|f(?:light_depar|ramed_pic)tu|love_you_gestu|heart_on_fi|japanese_og|cote_divoi|perseve|singapo)r|b(?:ullettrain_sid|eliz|on)|(?:(?:female_|male_)?dete|radioa)ctiv|(?:christmas|deciduous|evergreen|tanabata|palm)_tre|(?:vibration_mo|cape_ver)d|(?:fortune_cook|neckt|self)i|(?:fork_and_)?knif|athletic_sho|(?:p(?:lead|arty)|drool|curs|melt|yawn|ly)ing_fac|vomiting_fac|(?:(?:c(?:urling_st|ycl)|meat_on_b|repeat_|headst)o|(?:fire_eng|tanger|ukra)i|rice_sce|(?:micro|i)pho|champag|pho)n|(?:cricket|video)_gam|(?:boxing_glo|oli)v|(?:d(?:ragon|izzy)|monkey)_fac|(?:m(?:artin|ozamb)iq|fond)u|wind_chim|test_tub|flat_sho|m(?:a(?:ns_sho|t)|icrob|oos|ut)|(?:handsh|fish_c|moon_c|cupc)ak|nail_car|zimbabw|ho(?:neybe|l)|ice_cub|airplan|pensiv|c(?:a(?:n(?:dl|o)|k)|o(?:ffe|oki))|tongu|purs|f(?:lut|iv)|d(?:at|ov)|n(?:iu|os)|kit|rag|ax)e|(?:(?:british_indian_ocean_territo|(?:plate_with_cutl|batt)e|medal_milita|low_batte|hunga|wea)r|family_(?:woman_(?:woman_(?:girl|boy)|girl|boy)|man_(?:woman_(?:girl|boy)|man_(?:girl|boy)|girl|boy))_bo|person_feeding_bab|woman_feeding_bab|s(?:u(?:spension_railwa|nn)|t(?:atue_of_libert|_barthelem|rawberr))|(?:m(?:ountain_cable|ilky_)|aerial_tram)wa|articulated_lorr|man_feeding_bab|mountain_railwa|partly_sunn|(?:vatican_c|infin)it|(?:outbox_tr|inbox_tr|birthd|motorw|paragu|urugu|norw|x_r)a|butterfl|ring_buo|t(?:urke|roph)|angr|fogg)y|(?:(?:perso|woma)n_in_motorized_wheelchai|(?:(?:notebook_with_decorative_c|four_leaf_cl)ov|(?:index_pointing_at_the_vie|white_flo)w|(?:face_with_thermome|non\\-potable_wa|woman_firefigh|desktop_compu|m(?:an_firefigh|otor_scoo)|(?:ro(?:ller_coa|o)|oy)s|potable_wa|kick_scoo|thermome|firefigh|helicop|ot)t|(?:woman_factory_wor|(?:woman_office|woman_health|health)_wor|man_(?:factory|office|health)_wor|(?:factory|office)_wor|rice_crac|black_jo|firecrac)k|telephone_receiv|(?:palms_up_toget|f(?:ire_extinguis|eat)|teac)h|(?:(?:open_)?file_fol|level_sli)d|police_offic|f(?:lying_sauc|arm)|woman_teach|roll_of_pap|(?:m(?:iddle_f|an_s)in|woman_sin|hambur|plun|dag)g|do_not_litt|wilted_flow|woman_farm|man_(?:teach|farm)|(?:bell_pe|hot_pe|fli)pp|l(?:o(?:udspeak|ve_lett|bst)|edg|add)|tokyo_tow|c(?:ucumb|lapp|anc)|b(?:e(?:ginn|av)|adg)|print|hamst)e|(?:perso|woma)n_in_manual_wheelchai|m(?:an(?:_in_motorized|(?:_in_man)?ual)|otorized)_wheelchai|(?:person_(?:white|curly|red)_|wheelc)hai|triangular_rule|(?:film_project|e(?:l_salv|cu)ad|elevat|tract|anch)o|s(?:traight_rul|pace_invad|crewdriv|nowboard|unflow|peak|wimm|ing|occ|how|urf|ki)e|r(?:ed_ca|unne|azo)|d(?:o(?:lla|o)|ee)|barbe)r|(?:(?:cloud_with_(?:lightning_and_)?ra|japanese_gobl|round_pushp|liechtenste|mandar|pengu|dolph|bahra|pushp|viol)i|(?:couple(?:_with_heart_wo|kiss_)man|construction_worker|(?:mountain_bik|bow|row)ing|lotus_position|(?:w(?:eight_lift|alk)|climb)ing|white_haired|curly_haired|raising_hand|super(?:villain|hero)|red_haired|basketball|s(?:(?:wimm|urf)ing|assy)|haircut|no_good|(?:vampir|massag)e|b(?:iking|ald)|zombie|fairy|mage|elf|ng)_(?:wo)?ma|(?:(?:couple_with_heart_man|isle_of)_m|(?:couplekiss_woman_|(?:b(?:ouncing_ball|lond_haired)|tipping_hand|pregnant|kneeling|deaf)_|frowning_|s(?:tanding|auna)_|po(?:uting_|lice)|running_|blonde_|o(?:lder|k)_)wom|(?:perso|woma)n_with_turb|(?:b(?:ouncing_ball|lond_haired)|tipping_hand|pregnant|kneeling|deaf)_m|f(?:olding_hand_f|rowning_m)|man_with_turb|(?:turkmen|afghan|pak)ist|s(?:tanding_m|(?:outh_s)?ud|auna_m)|po(?:uting_|lice)m|running_m|azerbaij|k(?:yrgyz|azakh)st|tajikist|uzbekist|o(?:lder_m|k_m|ce)|(?:orang|bh)ut|taiw|jord)a|s(?:mall_red_triangle_dow|(?:valbard_jan_may|int_maart|ev)e|afety_pi|top_sig|t_marti|(?:corpi|po|o)o|wede)|(?:heavy_(?:d(?:ivision|ollar)|equals|minus|plus)|no_entry|female|male)_sig|(?:arrow_(?:heading|double)_d|p(?:erson_with_cr|oint_d)|arrow_up_d|thumbsd)ow|(?:house_with_gard|l(?:ock_with_ink_p|eafy_gre)|dancing_(?:wo)?m|fountain_p|keycap_t|chick|ali|yem|od)e|(?:izakaya|jack_o)_lanter|(?:funeral_u|(?:po(?:stal_h|pc)|capric)o|unico)r|chess_paw|b(?:a(?:llo|c)o|eni|rai)|l(?:anter|io)|c(?:o(?:ff)?i|row)|melo|rame|oma|yar)n|(?:s(?:t(?:uck_out_tongue_closed_ey|_vincent_grenadin)|kull_and_crossbon|unglass|pad)|(?:french_souther|palestinia)n_territori|(?:face_with_spiral|kissing_smiling)_ey|united_arab_emirat|kissing_closed_ey|(?:clinking_|dark_sun|eye)glass|(?:no_mobile_|head)phon|womans_cloth|b(?:allet_sho|lueberri)|philippin|(?:no_bicyc|seychel)l|roll_ey|(?:cher|a)ri|p(?:ancak|isc)|maldiv|leav)es|(?:f(?:amily_(?:woman_(?:woman_)?|man_(?:woman_|man_)?)girl_gir|earfu)|(?:woman_playing_hand|m(?:an_playing_hand|irror_)|c(?:onfetti|rystal)_|volley|track|base|8)bal|(?:(?:m(?:ailbox_with_(?:no_)?m|onor)|cockt|e\\-m)a|(?:person|bride|woman)_with_ve|man_with_ve|light_ra|braz|ema)i|(?:transgender|baby)_symbo|passport_contro|(?:arrow_(?:down|up)_sm|rice_b|footb)al|(?:dromedary_cam|ferris_whe|love_hot|high_he|pretz|falaf|isra)e|page_with_cur|me(?:dical_symbo|ta)|(?:n(?:ewspaper_ro|o_be)|bellhop_be)l|rugby_footbal|s(?:chool_satche|(?:peak|ee)_no_evi|oftbal|crol|anda|nai|hel)|(?:peace|atom)_symbo|hear_no_evi|cora|hote|bage|labe|rof|ow)l|(?:(?:negative_squared_cross|heavy_exclamation|part_alternation)_mar|(?:eight_spoked_)?asteris|(?:ballot_box_with_che|(?:(?:mantelpiece|alarm|timer)_c|un)lo|(?:ha(?:(?:mmer_and|ir)_p|tch(?:ing|ed)_ch)|baby_ch|joyst)i|railway_tra|lipsti|peaco)c|heavy_check_mar|white_check_mar|tr(?:opical_drin|uc)|national_par|pickup_truc|diving_mas|floppy_dis|s(?:tar_struc|hamroc|kun|har)|chipmun|denmar|duc|hoo|lin)k|(?:leftwards_arrow_with_h|arrow_right_h|(?:o(?:range|pen)|closed|blue)_b)ook|(?:woman_playing_water_pol|m(?:an(?:_(?:playing_water_pol|with_gua_pi_ma|in_tuxed)|g)|ontenegr|o(?:roc|na)c|e(?:xic|tr|m))|(?:perso|woma)n_in_tuxed|(?:trinidad_toba|vir)g|water_buffal|b(?:urkina_fas|a(?:mbo|nj)|ent)|puerto_ric|water_pol|flaming|kangaro|(?:mosqu|burr)it|(?:avoc|torn)ad|curaca|lesoth|potat|ko(?:sov|k)|tomat|d(?:ang|od)|yo_y|hoch|t(?:ac|og)|zer)o|(?:c(?:entral_african|zech)|dominican)_republic|(?:eight_pointed_black_s|six_pointed_s|qa)tar|(?:business_suit_levitat|(?:classical_buil|breast_fee)d|(?:woman_cartwhee|m(?:an_(?:cartwhee|jugg)|en_wrest)|women_wrest|woman_jugg|face_exha|cartwhee|wrest|dump)l|c(?:hildren_cross|amp)|woman_facepalm|woman_shrugg|man_(?:facepalm|shrugg)|people_hugg|(?:person_fe|woman_da|man_da)nc|fist_oncom|horse_rac|(?:no_smo|thin)k|laugh|s(?:eedl|mok)|park|w(?:arn|edd))ing|f(?:a(?:mily(?:_(?:woman_(?:woman_(?:girl|boy)|girl|boy)|man_(?:woman_(?:girl|boy)|man_(?:girl|boy)|girl|boy)))?|ctory)|o(?:u(?:ntain|r)|ot|g)|r(?:owning)?|i(?:re|s[ht])|ly|u)|(?:(?:(?:information_desk|handball|bearded)_|(?:frowning|ok)_|juggling_|mer)pers|(?:previous_track|p(?:lay_or_p)?ause|black_square|white_square|next_track|r(?:ecord|adio)|eject)_butt|(?:wa[nx]ing_(?:crescent|gibbous)_m|bowl_with_sp|crescent_m|racc)o|(?:b(?:ouncing_ball|lond_haired)|tipping_hand|pregnant|kneeling|deaf)_pers|s(?:t(?:_pierre_miquel|op_butt|ati)|tanding_pers|peech_ballo|auna_pers)|r(?:eminder_r)?ibb|thought_ballo|watermel|badmint|c(?:amero|ray)|le(?:ban|m)|oni|bis)on|(?:heavy_heart_exclama|building_construc|heart_decora|exclama)tion|(?:(?:triangular_flag_on_po|(?:(?:woman_)?technolog|m(?:ountain_bicycl|an_technolog)|bicycl)i|(?:wo)?man_scienti|(?:wo)?man_arti|s(?:afety_ve|cienti)|empty_ne)s|(?:vertical_)?traffic_ligh|(?:rescue_worker_helm|military_helm|nazar_amul|city_suns|wastebask|dropl|t(?:rump|oil)|bouqu|buck|magn|secr)e|one_piece_swimsui|(?:(?:arrow_(?:low|upp)er|point)_r|bridge_at_n|copyr|mag_r)igh|(?:bullettrain_fro|(?:potted_pl|croiss|e(?:ggpl|leph))a)n|s(?:t(?:ar_and_cresc|ud)en|cream_ca|mi(?:ley?|rk)_ca|(?:peed|ail)boa|hir)|(?:arrow_(?:low|upp)er|point)_lef|woman_astronau|r(?:o(?:tating_ligh|cke)|eceip)|heart_eyes_ca|man_astronau|(?:woman_stud|circus_t|man_stud|trid)en|(?:ringed_pla|file_cabi)ne|nut_and_bol|(?:older_)?adul|k(?:i(?:ssing_ca|wi_frui)|uwai|no)|(?:pouting_c|c(?:ut_of_m|old_sw)e|womans_h|montserr|(?:(?:motor_|row)b|lab_c)o|heartbe|toph)a|(?:woman_pil|honey_p|man_pil|[cp]arr|teap|rob)o|hiking_boo|arrow_lef|fist_righ|flashligh|f(?:ist_lef|ee)|black_ca|astronau|(?:c(?:hest|oco)|dough)nu|innocen|joy_ca|artis|(?:acce|egy)p|co(?:me|a)|pilo)t|(?:heavy_multiplication_|t\\-re)x|(?:s(?:miling_face_with_te|piral_calend)|oncoming_police_c|chocolate_b|ra(?:ilway|cing)_c|police_c|polar_be|teddy_be|madagasc|blue_c|calend|myanm)ar|c(?:l(?:o(?:ud(?:_with_lightning)?|ck(?:1[0-2]?|[2-9]))|ap)?|o(?:uple(?:_with_heart|kiss)?|nstruction|mputer|ok|p|w)|a(?:r(?:d_index)?|mera)|r(?:icket|y)|h(?:art|ild))|(?:m(?:artial_arts_unifo|echanical_a)r|(?:cherry_)?blosso|b(?:aggage_clai|roo)|ice_?crea|facepal|mushroo|restroo|vietna|dru|yu)m|(?:woman_with_headscar|m(?:obile_phone_of|aple_lea)|fallen_lea|wol)f|(?:(?:closed_lock_with|old)_|field_hoc|ice_hoc|han|don)key|g(?:lobe_with_meridians|r(?:e(?:y_(?:exclama|ques)tion|e(?:n(?:_(?:square|circle|salad|apple|heart|book)|land)|ce)|y_heart|nada)|i(?:mac|nn)ing|apes)|u(?:inea_bissau|ernsey|am|n)|(?:(?:olfing|enie)_(?:wo)?|uards(?:wo)?)man|(?:inger_roo|oal_ne|hos)t|(?:uadeloup|ame_di|iraff|oos)e|ift_heart|i(?:braltar|rl)|(?:uatemal|(?:eorg|amb)i|orill|uyan|han)a|uide_dog|(?:oggl|lov)es|arlic|emini|uitar|abon|oat|ear|b)|construction_worker|(?:(?:envelope_with|bow_and)_ar|left_right_ar|raised_eyeb)row|(?:(?:oncoming_automob|crocod)i|right_anger_bubb|l(?:eft_speech_bubb|otion_bott|ady_beet)|congo_brazzavil|eye_speech_bubb|(?:large_blue|orange|purple|yellow|brown)_circ|(?:(?:european|japanese)_cas|baby_bot)t|b(?:alance_sca|eet)|s(?:ewing_need|weat_smi)|(?:black|white|red)_circ|(?:motor|re)cyc|pood|turt|tama|waff|musc|eag)le|first_quarter_moon|s(?:m(?:all_red_triangle|i(?:ley?|rk))|t(?:uck_out_tongue|ar)|hopping|leeping|p(?:arkle|ider)|unrise|nowman|chool|cream|k(?:ull|i)|weat|ix|a)|(?:(?:b(?:osnia_herzegovi|ana)|wallis_futu|(?:french_gui|botsw)a|argenti|st_hele)n|(?:(?:equatorial|papua_new)_guin|north_kor|eritr)e|t(?:ristan_da_cunh|ad)|(?:(?:(?:french_poly|indo)ne|tuni)s|(?:new_caledo|ma(?:urita|cedo)|lithua|(?:tanz|alb|rom)a|arme|esto)n|diego_garc|s(?:audi_arab|t_luc|lov(?:ak|en)|omal|erb)|e(?:arth_as|thiop)|m(?:icrone|alay)s|(?:austra|mongo)l|c(?:ambod|roat)|(?:bulga|alge)r|(?:colom|nami|zam)b|boliv|l(?:iber|atv))i|(?:wheel_of_dhar|cine|pana)m|(?:(?:(?:closed|beach|open)_)?umbrel|ceuta_melil|venezue|ang(?:uil|o)|koa)l|c(?:ongo_kinshas|anad|ub)|(?:western_saha|a(?:mpho|ndor)|zeb)r|american_samo|video_camer|m(?:o(?:vie_camer|ldov)|alt|eg)|(?:earth_af|costa_)ric|s(?:outh_afric|ri_lank|a(?:mo|nt))|bubble_te|(?:antarct|jama)ic|ni(?:caragu|geri|nj)|austri|pi(?:nat|zz)|arub|k(?:eny|aab)|indi|u7a7|l(?:lam|ib[ry])|dn)a|l(?:ast_quarter_moon|o(?:tus|ck)|ips|eo)|(?:hammer_and_wren|c(?:ockroa|hur)|facepun|wren|crut|pun)ch|s(?:nowman_with_snow|ignal_strength|weet_potato|miling_imp|p(?:ider_web|arkle[rs])|w(?:im_brief|an)|a(?:n(?:_marino|dwich)|lt)|topwatch|t(?:a(?:dium|r[2s])|ew)|l(?:e(?:epy|d)|oth)|hrimp|yria|carf|(?:hee|oa)p|ea[lt]|h(?:oe|i[pt])|o[bs])|(?:s(?:tuffed_flatbre|p(?:iral_notep|eaking_he))|(?:exploding_h|baguette_br|flatbr)e)ad|(?:arrow_(?:heading|double)_u|(?:p(?:lace_of_wor|assenger_)sh|film_str|tul)i|page_facing_u|biting_li|(?:billed_c|world_m)a|mouse_tra|(?:curly_lo|busst)o|thumbsu|lo(?:llip)?o|clam|im)p|(?:anatomical|light_blue|sparkling|kissing|mending|orange|purple|yellow|broken|b(?:rown|l(?:ack|ue))|pink)_heart|(?:(?:transgender|black)_fla|mechanical_le|(?:checkered|pirate)_fla|electric_plu|rainbow_fla|poultry_le|service_do|white_fla|luxembour|fried_eg|moneyba|h(?:edgeh|otd)o|shru)g|(?:cloud_with|mountain)_snow|(?:(?:antigua_barb|berm)u|(?:kh|ug)an|rwan)da|(?:3r|2n)d_place_medal|1(?:st_place_medal|234|00)|lotus_position|(?:w(?:eight_lift|alk)|climb)ing|(?:(?:cup_with_str|auto_ricksh)a|carpentry_sa|windo|jigsa)w|(?:(?:couch_and|diya)_la|f(?:ried_shri|uelpu))mp|(?:woman_mechan|man_mechan|alemb)ic|(?:european_un|accord|collis|reun)ion|(?:flight_arriv|hospit|portug|seneg|nep)al|card_file_box|(?:(?:oncoming_)?tax|m(?:o(?:unt_fuj|ya)|alaw)|s(?:paghett|ush|ar)|b(?:r(?:occol|une)|urund)|(?:djibou|kiriba)t|hait|fij)i|(?:shopping_c|white_he|bar_ch)art|d(?:isappointed|ominica|e(?:sert)?)|raising_hand|super(?:villain|hero)|b(?:e(?:verage_box|ers|d)|u(?:bbles|lb|g)|i(?:k(?:ini|e)|rd)|o(?:o(?:ks|t)|a[rt]|y)|read|a[cn]k)|ra(?:ised_hands|bbit2|t)|(?:hindu_tem|ap)ple|thong_sandal|a(?:r(?:row_(?:right|down|up)|t)|bc?|nt)?|r(?:a(?:i(?:sed_hand|nbow)|bbit|dio|m)|u(?:nning)?|epeat|i(?:ng|ce)|o(?:ck|se))|takeout_box|(?:flying_|mini)disc|(?:(?:interrob|yin_y)a|b(?:o(?:omera|wli)|angba)|(?:ping_p|hong_k)o|calli|mahjo)ng|b(?:a(?:llot_box|sket|th?|by)|o(?:o(?:k(?:mark)?|m)|w)|u(?:tter|s)|e(?:ll|er?|ar))?|heart_eyes|basketball|(?:paperclip|dancer|ticket)s|point_up_2|(?:wo)?man_cook|n(?:ew(?:spaper)?|o(?:tebook|_entry)|iger)|t(?:e(?:lephone|a)|o(?:oth|p)|r(?:oll)?|wo)|h(?:o(?:u(?:rglass|se)|rse)|a(?:mmer|nd)|eart)|paperclip|full_moon|(?:b(?:lack_ni|athtu|om)|her)b|(?:long|oil)_drum|pineapple|(?:clock(?:1[0-2]?|[2-9])3|u6e8)0|p(?:o(?:int_up|ut)|r(?:ince|ay)|i(?:ck|g)|en)|e(?:nvelope|ight|u(?:ro)?|gg|ar|ye|s)|m(?:o(?:u(?:ntain|se)|nkey|on)|echanic|a(?:ilbox|g|n)|irror)?|new_moon|d(?:iamonds|olls|art)|question|k(?:iss(?:ing)?|ey)|haircut|no_good|(?:vampir|massag)e|g(?:olf(?:ing)?|u(?:inea|ard)|e(?:nie|m)|ift|rin)|h(?:a(?:ndbag|msa)|ouses|earts|ut)|postbox|toolbox|(?:pencil|t(?:rain|iger)|whale|cat|dog)2|belgium|(?:volca|kimo)no|(?:vanuat|tuval|pala|naur|maca)u|tokelau|o(?:range|ne?|m|k)?|office|dancer|ticket|dragon|pencil|zombie|w(?:o(?:mens|rm|od)|ave|in[gk]|c)|m(?:o(?:sque|use2)|e(?:rman|ns)|a(?:li|sk))|jersey|tshirt|w(?:heel|oman)|dizzy|j(?:apan|oy)|t(?:rain|iger)|whale|fairy|a(?:nge[lr]|bcd|tm)|c(?:h(?:a(?:ir|d)|ile)|a(?:ndy|mel)|urry|rab|o(?:rn|ol|w2)|[dn])|p(?:ager|e(?:a(?:ch|r)|ru)|i(?:g2|ll|e)|oop)|n(?:otes|ine)|t(?:onga|hree|ent|ram|[mv])|f(?:erry|r(?:ies|ee|og)|ax)|u(?:7(?:533|981|121)|5(?:5b6|408|272)|6(?:307|70[89]))|mage|e(?:yes|nd)|i(?:ra[nq]|t)|cat|dog|elf|z(?:zz|ap)|yen|j(?:ar|p)|leg|id|u[kps]|ng|o[2x]|vs|kr|[\\+\\x2D]1|x|v)(:)',
      name: 'string.emoji.md',
      captures: {
        1: {
          name: 'punctuation.definition.gemoji.begin.md'
        },
        2: {
          name: 'keyword.control.gemoji.md'
        },
        3: {
          name: 'punctuation.definition.gemoji.end.md'
        }
      }
    },
    'extension-github-mention': {
      match:
        '(?<![0-9A-Za-z_`])(@)((?:[0-9A-Za-z][0-9A-Za-z-]{0,38})(?:\\/(?:[0-9A-Za-z][0-9A-Za-z-]{0,38}))?)(?![0-9A-Za-z_`])',
      name: 'string.mention.md',
      captures: {
        1: {
          name: 'punctuation.definition.mention.begin.md'
        },
        2: {
          name: 'string.other.link.mention.md'
        }
      }
    },
    'extension-github-reference': {
      patterns: [
        {
          match:
            '(?<![0-9A-Za-z_])(?:((?i:ghsa-|cve-))([A-Za-z0-9]+)|((?i:gh-|#))([0-9]+))(?![0-9A-Za-z_])',
          name: 'string.reference.md',
          captures: {
            1: {
              name: 'punctuation.definition.reference.begin.md'
            },
            2: {
              name: 'string.other.link.reference.security-advisory.md'
            },
            3: {
              name: 'punctuation.definition.reference.begin.md'
            },
            4: {
              name: 'string.other.link.reference.issue-or-pr.md'
            }
          }
        },
        {
          match:
            '(?<![^\\t\\n\\r \\(@\\[\\{])((?:[0-9A-Za-z][0-9A-Za-z-]{0,38})(?:\\/(?:(?:\\.git[0-9A-Za-z_-]|\\.(?!git)|[0-9A-Za-z_-])+))?)(#)([0-9]+)(?![0-9A-Za-z_])',
          name: 'string.reference.md',
          captures: {
            1: {
              name: 'string.other.link.reference.user.md'
            },
            2: {
              name: 'punctuation.definition.reference.begin.md'
            },
            3: {
              name: 'string.other.link.reference.issue-or-pr.md'
            }
          }
        }
      ]
    },
    'extension-math-flow': {
      begin: '(?:^|\\G)[ ]{0,3}(\\${2,})([^\\n\\r\\$]*)$',
      beginCaptures: {
        1: {
          name: 'string.other.begin.math.flow.md'
        },
        2: {
          patterns: [
            {
              include: '#markdown-string'
            }
          ]
        }
      },
      contentName: 'markup.raw.math.flow.md',
      end: '(\\1)(?:[\\t ]*$)',
      endCaptures: {
        1: {
          name: 'string.other.end.math.flow.md'
        }
      },
      name: 'markup.code.other.md'
    },
    'extension-math-text': {
      match: '(?<!\\$)(\\${2,})(?!\\$)(.+?)(?<!\\$)(\\1)(?!\\$)',
      captures: {
        1: {
          name: 'string.other.begin.math.md'
        },
        2: {
          name: 'markup.raw.math.md markup.inline.raw.math.md'
        },
        3: {
          name: 'string.other.end.math.md'
        }
      }
    },
    'extension-toml': {
      begin: '\\A\\+{3}$',
      end: '^\\+{3}$',
      beginCaptures: {
        0: {
          name: 'string.other.begin.toml'
        }
      },
      endCaptures: {
        0: {
          name: 'string.other.end.toml'
        }
      },
      contentName: 'meta.embedded.toml',
      patterns: [
        {
          include: 'source.toml'
        }
      ]
    },
    'extension-yaml': {
      begin: '\\A-{3}$',
      end: '^-{3}$',
      beginCaptures: {
        0: {
          name: 'string.other.begin.yaml'
        }
      },
      endCaptures: {
        0: {
          name: 'string.other.end.yaml'
        }
      },
      contentName: 'meta.embedded.yaml',
      patterns: [
        {
          include: 'source.yaml'
        }
      ]
    },
    'whatwg-html': {
      patterns: [
        {
          include: '#whatwg-html-data-character-reference'
        },
        {
          include: '#whatwg-html-data-comment'
        },
        {
          include: '#whatwg-html-data-comment-bogus'
        },
        {
          include: '#whatwg-html-rawtext-tag'
        },
        {
          include: '#whatwg-html-rawtext-tag-style'
        },
        {
          include: '#whatwg-html-rcdata-tag'
        },
        {
          include: '#whatwg-html-script-data-tag'
        },
        {
          include: '#whatwg-html-data-tag'
        }
      ]
    },
    'whatwg-html-data-character-reference': {
      patterns: [
        {
          include: '#whatwg-html-data-character-reference-named-terminated'
        },
        {
          include: '#whatwg-html-data-character-reference-named-unterminated'
        },
        {
          include: '#whatwg-html-data-character-reference-numeric-hexadecimal'
        },
        {
          include: '#whatwg-html-data-character-reference-numeric-decimal'
        }
      ]
    },
    'whatwg-html-data-character-reference-named-terminated': {
      match:
        '(&)((?:C(?:(?:o(?:unterClockwiseCo)?|lockwiseCo)ntourIntegra|cedi)|(?:(?:Not(?:S(?:quareSu(?:per|b)set|u(?:cceeds|(?:per|b)set))|Precedes|Greater|Tilde|Less)|Not(?:Righ|Lef)tTriangle|(?:Not(?:(?:Succeed|Precede|Les)s|Greater)|(?:Precede|Succeed)s|Less)Slant|SquareSu(?:per|b)set|(?:Not(?:Greater|Tilde)|Tilde|Less)Full|RightTriangle|LeftTriangle|Greater(?:Slant|Full)|Precedes|Succeeds|Superset|NotHump|Subset|Tilde|Hump)Equ|int(?:er)?c|DotEqu)a|DoubleContourIntegra|(?:n(?:short)?parall|shortparall|p(?:arall|rur))e|(?:rightarrowta|l(?:eftarrowta|ced|ata|Ata)|sced|rata|perm|rced|rAta|ced)i|Proportiona|smepars|e(?:qvpars|pars|xc|um)|Integra|suphso|rarr[pt]|n(?:pars|tg)|l(?:arr[pt]|cei)|Rarrt|(?:hybu|fora)l|ForAl|[GKLNR-Tcknt]cedi|rcei|iexc|gime|fras|[uy]um|oso|dso|ium|Ium)l|D(?:o(?:uble(?:(?:L(?:ong(?:Left)?R|eftR)ight|L(?:ongL)?eft|UpDown|Right|Up)Arrow|Do(?:wnArrow|t))|wn(?:ArrowUpA|TeeA|a)rrow)|iacriticalDot|strok|ashv|cy)|(?:(?:(?:N(?:(?:otN)?estedGreater|ot(?:Greater|Less))|Less(?:Equal)?)Great|GreaterGreat|l[lr]corn|mark|east)e|Not(?:Double)?VerticalBa|(?:Not(?:Righ|Lef)tTriangleB|(?:(?:Righ|Lef)tDown|Right(?:Up)?|Left(?:Up)?)VectorB|RightTriangleB|Left(?:Triangle|Arrow)B|RightArrowB|V(?:er(?:ticalB|b)|b)|UpArrowB|l(?:ur(?:ds|u)h|dr(?:us|d)h|trP|owb|H)|profal|r(?:ulu|dld)h|b(?:igst|rvb)|(?:wed|ve[er])b|s(?:wn|es)w|n(?:wne|ese|sp|hp)|gtlP|d(?:oll|uh|H)|(?:hor|ov)b|u(?:dh|H)|r(?:lh|H)|ohb|hb|St)a|D(?:o(?:wn(?:(?:Left(?:Right|Tee)|RightTee)Vecto|(?:(?:Righ|Lef)tVector|Arrow)Ba)|ubleVerticalBa)|a(?:gge|r)|sc|f)|(?:(?:(?:Righ|Lef)tDown|(?:Righ|Lef)tUp)Tee|(?:Righ|Lef)tUpDown)Vecto|VerticalSeparato|(?:Left(?:Right|Tee)|RightTee)Vecto|less(?:eqq?)?gt|e(?:qslantgt|sc)|(?:RightF|LeftF|[lr]f)loo|u(?:[lr]corne|ar)|timesba|(?:plusa|cirs|apa)ci|U(?:arroci|f)|(?:dzigr|s(?:u(?:pl|br)|imr|[lr])|zigr|angz|nvH|l(?:tl|B)|r[Br])ar|UnderBa|(?:plus|harr|top|mid|of)ci|O(?:verBa|sc|f)|dd?agge|s(?:olba|sc)|g(?:t(?:rar|ci)|sc|f)|c(?:opys|u(?:po|ep)|sc|f)|(?:n(?:(?:v[lr]|w|r)A|l[Aa]|h[Aa]|eA)|x[hlr][Aa]|u(?:ua|da|A)|s[ew]A|rla|o[lr]a|rba|rAa|l[Ablr]a|h(?:oa|A)|era|d(?:ua|A)|cra|vA)r|o(?:lci|sc|ro|pa)|ropa|roar|l(?:o(?:pa|ar)|sc|Ar)|i(?:ma|s)c|ltci|dd?ar|a(?:ma|s)c|R(?:Bar|sc|f)|I(?:mac|f)|(?:u(?:ma|s)|oma|ema|Oma|Ema|[wyz]s|qs|ks|fs|Zs|Ys|Xs|Ws|Vs|Us|Ss|Qs|Ns|Ms|Ks|Is|Gs|Fs|Cs|Bs)c|Umac|x(?:sc|f)|v(?:sc|f)|rsc|n(?:ld|f)|m(?:sc|ld|ac|f)|rAr|h(?:sc|f)|b(?:sc|f)|psc|P(?:sc|f)|L(?:sc|ar|f)|jsc|J(?:sc|f)|E(?:sc|f)|[HT]sc|[yz]f|wf|tf|qf|pf|kf|jf|Zf|Yf|Xf|Wf|Vf|Tf|Sf|Qf|Nf|Mf|Kf|Hf|Gf|Ff|Cf|Bf)r|(?:Diacritical(?:Double)?A|[EINOSYZaisz]a)cute|(?:(?:N(?:egative(?:VeryThin|Thi(?:ck|n))|onBreaking)|NegativeMedium|ZeroWidth|VeryThin|Medium|Thi(?:ck|n))Spac|Filled(?:Very)?SmallSquar|Empty(?:Very)?SmallSquar|(?:N(?:ot(?:Succeeds|Greater|Tilde|Less)T|t)|DiacriticalT|VerticalT|PrecedesT|SucceedsT|NotEqualT|GreaterT|TildeT|EqualT|LessT|at|Ut|It)ild|(?:(?:DiacriticalG|[EIOUaiu]g)ra|(?:u|U)?bre|(?:o|e)?gra)v|(?:doublebar|curly|big|x)wedg|H(?:orizontalLin|ilbertSpac)|Double(?:Righ|Lef)tTe|(?:(?:measured|uw)ang|exponentia|dwang|ssmi|fema)l|(?:Poincarepla|reali|pho|oli)n|(?:black)?lozeng|(?:VerticalL|(?:prof|imag)l)in|SmallCircl|(?:black|dot)squar|rmoustach|l(?:moustach|angl)|(?:b(?:ack)?pr|(?:tri|xo)t|[qt]pr)im|[Tt]herefor|(?:DownB|[Gag]b)rev|(?:infint|nv[lr]tr)i|b(?:arwedg|owti)|an(?:dslop|gl)|(?:cu(?:rly)?v|rthr|lthr|b(?:ig|ar)v|xv)e|n(?:s(?:qsu[bp]|ccu)|prcu)|orslop|NewLin|maltes|Becaus|rangl|incar|(?:otil|Otil|t(?:ra|il))d|[inu]tild|s(?:mil|imn)|(?:sc|pr)cu|Wedg|Prim|Brev)e|(?:CloseCurly(?:Double)?Quo|OpenCurly(?:Double)?Quo|[ry]?acu)te|(?:Reverse(?:Up)?|Up)Equilibrium|C(?:apitalDifferentialD|(?:oproduc|(?:ircleD|enterD|d)o)t|on(?:grue|i)nt|conint|upCap|o(?:lone|pf)|OPY|hi)|(?:(?:(?:left)?rightsquig|(?:longleftr|twoheadr|nleftr|nLeftr|longr|hookr|nR|Rr)ight|(?:twohead|hook)left|longleft|updown|Updown|nright|Right|nleft|nLeft|down|up|Up)a|L(?:(?:ong(?:left)?righ|(?:ong)?lef)ta|eft(?:(?:right)?a|RightA|TeeA))|RightTeeA|LongLeftA|UpTeeA)rrow|(?:(?:RightArrow|Short|Upper|Lower)Left|(?:L(?:eftArrow|o(?:wer|ng))|LongLeft|Short|Upper)Right|ShortUp)Arrow|(?:b(?:lacktriangle(?:righ|lef)|ulle|no)|RightDoubleBracke|RightAngleBracke|Left(?:Doub|Ang)leBracke|(?:vartriangle|downharpoon|c(?:ircl|urv)earrow|upharpoon|looparrow)righ|(?:vartriangle|downharpoon|c(?:ircl|urv)earrow|upharpoon|looparrow|mapsto)lef|(?:UnderBrack|OverBrack|emptys|targ|Sups)e|diamondsui|c(?:ircledas|lubsui|are)|(?:spade|heart)sui|(?:(?:c(?:enter|t)|lmi|ino)d|(?:Triple|mD)D|n(?:otin|e)d|(?:ncong|doteq|su[bp]e|e[gl]s)d|l(?:ess|t)d|isind|c(?:ong|up|ap)?d|b(?:igod|N)|t(?:(?:ri)?d|opb)|s(?:ub|im)d|midd|g(?:tr?)?d|Lmid|DotD|(?:xo|ut|z)d|e(?:s?d|rD|fD|DD)|dtd|Zd|Id|Gd|Ed)o|realpar|i(?:magpar|iin)|S(?:uchTha|qr)|su[bp]mul|(?:(?:lt|i)que|gtque|(?:mid|low)a|e(?:que|xi))s|Produc|s(?:updo|e[cx])|r(?:parg|ec)|lparl|vangr|hamil|(?:homt|[lr]fis|ufis|dfis)h|phmma|t(?:wix|in)|quo|o(?:do|as)|fla|eDo)t|(?:(?:Square)?Intersecti|(?:straight|back|var)epsil|SquareUni|expectati|upsil|epsil|Upsil|eq?col|Epsil|(?:omic|Omic|rca|lca|eca|Sca|[NRTt]ca|Lca|Eca|[Zdz]ca|Dca)r|scar|ncar|herc|ccar|Ccar|iog|Iog)on|Not(?:S(?:quareSu(?:per|b)set|u(?:cceeds|(?:per|b)set))|Precedes|Greater|Tilde|Less)?|(?:(?:(?:Not(?:Reverse)?|Reverse)E|comp|E)leme|NotCongrue|(?:n[gl]|l)eqsla|geqsla|q(?:uat)?i|perc|iiii|coni|cwi|awi|oi)nt|(?:(?:rightleftharpo|leftrightharpo|quaterni)on|(?:(?:N(?:ot(?:NestedLess|Greater|Less)|estedLess)L|(?:eqslant|gtr(?:eqq?)?)l|LessL)e|Greater(?:Equal)?Le|cro)s|(?:rightright|leftleft|upup)arrow|rightleftarrow|(?:(?:(?:righ|lef)tthree|divideon|b(?:igo|ox)|[lr]o)t|InvisibleT)ime|downdownarrow|(?:(?:smallset|tri|dot|box)m|PlusM)inu|(?:RoundImpli|complex|Impli|Otim)e|C(?:ircle(?:Time|Minu|Plu)|ayley|ros)|(?:rationa|mode)l|NotExist|(?:(?:UnionP|MinusP|(?:b(?:ig[ou]|ox)|tri|s(?:u[bp]|im)|dot|xu|mn)p)l|(?:xo|u)pl|o(?:min|pl)|ropl|lopl|epl)u|otimesa|integer|e(?:linter|qual)|setminu|rarrbf|larrb?f|olcros|rarrf|mstpo|lesge|gesle|Exist|[lr]time|strn|napo|fltn|ccap|apo)s|(?:b(?:(?:lack|ig)triangledow|etwee)|(?:righ|lef)tharpoondow|(?:triangle|mapsto)dow|(?:nv|i)infi|ssetm|plusm|lagra|d(?:[lr]cor|isi)|c(?:ompf|aro)|s?frow|(?:hyph|curr)e|kgree|thor|ogo|ye)n|Not(?:Righ|Lef)tTriangle|(?:Up(?:Arrow)?|Short)DownArrow|(?:(?:n(?:triangle(?:righ|lef)t|succ|prec)|(?:trianglerigh|trianglelef|sqsu[bp]se|ques)t|backsim)e|lvertneq|gvertneq|(?:suc|pre)cneq|a(?:pprox|symp)e|(?:succ|prec|vee)e|circe)q|(?:UnderParenthes|OverParenthes|xn)is|(?:(?:Righ|Lef)tDown|Right(?:Up)?|Left(?:Up)?)Vector|D(?:o(?:wn(?:RightVector|LeftVector|Arrow|Tee)|t)|el|D)|l(?:eftrightarrows|br(?:k(?:sl[du]|e)|ac[ek])|tri[ef]|s(?:im[eg]|qb|h)|hard|a(?:tes|ngd|p)|o[pz]f|rm|gE|fr|eg|cy)|(?:NotHumpDownHum|(?:righ|lef)tharpoonu|big(?:(?:triangle|sqc)u|c[au])|HumpDownHum|m(?:apstou|lc)|(?:capbr|xsq)cu|smash|rarr[al]|(?:weie|sha)r|larrl|velli|(?:thin|punc)s|h(?:elli|airs)|(?:u[lr]c|vp)ro|d[lr]cro|c(?:upc[au]|apc[au])|thka|scna|prn?a|oper|n(?:ums|va|cu|bs)|ens|xc[au]|Ma)p|l(?:eftrightarrow|e(?:ftarrow|s(?:dot)?)?|moust|a(?:rrb?|te?|ng)|t(?:ri)?|sim|par|oz|l|g)|n(?:triangle(?:righ|lef)t|succ|prec)|SquareSu(?:per|b)set|(?:I(?:nvisibleComm|ot)|(?:varthe|iio)t|varkapp|(?:vars|S)igm|(?:diga|mco)mm|Cedill|lambd|Lambd|delt|Thet|omeg|Omeg|Kapp|Delt|nabl|zet|to[es]|rdc|ldc|iot|Zet|Bet|Et)a|b(?:lacktriangle|arwed|u(?:mpe?|ll)|sol|o(?:x[HVhv]|t)|brk|ne)|(?:trianglerigh|trianglelef|sqsu[bp]se|ques)t|RightT(?:riangl|e)e|(?:(?:varsu[bp]setn|su(?:psetn?|bsetn?))eq|nsu[bp]seteq|colone|(?:wedg|sim)e|nsime|lneq|gneq)q|DifferentialD|(?:(?:fall|ris)ingdots|(?:suc|pre)ccurly|ddots)eq|A(?:pplyFunction|ssign|(?:tild|grav|brev)e|acute|o(?:gon|pf)|lpha|(?:mac|sc|f)r|c(?:irc|y)|ring|Elig|uml|nd|MP)|(?:varsu[bp]setn|su(?:psetn?|bsetn?))eq|L(?:eft(?:T(?:riangl|e)e|Arrow)|l)|G(?:reaterEqual|amma)|E(?:xponentialE|quilibrium|sim|cy|TH|NG)|(?:(?:RightCeil|LeftCeil|varnoth|ar|Ur)in|(?:b(?:ack)?co|uri)n|vzigza|roan|loan|ffli|amal|sun|rin|n(?:tl|an)|Ran|Lan)g|(?:thick|succn?|precn?|less|g(?:tr|n)|ln|n)approx|(?:s(?:traightph|em)|(?:rtril|xu|u[lr]|xd|v[lr])tr|varph|l[lr]tr|b(?:sem|eps)|Ph)i|(?:circledd|osl|n(?:v[Dd]|V[Dd]|d)|hsl|V(?:vd|D)|Osl|v[Dd]|md)ash|(?:(?:RuleDelay|imp|cuw)e|(?:n(?:s(?:hort)?)?|short|rn)mi|D(?:Dotrah|iamon)|(?:i(?:nt)?pr|peri)o|odsol|llhar|c(?:opro|irmi)|(?:capa|anda|pou)n|Barwe|napi|api)d|(?:cu(?:rlyeq(?:suc|pre)|es)|telre|[ou]dbla|Udbla|Odbla|radi|lesc|gesc|dbla)c|(?:circled|big|eq|[is]|c|x|a|S|[hw]|W|H|G|E|C)circ|rightarrow|R(?:ightArrow|arr|e)|Pr(?:oportion)?|(?:longmapst|varpropt|p(?:lustw|ropt)|varrh|numer|(?:rsa|lsa|sb)qu|m(?:icr|h)|[lr]aqu|bdqu|eur)o|UnderBrace|ImaginaryI|B(?:ernoullis|a(?:ckslash|rv)|umpeq|cy)|(?:(?:Laplace|Mellin|zee)tr|Fo(?:uriertr|p)|(?:profsu|ssta)r|ordero|origo|[ps]op|nop|mop|i(?:op|mo)|h(?:op|al)|f(?:op|no)|dop|bop|Rop|Pop|Nop|Lop|Iop|Hop|Dop|[GJKMOQSTV-Zgjkoqvwyz]op|Bop)f|nsu[bp]seteq|t(?:ri(?:angleq|e)|imesd|he(?:tav|re4)|au)|O(?:verBrace|r)|(?:(?:pitchfo|checkma|t(?:opfo|b)|rob|rbb|l[bo]b)r|intlarh|b(?:brktbr|l(?:oc|an))|perten|NoBrea|rarrh|s[ew]arh|n[ew]arh|l(?:arrh|hbl)|uhbl|Hace)k|(?:NotCupC|(?:mu(?:lti)?|x)m|cupbrc)ap|t(?:riangle|imes|heta|opf?)|Precedes|Succeeds|Superset|NotEqual|(?:n(?:atural|exist|les)|s(?:qc[au]p|mte)|prime)s|c(?:ir(?:cled[RS]|[Ee])|u(?:rarrm|larrp|darr[lr]|ps)|o(?:mmat|pf)|aps|hi)|b(?:sol(?:hsu)?b|ump(?:eq|E)|ox(?:box|[Vv][HLRhlr]|[Hh][DUdu]|[DUdu][LRlr])|e(?:rnou|t[ah])|lk(?:34|1[24])|cy)|(?:l(?:esdot|squ|dqu)o|rsquo|rdquo|ngt)r|a(?:n(?:g(?:msda[a-h]|st|e)|d[dv])|st|p[Ee]|mp|fr|c[Edy])|(?:g(?:esdoto|E)|[lr]haru)l|(?:angrtvb|lrhar|nis)d|(?:(?:th(?:ic)?k|succn?|p(?:r(?:ecn?|n)?|lus)|rarr|l(?:ess|arr)|su[bp]|par|scn|g(?:tr|n)|ne|sc|n[glv]|ln|eq?)si|thetasy|ccupss|alefsy|botto)m|trpezium|(?:hks[ew]|dr?bk|bk)arow|(?:(?:[lr]a|d|c)empty|b(?:nequi|empty)|plank|nequi|odi)v|(?:(?:sc|rp|n)pol|point|fpart)int|(?:c(?:irf|wco)|awco)nint|PartialD|n(?:s(?:u[bp](?:set)?|c)|rarr|ot(?:ni|in)?|warr|e(?:arr)?|a(?:tur|p)|vlt|p(?:re?|ar)|um?|l[et]|ge|i)|n(?:atural|exist|les)|d(?:i(?:am(?:ond)?|v(?:ide)?)|tri|ash|ot|d)|backsim|l(?:esdot|squ|dqu)o|g(?:esdoto|E)|U(?:p(?:Arrow|si)|nion|arr)|angrtvb|p(?:l(?:anckh|us(?:d[ou]|[be]))|ar(?:sl|t)|r(?:od|nE|E)|erp|iv|m)|n(?:ot(?:niv[a-c]|in(?:v[a-c]|E))|rarr[cw]|s(?:u[bp][Ee]|c[er])|part|v(?:le|g[et])|g(?:es|E)|c(?:ap|y)|apE|lE|iv|Ll|Gg)|m(?:inus(?:du|b)|ale|cy|p)|rbr(?:k(?:sl[du]|e)|ac[ek])|(?:suphsu|tris|rcu|lcu)b|supdsub|(?:s[ew]a|n[ew]a)rrow|(?:b(?:ecaus|sim)|n(?:[lr]tri|bump)|csu[bp])e|equivDD|u(?:rcorn|lcorn|psi)|timesb|s(?:u(?:p(?:set)?|b(?:set)?)|q(?:su[bp]|u)|i(?:gma|m)|olb?|dot|mt|fr|ce?)|p(?:l(?:anck|us)|r(?:op|ec?)?|ara?|i)|o(?:times|r(?:d(?:er)?)?)|m(?:i(?:nusd?|d)|a(?:p(?:sto)?|lt)|u)|rmoust|g(?:e(?:s(?:dot|l)?|q)?|sim|n(?:ap|e)|t|l|g)|(?:spade|heart)s|c(?:u(?:rarr|larr|p)|o(?:m(?:ma|p)|lon|py|ng)|lubs|heck|cups|irc?|ent|ap)|colone|a(?:p(?:prox)?|n(?:g(?:msd|rt)?|d)|symp|f|c)|S(?:quare|u[bp]|c)|Subset|b(?:ecaus|sim)|vsu[bp]n[Ee]|s(?:u(?:psu[bp]|b(?:su[bp]|n[Ee]|E)|pn[Ee]|p[1-3E]|m)|q(?:u(?:ar[ef]|f)|su[bp]e)|igma[fv]|etmn|dot[be]|par|mid|hc?y|c[Ey])|f(?:rac(?:78|5[68]|45|3[458]|2[35]|1[2-68])|fr)|e(?:m(?:sp1[34]|ptyv)|psiv|c(?:irc|y)|t[ah]|ng|ll|fr|e)|(?:kappa|isins|vBar|fork|rho|phi|n[GL]t)v|divonx|V(?:dashl|ee)|gammad|G(?:ammad|cy|[Tgt])|[Ldhlt]strok|[HT]strok|(?:c(?:ylct|hc)|(?:s(?:oft|hch)|hard|S(?:OFT|HCH)|jser|J(?:ser|uk)|HARD|tsh|TSH|juk|iuk|I(?:uk|[EO])|zh|yi|nj|lj|k[hj]|gj|dj|ZH|Y[AIU]|NJ|LJ|K[HJ]|GJ|D[JSZ])c|ubrc|Ubrc|(?:yu|i[eo]|dz|v|p|f)c|TSc|SHc|CHc|Vc|Pc|Mc|Fc)y|(?:(?:wre|jm)at|dalet|a(?:ngs|le)p|imat|[lr]ds)h|[CLRUceglnou]acute|ff?llig|(?:f(?:fi|[ij])|sz|oe|ij|ae|OE|IJ)lig|r(?:a(?:tio|rr|ng)|tri|par|eal)|s[ew]arr|s(?:qc[au]p|mte)|prime|rarrb|i(?:n(?:fin|t)?|sin|t|i|c)|e(?:quiv|m(?:pty|sp)|p(?:si|ar)|cir|l|g)|kappa|isins|ncong|doteq|(?:wedg|sim)e|nsime|rsquo|rdquo|[lr]haru|V(?:dash|ert)|Tilde|lrhar|gamma|Equal|UpTee|n(?:[lr]tri|bump)|C(?:olon|up|ap)|v(?:arpi|ert)|u(?:psih|ml)|vnsu[bp]|r(?:tri[ef]|e(?:als|g)|a(?:rr[cw]|ng[de]|ce)|sh|lm|x)|rhard|sim[gl]E|i(?:sin[Ev]|mage|f[fr]|cy)|harrw|(?:n[gl]|l)eqq|g(?:sim[el]|tcc|e(?:qq|l)|nE|l[Eaj]|gg|ap)|ocirc|starf|utrif|d(?:trif|i(?:ams|e)|ashv|sc[ry]|fr|eg)|[du]har[lr]|T(?:HORN|a[bu])|(?:TRAD|[gl]vn)E|odash|[EUaeu]o(?:gon|pf)|alpha|[IJOUYgjuy]c(?:irc|y)|v(?:arr|ee)|succ|sim[gl]|harr|ln(?:ap|e)|lesg|(?:n[gl]|l)eq|ocir|star|utri|vBar|fork|su[bp]e|nsim|lneq|gneq|csu[bp]|zwn?j|yacy|x(?:opf|i)|scnE|o(?:r(?:d[fm]|v)|mid|lt|hm|gt|fr|cy|S)|scap|rsqb|ropf|ltcc|tsc[ry]|QUOT|[EOUYao]uml|rho|phi|n[GL]t|e[gl]s|ngt|I(?:nt|m)|nis|rfr|rcy|lnE|lEg|ufr|S(?:um|cy)|R(?:sh|ho)|psi|Ps?i|[NRTt]cy|L(?:sh|cy|[Tt])|kcy|Kcy|Hat|REG|[Zdz]cy|wr|lE|wp|Xi|Nu|Mu)(;)',
      name: 'constant.language.character-reference.named.html',
      captures: {
        1: {
          name: 'punctuation.definition.character-reference.begin.html'
        },
        2: {
          name: 'keyword.control.character-reference.html'
        },
        3: {
          name: 'punctuation.definition.character-reference.end.html'
        }
      }
    },
    'whatwg-html-data-character-reference-named-unterminated': {
      match:
        '(&)(frac(?:34|1[24])|(?:plusm|thor|ye)n|(?:middo|iques|sec|quo|no|g)t|c(?:urren|opy|ent)|brvbar|oslash|Oslash|(?:ccedi|Ccedi|iexc|cedi|um)l|(?:(?:divi|[NOano]til)d|[EIOUaeiou]grav)e|[EIOUYaeiouy]acute|A(?:(?:tild|grav)e|acute|circ|ring|Elig|uml|MP)|times|p(?:ound|ara)|micro|raquo|l(?:aquo|t)|THORN|acirc|[EIOUeiou]circ|acute|(?:arin|[dr]e)g|(?:sz|ae)lig|sup[1-3]|ord[fm]|macr|nbsp|(?:QUO|[GL])T|COPY|[EIOUaeiouy]uml|shy|amp|REG|eth|ETH)',
      name: 'constant.language.character-reference.named.html',
      captures: {
        1: {
          name: 'punctuation.definition.character-reference.begin.html'
        },
        2: {
          name: 'keyword.control.character-reference.html'
        }
      }
    },
    'whatwg-html-data-character-reference-numeric-hexadecimal': {
      match: '(&)(#)([Xx])([A-Fa-f0-9]*)(;)?',
      name: 'constant.language.character-reference.numeric.hexadecimal.html',
      captures: {
        1: {
          name: 'punctuation.definition.character-reference.begin.html'
        },
        2: {
          name: 'punctuation.definition.character-reference.numeric.html'
        },
        3: {
          name: 'punctuation.definition.character-reference.numeric.hexadecimal.html'
        },
        4: {
          name: 'constant.numeric.integer.hexadecimal.html'
        },
        5: {
          name: 'punctuation.definition.character-reference.end.html'
        }
      }
    },
    'whatwg-html-data-character-reference-numeric-decimal': {
      match: '(&)(#)([0-9]*)(;)?',
      name: 'constant.language.character-reference.numeric.decimal.html',
      captures: {
        1: {
          name: 'punctuation.definition.character-reference.begin.html'
        },
        2: {
          name: 'punctuation.definition.character-reference.numeric.html'
        },
        3: {
          name: 'constant.numeric.integer.decimal.html'
        },
        4: {
          name: 'punctuation.definition.character-reference.end.html'
        }
      }
    },
    'whatwg-html-data-comment': {
      patterns: [
        {
          match: '(<!--)(>|->)',
          captures: {
            1: {
              name: 'punctuation.definition.comment.start.html'
            },
            2: {
              name: 'punctuation.definition.comment.end.html'
            }
          },
          name: 'comment.block.html'
        },
        {
          begin: '(<!--)',
          end: '(--!?>)',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.comment.start.html'
            }
          },
          endCaptures: {
            1: {
              name: 'punctuation.definition.comment.end.html'
            }
          },
          name: 'comment.block.html'
        }
      ]
    },
    'whatwg-html-data-comment-bogus': {
      patterns: [
        {
          begin: '(<!)',
          end: '(>)',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.comment.start.html'
            }
          },
          endCaptures: {
            1: {
              name: 'punctuation.definition.comment.end.html'
            }
          },
          name: 'comment.block.html'
        },
        {
          begin: '(<\\?)',
          end: '(>)',
          beginCaptures: {
            1: {
              name: 'punctuation.definition.comment.start.html'
            }
          },
          endCaptures: {
            1: {
              name: 'punctuation.definition.comment.end.html'
            }
          },
          name: 'comment.block.html'
        }
      ]
    },
    'whatwg-html-data-tag': {
      patterns: [
        {
          match:
            '(<)(/)?((?:[A-Za-z][^\\t\\n\\f\\r />]*))((?:(?:[\\t\\n\\f\\r ]+|(?:=(?:[^\\t\\n\\f\\r />=])*|(?:[^\\t\\n\\f\\r />=])+)(?:[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\f\\r >]+))?|\\/)*))(>)',
          name: 'meta.tag.${3:/downcase}.html',
          captures: {
            1: {
              name: 'punctuation.definition.tag.begin.html'
            },
            2: {
              name: 'punctuation.definition.tag.closing.html'
            },
            3: {
              name: 'entity.name.tag.html'
            },
            4: {
              patterns: [
                {
                  include: '#whatwg-html-attribute'
                },
                {
                  include: '#whatwg-html-self-closing-start-tag'
                }
              ]
            },
            5: {
              name: 'punctuation.definition.tag.end.html'
            }
          }
        },
        {
          match: '</>',
          name: 'comment.block.html'
        },
        {
          begin: '(?:</)',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.comment.start.html'
            }
          },
          end: '(?:>)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.comment.end.html'
            }
          },
          name: 'comment.block.html'
        }
      ]
    },
    'whatwg-html-rawtext-tag': {
      begin:
        '<((?i:iframe|noembed|noframes|xmp))(?![A-Za-z])(?:(?:[\\t\\n\\f\\r ]+|(?:=(?:[^\\t\\n\\f\\r />=])*|(?:[^\\t\\n\\f\\r />=])+)(?:[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\f\\r >]+))?|\\/)*)>',
      beginCaptures: {
        0: {
          patterns: [
            {
              include: '#whatwg-html-data-tag'
            }
          ]
        }
      },
      contentName: 'markup.raw.text.html',
      end: '(?=</(?i:\\1)(?:[\\t\\n\\f\\r \\/>]|$))'
    },
    'whatwg-html-rawtext-tag-style': {
      begin:
        '<((?i:style))(?![A-Za-z])(?:(?:[\\t\\n\\f\\r ]+|(?:=(?:[^\\t\\n\\f\\r />=])*|(?:[^\\t\\n\\f\\r />=])+)(?:[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\f\\r >]+))?|\\/)*)>',
      beginCaptures: {
        0: {
          patterns: [
            {
              include: '#whatwg-html-data-tag'
            }
          ]
        }
      },
      patterns: [
        {
          include: 'source.css'
        }
      ],
      end: '(?=</(?i:\\1)(?:[\\t\\n\\f\\r \\/>]|$))'
    },
    'whatwg-html-rcdata-tag': {
      begin:
        '<((?i:textarea|title))(?![A-Za-z])(?:(?:[\\t\\n\\f\\r ]+|(?:=(?:[^\\t\\n\\f\\r />=])*|(?:[^\\t\\n\\f\\r />=])+)(?:[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\f\\r >]+))?|\\/)*)>',
      beginCaptures: {
        0: {
          patterns: [
            {
              include: '#whatwg-html-data-tag'
            }
          ]
        }
      },
      contentName: 'markup.raw.text.html',
      patterns: [
        {
          include: '#whatwg-html-data-character-reference'
        }
      ],
      end: '(?=</(?i:\\1)(?:[\\t\\n\\f\\r \\/>]|$))'
    },
    'whatwg-html-script-data-tag': {
      begin:
        '<((?i:script))(?![A-Za-z])(?:(?:[\\t\\n\\f\\r ]+|(?:=(?:[^\\t\\n\\f\\r />=])*|(?:[^\\t\\n\\f\\r />=])+)(?:[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"[^"]*"|\'[^\']*\'|[^\\t\\n\\f\\r >]+))?|\\/)*)>',
      beginCaptures: {
        0: {
          patterns: [
            {
              include: '#whatwg-html-data-tag'
            }
          ]
        }
      },
      patterns: [
        {
          include: 'source.js'
        }
      ],
      end: '(?=</(?i:\\1)(?:[\\t\\n\\f\\r \\/>]|$))'
    },
    'whatwg-html-attribute': {
      patterns: [
        {
          include: '#whatwg-html-attribute-event-handler'
        },
        {
          include: '#whatwg-html-attribute-style'
        },
        {
          include: '#whatwg-html-attribute-unknown'
        }
      ]
    },
    'whatwg-html-attribute-event-handler': {
      match:
        '((?i:on[a-z]+))(?:[\\t\\n\\f\\r ]*(=)[\\t\\n\\f\\r ]*(?:(")([^"]*)(")|(\')([^\']*)(\')|([^\\t\\n\\f\\r >]+)))',
      captures: {
        1: {
          name: 'entity.other.attribute-name.html.md'
        },
        2: {
          name: 'punctuation.separator.key-value.html.md'
        },
        3: {
          name: 'string.other.begin.html.md'
        },
        4: {
          name: 'string.quoted.double.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            },
            {
              include: 'source.js'
            }
          ]
        },
        5: {
          name: 'string.other.end.html.md'
        },
        6: {
          name: 'string.other.begin.html.md'
        },
        7: {
          name: 'string.quoted.single.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            },
            {
              include: 'source.js'
            }
          ]
        },
        8: {
          name: 'string.other.end.html.md'
        },
        9: {
          name: 'string.unquoted.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            },
            {
              include: 'source.js'
            }
          ]
        }
      }
    },
    'whatwg-html-attribute-style': {
      match:
        '((?i:style))(?:[\\t\\n\\f\\r ]*(=)[\\t\\n\\f\\r ]*(?:(")([^"]*)(")|(\')([^\']*)(\')|([^\\t\\n\\f\\r >]+)))',
      captures: {
        1: {
          name: 'entity.other.attribute-name.html.md'
        },
        2: {
          name: 'punctuation.separator.key-value.html.md'
        },
        3: {
          name: 'string.other.begin.html.md'
        },
        4: {
          name: 'string.quoted.double.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            },
            {
              include: 'source.css#rule-list-innards'
            }
          ]
        },
        5: {
          name: 'string.other.end.html.md'
        },
        6: {
          name: 'string.other.begin.html.md'
        },
        7: {
          name: 'string.quoted.single.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            },
            {
              include: 'source.css#rule-list-innards'
            }
          ]
        },
        8: {
          name: 'string.other.end.html.md'
        },
        9: {
          name: 'string.unquoted.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            },
            {
              include: 'source.css#rule-list-innards'
            }
          ]
        }
      }
    },
    'whatwg-html-attribute-unknown': {
      match:
        '((?:=(?:[^\\t\\n\\f\\r />=])*|(?:[^\\t\\n\\f\\r />=])+))(?:[\\t\\n\\f\\r ]*(=)[\\t\\n\\f\\r ]*(?:(")([^"]*)(")|(\')([^\']*)(\')|([^\\t\\n\\f\\r >]+)))?',
      captures: {
        1: {
          name: 'entity.other.attribute-name.html.md'
        },
        2: {
          name: 'punctuation.separator.key-value.html.md'
        },
        3: {
          name: 'string.other.begin.html.md'
        },
        4: {
          name: 'string.quoted.double.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        },
        5: {
          name: 'string.other.end.html.md'
        },
        6: {
          name: 'string.other.begin.html.md'
        },
        7: {
          name: 'string.quoted.single.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        },
        8: {
          name: 'string.other.end.html.md'
        },
        9: {
          name: 'string.unquoted.html.md',
          patterns: [
            {
              include: '#whatwg-html-data-character-reference'
            }
          ]
        }
      }
    },
    'whatwg-html-self-closing-start-tag': {
      match: '\\/',
      name: 'punctuation.definition.tag.self-closing.html'
    },
    'commonmark-code-fenced-apib': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:api\\x2dblueprint|(?:.*\\.)?apib))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.apib.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.apib',
              patterns: [
                {
                  include: 'text.html.markdown.source.gfm.apib'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:api\\x2dblueprint|(?:.*\\.)?apib))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.apib.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.apib',
              patterns: [
                {
                  include: 'text.html.markdown.source.gfm.apib'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-asciidoc': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:adoc|asciidoc)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.asciidoc.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.asciidoc',
              patterns: [
                {
                  include: 'text.html.asciidoc'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:adoc|asciidoc)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.asciidoc.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.asciidoc',
              patterns: [
                {
                  include: 'text.html.asciidoc'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-c': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:dtrace|dtrace\\x2dscript|oncrpc|rpc|rpcgen|unified\\x2dparallel\\x2dc|x\\x2dbitmap|x\\x2dpixmap|xdr|(?:.*\\.)?(?:c|cats|h|idc|opencl|upc|xbm|xpm|xs)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.c.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.c',
              patterns: [
                {
                  include: 'source.c'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:dtrace|dtrace\\x2dscript|oncrpc|rpc|rpcgen|unified\\x2dparallel\\x2dc|x\\x2dbitmap|x\\x2dpixmap|xdr|(?:.*\\.)?(?:c|cats|h|idc|opencl|upc|xbm|xpm|xs)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.c.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.c',
              patterns: [
                {
                  include: 'source.c'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-clojure': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:clojure|rouge|(?:.*\\.)?(?:boot|cl2|clj|cljc|cljs|cljs\\.hl|cljscm|cljx|edn|hic|rg|wisp)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.clojure.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.clojure',
              patterns: [
                {
                  include: 'source.clojure'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:clojure|rouge|(?:.*\\.)?(?:boot|cl2|clj|cljc|cljs|cljs\\.hl|cljscm|cljx|edn|hic|rg|wisp)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.clojure.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.clojure',
              patterns: [
                {
                  include: 'source.clojure'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-coffee': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:coffee\\x2dscript|coffeescript|(?:.*\\.)?(?:_coffee|cjsx|coffee|cson|em|emberscript|iced)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.coffee.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.coffee',
              patterns: [
                {
                  include: 'source.coffee'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:coffee\\x2dscript|coffeescript|(?:.*\\.)?(?:_coffee|cjsx|coffee|cson|em|emberscript|iced)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.coffee.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.coffee',
              patterns: [
                {
                  include: 'source.coffee'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-console': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:pycon|python\\x2dconsole))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.console.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.console',
              patterns: [
                {
                  include: 'text.python.console'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:pycon|python\\x2dconsole))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.console.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.console',
              patterns: [
                {
                  include: 'text.python.console'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-cpp': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:ags|ags\\x2dscript|asymptote|c\\+\\+|edje\\x2ddata\\x2dcollection|game\\x2dmaker\\x2dlanguage|swig|(?:.*\\.)?(?:asc|ash|asy|c\\+\\+|cc|cp|cpp|cppm|cxx|edc|gml|h\\+\\+|hh|hpp|hxx|inl|ino|ipp|ixx|metal|re|tcc|tpp|txx)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.cpp.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.cpp',
              patterns: [
                {
                  include: 'source.c++'
                },
                {
                  include: 'source.cpp'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:ags|ags\\x2dscript|asymptote|c\\+\\+|edje\\x2ddata\\x2dcollection|game\\x2dmaker\\x2dlanguage|swig|(?:.*\\.)?(?:asc|ash|asy|c\\+\\+|cc|cp|cpp|cppm|cxx|edc|gml|h\\+\\+|hh|hpp|hxx|inl|ino|ipp|ixx|metal|re|tcc|tpp|txx)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.cpp.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.cpp',
              patterns: [
                {
                  include: 'source.c++'
                },
                {
                  include: 'source.cpp'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-cs': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:beef|c#|cakescript|csharp|(?:.*\\.)?(?:bf|cake|cs|cs\\.pp|csx|eq|linq|uno)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.cs.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.cs',
              patterns: [
                {
                  include: 'source.cs'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:beef|c#|cakescript|csharp|(?:.*\\.)?(?:bf|cake|cs|cs\\.pp|csx|eq|linq|uno)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.cs.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.cs',
              patterns: [
                {
                  include: 'source.cs'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-css': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?css))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.css.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.css',
              patterns: [
                {
                  include: 'source.css'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?css))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.css.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.css',
              patterns: [
                {
                  include: 'source.css'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-diff': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:udiff|(?:.*\\.)?(?:diff|patch)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.diff.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.diff',
              patterns: [
                {
                  include: 'source.diff'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:udiff|(?:.*\\.)?(?:diff|patch)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.diff.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.diff',
              patterns: [
                {
                  include: 'source.diff'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-dockerfile': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:containerfile|(?:.*\\.)?dockerfile))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.dockerfile.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.dockerfile',
              patterns: [
                {
                  include: 'source.dockerfile'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:containerfile|(?:.*\\.)?dockerfile))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.dockerfile.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.dockerfile',
              patterns: [
                {
                  include: 'source.dockerfile'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-elixir': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:elixir|(?:.*\\.)?(?:ex|exs)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.elixir.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.elixir',
              patterns: [
                {
                  include: 'source.elixir'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:elixir|(?:.*\\.)?(?:ex|exs)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.elixir.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.elixir',
              patterns: [
                {
                  include: 'source.elixir'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-elm': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?elm))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.elm.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.elm',
              patterns: [
                {
                  include: 'source.elm'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?elm))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.elm.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.elm',
              patterns: [
                {
                  include: 'source.elm'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-erlang': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:erlang|(?:.*\\.)?(?:app|app\\.src|erl|es|escript|hrl|xrl|yrl)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.erlang.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.erlang',
              patterns: [
                {
                  include: 'source.erlang'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:erlang|(?:.*\\.)?(?:app|app\\.src|erl|es|escript|hrl|xrl|yrl)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.erlang.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.erlang',
              patterns: [
                {
                  include: 'source.erlang'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-gitconfig': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:git\\x2dconfig|gitmodules|(?:.*\\.)?gitconfig))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.gitconfig.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.gitconfig',
              patterns: [
                {
                  include: 'source.gitconfig'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:git\\x2dconfig|gitmodules|(?:.*\\.)?gitconfig))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.gitconfig.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.gitconfig',
              patterns: [
                {
                  include: 'source.gitconfig'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-go': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:golang|(?:.*\\.)?go))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.go.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.go',
              patterns: [
                {
                  include: 'source.go'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:golang|(?:.*\\.)?go))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.go.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.go',
              patterns: [
                {
                  include: 'source.go'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-graphql': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:gql|graphql|graphqls)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.graphql.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.graphql',
              patterns: [
                {
                  include: 'source.graphql'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:gql|graphql|graphqls)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.graphql.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.graphql',
              patterns: [
                {
                  include: 'source.graphql'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-haskell': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:c2hs|c2hs\\x2dhaskell|frege|haskell|(?:.*\\.)?(?:chs|dhall|hs|hs\\x2dboot|hsc)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.haskell.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.haskell',
              patterns: [
                {
                  include: 'source.haskell'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:c2hs|c2hs\\x2dhaskell|frege|haskell|(?:.*\\.)?(?:chs|dhall|hs|hs\\x2dboot|hsc)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.haskell.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.haskell',
              patterns: [
                {
                  include: 'source.haskell'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-html': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:html|(?:.*\\.)?(?:hta|htm|html\\.hl|kit|mtml|xht|xhtml)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.html.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.html',
              patterns: [
                {
                  include: 'text.html.basic'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:html|(?:.*\\.)?(?:hta|htm|html\\.hl|kit|mtml|xht|xhtml)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.html.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.html',
              patterns: [
                {
                  include: 'text.html.basic'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-ini': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:altium|altium\\x2ddesigner|dosini|(?:.*\\.)?(?:cnf|dof|ini|lektorproject|outjob|pcbdoc|prefs|prjpcb|properties|schdoc|url)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.ini.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.ini',
              patterns: [
                {
                  include: 'source.ini'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:altium|altium\\x2ddesigner|dosini|(?:.*\\.)?(?:cnf|dof|ini|lektorproject|outjob|pcbdoc|prefs|prjpcb|properties|schdoc|url)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.ini.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.ini',
              patterns: [
                {
                  include: 'source.ini'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-java': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:chuck|unrealscript|(?:.*\\.)?(?:ck|jav|java|jsh|uc)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.java.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.java',
              patterns: [
                {
                  include: 'source.java'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:chuck|unrealscript|(?:.*\\.)?(?:ck|jav|java|jsh|uc)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.java.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.java',
              patterns: [
                {
                  include: 'source.java'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-js': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:cycript|javascript\\+erb|json\\x2dwith\\x2dcomments|node|qt\\x2dscript|(?:.*\\.)?(?:_js|bones|cjs|code\\x2dsnippets|code\\x2dworkspace|cy|es6|jake|javascript|js|js\\.erb|jsb|jscad|jsfl|jslib|jsm|json5|jsonc|jsonld|jspre|jss|jsx|mjs|njs|pac|sjs|ssjs|sublime\\x2dbuild|sublime\\x2dcolor\\x2dscheme|sublime\\x2dcommands|sublime\\x2dcompletions|sublime\\x2dkeymap|sublime\\x2dmacro|sublime\\x2dmenu|sublime\\x2dmousemap|sublime\\x2dproject|sublime\\x2dsettings|sublime\\x2dtheme|sublime\\x2dworkspace|sublime_metrics|sublime_session|xsjs|xsjslib)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.js.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.js',
              patterns: [
                {
                  include: 'source.js'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:cycript|javascript\\+erb|json\\x2dwith\\x2dcomments|node|qt\\x2dscript|(?:.*\\.)?(?:_js|bones|cjs|code\\x2dsnippets|code\\x2dworkspace|cy|es6|jake|javascript|js|js\\.erb|jsb|jscad|jsfl|jslib|jsm|json5|jsonc|jsonld|jspre|jss|jsx|mjs|njs|pac|sjs|ssjs|sublime\\x2dbuild|sublime\\x2dcolor\\x2dscheme|sublime\\x2dcommands|sublime\\x2dcompletions|sublime\\x2dkeymap|sublime\\x2dmacro|sublime\\x2dmenu|sublime\\x2dmousemap|sublime\\x2dproject|sublime\\x2dsettings|sublime\\x2dtheme|sublime\\x2dworkspace|sublime_metrics|sublime_session|xsjs|xsjslib)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.js.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.js',
              patterns: [
                {
                  include: 'source.js'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-json': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:ecere\\x2dprojects|ipython\\x2dnotebook|jupyter\\x2dnotebook|max|max/msp|maxmsp|oasv2\\x2djson|oasv3\\x2djson|(?:.*\\.)?(?:4dform|4dproject|avsc|epj|geojson|gltf|har|ice|ipynb|json|json|json|json\\x2dtmlanguage|jsonl|maxhelp|maxpat|maxproj|mcmeta|mxt|pat|sarif|tfstate|tfstate\\.backup|topojson|webapp|webmanifest|yy|yyp)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.json.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.json',
              patterns: [
                {
                  include: 'source.json'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:ecere\\x2dprojects|ipython\\x2dnotebook|jupyter\\x2dnotebook|max|max/msp|maxmsp|oasv2\\x2djson|oasv3\\x2djson|(?:.*\\.)?(?:4dform|4dproject|avsc|epj|geojson|gltf|har|ice|ipynb|json|json|json|json\\x2dtmlanguage|jsonl|maxhelp|maxpat|maxproj|mcmeta|mxt|pat|sarif|tfstate|tfstate\\.backup|topojson|webapp|webmanifest|yy|yyp)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.json.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.json',
              patterns: [
                {
                  include: 'source.json'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-julia': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:julia|(?:.*\\.)?jl))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.julia.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.julia',
              patterns: [
                {
                  include: 'source.julia'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:julia|(?:.*\\.)?jl))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.julia.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.julia',
              patterns: [
                {
                  include: 'source.julia'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-kotlin': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:gradle\\x2dkotlin\\x2ddsl|kotlin|(?:.*\\.)?(?:gradle\\.kts|kt|ktm|kts)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.kotlin.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.kotlin',
              patterns: [
                {
                  include: 'source.kotlin'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:gradle\\x2dkotlin\\x2ddsl|kotlin|(?:.*\\.)?(?:gradle\\.kts|kt|ktm|kts)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.kotlin.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.kotlin',
              patterns: [
                {
                  include: 'source.kotlin'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-less': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:less\\x2dcss|(?:.*\\.)?less))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.less.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.less',
              patterns: [
                {
                  include: 'source.css.less'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:less\\x2dcss|(?:.*\\.)?less))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.less.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.less',
              patterns: [
                {
                  include: 'source.css.less'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-lua': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:fcgi|lua|nse|p8|pd_lua|rbxs|rockspec|wlua)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.lua.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.lua',
              patterns: [
                {
                  include: 'source.lua'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:fcgi|lua|nse|p8|pd_lua|rbxs|rockspec|wlua)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.lua.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.lua',
              patterns: [
                {
                  include: 'source.lua'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-makefile': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:bsdmake|mf|(?:.*\\.)?(?:mak|make|makefile|mk|mkfile)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.makefile.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.makefile',
              patterns: [
                {
                  include: 'source.makefile'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:bsdmake|mf|(?:.*\\.)?(?:mak|make|makefile|mk|mkfile)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.makefile.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.makefile',
              patterns: [
                {
                  include: 'source.makefile'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-md': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:md|pandoc|rmarkdown|(?:.*\\.)?(?:livemd|markdown|mdown|mdwn|mkd|mkdn|mkdown|qmd|rmd|ronn|scd|workbook)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.md.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.md',
              patterns: [
                {
                  include: 'text.md'
                },
                {
                  include: 'source.gfm'
                },
                {
                  include: 'text.html.markdown'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:md|pandoc|rmarkdown|(?:.*\\.)?(?:livemd|markdown|mdown|mdwn|mkd|mkdn|mkdown|qmd|rmd|ronn|scd|workbook)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.md.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.md',
              patterns: [
                {
                  include: 'text.md'
                },
                {
                  include: 'source.gfm'
                },
                {
                  include: 'text.html.markdown'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-mdx': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?mdx))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.mdx.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.mdx',
              patterns: [
                {
                  include: 'source.mdx'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?mdx))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.mdx.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.mdx',
              patterns: [
                {
                  include: 'source.mdx'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-objc': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:obj\\x2dc|objc|objective\\x2dc|objectivec))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.objc.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.objc',
              patterns: [
                {
                  include: 'source.objc'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:obj\\x2dc|objc|objective\\x2dc|objectivec))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.objc.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.objc',
              patterns: [
                {
                  include: 'source.objc'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-perl': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:cperl|(?:.*\\.)?(?:cgi|perl|ph|pl|plx|pm|psgi|t)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.perl.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.perl',
              patterns: [
                {
                  include: 'source.perl'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:cperl|(?:.*\\.)?(?:cgi|perl|ph|pl|plx|pm|psgi|t)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.perl.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.perl',
              patterns: [
                {
                  include: 'source.perl'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-php': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:html\\+php|inc|php|(?:.*\\.)?(?:aw|ctp|php3|php4|php5|phps|phpt|phtml)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.php.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.php',
              patterns: [
                {
                  include: 'text.html.php'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:html\\+php|inc|php|(?:.*\\.)?(?:aw|ctp|php3|php4|php5|phps|phpt|phtml)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.php.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.php',
              patterns: [
                {
                  include: 'text.html.php'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-python': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:bazel|easybuild|python|python3|rusthon|snakemake|starlark|xonsh|(?:.*\\.)?(?:bzl|eb|gyp|gypi|lmi|py|py3|pyde|pyi|pyp|pyt|pyw|rpy|sage|sagews|smk|snakefile|spec|tac|wsgi|xpy|xsh)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.python.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.python',
              patterns: [
                {
                  include: 'source.python'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:bazel|easybuild|python|python3|rusthon|snakemake|starlark|xonsh|(?:.*\\.)?(?:bzl|eb|gyp|gypi|lmi|py|py3|pyde|pyi|pyp|pyt|pyw|rpy|sage|sagews|smk|snakefile|spec|tac|wsgi|xpy|xsh)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.python.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.python',
              patterns: [
                {
                  include: 'source.python'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-r': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:rscript|splus|(?:.*\\.)?(?:r|rd|rsx)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.r.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.r',
              patterns: [
                {
                  include: 'source.r'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:rscript|splus|(?:.*\\.)?(?:r|rd|rsx)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.r.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.r',
              patterns: [
                {
                  include: 'source.r'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-raku': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:perl\\x2d6|perl6|pod\\x2d6|(?:.*\\.)?(?:6pl|6pm|nqp|p6|p6l|p6m|pl6|pm6|pod|pod6|raku|rakumod)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.raku.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.raku',
              patterns: [
                {
                  include: 'source.raku'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:perl\\x2d6|perl6|pod\\x2d6|(?:.*\\.)?(?:6pl|6pm|nqp|p6|p6l|p6m|pl6|pm6|pod|pod6|raku|rakumod)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.raku.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.raku',
              patterns: [
                {
                  include: 'source.raku'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-ruby': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:jruby|macruby|(?:.*\\.)?(?:builder|druby|duby|eye|gemspec|god|jbuilder|mirah|mspec|pluginspec|podspec|prawn|rabl|rake|rb|rbi|rbuild|rbw|rbx|ru|ruby|thor|watchr)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.ruby.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.ruby',
              patterns: [
                {
                  include: 'source.ruby'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:jruby|macruby|(?:.*\\.)?(?:builder|druby|duby|eye|gemspec|god|jbuilder|mirah|mspec|pluginspec|podspec|prawn|rabl|rake|rb|rbi|rbuild|rbw|rbx|ru|ruby|thor|watchr)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.ruby.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.ruby',
              patterns: [
                {
                  include: 'source.ruby'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-rust': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:rust|(?:.*\\.)?(?:rs|rs\\.in)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.rust.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.rust',
              patterns: [
                {
                  include: 'source.rust'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:rust|(?:.*\\.)?(?:rs|rs\\.in)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.rust.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.rust',
              patterns: [
                {
                  include: 'source.rust'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-scala': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:kojo|sbt|sc|scala)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.scala.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.scala',
              patterns: [
                {
                  include: 'source.scala'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?(?:kojo|sbt|sc|scala)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.scala.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.scala',
              patterns: [
                {
                  include: 'source.scala'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-scss': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?scss))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.scss.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.scss',
              patterns: [
                {
                  include: 'source.css.scss'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?scss))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.scss.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.scss',
              patterns: [
                {
                  include: 'source.css.scss'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-shell': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:abuild|alpine\\x2dabuild|apkbuild|envrc|gentoo\\x2debuild|gentoo\\x2declass|openrc|openrc\\x2drunscript|shell|shell\\x2dscript|(?:.*\\.)?(?:bash|bats|command|csh|ebuild|eclass|ksh|sh|sh\\.in|tcsh|tmux|tool|zsh|zsh\\x2dtheme)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.shell.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.shell',
              patterns: [
                {
                  include: 'source.shell'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:abuild|alpine\\x2dabuild|apkbuild|envrc|gentoo\\x2debuild|gentoo\\x2declass|openrc|openrc\\x2drunscript|shell|shell\\x2dscript|(?:.*\\.)?(?:bash|bats|command|csh|ebuild|eclass|ksh|sh|sh\\.in|tcsh|tmux|tool|zsh|zsh\\x2dtheme)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.shell.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.shell',
              patterns: [
                {
                  include: 'source.shell'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-shell-session': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:bash\\x2dsession|console|shellsession|(?:.*\\.)?sh\\x2dsession))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.shell-session.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.shell-session',
              patterns: [
                {
                  include: 'text.shell-session'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:bash\\x2dsession|console|shellsession|(?:.*\\.)?sh\\x2dsession))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.shell-session.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.shell-session',
              patterns: [
                {
                  include: 'text.shell-session'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-sql': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:plpgsql|sqlpl|(?:.*\\.)?(?:cql|db2|ddl|mysql|pgsql|prc|sql|sql|sql|tab|udf|viw)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.sql.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.sql',
              patterns: [
                {
                  include: 'source.sql'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:plpgsql|sqlpl|(?:.*\\.)?(?:cql|db2|ddl|mysql|pgsql|prc|sql|sql|sql|tab|udf|viw)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.sql.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.sql',
              patterns: [
                {
                  include: 'source.sql'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-svg': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?svg))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.svg.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.svg',
              patterns: [
                {
                  include: 'text.xml.svg'
                },
                {
                  include: 'text.xml'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?svg))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.svg.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.svg',
              patterns: [
                {
                  include: 'text.xml.svg'
                },
                {
                  include: 'text.xml'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-swift': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?swift))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.swift.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.swift',
              patterns: [
                {
                  include: 'source.swift'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?swift))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.swift.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.swift',
              patterns: [
                {
                  include: 'source.swift'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-toml': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?toml))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.toml.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.toml',
              patterns: [
                {
                  include: 'source.toml'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?toml))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.toml.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.toml',
              patterns: [
                {
                  include: 'source.toml'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-ts': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:typescript|(?:.*\\.)?(?:cts|mts|ts)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.ts.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.ts',
              patterns: [
                {
                  include: 'source.ts'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:typescript|(?:.*\\.)?(?:cts|mts|ts)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.ts.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.ts',
              patterns: [
                {
                  include: 'source.ts'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-tsx': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:(?:.*\\.)?tsx))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.tsx.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.tsx',
              patterns: [
                {
                  include: 'source.tsx'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:(?:.*\\.)?tsx))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.tsx.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.tsx',
              patterns: [
                {
                  include: 'source.tsx'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-vbnet': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:fb|freebasic|realbasic|vb\\x2d\\.net|vb\\.net|vbnet|vbscript|visual\\x2dbasic|visual\\x2dbasic\\x2d\\.net|(?:.*\\.)?(?:bi|rbbas|rbfrm|rbmnu|rbres|rbtbar|rbuistate|vb|vbhtml|vbs)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.vbnet.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.vbnet',
              patterns: [
                {
                  include: 'source.vbnet'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:fb|freebasic|realbasic|vb\\x2d\\.net|vb\\.net|vbnet|vbscript|visual\\x2dbasic|visual\\x2dbasic\\x2d\\.net|(?:.*\\.)?(?:bi|rbbas|rbfrm|rbmnu|rbres|rbtbar|rbuistate|vb|vbhtml|vbs)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.vbnet.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.vbnet',
              patterns: [
                {
                  include: 'source.vbnet'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-xml': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:collada|eagle|labview|web\\x2dontology\\x2dlanguage|xpages|(?:.*\\.)?(?:adml|admx|ant|axaml|axml|brd|builds|ccproj|ccxml|clixml|cproject|cscfg|csdef|csproj|ct|dae|depproj|dita|ditamap|ditaval|dll\\.config|dotsettings|filters|fsproj|fxml|glade|gmx|grxml|hzp|iml|ivy|jelly|jsproj|kml|launch|lvclass|lvlib|lvproj|mdpolicy|mjml|mxml|natvis|ndproj|nproj|nuspec|odd|osm|owl|pkgproj|proj|props|ps1xml|psc1|pt|qhelp|rdf|resx|rss|sch|sch|scxml|sfproj|shproj|srdf|storyboard|sublime\\x2dsnippet|targets|tml|ui|urdf|ux|vbproj|vcxproj|vsixmanifest|vssettings|vstemplate|vxml|wixproj|wsdl|wsf|wxi|wxl|wxs|x3d|xacro|xaml|xib|xlf|xliff|xmi|xml|xml\\.dist|xmp|xpl|xproc|xproj|xsd|xsp\\x2dconfig|xsp\\.metadata|xspec|xul|zcml)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.xml.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.xml',
              patterns: [
                {
                  include: 'text.xml'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:collada|eagle|labview|web\\x2dontology\\x2dlanguage|xpages|(?:.*\\.)?(?:adml|admx|ant|axaml|axml|brd|builds|ccproj|ccxml|clixml|cproject|cscfg|csdef|csproj|ct|dae|depproj|dita|ditamap|ditaval|dll\\.config|dotsettings|filters|fsproj|fxml|glade|gmx|grxml|hzp|iml|ivy|jelly|jsproj|kml|launch|lvclass|lvlib|lvproj|mdpolicy|mjml|mxml|natvis|ndproj|nproj|nuspec|odd|osm|owl|pkgproj|proj|props|ps1xml|psc1|pt|qhelp|rdf|resx|rss|sch|sch|scxml|sfproj|shproj|srdf|storyboard|sublime\\x2dsnippet|targets|tml|ui|urdf|ux|vbproj|vcxproj|vsixmanifest|vssettings|vstemplate|vxml|wixproj|wsdl|wsf|wxi|wxl|wxs|x3d|xacro|xaml|xib|xlf|xliff|xmi|xml|xml\\.dist|xmp|xpl|xproc|xproj|xsd|xsp\\x2dconfig|xsp\\.metadata|xspec|xul|zcml)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.xml.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.xml',
              patterns: [
                {
                  include: 'text.xml'
                }
              ]
            }
          ]
        }
      ]
    },
    'commonmark-code-fenced-yaml': {
      patterns: [
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(`{3,})(?:[\\t ]*((?i:jar\\x2dmanifest|kaitai\\x2dstruct|oasv2\\x2dyaml|oasv3\\x2dyaml|unity3d\\x2dasset|yaml|yml|(?:.*\\.)?(?:anim|asset|ksy|lkml|lookml|mat|meta|mir|prefab|raml|reek|rviz|sublime\\x2dsyntax|syntax|unity|yaml\\x2dtmlanguage|yaml\\.sed|yml\\.mysql)))(?:[\\t ]+((?:[^\\n\\r`])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.yaml.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.yaml',
              patterns: [
                {
                  include: 'source.yaml'
                }
              ]
            }
          ]
        },
        {
          begin:
            '(?:^|\\G)[ ]{0,3}(~{3,})(?:[\\t ]*((?i:jar\\x2dmanifest|kaitai\\x2dstruct|oasv2\\x2dyaml|oasv3\\x2dyaml|unity3d\\x2dasset|yaml|yml|(?:.*\\.)?(?:anim|asset|ksy|lkml|lookml|mat|meta|mir|prefab|raml|reek|rviz|sublime\\x2dsyntax|syntax|unity|yaml\\x2dtmlanguage|yaml\\.sed|yml\\.mysql)))(?:[\\t ]+((?:[^\\n\\r])+))?)(?:[\\t ]*$)',
          beginCaptures: {
            1: {
              name: 'string.other.begin.code.fenced.md'
            },
            2: {
              name: 'entity.name.function.md',
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            },
            3: {
              patterns: [
                {
                  include: '#markdown-string'
                }
              ]
            }
          },
          end: '(?:^|\\G)[ ]{0,3}(\\1)(?:[\\t ]*$)',
          endCaptures: {
            1: {
              name: 'string.other.end.code.fenced.md'
            }
          },
          name: 'markup.code.yaml.md',
          patterns: [
            {
              begin: '(^|\\G)(\\s*)(.*)',
              while: '(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)',
              contentName: 'meta.embedded.yaml',
              patterns: [
                {
                  include: 'source.yaml'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  scopeName: 'text.md'
}
export default grammar
