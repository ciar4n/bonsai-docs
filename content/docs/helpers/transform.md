---
title: "Transform"
bookToc: false
---

## Transform Helpers

#### Collection of helpers for setting transition of elements. These variables can be mixed so get creative!

<br>

#### \-\-translatey
The `--translatey` helper set the `transform: tansitionY()` property allowing you to transform an element on the vertical axis.

{{< helper-demo property="translatey" min="-45" max="40" value="0" target="target-translatey" unit="px" >}}
<figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
    <figcaption id="target-translatey" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </figcaption>
</figure>
{{< /helper-demo >}}

#### \-\-translatey-hvr
The `--translatey-hvr` helper set the `transform: tansitionY()` property allowing you to transform an element on the vertical axis on hover.

{{< helper-demo property="translatey-hvr" min="-45" max="40" value="-30" target="target-translatey-hvr" unit="px" >}}
<div class="hover-me">
    <figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
        <figcaption id="target-translatey-hvr" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; --translatey-hvr:-30px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </figcaption>
    </figure>
</div>
{{< /helper-demo >}}
#### \-\-translatex
The `--translatex` helper set the `transform: tansitionX()` property allowing you to transform an element on the vertical axis.

{{< helper-demo property="translatex" min="-50" max="50" value="0" target="target-translatex" unit="px" >}}
<figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
    <figcaption id="target-translatex" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </figcaption>
</figure>
{{< /helper-demo >}}

#### \-\-translatex-hvr
The `--translatex-hvr` helper set the `transform: tansitionX()` property allowing you to transform an element on the vertical axis on hover.

{{< helper-demo property="translatex-hvr" min="-80" max="80" value="-25" target="target-translatex-hvr" unit="px" >}}
<div class="hover-me">
    <figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
        <figcaption id="target-translatex-hvr" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; --translatex-hvr:-25px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </figcaption>
    </figure>
</div>
{{< /helper-demo >}}

#### \-\-scale
The `--scale` helper set the `transform: scale()` property allowing you to transform an element scale.

{{< helper-demo property="scale" min="50" max="150" value="100" target="target-scale" unit="%" >}}
<figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
    <figcaption id="target-scale" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </figcaption>
</figure>
{{< /helper-demo >}}

#### \-\-scale-hvr
The `--scale-hvr` helper set the `transform: scale()` property allowing you to transform an element scale on hover.

{{< helper-demo property="scale-hvr" min="50" max="150" value="75" target="target-scale-hvr" unit="%" >}}
<div class="hover-me">
    <figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
        <figcaption id="target-scale-hvr" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; --scale-hvr: 75%;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </figcaption>
    </figure>
</div>
{{< /helper-demo >}}

#### \-\-rotate
The `--rotate` helper set the `transform: rotate()` property allowing you to transform an element rotation.

{{< helper-demo property="rotate" min="-50" max="50" value="0" target="target-rotate" unit="deg" >}}
<figure style="--maxw:150px; --br:5px; --pos:relative; --bg:#eee">
    <figcaption id="target-rotate" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </figcaption>
</figure>
{{< /helper-demo >}}

#### \-\-rotate-hvr
The `--rotate-hvr` helper set the `transform: rotate()` property allowing you to transform an element rotate on hover.

{{< helper-demo property="rotate-hvr" min="-50" max="50" value="30" target="target-rotate-hvr" unit="deg" >}}
<div class="hover-me">
    <figure style="--maxw:150px; --br:5px; --pos:relative; --bg:#eee">
        <figcaption id="target-rotate-hvr" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; --rotate-hvr: 30deg;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </figcaption>
    </figure>
</div>
{{< /helper-demo >}}


#### \-\-skew
The `--skew` helper set the `transform: skew()` property allowing you to transform an element rotation.

{{< helper-demo property="skew" min="-50" max="50" value="0" target="target-skew" unit="deg" >}}
<figure style="--maxw:150px; --br:5px; --pos:relative; --bg:#eee">
    <figcaption id="target-skew" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </figcaption>
</figure>
{{< /helper-demo >}}

#### \-\-skew-hvr
The `--skew-hvr` helper set the `transform: skew()` property allowing you to transform an element skew on hover.

{{< helper-demo property="skew-hvr" min="-50" max="50" value="30" target="target-skew-hvr" unit="deg" >}}
<div class="hover-me">
    <figure style="--maxw:150px; --br:5px; --pos:relative; --bg:#eee">
        <figcaption id="target-skew-hvr" style="--bg:rgba(0,0,0,.8); --c:white; --br:5px; --skew-hvr: 30deg;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </figcaption>
    </figure>
</div>
{{< /helper-demo >}}