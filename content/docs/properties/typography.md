---
bookToc: false
---

# Typography

## Color

Style variables to control the text color of an element

## Font Size

Style variables to control the font size of an element

| Shorthand          | Longhand                | Value              |
| ------------------ | ----------------------- | ------------------ |
| \-\-size:.8rempx;  | \-\-font-size:.8rempx;  | font-size: .8rem;  |
| \-\-size:1rempx;   | \-\-font-size:1rempx;   | font-size: 1rem;   |
| \-\-size:1.2rempx; | \-\-font-size:1.2rempx; | font-size: 1.2rem; |
| \-\-size:1.5rempx; | \-\-font-size:1.5rempx; | font-size: 1.5rem; |
| \-\-size:1.8rempx; | \-\-font-size:1.8rempx; | font-size: 1.8rem; |
| \-\-size:2rempx;   | \-\-font-size:2rempx;   | font-size: 2rem;   |

{{< code lang="html">}}
<p style="--size:.8rem">How vexingly quick daft zebras jump!</p>
<p style="--size:1rem">How vexingly quick daft zebras jump!</p>
<p style="--size:1.2rem">How vexingly quick daft zebras jump!</p>
<p style="--size:1.5rem">How vexingly quick daft zebras jump!</p>
<p style="--size:1.8rem">How vexingly quick daft zebras jump!</p>
<p style="--size:2rem">How vexingly quick daft zebras jump!</p>
{{< /code >}}

## Font Style

Style variables to control the font style of an element.

| Shorthand         | Longhand               | Value               |
| ----------------- | ---------------------- | ------------------- |
| \-\-style:normal; | \-\-font-style:normal; | font-style: normal; |
| \-\-style:italic; | \-\-font-style:italic; | font-style: italic; |

{{< code lang="html" >}}
<h4 style="--style:normal">How vexingly quick daft zebras jump!</h4>
<h4 style="--style:italic">How vexingly quick daft zebras jump!</h4>
{{< /code >}}


## Letter Spacing

Style variables to control the letter spacing of an element.

| Shorthand    | Longhand                 | Value                 |
| ------------ | ------------------------ | --------------------- |
| \-\-ls:-2px; | \-\-letter-spacing:-2px; | letter-spacing: -2px; |
| \-\-ls:-1px; | \-\-letter-spacing:-1px; | letter-spacing: -1px; |
| \-\-ls:1px;  | \-\-letter-spacing:1px;  | letter-spacing: 1px;  |
| \-\-ls:2px;  | \-\-letter-spacing:2px;  | letter-spacing: 2px;  |
| \-\-ls:3px;  | \-\-letter-spacing:3px;  | letter-spacing: 3px;  |
| \-\-ls:4px;  | \-\-letter-spacing:4px;  | letter-spacing: 4px;  |
| \-\-ls:5px;  | \-\-letter-spacing:5px;  | letter-spacing: 5px;  |
| \-\-ls:6px;  | \-\-letter-spacing:6px;  | letter-spacing: 6px;  |

{{< code lang="html" >}}
<h4 style="--ls:-1px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:0px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:1px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:2px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:3px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:4px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:5px">How vexingly quick daft zebras jump!</h4>
<h4 style="--ls:6px">How vexingly quick daft zebras jump!</h4>
{{< /code >}}

## Line Height

Style variables to control the line height of an element.

| Shorthand      | Longhand                | Value                |
|----------------|-------------------------|----------------------|
| \-\-lh:.8rem;  | \-\-line-height:.8rem;  | line-height: .8rem;  |
| \-\-lh:1rem;   | \-\-line-height:1rem;   | line-height: 1rem;   |
| \-\-lh:1.2rem; | \-\-line-height:1.2rem; | line-height: 1.2rem; |
| \-\-lh:1.5rem; | \-\-line-height:1.5rem; | line-height: 1.5rem; |
| \-\-lh:1.8rem; | \-\-line-height:1.8rem; | line-height: 1.8rem; |
| \-\-lh:2rem;   | \-\-line-height:2rem;   | line-height: 2rem;   |

{{< code lang="html" >}}
<p style="--lh:.8rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--lh:1rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--lh:1.2rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--lh:1.5rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--lh:1.8rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--lh:2rem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
{{< /code >}}


## List Style Type

Style variables to control the style type of a list.

