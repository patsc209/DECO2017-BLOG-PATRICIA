---
title:  Testing, the API, and What We Actually Learned (Week 11)
date: 2026-05-15
image: thumb-w11.png
author: Patricia
summary: Testing with the team, implemented the API and our overall learnings since this project started. 
tags:
  - week 11
  - testing
  - iteration
---
Hello fellow reader! Week 11 was the most eventful week of the project, and not entirely in the ways I expected. Two things happened: I added the Unsplash API integration for recipe images, and we ran our think-aloud testing sessions. Both taught me something.

<b>Adding the Unsplash API</b>

Up to this point, recipe photos had been handled with placeholder images, the dummy data referenced image paths that didn't really exist, and the feed looked flat as a result. For the final prototype, I integrated the Unsplash API to pull real food photography into the recipe cards.

The API worked, it returned real images, and they were recognisably Asian food. But "Asian food" and "the correct dish" aren't the same thing. A search for "kuih lapis" might return a generic shot of colourful layered desserts that looked close enough, or it might return a bowl of noodles. Close enough isn't good enough for a community where the whole point is cultural specificity, someone from Malaysia is going to notice immediately if the photo on their kuih lapis recipe is actually a Thai dessert.

In the end I manually assigned the correct images to the existing dummy data recipes rather than relying on the automated matches. It was the pragmatic call for the prototype, but it surfaced a real limitation worth acknowledging: automated image matching based on text search doesn't have the cultural granularity this community needs. A more robust solution would let the recipe poster upload their own photo directly, which is actually what the post form was designed for. The API was always meant as a fallback for recipes posted without a photo, and in that framing it still has a role. But for a community built around specific cultural dishes, user-uploaded photos will always be more trustworthy than a stock image search.

<b>Think-aloud testing</b>

We ran think-aloud sessions with each other going through the full app, voice recorded, observing without helping. Natasha tested my ingredient finder feature specifically, and watching someone else use something you built is genuinely uncomfortable in a useful way.

The main thing that came out of it: some ingredients weren't resolving correctly when tapped on the map. The pin would appear, the bottom sheet would slide up, but the ingredient name and store details weren't populating. It turned out to be a data consistency issue, some of the seeded pins had ingredient IDs that didn't match the ingredients table correctly, a leftover from an earlier schema change. The fix was straightforward once identified, but it wouldn't have been found through self-testing because I knew which pins worked and instinctively avoided the ones that didn't.

The think-aloud format was worth it. Watching someone narrate their confusion out loud tells you more in ten minutes than reading through code for an hour. For a feature like the ingredient map , which only works if people actually trust and use it, knowing that the core interaction held up under real use, with only fixable issues surfacing, felt like a reasonable place to land.

<b>Conclusions and wrapping up</b>

Since this is the final post for my blog, I feel that theres still quite a way to go for our project. However, I will admit it is really cool to be able to see our project come to life. I know the final A2 Assigment doesn't have to be perfect, but I still want to continue to try my best and challenge myself. 
