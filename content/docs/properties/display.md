---
bookToc: false
---

# Display

Style variables to control the display box type of an element.

<div class="property-table" style="--mb:1rem;"> 

| Shorthand                 | Longhand                        | Value                        |
|---------------------------|---------------------------------|------------------------------|
| \-\-d:inline;             | \-\-display:inline;             | display: inline;             |
| \-\-d:block;              | \-\-display:block;              | display: block;              |
| \-\-d:contents;           | \-\-display:contents;           | display: contents;           |
| \-\-d:flex;               | \-\-display:flex;               | display: flex;               |
| \-\-d:grid;               | \-\-display:grid;               | display: grid;               |
| \-\-d:inline-block;       | \-\-display:inline-block;       | display: inline-block;       |
| \-\-d:inline-flex;        | \-\-display:inline-flex;        | display: inline-flex;        |
| \-\-d:inline-grid;        | \-\-display:inline-grid;        | display: inline-grid;        |
| \-\-d:inline-table;       | \-\-display:inline-table;       | display: inline-table;       |
| \-\-d:list-item;          | \-\-display:list-item;          | display: list-item;          |
| \-\-d:run-in;             | \-\-display:run-in;             | display: run-in;             |
| \-\-d:table;              | \-\-display:table;              | display: table;              |
| \-\-d:table-caption;      | \-\-display:table-caption;      | display: table-caption;      |
| \-\-d:table-column-group; | \-\-display:table-column-group; | display: table-column-group; |
| \-\-d:table-header-group; | \-\-display:table-header-group; | display: table-header-group; |
| \-\-d:table-footer-group; | \-\-display:table-footer-group; | display: table-footer-group; |
| \-\-d:table-row-group;    | \-\-display:table-row-group;    | display: table-row-group;    |
| \-\-d:table-cell;         | \-\-display:table-cell;         | display: table-cell;         |
| \-\-d:table-column;       | \-\-display:table-column;       | display: table-column;       |
| \-\-d:table-row;          | \-\-display:table-row;          | display: table-row;          |
| \-\-d:none;               | \-\-display:none;               | display: none;               |
| \-\-d:initial;            | \-\-display:initial;            | display: initial;            |
| \-\-d:inherit;            | \-\-display:inherit;            | display: inherit;            |

</div>

<h3 class="primary">Block</h3>

Add `--d:block;` to an elements style attribute to specify **block** display behavior. 

{{< code lang="html" >}}
<div style="--border-1:white;">
    <span style="--d:block; --bg:white; --m:.5rem; --p:1.5rem;"></span>
    <span style="--d:block; --bg:white; --m:.5rem; --p:1.5rem;"></span>
    <span style="--d:block; --bg:white; --m:.5rem; --p:1.5rem;"></span>
</div>
{{< /code >}}


<h3 class="primary">Inline</h3>

Add `--d:inline;` to an elements style attribute to specify **inline** display behavior. 

{{< code lang="html" >}}
<div style="--border-1:white; --my:1rem">
    <span style="--d:inline; --bg:white; --m:.5rem; --p:1rem;"></span>
    <span style="--d:inline; --bg:white; --m:.5rem; --p:1rem;"></span>
    <span style="--d:inline; --bg:white; --m:.5rem; --p:1rem;"></span>
</div>
{{< /code >}}


<h3 class="primary">Inline-Block</h3>

Add `--d:inline=block;` to an elements style attribute to specify **inline-block** display behavior. 

{{< code lang="html" >}}
<div style="--border-1:white;">
    <span style="--d:inline-block; --bg:white; --m:.5rem; --p:2rem;"></span>
    <span style="--d:inline-block; --bg:white; --m:.5rem; --p:2rem;"></span>
    <span style="--d:inline-block; --bg:white; --m:.5rem; --p:2rem;"></span>
</div>
{{< /code >}}


<h3 class="primary">Flex</h3>

Add `--d:flex;` to an elements style attribute to specify **flex** display behavior. 

{{< code lang="html" >}}
<div style="--d:flex; --border-1:white;">
    <span style="--fx:1; --bg:white; --m:.5rem; --p:2rem;"></span>
    <span style="--fx:1; --bg:white; --m:.5rem; --p:2rem;"></span>
    <span style="--fx:1; --bg:white; --m:.5rem; --p:2rem;"></span>
</div>
{{< /code >}}


<h3 class="primary">Grid</h3>

Add `--d:grid;` to an elements style attribute to specify **grid** display behavior. 

{{< code lang="html" >}}
<div style="--d:grid; --col:3; --gap:.5rem; --border-1:white;">
    <span style="--bg:white; --p:2rem;"></span>
    <span style="--bg:white; --p:2rem;"></span>
    <span style="--bg:white; --p:2rem;"></span>
</div>
{{< /code >}}