| Shorthand                     | Longhand                                  | Value                                  |
|-------------------------------|-------------------------------------------|----------------------------------------|
| \-\-lst:disc;                 | \-\-list-style-type:disc;                 | list-style-type: disc;                 |
| \-\-lst:armenian;             | \-\-list-style-type:armenian;             | list-style-type: armenian;             |
| \-\-lst:circle;               | \-\-list-style-type:circle;               | list-style-type: circle;               |
| \-\-lst:cjk-ideographic;      | \-\-list-style-type:cjk-ideographic;      | list-style-type: cjk-ideographic;      |
| \-\-lst:decimal;              | \-\-list-style-type:decimal;              | list-style-type: decimal;              |
| \-\-lst:decimal-leading-zero; | \-\-list-style-type:decimal-leading-zero; | list-style-type: decimal-leading-zero; |
| \-\-lst:georgian;             | \-\-list-style-type:georgian;             | list-style-type: georgian;             |
| \-\-lst:hebrew;               | \-\-list-style-type:hebrew;               | list-style-type: hebrew;               |
| \-\-lst:hiragana;             | \-\-list-style-type:hiragana;             | list-style-type: hiragana;             |
| \-\-lst:hiragana-iroha;       | \-\-list-style-type:hiragana-iroha;       | list-style-type: hiragana-iroha;       |
| \-\-lst:katakana;             | \-\-list-style-type:katakana;             | list-style-type: katakana;             |
| \-\-lst:katakana-iroha;       | \-\-list-style-type:katakana-iroha;       | list-style-type: katakana-iroha;       |
| \-\-lst:lower-alpha;          | \-\-list-style-type:lower-alpha;          | list-style-type: lower-alpha;          |
| \-\-lst:lower-greek;          | \-\-list-style-type:lower-greek;          | list-style-type: lower-greek;          |
| \-\-lst:lower-latin;          | \-\-list-style-type:lower-latin;          | list-style-type: lower-latin;          |
| \-\-lst:lower-roman;          | \-\-list-style-type:lower-roman;          | list-style-type: lower-roman;          |
| \-\-lst:none;                 | \-\-list-style-type:none;                 | list-style-type: none;                 |
| \-\-lst:square;               | \-\-list-style-type:square;               | list-style-type: square;               |
| \-\-lst:upper-alpha;          | \-\-list-style-type:upper-alpha;          | list-style-type: upper-alpha;          |
| \-\-lst:upper-greek;          | \-\-list-style-type:upper-greek;          | list-style-type: upper-greek;          |
| \-\-lst:upper-latin;          | \-\-list-style-type:upper-latin;          | list-style-type: upper-latin;          |
| \-\-lst:upper-roman;          | \-\-list-style-type:upper-roman;          | list-style-type: upper-roman;          |

{{< code lang="html" >}}
<ul style="--lst:disc">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:circle">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:decimal">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:decimal-leading-zero">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:georgian">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:hebrew">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:lower-alpha">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:lower-greek">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:lower-latin">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:lower-roman">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:none">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:square">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:upper-alpha">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:upper-greek">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:upper-latin">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lst:upper-roman">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
{{< /code >}}


## List Style Position

Style variables to control the style type of a list.

| Shorthand                     | Longhand                           | Value                                  |
|-------------------------------|------------------------------------|----------------------------------------|
| \-\-lsp:outside;              | \-\-list-style-position:outside;   | list-style-position: outside;          |
| \-\-lsp:inside;               | \-\-list-style-position:inside;    | list-style-position: inside;           |

{{< code lang="html" >}}
<ul style="--lsp:outside">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
<ul style="--lsp:inside">
    <li>Aliquam tincidunt mauris eu risus.</li>
    <li>Vestibulum auctor dapibus neque.</li>
    <li>Nunc dignissim risus id metus.</li>
</ul>
{{< /code >}}

## Text Align

Style variables to control the text alignment of an element.

| Shorthand       | Longhand               | Value               |
|-----------------|------------------------|---------------------|
| \-\-ta:left;    | \-\-text-align:left;   | text-align: left;   |
| \-\-ta:right;   | \-\-text-align:right;  | text-align: right;  |
| \-\-ta:center;  | \-\-text-align:center; | text-align: center; |
| \-\-ta:justify; | \-\-text-align:justify;| text-align: justify;|
| \-\-ta:start;   | \-\-text-align:start;  | text-align: start;  |
| \-\-ta:end;     | \-\-text-align:end;    | text-align: end;    |

{{< code lang="html" >}}
<p style="--ta:left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--ta:right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--ta:center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--ta:justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--ta:start">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
<p style="--ta:end">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
{{< /code >}}

## Text Decoration

Style variables to control the text decoration of an element.

