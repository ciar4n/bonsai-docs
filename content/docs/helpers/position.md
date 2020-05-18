---
title: "Position"
bookToc: false
---

## Position Helpers

#### Collection of helpers to help position elements

<br>

#### \-\-inset
The `--inset` helper anchors absolutely positioned elements relative to all edges of the nearest positioned parent. The value of this helper collectively sets the distance of the `top`, `left`, `right` and `bottom` CSS properties. For responsive control this helper can be used in partnership with the `top`, `left`, `right` and `bottom` ultilies.

{{< helper-demo-inset property="inset" min="0" max="78" value="10" target="target-inset" unit="px" append=" --pos:absolute;" >}}
<figure style="--maxw:300px; --br:5px; --of:hidden; --pos:relative">
<img src="https://source.unsplash.com/9osthpRGzXk/300x300" alt="sample">
<figcaption id="target-inset" style="--inset:10px; --pos:absolute; --bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</figcaption>
</figure>
{{< /helper-demo-inset >}}

#### \-\-inset-top
The `--inset-top` helper anchors absolutely positioned elements relative to top, left and right edges of the nearest positioned parent. The value of this helper collectively sets the distance of the `top`, `left` and `right` CSS properties. For responsive control this helper can be used in partnership with the `top`, `left`, `right` and `bottom` ultilies.

{{< helper-demo-inset property="inset-top" min="0" max="78" value="10" target="target-inset-top" unit="px" append=" --pos:absolute;" >}}
<figure style="--maxw:300px; --br:5px; --of:hidden; --pos:relative">
<img src="https://source.unsplash.com/9osthpRGzXk/300x300" alt="sample">
<figcaption id="target-inset-top" style="--inset-top:10px; --pos:absolute; --bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</figcaption>
</figure>
{{< /helper-demo-inset >}}

#### \-\-inset-bottom
The `--inset-bottom` helper anchors absolutely positioned elements relative to bottom, left and right edges of the nearest positioned parent. The value of this helper collectively sets the distance of the `bottom`, `left` and `right` CSS properties. For responsive control this helper can be used in partnership with the `top`, `left`, `right` and `bottom` ultilies.

{{< helper-demo-inset property="inset-bottom" min="0" max="78" value="10" target="target-inset-bottom" unit="px" append=" --pos:absolute;" >}}
<figure style="--maxw:300px; --br:5px; --of:hidden; --pos:relative">
<img src="https://source.unsplash.com/9osthpRGzXk/300x300" alt="sample">
<figcaption id="target-inset-bottom" style="--inset-bottom:10px; --pos:absolute; --bg:rgba(0,0,0,.8); --c:white; --br:5px; ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</figcaption>
</figure>
{{< /helper-demo-inset >}}