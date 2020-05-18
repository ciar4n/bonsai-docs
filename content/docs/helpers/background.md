---
title: "Background"
bookToc: false
---

## Background Helpers

#### Collection of helpers for element background

<br>

<div>

#### \-\-grad
The `--grad` helper adds a linear gradiant on the background of an element. By itself `--grad` sets the gradiant from black to transparent. The value can define either the direction (eg. `to top`, `to right`, etc) or the angle (eg. `180deg`). The gradiant color can be changed from the default of black with the addition of the `--grad-color` helper. This helper sets the `background-image` CSS property.

<div style="--d:flex; --mb:4rem;">
    <div style="--p:1rem; --fx:1; --bg:#eee; --as:flex-start; --maxw:600px;">
        <div style="--fx:1; --p:3rem; --mb:.5rem; --d:flex; --jc:center;">
            <figure style="--br:5px; --of:hidden; --grad:0deg; --pos:relative">
                <img src="https://source.unsplash.com/Nho-1hXd3d4/300x300" alt="sample">
                <figcaption id="target-grad" style="--inset:0; --pos:absolute; --grad:180deg; --grad-color:#3188C1;"></figcaption>
            </figure>
        </div>
            <div>
                <input type="color" id="grad-color" name="grad-color" value="#3188C1">
                <input class="slider" type="range" id="grad" min="0" max="260" id="grad" name="grad" value="180">
            </div>
            <div class="markdown" style="--maxw:800px; --w:100%; --pos:relative;">
<div class="highlight" style="--mb:0;"><pre class="chroma" style="--mt:.75rem;"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">style</span><span class="o">=</span><span class="s">"<span id="grad-label">--grad:180deg;</span> <span id="grad-color-label">--grad-color:#3188C1;</span>"</span></span><span class="p"></span><span class="p">&gt;</span> ... <span class="p">&lt;</span><span class="p">/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
            </div>
        </div>
    </div>  
</div>
<script>liveprop('grad', '--grad', 'deg', 'target-grad');</script>
<script>liveprop('grad-color', '--grad-color', '', 'target-grad');</script>

</div>