| Shorthand                        | Longhand                                      | Value                                      |
|----------------------------------|-----------------------------------------------|--------------------------------------------|
| \-\-td:underline;                | \-\-text-decoration:underline;                | text-decoration: underline;                |
| \-\-td:overline;                 | \-\-text-decoration:overline;                 | text-decoration: overline;                 |
| \-\-td:line-through;             | \-\-text-decoration:line-through;             | text-decoration: line-through;             |
| \-\-td:underline overline;       | \-\-text-decoration:underline overline;       | text-decoration: underline overline;       |
| \-\-td:double underline;         | \-\-text-decoration:double underline;         | text-decoration: double underline;         |
| \-\-td:dotted underline;         | \-\-text-decoration:dotted underline;         | text-decoration: dotted underline;         |
| \-\-td:dashed underline;         | \-\-text-decoration:dashed underline;         | text-decoration: dashed underline;         |
| \-\-td:underline var(--primary); | \-\-text-decoration:underline var(--primary); | text-decoration: underline var(--primary); |
| \-\-td:dotted underline #aaaaaa; | \-\-text-decoration:dotted underline #cccccc; | text-decoration: dotted underline #cccccc; |

{{< code lang="html" >}}
<h5 style="--td:underline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:overline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:line-through">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:underline overline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:double underline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:dotted underline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:dashed underline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:underline var(--primary)">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:dotted underline #aaaaaa">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
<h5 style="--td:wavy underline var(--primary)">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h5>
{{< /code >}}

## Writing Mode

Style variables to control the text decoration of an element.

| Shorthand             | Longhand                        | Value                        |
|-----------------------|---------------------------------|------------------------------|
| \-\-wm:horizontal-tb; | \-\-writing-mode:horizontal-tb; | writing-mode: horizontal-tb; |
| \-\-wm:vertical-rl;   | \-\-writing-mode:vertical-rl;   | writing-mode: vertical-rl;   |
| \-\-wm:vertical-lr;   | \-\-writing-mode:vertical-lr;   | writing-mode: vertical-lr;   |

{{< code lang="html" >}}
<p style="--wm:horizontal-tb; --bg:white; --p:5px;">Hello World!</p>
<p style="--wm:vertical-rl; --bg:white; --p:5px; --h:4rem;">Hello World!</p>
<p style="--wm:vertical-lr; --bg:white; --p:5px; --h:4rem;">Hello World!</p>
{{< /code >}}

## Vertical Align

Style variables to control the vertical alignment of an element.

| Shorthand        | Longhand                     | Value                     |
|------------------|------------------------------|---------------------------|
| \-\-va:baseline; | \-\-vertical-align:baseline; | vertical-align: baseline; |
| \-\-va:top;      | \-\-vertical-align:top;      | vertical-align: top;      |
| \-\-va:middle;   | \-\-vertical-align:middle;   | vertical-align: middle;   |
| \-\-va:bottom;   | \-\-vertical-align:bottom;   | vertical-align: bottom;   |
| \-\-va:sub;      | \-\-vertical-align:sub;      | vertical-align: sub;      |
| \-\-va:test-top; | \-\-vertical-align:test-top; | vertical-align: test-top; |

{{< code lang="html" >}}
<p>vertical-align <span style="--va:baseline; --d:inline-block; --bg:white; --h:3rem; --w:3rem; --mx:.5rem"></span>baseline;</p>
<p>vertical-align <span style="--va:top; --d:inline-block; --bg:white; --h:3rem; --w:3rem; --mx:.5rem"></span>top;</p>
<p>vertical-align <span style="--va:middle; --d:inline-block; --bg:white;  --h:3rem; --w:3rem; --mx:.5rem"></span>middle;</p>
<p>vertical-align <span style="--va:bottom; --d:inline-block; --bg:white; --h:3rem; --w:3rem; --mx:.5rem"></span>bottom;</p>
<p>vertical-align <span style="--va:sub; --d:inline-block; --bg:white; --h:3rem; --w:3rem; --mx:.5rem"></span>sub;</p>
{{< /code >}}

## White Space

Style variables to control the white space of an element.

| Shorthand            | Longhand                      | Value                      |
|----------------------|-------------------------------|----------------------------|
| \-\-ws:normal;       | \-\-white-space:normal;       | white-space: normal;       |
| \-\-ws:nowrap;       | \-\-white-space:nowrap;       | white-space: nowrap;       |
| \-\-ws:pre;          | \-\-white-space:pre;          | white-space: pre;          |
| \-\-ws:pre-wrap;     | \-\-white-space:pre-wrap;     | white-space: pre-wrap;     |
| \-\-ws:pre-line;     | \-\-white-space:pre-line;     | white-space: pre-line;     |
| \-\-ws:break-spaces; | \-\-white-space:break-spaces; | white-space: break-spaces; |

{{< code lang="html" >}}
<p style="--ws:normal; overflow-x:auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
Sed egestas, ante et vulputate volutpat.

Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
{{< /code >}}

{{< code lang="html" >}}
<p style="--ws:nowrap; overflow-x:auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
Sed egestas, ante et vulputate volutpat.

Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
{{< /code >}}

