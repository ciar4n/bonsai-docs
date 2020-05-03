---
bookToc: false
---

# Background

## Background

Style variable to control the background shorthand property of an element.

| Style Variable                             | Value                                           |
| ------------------------------------------ | ----------------------------------------------- |
| \-\-bg:var(--primary);                     | background: var(--primary);                     |
| \-\-bg:#aaaaaa;                            | background: #aaaaaa;                            |
| \-\-bg:linear-gradient(crimson, skyblue);; | background: linear-gradient(crimson, skyblue);; |
| \-\-bg:underline var(--primary);           | background: underline var(--primary);           |
| \-\-bg:url('#');                           | background: url('#');                           |

{{< code lang="html" >}}
<div style="--p:4em; --m:1em; --d:inline-block; --bg:var(--primary)"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bg:#aaaaaa"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bg:white;"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bg:linear-gradient(var(--primary), black);"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/150x150')"></div>
{{< /code >}}


## Background Attachment

Style variables to control the background attachment of an element.

| Style Variable         | Value                                 |
| ---------------------- | ------------------------------------- |
| \-\-bga:scroll;        | background-attachment: scroll;        |
| \-\-bga:local;         | background-attachment: local;         |
| \-\-bga:fixed;         | background-attachment: fixed;         |
| \-\-bga:local, scroll; | background-attachment: local, scroll; |

{{< code lang="html" >}}
<div style="--bga:scroll; --p:2rem; --h:10rem; --ofy:scroll; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/800x600')"><div style="--h:20rem"></div></div>
<div style="--bga:local; --p:2rem; --h:10rem; --ofy:scroll; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/800x600')"><div style="--h:20rem"></div></div>
<div style="--bga:fixed; --p:2rem; --h:10rem; --ofy:scroll; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/800x600')"><div style="--h:20rem"></div></div>
{{< /code >}}


## Background Color

Style variables to control the background color of an element.

| Style Variable              | Value                            |
| --------------------------- | -------------------------------- |
| \-\-bg:var(--primary);      | background: var(--primary);      |
| \-\-bg:indigo;              | background: indigo;              |
| \-\-bg:#aaaaaa;             | background: #aaaaaa;             |
| \-\-bg:rgba(74,105,189,.5); | background: rgba(74,105,189,.5); |

{{< code lang="html" >}}
<div style="--p:4em; --m:1em; --d:inline-block; --bgc:var(--primary)"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bgc:indigo"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bgc:#aaaaaa;"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bgc:rgba(74,105,189,.5);"></div>
{{< /code >}}

## Background Position

Style variables to control the background position of an element.

| Style Variable         | Value                               |
| ---------------------- | ----------------------------------- |
| \-\-bgp:top;           | background-position: top;           |
| \-\-bgp:left;          | background-position: left;          |
| \-\-bgp:center;        | background-position: center;        |
| \-\-bgp:local, scroll; | background-position: local, scroll; |
| \-\-bgp:25% 75%;       | background-position: 25% 75%;       |

{{< code lang="html" >}}
<div style="--p:4em; --m:1em; --d:inline-block; --bgp:top; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50'); --bgr:no-repeat;"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bgp:left; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50'); --bgr:no-repeat;"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bgp:center; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50'); --bgr:no-repeat;"></div>
<div style="--p:4em; --m:1em; --d:inline-block; --bgp:25% 75%; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50'); --bgr:no-repeat;"></div>
{{< /code >}}

## Background Repeat

Style variables to control the background repeat of an element.

| Style Variable        | Value                            |
| --------------------- | -------------------------------- |
| \-\-bgr:repeat-x;     | background-repeat: repeat-x;     |
| \-\-bgr:repeat-y;     | background-repeat: repeat-y;     |
| \-\-bgr:space;        | background-repeat: space;        |
| \-\-bgr:round;        | background-repeat: round;        |
| \-\-bgr:no-repeat;    | background-repeat: no-repeat;    |
| \-\-bgr:space repeat; | background-repeat: space repeat; |

{{< code lang="html" >}}
<div style="--bgr:repeat-x; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
<div style="--bgr:repeat-y; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
<div style="--bgr:space; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
<div style="--bgr:round; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
<div style="--bgr:no-repeat; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
<div style="--bgr:space repeat; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
{{< /code >}}

## Background Size

Style variables to control the background size of an element.

| Style Variable   | Value                     |
| ---------------- | ------------------------- |
| \-\-bgs:contain; | background-size: contain; |
| \-\-bgs:cover;   | background-size: cover;   |
| \-\-bgs:50%;     | background-size: 50%;     |

{{< code lang="html" >}}
<div style="--bgs:contain; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/75x50');"></div>
<div style="--bgs:cover; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/75x50');"></div>
<div style="--bgs:50%; --p:4em; --m:1em; --d:inline-block; --bgc:white; --bg:url('https://source.unsplash.com/TevqnfbI0Zc/50x50');"></div>
{{< /code >}}
