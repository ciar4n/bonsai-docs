---
weight: 1
title: "Installation"
bookToc: false
weight: 1
---

## Installing Bonsai CSS

Bonsai CSS can be added to your project by downloading from the [Github repo](https://github.com/bonsaicss/bonsai.css). Extract and include the ./dist/bonsai.min.css into your project, linking in your document head. 

{{< highlight html "linenos=false" >}}
<link href="path/to/css/bonsai.min.css" rel="stylesheet">
{{< / highlight >}}


### Install via NPM

Possibly the quickest and easiest way to include bonsai.css in to your project is through NPM

{{< highlight html "linenos=false" >}}
// Using NPM
npm install bonsai.css
{{< / highlight >}}


### Install via CDN

To grab from CDN you can use the following.

{{< highlight html "linenos=false" >}}
// Via CDN
<link href="https://unpkg.com/bonsai.css@latest/dist/bonsai.min.css" rel="stylesheet">
{{< / highlight >}}


### Modular Installation

Bonsai.css can be broken down in to 3 distinct components. In cases where you may not need all three components, each of these components can be included seperately.

#### Base Element Styling

{{< highlight html "linenos=false" >}}
// Link locally
<link href="path/to/css/bonsai-base.min.css" rel="stylesheet">

// Via CDN
<link href="https://unpkg.com/bonsai.css@latest/dist/bonsai-base.min.css" rel="stylesheet">
{{< / highlight >}}


#### Helpers

{{< highlight html "linenos=false" >}}
// Link locally
<link href="path/to/css/bonsai-helpers.min.css" rel="stylesheet">

// Via CDN
<link href="https://unpkg.com/bonsai.css@latest/dist/bonsai-helpers.min.css" rel="stylesheet">
{{< / highlight >}}


#### Utilities

{{< highlight html "linenos=false" >}}
// Link locally
<link href="path/to/css/bonsai-utlities.min.css" rel="stylesheet">

// Via CDN
<link href="https://unpkg.com/bonsai.css@latest/dist/bonsai-utilities.min.css" rel="stylesheet">
{{< / highlight >}}