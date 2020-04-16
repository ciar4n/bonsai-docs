---
bookToc: false
---

# Box Sizing

Style variables to control the box sizing of an element.

| Style Variable   | Value                |
|------------------|----------------------|
| \-\-bxs:content; | box-sizing: content; |
| \-\-bsx:border;  | box-sizing: border;  |


## Content Box Sizing

{{< code lang="html" >}}
<div style="--bxs:content-box; --h:50px; --w:100px; --p:1rem; --b:white solid;">
    <div style="--h:100%; --w:100%; --bg:white;"></div>
</div>
{{< /code >}}


## Border Box Sizing

{{< code lang="html" >}}
<div style="--bxs:border-box; --h:50px; --w:100px; --p:1rem; --b:white solid;">
    <div style="--h:100%; --w:100%; --bg:white;"></div>
</div>
{{< /code >}}
