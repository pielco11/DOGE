# DOGE
Darknet Osint Graph Explorer

Still in dev, works right.

You should use this in addtion to [Darknet OSINT Transform](https://github.com/pielco11/DOT)

## How-To
`Database file`: the filename of the database (sqlite3), ex: db.sqlite3

`Graph file`: useless (now as now)

Choose the table ("please select"), accepted values are: `emails`,`bitcoins` or `hses`.

`Condition`: type `*` to return every row, otherwise you should insert something like `where domain="some.onion"`

`Raw query`: don't use this, behaviour not handled

`Load Settings`: add data but don't draw, you could use this to import stuff from various databases and when everyting is imported, draw

`Load Graph`: draws connections and stuff

`Import Graph`: useless (now as now)

`Export Graph`: useless (now as now)

![dashboard](images/screenshot_30.png)
![dashboard1](images/screenshot_31.png)
![dashboard2](images/screenshot_32.png)

Stay tuned.
