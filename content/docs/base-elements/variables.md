---
title: "Variables"
weight: 5
bookToc: false
---

## Base Element Variables

Bonsai defines a number of properties for base element styling using CSS variables.  To add customizations, simply override one or more of these variables found in [src/variables.css](https://github.com/bonsaicss/bonsai.css/blob/master/src/variables.css).

For example, you can customize the default primary and secondary colors and the default border-radius by adding the following to your stylesheet. Remeber to place these overrides in a stylesheet loaded after your `bonsai.css`.

{{< highlight css "linenos=false" >}}
:root {
  --primary: #A46313;
  --secondary: #E02E06;
  --text-main: #1a1a1a;;
  --border-radius: 3px;
}
{{< / highlight >}}

### Scoping CSS Variables

One of the many advantages of using CSS variables is how they can be locally scoped. When you define a CSS variable to `:root` you are defining these variables globally. Using local scope you can define a variable within an specific element either through your own stylesheet or inline on the element it self.

#### Local scope in your style
The following example redefines the primary and secondary colors inside any `myelement` class.

{{< highlight css "linenos=false" >}}
.myelement {
  --primary: #A46313;
  --secondary: #E02E06;
}
{{< / highlight >}}

#### Local scope inline
The following example redefines the primary and secondary colors inline on the element itself.

{{< highlight html "linenos=false" >}}
<div style="--primary: #A46313; --secondary: #E02E06;">
  ...
</div>
{{< / highlight >}}
