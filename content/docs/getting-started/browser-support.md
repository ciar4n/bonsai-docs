---
title: "Browser Support"
bookToc: false
---

# Browser Support

Bedrock CSS is built using many modern CSS features. Most notable of these features include CSS variables, also known as CSS custom properties and CSS grid. Support for these features is exceptional among modern evergreen browsers, however older, non evergreen browsers lack support for many of these same features. We therefore recommend that if support of older browsers like IE 10 and 11 are a concern then Bedrock CSS will not be the correct fit for your project.

Following are the most modern CSS features used by Bedrock CSS along with their corresponding entry in the excellent [Can I Use](https://caniuse.com) database.

- CSS Variables (Custom Properties) .. [caniuse.com/#feat=css-variables](https://caniuse.com/#feat=css-variables)
- CSS Grid .. [caniuse.com/#feat=css-grid](https://caniuse.com/#feat=css-grid)
- Locigcal Properties .. [caniuse.com/#feat=css-logical-props](https://caniuse.com/#feat=css-logical-props)
- Object Fit .. [caniuse.com/#feat=object-fit](https://caniuse.com/#feat=object-fit)



### Vendor Prefixes

The distributed version of the compiled Bedrock CSS comes with vendor prefixes included. If you wish to control which prefixes are applied, you can import the  source files and run them through your own PostCSS setup.