---
title: "Shadows"
bookToc: false
---

## Shadow Helpers

#### Bedrock includes a collection of helpers for creating beautiful shadow effects to any box element.

<br>

#### \-\-shadow
The `--shadow` helper is the default shadow helper and adds a smooth box shadow to an element. Value of this helper collectively sets the offset, blur and intensity of the shadow.

{{< helper-demo property="shadow" min="0" max="20" value="4" target="target-shadow" >}}
<figure id="target-shadow" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --shadow:4">
<img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
<figcaption>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
</figcaption>
</figure>
{{< /helper-demo >}}


#### \-\-levitate
The `--levitate` helper translates the element vertically and adds a smooth box shadow. These cobined gives the effect of a element levitating from the page. Value of this helper collectively sets the offset, blur and intensity of the shadow and the translate distance.

{{< helper-demo property="levitate" min="0" max="15" value="4" target="target-levitate" >}}
<figure id="target-levitate" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --levitate:4">
<img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
<figcaption>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
</figcaption>
</figure>
{{< /helper-demo >}}


#### \-\-shadow-soft
The `--shadow-soft` helper adds a soft box shadow to an element. Value of this helper collectively sets the offset, blur and intensity of the shadow.

{{< helper-demo property="shadow-soft" min="0" max="20" value="4" target="target-shadow-soft" >}}
<figure id="target-shadow-soft" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --shadow-soft:4">
<img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
<figcaption>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
</figcaption>
</figure>
{{< /helper-demo >}}

#### \-\-shadow-hard
The `--shadow-hard` helper adds a hard box shadow to an element. Value of this helper collectively sets the offset, blur and intensity of the shadow.

{{< helper-demo property="shadow-hard" min="0" max="20" value="4" target="target-shadow-hard" >}}
<figure id="target-shadow-hard" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --shadow-hard:4">
<img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
<figcaption>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
</figcaption>
</figure>
{{< /helper-demo >}}


#### \-\-shadow-vert
The `--shadow-vert` helper adds a box shadow below the element. Value of this helper collectively sets the offset, blur and intensity of the shadow.

{{< helper-demo property="shadow-vert" min="0" max="20" value="4" target="target-shadow-vert" >}}
<figure id="target-shadow-vert" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --shadow-vert:4">
<img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
<figcaption>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
</figcaption>
</figure>
{{< /helper-demo >}}


#### \-\-shadow-inset
The `--shadow-inset` helper adds an inset box shadow to the element. Value of this helper collectively sets the offset, blur and intensity of the shadow.

{{< helper-demo property="shadow-inset" min="0" max="30" value="10" target="target-shadow-inset" >}}
<figure style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --pos:relative">
<img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
<figcaption>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
</figcaption>
<div id="target-shadow-inset" style="--pos:absolute; --inlay:0; --shadow-inset:10; --z:1"></div>
</figure>
{{< /helper-demo >}}


#### \-\-shadow-hvr
The `--shadow-hvr` helper adds the same effect as the `--shadow` helper however is only applied on hover of the element.

{{< helper-demo property="shadow-hvr" min="0" max="20" value="8" target="target-shadow-hvr" >}}
<div class="hover-me">
    <figure id="target-shadow-hvr" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --shadow-hvr:8">
    <img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
    <figcaption>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
    </figcaption>
    </figure>
</div>
{{< /helper-demo >}}


#### \-\-levitate-hvr
The `--levitate-hvr` helper adds the same effect as the `--levitate` helper however is only applied on hover of the element.

{{< helper-demo property="levitate-hvr" min="0" max="15" value="8" target="target-levitate-hvr" >}}
<div class="hover-me">
    <figure id="target-levitate-hvr" style="--maxw:300px; --br:5px; --bg:#fff; --of:hidden; --levitate-hvr:8">
    <img src="https://source.unsplash.com/8Rq-VSMyNrU/300x130" alt="sample">
    <figcaption>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
    </figcaption>
    </figure>
</div>
{{< /helper-demo >}}