{{< code lang="html" >}}
<p style="--ws:pre; overflow-x:auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
Sed egestas, ante et vulputate volutpat.

Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
{{< /code >}}

{{< code lang="html" >}}
<p style="--ws:pre-wrap; overflow-x:auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
Sed egestas, ante et vulputate volutpat.

Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
{{< /code >}}

{{< code lang="html" >}}
<p style="--ws:pre-line; overflow-x:auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
Sed egestas, ante et vulputate volutpat.

Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
{{< /code >}}

{{< code lang="html" >}}
<p style="--ws:break-spaces; overflow-x:auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
Sed egestas, ante et vulputate volutpat.

Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
{{< /code >}}

## Word Break

Style variables to control the word break of an element.

| Shorthand           | Longhand                     | Value                     |
|---------------------|------------------------------|---------------------------|
| \-\-wb:normal;      | \-\-word-break:normal;       | word-break: normal;       |
| \-\-ws:breal-all;   | \-\-white-space:breal-all;   | white-space: breal-all;   |
| \-\-ws:keep-all;    | \-\-white-space:keep-all;    | white-space: keep-all;    |
| \-\-ws:brealk-word; | \-\-white-space:brealk-word; | white-space: brealk-word; |

{{< code lang="html" >}}
<p style="--wb:normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
<p style="--ws:breal-all">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
<p style="--ws:keep-all">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
<p style="--ws:brealk-word">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
{{< /code >}}


## Column Count

Style variables to control the coulmn count of an element.

| Shorthand | Longhand            | Value            |
|-----------|---------------------|------------------|
| \-\-cc:2; | \-\-column-count:2; | column-count: 2; |
| \-\-cc:3; | \-\-column-count:3; | column-count: 3; |
| \-\-cc:4; | \-\-column-count:4; | column-count: 4; |
| \-\-cc:5; | \-\-column-count:5; | column-count: 5; |
| \-\-cc:6; | \-\-column-count:6; | column-count: 6; |

{{< code lang="html" >}}
<p style="--cc:2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
<p style="--cc:3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
<p style="--cc:4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
{{< /code >}}

## Column gap

Style variables to control the coulmn gap of an element.

| Shorthand     | Longhand              | Value              |
|---------------|-----------------------|--------------------|
| \-\-cg:1rem;  | \-\-column-gap:1rem;  | column-gap: 1rem;  |
| \-\-cg:2rem ; | \-\-column-gap:2rem ; | column-gap: 2rem ; |
| \-\-cg:20px;  | \-\-column-gap:20px;  | column-gap: 20px;  |
| \-\-cg:5vw;   | \-\-column-gap:5vw;   | column-gap: 5vw;   |

{{< code lang="html" >}}
<p style="--cc:2; --cg:4rem;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
{{< /code >}}

## Column Rule

Style variables to control the coulmn rule of an element.

| Shorthand               | Longhand                         | Value                         |
|-------------------------|----------------------------------|-------------------------------|
| \-\-cr:1px solid #ccc;  | \-\-column-rule:1px solid #ccc;  | column-rule: 1px solid #ccc;  |
| \-\-cr:dotted;          | \-\-column-rule:dotted;          | column-rule: dotted;          |
| \-\-cr:solid blue;      | \-\-column-rule:solid blue;      | column-rule: solid blue;      |
| \-\-cr:8px double gray; | \-\-column-rule:8px double gray; | column-rule: 8px double gray; |
| \-\-cr:2px solid red;   | \-\-column-rule:2px solid red;   | column-rule: 2px solid red;   |

{{< code lang="html" >}}
<p style="--cc:2; --cg:2rem; --cr:2px solid;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
{{< /code >}}


## Line Clamp

Style variables to control the line clamp of an element.

| Shorthand | Longhand          | Value                                                                                                    |
|-----------|-------------------|----------------------------------------------------------------------------------------------------------|
| n/a       | \-\-line-clamp:1; | display: -webkit-box;<br/>-webkit-line-clamp: 1;<br/>-webkit-box-orient: vertical;<br/>overflow: hidden; |
| n/a       | \-\-line-clamp:2; | display: -webkit-box;<br/>-webkit-line-clamp: 2;<br/>-webkit-box-orient: vertical;<br/>overflow: hidden; |
| n/a       | \-\-line-clamp:3; | display: -webkit-box;<br/>-webkit-line-clamp: 3;<br/>-webkit-box-orient: vertical;<br/>overflow: hidden; |
| n/a       | \-\-line-clamp:4; | display: -webkit-box;<br/>-webkit-line-clamp: 4;<br/>-webkit-box-orient: vertical;<br/>overflow: hidden; |

{{< code lang="html" >}}
<p style="--line-clamp:2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
{{< /code >}}
