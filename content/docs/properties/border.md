---
bookToc: false
---

# Border

## Border

Style variables to control the border of an element.

| Style Variable                          | Value                                     |
|-----------------------------------------|-------------------------------------------|
| \-\-b:solid;                            | border: solid;                            |
| \-\-b:dashed var(\-\-primary);          | border: dashed var(\-\-primary);          |
| \-\-b:1rem solid;                       | border: 1rem solid;                       |
| \-\-b:thick double #32a1ce;             | border: thick double #32a1ce;             |
| \-\-b:4mm ridge rgba(170, 50, 220, .6); | border: 4mm ridge rgba(170, 50, 220, .6); |

{{< code lang="html" >}}
<div style="--b:solid; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:dashed var(--primary); --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:1rem solid; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:thick double #32a1ce; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:4mm ridge rgba(170, 50, 220, .6); --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Color

Style variables to control the border color of an element.

| Style Variable                 | Value                                 |
|--------------------------------|---------------------------------------|
| \-\-bc:var(\-\-primary);       | border-color: var(\-\-primary);       |
| \-\-bc:indigo;                 | border-color: indigo;                 |
| \-\-bc:#888888;                | border-color: #888888;                |
| \-\-bc:rgba(170, 50, 220, .6); | border-color: rgba(170, 50, 220, .6); |

{{< code lang="html" >}}
<div style="--b:solid; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:dashed var(--primary); --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:1rem solid; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:thick double #32a1ce; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--b:4mm ridge rgba(170, 50, 220, .6); --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Style

Style variables to control the borde style of an element.

| Style Variable | Value                 |
|----------------|-----------------------|
| \-\-bs:none;   | border-style: none;   |
| \-\-bs:hidden; | border-style: hidden; |
| \-\-bs:dotted; | border-style: dotted; |
| \-\-bs:dashed; | border-style: dashed; |
| \-\-bs:solid;  | border-style: solid;  |
| \-\-bs:double; | border-style: double; |
| \-\-bs:groove; | border-style: groove; |
| \-\-bs:ridge;  | border-style: ridge;  |
| \-\-bs:inset;  | border-style: inset;  |
| \-\-bs:outset; | border-style: outset; |

{{< code lang="html" >}}
<div style="--bs:dotted; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:dashed; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:double; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Width

Style variables to control the border width of an element.

| Style Variable | Value               |
|----------------|---------------------|
| \-\-bw:1px;    | border-width: 1px;  |
| \-\-bw:2rem;   | border-width: 2rem; |
| \-\-bw:1vw;    | border-width: 1vw;  |
| \-\-bw:1%;     | border-width: 1%;   |


{{< code lang="html" >}}
<div style="--bs:solid; --bw:1px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bw:5px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bw:2rem; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bw:1vw; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bw:1%; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Radius

Style variables to control the border-radius of an element.

| Style Variable | Value                |
|----------------|----------------------|
| \-\-br:4px;    | border-radius: 4px;  |
| \-\-br:15px;   | border-radius: 15px; |
| \-\-br:2rem;   | border-radius: 2rem; |
| \-\-br:25%;    | border-radius: 25%;  |
| \-\-br:50%;    | border-radius: 50%;  |

{{< code lang="html" >}}
<div style="--bs:solid; --br:4px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --br:15px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --br:1rem; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --br:25%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --br:50%; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Top Left Radius

Style variables to control the border top left radius of an element.

| Style Variable | Value                         |
|----------------|-------------------------------|
| \-\-btlr:4px;  | border-top-left-radius: 4px;  |
| \-\-btlr:15px; | border-top-left-radius: 15px; |
| \-\-btlr:2rem; | border-top-left-radius: 2rem; |
| \-\-btlr:25%;  | border-top-left-radius: 25%;  |
| \-\-btlr:50%;  | border-top-left-radius: 50%;  |

{{< code lang="html" >}}
<div style="--bs:solid; --btlr:4px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btlr:1rem; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btlr:25%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btlr:50%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btlr:100%; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Top Right Radius

Style variables to control the border top right radius of an element.

| Style Variable | Value                          |
|----------------|--------------------------------|
| \-\-btrr:4px;  | border-top-right-radius: 4px;  |
| \-\-btrr:15px; | border-top-right-radius: 15px; |
| \-\-btrr:2rem; | border-top-right-radius: 2rem; |
| \-\-btrr:25%;  | border-top-right-radius: 25%;  |
| \-\-btrr:50%;  | border-top-right-radius: 50%;  |

{{< code lang="html" >}}
<div style="--bs:solid; --btrr:4px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btrr:1rem; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btrr:25%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btrr:50%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --btrr:100%; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Bottom Left Radius

Style variables to control the border bottom left radius of an element.

| Style Variable | Value                            |
|----------------|----------------------------------|
| \-\-bblr:4px;  | border-bottom-left-radius: 4px;  |
| \-\-bblr:15px; | border-bottom-left-radius: 15px; |
| \-\-bblr:2rem; | border-bottom-left-radius: 2rem; |
| \-\-bblr:25%;  | border-bottom-left-radius: 25%;  |
| \-\-bblr:50%;  | border-bottom-left-radius: 50%;  |

{{< code lang="html" >}}
<div style="--bs:solid; --bblr:4px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bblr:1rem; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bblr:25%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bblr:50%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bblr:100%; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}


## Border Bottom Right Radius

Style variables to control the border bottom right radius of an element.

| Style Variable | Value                             |
|----------------|-----------------------------------|
| \-\-bbrr:4px;  | border-bottom-right-radius: 4px;  |
| \-\-bbrr:15px; | border-bottom-right-radius: 15px; |
| \-\-bbrr:2rem; | border-bottom-right-radius: 2rem; |
| \-\-bbrr:25%;  | border-bottom-right-radius: 25%;  |
| \-\-bbrr:50%;  | border-bottom-right-radius: 50%;  |

{{< code lang="html" >}}
<div style="--bs:solid; --bbrr:4px; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bbrr:1rem; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bbrr:25%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bbrr:50%; --p:4em; --m:1em; --d:inline-block"></div>
<div style="--bs:solid; --bbrr:100%; --p:4em; --m:1em; --d:inline-block"></div>
{{< /code >}}
