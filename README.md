![splash](images/splash.png)

# DOGE
Darknet Osint Graph Explorer

Still in dev, works right.

You should use this in addtion to [Darknet OSINT Transform](https://github.com/pielco11/DOT)

## Pay attention here
Query prototype: SELECT DISTINCT custom_column_name AS input, another_custom_name AS output FROM some_table, obviously you can add other options as WHERE, ORDER BY, etc.

## How-To
`Database file`: the filename of the database (sqlite3), ex: db.sqlite3

`Graph file`: useless (now as now)

`Icon From`: the type of the "from" entity (email -> domain, email is "from", domain is "to"), so the same as `Icon To`

`Center to node`: put node id here, then click on `Center Graph` to center the graph to that specific node id

`Query`: write here the query that you'll use to retrieve data from the database, follow the prototype above

`Load Data`: add data but don't draw, you could use this to import stuff from various databases and when everyting is imported, draw

`Draw Graph`: draws nodes with edges

`Import Graph`: useless (now as now)

`Export Graph`: useless (now as now)

`Prerender`: does not display the graph until the "pre-rendering" process is done, this should be used when you have to graph 100s of nodes, feel free to change parameters:
- 1st argument, `precomputeGraph()`, in `pages/graph_1.html`;
- in the same file, lines 246 and 247.

![rendering-process](images/prerenderer.png)

## Custom icons
Every icon comes from Font Awesome, I just changed colors.
![icons](images/icons.png)
![icons2](images/icons_2.png)

## Screenshots
![example](images/example_query.png)
![dashboard](images/screenshot_30.png)
![dashboard1](images/screenshot_31.png)
![dashboard2](images/screenshot_32.png)

Stay tuned.
