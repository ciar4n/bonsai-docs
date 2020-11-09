---
title: "Form Sizing"
bookToc: false
---

## Form Sizing Helper

#### A sizing helper allowing you to adjust the size of form elements

<br>

#### \-\-x
The `--x` helper allows you to adjust form elements by percentage size. By default `--x` has a value of `100` (%) where a value less than `100` will reduce the size of the element and a value above `100` will increase the size of the element. The `--x` helper effects the font-size and padding of the element.

{{< helper-demo-button property="x" min="50" max="200" value="100" target="target-x" >}}
<button id="target-x" aria-label="add" style="--x:100;">
  Button
</button>
{{< /helper-demo-button >}}

##### Button Groups
The `--x` helper works across all form elements including button groups, select fields and all input types.accent

<div style="--d:flex; --mb:4rem;">
    <div style="--p:1rem; --fx:1; --bg:#eee; --as:flex-start; --maxw:600px;">
        <div style="--fx:1; --p:3rem 1rem; --mb:.5rem; --d:flex; --jc:center; --ai: center; --minh: 180px">
            <div id="target-x-group" class="group"  style="--x:100;">
  <input type="text" placeholder="John" aria-label="Name">
  <button>Button</button>
  <button>Button</button>
</div>
        </div>
            <div>
                <input class="slider" type="range" id="x-group" name="" min="60" max="120" value="100">
            </div>
            <div class="markdown" style="--maxw:800px; --w:100%; --pos:relative;">
<div class="highlight" style="--mb:0;"><pre class="chroma" style="--mt:.75rem;"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">"group"</span> <span class="na">style</span><span class="o">=</span><span class="s">"<span id="x-group-label">--x:100;</span>"</span></span><span class="p"></span><span class="p">&gt;</span> 
  <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">"text"</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">"John"</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">"Name"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">button</span><span class="p">&gt;</span>Button<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">button</span><span class="p">&gt;</span>Button<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="p">/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
            </div>
        </div>
    </div>  
</div>
<script>liveprop('x-group', '--x', '', 'target-x-group');</script>

##### Forms and outside containers
The `--x` helper can be applied to the outside container of a collection of form elements. All form elements inside the container will inherit the `--x` value.

<div style="--d:flex; --mb:4rem;">
    <div style="--p:1rem; --fx:1; --bg:#eee; --as:flex-start; --maxw:600px;">
        <div style="--fx:1; --p:1.5rem 1rem; --mb:.5rem; --d:flex; --ai: flex-start; --minh: 360px">
          <form id="target-x-form" style="--x: 100;">
          <label>Username
            <input type="text" placeholder="John">
          </label>
          <label>Password
            <input type="password" placeholder="Dow">
          </label>
          <button>Submit</button>
        </form>
        </div>
            <div>
                <input class="slider" type="range" id="x-form" name="" min="60" max="160" value="100">
            </div>
            <div class="markdown" style="--maxw:800px; --w:100%; --pos:relative;">
<div class="highlight" style="--mb:0;"><pre class="chroma" style="--mt:.75rem;"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">form</span> <span class="na">style</span><span class="o">=</span><span class="s">"<span id="x-form-label">--x:100;</span>"</span></span><span class="p"></span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">label</span><span class="p">&gt;</span>Username
    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">"text"</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">"John"</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">label</span><span class="p">&gt;</span>Password
    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">"password"</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">"Dow"</span><span class="p">&gt;</span>
  <span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">button</span><span class="p">&gt;</span>Submit<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="p">/</span><span class="nt">form</span><span class="p">&gt;</span></code></pre>
            </div>
        </div>
    </div>  
</div>
<script>liveprop('x-form', '--x', '', 'target-x-form');</script>