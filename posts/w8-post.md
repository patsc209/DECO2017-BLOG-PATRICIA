---
title: Committing to an Idea (Week 8)
date: 2026-04-24
image: thumb-w8.png
author: Patricia
summary: Finally decided on a concept. Read to find out what we end up commiting to!
tags:
  - week 8
  - committing
  - final idea
---
Hello fellow reader! This week we finally got things decided. Being back in class made all the difference. It's quite funny how much easier these decisions are when you are actually in the same room. 

Our idea came from a combination of new + some of our old ideas. The three of us are from a Southeast Asian country (Malaysia, Thailand, and Vietnam) and at some point during that class we realised we'd all independently experienced the same frustation: wanting to make a dessert from home and hitting a wall trying to find the right ingredients in Sydney. Fresh pandan, tapioca pearls, palm sugar, etc. And although these aren't impossible to find, knowing where to find them is the kind of knowledge that tends to stay with whoever figured it out rather than spreading to anyone else who needs it.

That shared frustration became the concept. Bubble is a community hub for South East Asian desserts in Sydney, built around the idea that the community itself is the most useful resource for both recipes and for sourcing ingredients.

What I think made this idea land so quickly is that we weren't designing for a hypothetical user. We are the users. That's a genuinely useful position to be in for a project like this, because it means our instincts about what's missing are grounded in something real rather than assumed.

The two core features are a recipe feed and an ingredient finder. The recipe feed is the more familiar of the two. Members will post and browse dessert recipes tagged by region (Malaysian, Vietnamese, Thai, and more), difficulty, and equipment needed. Festive collections around occasions like Hari Raya, Tết, and Songkran give the community a reason to return at specific times of year! 

The ingredient finder is the more distinctive feature and the one that makes Bubble different from a generic recipe site. It's an interactive map where members pin exactly where they found a specific ingredient in Sydney, down to the store and suburb. Each ingredient in a recipe links directly to those community sourced locations. So a kuih lapis recipe doesn't just tell you what you need but it helps you find where to actually get it. To keep that data trustworthy over time, members can confirm something is still in stock or flag that it's gone. It's a lightweight trust mechanic that avoids the need for ads or sponsored listings.

There's also a questions board, a conversational space for things like "has anyone found fresh coconut cream in the Inner West?" which keeps the hub feeling active between recipe posts.

Committing to the concept immediately raised some practical questions about scope. The ingredient map is the most technically ambitious part of the app, and it's also the feature that makes Bubble genuinely distinctive. That creates a tension because it's the thing most worth building, but also the thing most likely to cause problems.

A few things we're sitting with: how do we model the relationship between a recipe, its ingredients, and store locations in a way that's relational enough to power the map links but still realistic to build? The stock confirmation mechanic also has data implications (we need to track not just where an ingredient was found, but when it was last confirmed and by whom). And the map itself likely needs an external mapping integration, which is a dependency outside the core tech stack we haven't fully scoped yet.

None of these are blockers, but they'll shape the next phase of planning. 

I'm very excited to build this, see you in the next post. 