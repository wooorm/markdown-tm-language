/* eslint-env browser */

/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/// <reference lib="dom" />

import sourceCss from '@wooorm/starry-night/source.css'
import sourceDiff from '@wooorm/starry-night/source.diff'
import sourceJson from '@wooorm/starry-night/source.json'
import sourceJs from '@wooorm/starry-night/source.js'
import sourceToml from '@wooorm/starry-night/source.toml'
import sourceTsx from '@wooorm/starry-night/source.tsx'
import sourceTs from '@wooorm/starry-night/source.ts'
import sourceYaml from '@wooorm/starry-night/source.yaml'
import textHtmlBasic from '@wooorm/starry-night/text.html.basic'
import textXmlSvg from '@wooorm/starry-night/text.xml.svg'
import textXml from '@wooorm/starry-night/text.xml'
import {createStarryNight} from '@wooorm/starry-night'
import {toJsxRuntime} from 'hast-util-to-jsx-runtime'
import ReactDom from 'react-dom/client'
import {Fragment, jsxs, jsx} from 'react/jsx-runtime'
import React from 'react'
import sourceMdx from '../source.mdx.js'
import textMarkdown from '../text.md.js'

/** @type {Array<Grammar>} */
const grammars = [
  sourceCss,
  sourceDiff,
  sourceJs,
  // @ts-expect-error: TS is wrong about `.json`, it’s not an extension.
  sourceJson,
  sourceMdx,
  sourceToml,
  sourceTsx,
  sourceTs,
  sourceYaml,
  textHtmlBasic,
  textMarkdown,
  textXmlSvg,
  textXml
]

const main = document.querySelectorAll('main')[0]

const root = ReactDom.createRoot(main)

const sampleMarkdown = `---
yaml: 1
---

^-- extension: frontmatter

# Hello, *world*!

Autolink: <https://example.com>, <contact@example.com>.
Attention (emphasis): *hi* / _hi_
Attention (strong): **hi** / __hi__
Attention (strong & emphasis): ***hi*** / ___hi___.
Attention (strikethrough): ~hi~ ~~hi~~.
Character escape: \\-, \\&.
Character reference: &amp; &#123; &#x123;.
Code (text): \`hi\` and \`\` \` \`\`.
HTML (comment): <!--hi-->.
HTML (instruction): <?hi?>.
HTML (declaration): <!hi>.
HTML (cdata): <![CDATA[hi]]>.
HTML (tag, close): </x>.
HTML (tag, open): <x>.
HTML (tag, open, self-closing): <x/>.
HTML (tag, open, boolean attribute): <x y>.
HTML (tag, open, unquoted attribute): <x y=z>.
HTML (tag, open, double quoted attribute): <x y="z">.
HTML (tag, open, single quoted attribute): <x y='z'>.
HTML (tag, open, style attribute): <x style="color: tomato !important">.
HTML (tag, open, on* attribute): <x onclick="return false">.
Label end (resource): [a](https://example&dot;com 'title').
Label end (reference, full): [a][b].
Label end (reference, collapsed, shortcut): [a][], [a].

## Definitions

[a]: <https://example\\.com> "b"
[a]: https://example&dot;com 'b'
[a]: # (b\\&c)
[a&amp;b]: <>

## Heading (setext)

alpha
=====

*bravo
charlie*
--------

## Heading (atx)
#
## A ##
### B
#### C
##### D
###### E
####### ?

## Thematic break

***

## Code (indented)

\tconsole.log(1)

## Code (fenced)

\`\`\`\`markdown
\`\`\`css
em { color: red } /* What! */
\`\`\`
\`\`\`\`

~~~js eval
alert(true + 2 + '3')
~~~

## Block quote

> # asd

> **asd
qwe**

> ~~~js
> console.log(1)
> ~~~

## List

1. # asd

* **asd
qwe**

* ~~~js
  console.log('hi!')
  ~~~

123456789.    \`\`\`js
              asd + 123

## HTML (flow)

<!--> html (comment, empty) <x/y/> &amp &amp; &#123 &#123; &#x123 &#x123;

<!---> html (comment, empty 2) I'm &notit; I tell you, I'm &notin; I tell you.

<!----> html (comment, empty 3)

<!-- x
y --> html (comment, multiline)

<?> html (instruction, empty)

<??> html (instruction, empty 2)

<? x
y ?> html (instruction, multiline)

<!a> html (declaration, empty)

<!a b> html (declaration, filled)

<!x
y> html (declaration, multiline)

<![CDATA[]]> (cdata, empty)

<![CDATA[x y]]> (cdata, filled)

<![CDATA[x
y]]> (cdata, multiline)

<script></script> (raw, empty)

<script>x y</script> (raw, script data)

<script>
import x, {y} from 'z'

console.log(Math.PI)
</script> (raw, multiline)

<style>* { color: red !important }</style> (raw, rawtext, style)

<textarea>a &amp; b</textarea> (raw, rcdata)

<article>
Basic (this **is not** emphasis!)

<article>

Basic (this **is** emphasis!)

<xmp>
a &amp; b
</xmp> (basic, rawtext)

<title>
a &amp; b
</title> (basic, rcdata)

</custom-element>
Complete (closing) (this **is not** emphasis!)

</custom-element>

Complete (closing) (this **is** emphasis!)

<custom-element x y='z'>
Complete (open) (this **is not** emphasis!)

<custom-element x y='z'>

Complete (open) (this **is** emphasis!)

## Extension: math

Math (text): $$hi$$ and $$ $ $$.
Math (flow):

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

## Extension: directive

Text: :cite[smith04]

Leaf:

::youtube[Video of a **cat** in a box]{#readme.red.green.blue a=b a="b" a='b' v=01ab2cd3efg}

Containers:

::::spoiler
He dies.

:::spoiler
She is born.
:::
::::

## Extension: GFM autolink literals

a a@b.com/ ("aasd@example.com") mailto:a+b@c.com xmpp:a+b@c.com.

a www.example.com/a(b) www.example.com/a(b(c)), wWw.example.com/a(b(c(d))).

ahttps://example.com https://example.com/a(b) hTTp://example.com/a(b(c(d))).

## Extension: GFM footnotes

a[^b], [^c d].

[^b]: *Lorem
    dolor*.

[^b]:
    ??

[^b]: ~~~js
    console.log(1)
    ~~~

## Extension: GFM task list

*  [ ] not done
1. [x] done

## Extension: GFM table

| Stuff? | stuff! |
| - | ----- |
| asdasda | <https://example.com> |
what&not; | qweeeeeeeeeee

## Extension: GitHub gemoji

:+1: :100:

## Extension: GitHub mention

@username @org/team.

## Extension: GitHub reference

GH-123, #123, GHSA-123asdzxc, cve-123asdzxc, user#123, user/project#123.
`

