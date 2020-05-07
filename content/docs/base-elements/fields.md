---
title: "Fields"
weight: 3
---

## Fields
#### Base styling for field elements icnluding inputs, textareas and selects

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

