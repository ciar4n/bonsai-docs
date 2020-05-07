---
title: "Typography"
weight: 1
---

## Typography

Before you even start adding class or style attributes, **Bedrock CSS** applies a base styling to your semantic HTML elements. Simply load **Bedrock CSS** and base HTML elements will be styled beautifully with zero effort.

### Paragraphs & Inline Elements

{{< code lang="html" >}}
<p>
  Sed egestas, ante et <a href="#">vulputate volutpat</a>, eros pede semper est, <i>vitae luctus metus</i> libero eu augue. Morbi purus libero, faucibus adipiscing, <b>commodo quis</b>, gravida id, est. Sed lectus. <code>Praesent elementum</code> hendrerit tortor. 
</p>
<p>
  <mark>Sed semper lorem at felis</mark>. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, <small>eu pulvinar nunc sapien ornare nisl</small>. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. <code>Morbi interdum mollis sapien</code>.
</p>
{{< /code >}}


### Blockquotes

{{< code lang="html" >}}
<blockquote>
  <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique.</p>
  <footer>—Parmenides, <cite>Nunc sem lacus, accumsan quis</cite></footer>
</blockquote>
{{< /code >}}


### Headings

{{< code lang="html" >}}
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
{{< /code >}}


### Unordered Lists

{{< code lang="html" >}}
<ul>
  <li>Unordered list item 1</li>
  <li>
  Unordered list item 2
    <ul>
      <li>Unordered list sub-item 1</li>
      <li>Unordered list sub-item 2</li>
    </ul>
  </li>
  <li>Unordered list item 3</li>
  <li>Unordered list item 4</li>
</ul>
{{< /code >}}


### Ordered Lists

{{< code lang="html" >}}
<ol>
  <li>Ordered list item 1</li>
  <li>
  Ordered list item 2
    <ol>
      <li>Ordered list sub-item 1</li>
      <li>Ordered list sub-item 2</li>
    </ol>
  </li>
  <li>Ordered list item 3</li>
  <li>Ordered list item 4</li>
</ol>
{{< /code >}}
