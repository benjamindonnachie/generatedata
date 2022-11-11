---
sidebar_position: 4
id: purpose
---

# Purpose

Generating test data can be a pain. If you're a developer, you know some data types can be easily easily scripted: random numbers, 
random strings, pulling values from arbitrary lists. Rustling something up to generate that sort of thing can be super quick.
But not everyone's a developer and even if you *are* some things are much harder to create and require data sources. What
seems like a quick task rapidly descends into a time-consuming nuisance. 

This tool was created to simplify the whole thing. It's an _engine_ for random data generation that's distinct 
from the generated data and formats; **it was designed to be extended**. Developers can write
whatever plugins they want to generate different types of data or formats for that data. 
If that's something you're interested in, great! Visit our [developer documentation](../../developerdoc/intro).  

We have well over 30 very flexible Data Types (types of data you can generate like names, phone numbers and so on),
over 10 Export Types (formats of the data like XML, SQL, CSV) and dozens of rich country-specific data to provide 
very realistic regional data. 
  

### History

The script was originally created in 2005. I needed some test data for another open source script I develop 
and found that generating the data took so long it warranted a script of its own. I set up a public website 
for people to use, then every few years returned to it to rewrite and improve it. 

The current version is _pretty darned awesome_ (no bias). I wrote it to run in modern browsers and really focused
on the user experience, so I hope you like it.  

Once this documentation is complete I'm going to focus on making a UI-free npm package version of the script to
allow developers to generate data set via code and not just via the application UI.  