const sampleMdx = `---
title: Hello!
---

import {Chart} from './chart.js'
import population from './population.js'
import {External} from './some/place.js'

export const year = 2018
export const pi = 3.14

export function SomeComponent(props) {
  const name = (props || {}).name || 'world'

  return <div>
    <p>Hi, {name}!</p>

    <p>and some more things</p>
  </div>
}

export function Local(props) {
  return <span style={{color: 'red'}} {...props} />
}

# Last year’s snowfall

In {year}, the snowfall was above average.
It was followed by a warm spring which caused
flood conditions in many of the nearby rivers.

<Chart year={year} color="#fcb32c" />

<div className="note">
  > Some notable things in a block quote!
</div>

# Heading (rank 1)
## Heading 2
### 3
#### 4
##### 5
###### 6

> Block quote

* Unordered
* List

1. Ordered
2. List

A paragraph, introducing a thematic break:

---

\`\`\`js
// Get an element.
const element = document.querySelectorAll('#hi')

// Add a class.
element.classList.add('asd')
\`\`\`

a [link](https://example.com), an ![image](./image.png), some *emphasis*,
something **strong**, and finally a little \`code()\`.

<Component
  open
  x={1}
  label={'this is a string, *not* markdown!'}
  icon={<Icon />}
/>

Two 🍰 is: {Math.PI * 2}

{(function () {
  const guess = Math.random()

  if (guess > 0.66) {
    return <span style={{color: 'tomato'}}>Look at us.</span>
  }

  if (guess > 0.33) {
    return <span style={{color: 'violet'}}>Who would have guessed?!</span>
  }

  return <span style={{color: 'goldenrod'}}>Not me.</span>
})()}

{/* A comment! */}
`
/** @type {Awaited<ReturnType<typeof createStarryNight>>} */
let starryNight

// eslint-disable-next-line unicorn/prefer-top-level-await -- XO is wrong.
createStarryNight(grammars).then(function (x) {
  starryNight = x

  const missing = starryNight.missingScopes()
  if (missing.length > 0) {
    throw new Error('Missing scopes: `' + missing + '`')
  }

  root.render(React.createElement(Playground))
})

function Playground() {
  const [mdx, setMdx] = React.useState(false)
  const [text, setText] = React.useState(mdx ? sampleMdx : sampleMarkdown)

  const scope = mdx ? 'source.mdx' : 'text.md'

  return (
    <div>
      <section className="highlight">
        <h1>
          <code>markdown-tm-language</code>
        </h1>
        <fieldset>
          <label>
            <input
              checked={!mdx}
              name="language"
              onChange={function () {
                setMdx(false)
                if (text === sampleMdx) setText(sampleMarkdown)
              }}
              type="radio"
            />{' '}
            Use <code>markdown</code>
          </label>
          <label>
            <input
              checked={mdx}
              name="language"
              onChange={function () {
                setMdx(true)
                if (text === sampleMarkdown) setText(sampleMdx)
              }}
              type="radio"
            />{' '}
            Use <code>mdx</code>
          </label>
        </fieldset>
      </section>
      <div className="editor">
        <div className="draw">
          {toJsxRuntime(starryNight.highlight(text, scope), {
            Fragment,
            jsxs,
            jsx
          })}
          {/* Trailing whitespace in a `textarea` is shown, but not in a `div`
          with `white-space: pre-wrap`.
          Add a `br` to make the last newline explicit. */}
          {/\n[ \t]*$/.test(text) ? <br /> : undefined}
        </div>
        <textarea
          className="write"
          onChange={function (event) {
            setText(event.target.value)
          }}
          rows={text.split('\n').length + 1}
          spellCheck="false"
          value={text}
        />
      </div>
      <section className="highlight">
        <p>
          The above playground has the following scopes enabled in{' '}
          <code>starry-night</code>:{' '}
          {grammars.map(function (d, index) {
            const result = <code>{d.scopeName}</code>
            return index ? [', ', result] : result
          })}
          .
        </p>
      </section>
      <section className="credits">
        <p>
          <a href="https://github.com/wooorm/markdown-tm-language">
            Fork this website
          </a>{' '}
          •{' '}
          <a href="https://github.com/wooorm/markdown-tm-language/blob/main/license">
            MIT
          </a>{' '}
          • <a href="https://github.com/wooorm">@wooorm</a>
        </p>
      </section>
    </div>
  )
}
