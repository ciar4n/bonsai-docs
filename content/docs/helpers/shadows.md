---
title: "Shadows"
bookToc: false
---

## Shadow Helper

Bedrock includes a collection of helpers for creating beautiful shadow effects to any box element.

<div style="--d:flex; --jc:center; --mb:10rem;">
    <div style="--p:1rem; --fx:1; --bg:#eee;">
        <div>
            <label for="shadow">--shadow</label>
            <input class="slider" type="range" id="shadow" name="shadow" min="0" max="20" value="4">
        </div>
        <div class="markdown" style="--maxw:800px; --w:100%; --pos:relative;">
<div class="highlight"><pre class="chroma"><code class="language-html" data-lang="html"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">style</span><span class="o">=</span><span class="s">"<span id="shadow-label">--shadow:3;</span>"</span></span><span class="p"></span><span class="p">&gt;</span> ... <span class="p">&lt;</span><span class="p">/</span><span class="nt">div</span><span class="p">&gt;</span></code></pre>
        </div>
    </div>    
</div>
<div style="--fx:1; padding: 1rem">
        <figure class="demo" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --shadow:4">
        <img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
        <figcaption>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </figcaption>
        </figure>
    </div>
<script>
    liveprop('shadow', '--shadow', '');
</script>