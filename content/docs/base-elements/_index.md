---
title: "Base Elements"
bookFlatSection: true
---

{{< code lang="html" >}}
<p>
  Sed egestas, ante et <a href="#">vulputate volutpat</a>, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. <i>Sed semper lorem at felis.</i> Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. <b>Phasellus pede</b> arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. <small>Phasellus lacinia, magna a ullamcorper laoreet</small>, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. <code>Suspendisse ac urna.</code> Etiam pellentesque mauris ut lectus. <mark>Nunc tellus ante</mark>, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
</p>
{{< /code >}}

{{< code lang="html" >}}
<blockquote>
  <p>
      Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique.
  </p>
  <footer>—Parmenides, <cite>Nunc sem lacus, accumsan quis</cite></footer>
</blockquote>
{{< /code >}}

{{< code lang="html" >}}
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
{{< /code >}}

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

{{< code lang="html" >}}
<label>Message
  <textarea placeholder="Hello People..."></textarea>
</label>
{{< /code >}}

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

### Button

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
    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-download fa-w-18" style="transform-origin: 0.5625em 0.4375em 0px;"><g transform="translate(288 256)" class=""><g transform="translate(0, -32)  scale(1, 1)  rotate(0 0 0)" class=""><path fill="currentColor" d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z" transform="translate(-288 -256)" class=""></path></g></g></svg>
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


### Radios & Checkboxes

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
        <input type="password" placeholder="Dow" style="transition: none 0s ease 0s !important; box-shadow: initial !important;">
      </label>
    </p>
  </div>
  <button>Submit</button>
</fieldset>
{{< /code >}}


{{< code lang="html" >}}

{{< /code >}}


{{< code lang="html" >}}

{{< /code >}}


{{< code lang="html" >}}

{{< /code >}}


{{< code lang="html" >}}

{{< /code >}}


{{< code lang="html" >}}

{{< /code >}}


{{< code lang="html" >}}

{{< /code >}}


