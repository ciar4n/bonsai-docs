---
title: "Spacing"
bookToc: false
---

## Spacing Helpers

#### Collection of helpers to help position elements

<br>

#### \-\-py
The `--inset` helper anchors absolutely positioned elements relative to all edges of the nearest positioned parent. The value of this helper collectively sets the distance of the `top`, `left`, `right` and `bottom` CSS properties. For responsive control this helper can be used in partnership with the `top`, `left`, `right` and `bottom` ultilies.

{{< helper-demo-inset property="inset" min="0" max="78" value="10" target="target-inset" unit="px" append=" --pos:absolute;" >}}
<figure style="--maxw:300px; --br:5px; --pos:relative; --bg:#eee">
<figcaption id="target-inset" style="--inset:0; --pos:absolute; --bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</figcaption>
</figure>
{{< /helper-demo-inset >}}
