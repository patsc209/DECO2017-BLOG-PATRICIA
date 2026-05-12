---
title: Interpreting the Brief + My Ideas (Week 6)
date: 2026-04-03
image: thumb-w6.png
author: Patricia
summary: This post is the beggining of planning for the project, analyzing the brief and identifying possible ideas.
tags:
  - ideation
  - week 6
  - research
---
Hello fellow reader! Today I read through the design brief for my project, and I think this is an exciting one. When starting projects like this, I always have to ask myself "What is this actually asking me to build/create?". After reading through the BlaBla Corp design brief, the core ask is clear: a community hub where people with a shared interest can come together to share information, and keep coming back. However, what makes this project interesting (and slightly tricky) is that "community" means something different depending on who you're designing for. 

Thinking back to functional essentials, any BlaBla Corp hub needs to let logged-in users post and browse content, and integrate with the BlaBla Corp session system (no custom login needed, users arrive already authenticated), be responsive across desktop and mobile, meet AA accessibility standards and honour EU cookie/tracking policies, and finally load in under three seconds, ideally under one.

I had a few ideas for this project, but here are my 2 personal ones that I think are the strongest:

Brew Hub:
 community for coffee, matcha, and drink enthusiasts. Members log their daily brews with details like dose, grind size, water temperature, and ratio, then share tasting notes and rate each other's recipes. There'd be a live feed of recent brews. 
 
 What drew me to this was the recipe/log hybrid problem it's personal data (your specific pour-over this morning) that also becomes social content. The data model has to serve both a private log and a public feed simultaneously, which felt like an interesting design challenge.

Mend Hub:
 A space for people who repair and repurpose clothing rather than throwing it away. Members post before and after photos of their pieces, share techniques, and document projects over time. I was drawn to the inherently visual nature of this community and its sustainability angle. The tricky part: a single "mend" could span multiple posts over weeks, so the data model needs to handle project progression, not just standalone entries.


These 2 ideas I think are quite niche already, which is good because if its too broad it'll be too much data. Some risks or unknowns at this stage (even without a fully developed concept) are how we can design the interface in a way thats accesible, and easy to understand. As well as how structured the data that is on the posts of the community can be? A freeform text post versus a structured form with named fields affects both the UI design and the database schema significantly. These aren't blockers yet, but they're the questions that will shape the next few weeks.

Well, that's it for now. Will see you next next week after the midsem break :D!!!


