---
title: Refining What We Had (Week 10)
date: 2026-05-08
author: Patricia
summary: Iterating, iterating, and iterating some more. 
tags:
  - week 10
  - iteration
  - building
---
Hello fellow reader! Week 10 was less about adding new features and more about making what existed actually hold together. The rough version from week 9 worked in the sense that pages loaded and data appeared, but there were plenty of rough edges, interactions that didn't feel right, layouts that broke at certain screen sizes, and a few features that were half-built.

<b>Iterating on the ingredient finder</b>

The ingredient finder went through a few rounds of refinement this week. The core mechanic, tap a pin, see a bottom sheet with the ingredient name, store, suburb was working but the experience around it needed work. The pin clustering was inconsistent when multiple ingredients were pinned at the same store. The filter chips weren't clearing correctly when you switched between ingredients. Small things, but they add up to an experience that feels unreliable.

Most of the fixes were in how the HTMX requests were structured. The initial implementation was re-rendering more of the page than it needed to, which caused a flicker on filter interactions. 
So after more research to fix that, I found out that scoping the HTMX target more precisely fixed the flicker and made the filtering feel noticeably more responsive.

<b>Building on each other's work</b>

One of the more useful things about this week was that we were all working on a shared codebase that was complete enough to actually interact with each other's features. I could browse recipes that my groupmates had built the posting flow for. They could use the ingredient finder I'd been building. That cross-use surfaces issues that isolated development doesn't. It's one thing to test your own feature in isolation, another to have someone navigate to it from a part of the app you didn't build yourself.

It also made the navigation feel more important. Moving between the feed, the map, and the profile page needed to feel seamless because these weren't isolated screens anymore, they were part of one thing. A few small nav fixes came out of this, mostly around active state styling and making sure the back navigation from a recipe detail page returned you to the right place in the feed rather than the top.

<b>Scope check</b>

We also did a quiet scope check this week. The festive collections feature like curated recipe sets around Hari Raya, Tết, Songkran had been on the plan since week 8, but with the time remaining and the complexity of the core features, we made the call to simplify it. We basically removed it completely because it's just not realistic to have at this point. It's the kind of scope trade-off that's easy to feel bad about but is usually the right call.

Well that's it for today, see you next time.