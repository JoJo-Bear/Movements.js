# Movements.js
-------

[1]: <https://github.com/JoJo-Bear/Movements.js/>

An easy to use text effect library


#### Start Right away

To start working with Movements.js download the file from here.


#####Example using Movements.js

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="//Location to the css file/>

```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="//location to the javascript file"></script>
```

### Options
The options depend on the function beneath you will find a explination for each function.

#### Typewriter

##### Parameters to give

Option | Type | Default | Description
---- | ---- | ------- | -----------
TypewriterparentID | string | - | The id of the parent where you would like to have the tekst
Typewriterstring | string | deze string is leeg | This is the string you would like to show
Typewriterspeed | int | 200 | The speed in which the letters become visible smaller is faster

##### Settings it has

Option | Type | Description
---- | ---- | -----------
 i  | Int | Used for counting on wich position it is
speed | Int | Gets the value from the Typwriterspeed from above
string | String | Gets the value from the Typewriterstring from above
parentID | String | Won't have a default value and NEEDS to be set, gets the value from TypewriterparentID from above
isTag | Bool | Used to determine wich part of the string to show, filters out the ``` <p> ``` and other tags,
Typewritertext | String | Used to show text, the Typewriterstring and string have the whole string, Typewritertext only the part that is shown and therefor it's getting larger and filled with the next letter


