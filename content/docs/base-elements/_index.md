---
title: "Base Elements"
bookFlatSection: true
---

## Base Element Styling

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


### Buttons

{{< code lang="html" >}}
<button>Button</button>
<button aria-label="add">
  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
  Button
</button>
<button disabled="">Button Disabled</button>
{{< /code >}}


### Button Color Variations

{{< code lang="html" >}}
<button class="green">Green</button>
<button class="orange">Orange</button>
<button class="red">Red</button>
<button class="white">White</button>
<button class="grey">Grey</button>
<button class="black">Black</button>
{{< /code >}}


### Button Groups (Horizontal)

{{< code lang="html" >}}
<div class="group">
  <button>Button</button>
  <button>Button</button>
  <button>Button</button>
</div>
{{< /code >}}

{{< code lang="html" >}}
<div class="group">
  <input type="text" placeholder="John" aria-label="Name">
  <button>Button</button>
  <button>Button</button>
</div>
{{< /code >}}

{{< code lang="html" >}}
<div class="group">
  <button aria-label="upload">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7H7V5H13V7Z" fill="currentColor" />
      <path d="M13 11H7V9H13V11Z" fill="currentColor" />
      <path d="M7 15H13V13H7V15Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z" fill="currentColor" />
    </svg>
  </button>
  <input type="text" placeholder="filename.txt" aria-label="Filename">
</div>
{{< /code >}}


### Button Groups (Vertical)

{{< code lang="html" >}}
<div class="group vertical">
  <button>Button</button>
  <button>Button</button>
  <button>Button</button>
  <button>Button</button>
</div>
{{< /code >}}

{{< code lang="html" >}}
<div class="group vertical">
  <button class="white">Button</button>
  <button class="grey">Button</button>
  <button class="green">Button</button>
</div>
{{< /code >}}

{{< code lang="html" >}}
<div class="group vertical">
  <input type="text" placeholder="Name" aria-label="Name">
  <button>Button</button>
</div>
{{< /code >}}


### Inputs

{{< code lang="html" >}}
<p>
  <label>First Name
    <input type="text" placeholder="John">
  </label>
</p>
<p>
  <label>Last Name        
    <input type="text" placeholder="Dow">
  </label>
</p>
{{< /code >}}

{{< code lang="html" >}}
<p>
  <label for="input-date">Input with type="date"
    <input type="date" id="input-date">
  </label>
</p>
<p>
  <label for="input-time">Input with type="time"
    <input type="time" id="input-time">
  </label>
</p>
<p>
  <label>Type
    <select name="type">
      <option value="message">Message</option>
      <option value="feature">Feature</option>
      <option value="report">Report</option>
    </select>
  </label>
</p>
{{< /code >}}


### Input States

{{< code lang="html" >}}
<p>
  <label for="input-text-standard">Standard
    <input type="text">
  </label>
</p>
<p>
  <label for="input-text-disabled">Disabled
    <input type="text" disabled="">
  </label>
</p>
<p>
  <label for="input-text-invalid">Invalid        
    <input type="email" required="" value="ciar4n">
  </label>
</p>
<p>
  <label for="input-text-readonly">Read Only
    <input type="text" readonly="">
  </label>
</p>
{{< /code >}}


### Textarea

{{< code lang="html" >}}
<label>Message
  <textarea placeholder="Hello People..."></textarea>
</label>
{{< /code >}}


### Radios 

{{< code lang="html" >}}
<input type="radio" name="radio" id="radio-1" checked="">
<label for="radio-1">Radio 1</label>
<br>
<input type="radio" name="radio" id="radio-2">
<label for="radio-2">Radio 2</label>
<br>
<input type="radio" name="radio" id="radio-3">
<label for="radio-3">Radio 3</label>
<br>
<input type="radio" name="radio" id="radio-4" disabled="">
<label for="radio-4">Radio 4 (disabled)</label>
{{< /code >}}


### Checkboxes

{{< code lang="html" >}}
<input type="checkbox" id="checkbox-1">
<label for="checkbox-1">Checkbox</label>
<br>
<input type="checkbox" id="checkbox-2" checked="">
<label for="checkbox-2">Checked Checkbox</label>
<br>
<input type="checkbox" id="checkbox-3" disabled="">
<label for="checkbox-3">Disabled Checkbox</label>
{{< /code >}}


### Fieldset

{{< code lang="html" >}}
<fieldset>
  <legend>Fieldset</legend>
  <div class="grid" style="--col: 2">
    <p>
      <label>Username
        <input type="text" placeholder="John">
      </label>
    </p>
    <p>
      <label>Password
        <input type="password" placeholder="Dow">
      </label>
    </p>
  </div>
  <button>Submit</button>
</fieldset>
{{< /code >}}


### Select

{{< code lang="html" >}}
<label for="select">Select
  <select id="select">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <optgroup label="Subgroup">
      <option value="4">Option 4</option>
      <option value="5">Option 5</option>
    </optgroup>
  </select>
</label>       
{{< /code >}}


### Multi Select

{{< code lang="html" >}}
<label for="selectmultiple">Multiselect
  <select id="selectmultiple" multiple="">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <optgroup label="Subgroup">
      <option value="7">Option 7</option>
      <option value="8">Option 8</option>
    </optgroup>
  </select>
</label>
{{< /code >}}

### FIle Input

{{< code lang="html" >}}
<label for="input-file">Input File
  <input type="file">
</label>      
{{< /code >}}


### Color Input

{{< code lang="html" >}}
<label for="input-color">Input Color
  <input type="color" value="#4a69bd">
</label>
{{< /code >}}


### Range Input

{{< code lang="html" >}}
<label for="input-range">Input Range
  <input type="range">
</label>
{{< /code >}}


### Tables

{{< code lang="html" >}}
<table class="accent">
  <thead>
    <tr>
      <th scope="row">Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row 1 Value 1</th>
      <td>Row 1 Value 2</td>
      <td>Row 1 Value 3</td>
      <td>Row 1 Value 4</td>
    </tr>
    <tr>
      <th scope="row">Row 2 Value 1</th>
      <td>Row 2 Value 2</td>
      <td>Row 2 Value 3</td>
      <td>Row 2 Value 4</td>
    </tr>
    <tr>
      <th scope="row">Row 3 Value 1</th>
      <td>Row 3 Value 2</td>
      <td>Row 3 Value 3</td>
      <td>Row 3 Value 4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total 1</th>
      <th>Total 2</th>
      <th>Total 3</th>
      <th>Total 4</th>
    </tr>
  </tfoot>
</table>
{{< /code >}}


### Horizontal Rule

{{< code lang="html" >}}
<hr>
{{< /code >}}


### Details

{{< code lang="html" >}}
<details>
  <summary>Details/Summary example</summary>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat velit
    lorem, feugiat congue lacus laoreet quis. Praesent maximus ex nec justo iaculis, in
    euismod eros dictum. Cras ac lorem sit amet purus malesuada blandit. Mauris gravida
    augue non urna sodales porttitor. Etiam ullamcorper luctus ullamcorper. In lobortis
    consequat ante.
  </p>
</details>
{{< /code >}}


### Definition Lists

{{< code lang="html" >}}
<dl>
  <dt>Term 1</dt>
  <dd>Definition for term 1.</dd>

  <dt>Term 2</dt>
  <dd>Definition for term 2.</dd>

  <dt>Term 3</dt>
  <dd>Definition for term 3.</dd>
</dl>
{{< /code >}}


