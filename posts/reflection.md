---
title: Reflection
date: 2026-06-03
image: thumb-reflection.png
author: Patricia
summary: The final reflection on SEAblings — Lighthouse scores, user testing with real participants, what made it in, and what I'd fix first.
tags:
  - reflection
  - performance
  - accessibility
  - testing
  - final
---
Hello fellow reader! This is my last post, and it's different from the ones before it. My earlier entries were about figuring out what to build. This one looks back at SEAblings and asks how it actually turned out. Before this class I'd barely touched backend code, MojoJS, SQLite, HTMX, and Leaflet were all new to me. So this isn't written by someone who already knew how to ship a web app. It's written by someone who learned by building one, breaking it, and watching other people use it.

Natasha ran a broader accessibility pass and documented our ERD. Amo also facilitated user testing with two participants outside our team. I also had Natasha test my ingredient map in week 11. What follows is my reflection on that evidence: Lighthouse scores, real user sessions, and whether we met the plan from week 8.

<b>Performance</b>

I didn't know how to evaluate performance before we were told to run Lighthouse, it's a Chrome tool that scores your site on speed and other things. We ran it on the feed at `/community`, where most people land first. I had no idea what a "good" score was, so seeing 91 for Performance genuinely surprised me for a first build.

A lot of that score comes from choices we made while still learning that happened to work: server-rendered HTML instead of a heavy JavaScript framework, lazy-loaded recipe images, local `.avif` festival banners, and HTMX swapping small page sections instead of full reloads. I only understood why the last one mattered after map filters flickered because I was updating too much at once.

Lighthouse also showed weaknesses. The top feed image loads immediately and got flagged as the slowest part (LCP, Largest Contentful Paint, which I had to look up). Over 80% of `hub.css` was unused because every page's styles sit in one file. We meet the three-second load target on desktop but sit closer on mobile simulation. Best Practices scored 78, likely from Google Fonts and Leaflet loaded externally.

Testing caught problems Lighthouse didn't. Early map filters flickered until I narrowed what HTMX re-rendered. When a pin had bad data, the detail panel opened empty instead of showing an error, that doesn't show in a speed score but makes the app feel broken. With more time I'd split the CSS by page, shrink the hero image, and make broken pins fail visibly.

**Evidence: Lighthouse audit — homepage (`/community`)**

![Lighthouse audit scores for the SEAblings feed — Performance 91, Accessibility 87, Best Practices 78, SEO 91](assets/lighthouse-community.png)

LCP and unused CSS in `hub.css` were the two main findings below the headline scores.

<b>User Experience</b>

For usability we ran think-aloud sessions, participants talk through what they're thinking while using the app, and you can't help them. We tested three tasks: browse the feed, post a recipe, and find an ingredient on the map. Two participants were recruited by Amo (both Southeast Asian, tech-comfortable, cook SE Asian food about once a month). Natasha also tested my map in our internal week 11 session.

The core idea holds up. User 2 completed every task without getting stuck, searched "pandan" on the map, found seven locations, and rated the experience 5/5. User 1 also finished all three tasks and called the map "one of the best features" they reached it organically by clicking into a recipe, which is the cross-navigation we wanted. User 1 said SE Asian recipes are usually shared within families, so a small dedicated community would help, that felt like direct validation of our concept. Natasha's pandan task worked too: she found the map, searched, and read store details from a pin.

Testing also surfaced problems I'd missed. User 1 found the sign-in wall "a bit off-putting," wanted a smaller festival section, and said the spotlight didn't stand out enough. Both users flagged repeated "share yours" / "post recipe" buttons across the feed, cards, and profile, hard to tell filters from actions. User 1 wanted more icons; "post a tip" on the map felt like it should be a quick comment, not a recipe post.

Internal testing on my features found blank pin panels from stale database IDs after a schema change, and stock buttons that looked too similar until we darkened the primary, the same hierarchy issue User 1 described. The ingredient autocomplete got praise: User 1 liked descriptions and tips in search results.

Accessibility I'm still learning. Lighthouse scored 87, not a full WCAG AA audit. Static pages are okay; the map isn't: keyboard use is unreliable, HTMX updates don't announce to screen readers, and Lighthouse flagged pill contrast and banner links. External testers were sighted mouse users, so we may have missed more.

**Evidence: user testing — task completion and ratings**

| Participant | Browse feed | Post recipe | Find on map | Rating | Would use again? |
|---|---|---|---|---|---|
| User 1 (22, Myanmar/Chinese/Burmese) | Completed | Completed | Completed (via recipe) | 3/5 | Yes |
| User 2 (19, Burmese/Thai background) | Completed | Completed | Completed | 5/5 | Yes |
| Natasha (internal, week 11) | — | — | Completed (pandan task) | — | — |

> "A lot of the times the SE Asian recipes are usually shared within families, so having a small dedicated community would help a lot."
>
> - User 1, post-task debrief

> "It was very easy to find the pandan ingredients and it showed me a good presentation of where I can find pandan leaves."
>
> - User 2, post-task debrief

> "The pin's there but nothing's showing."
>
> - Natasha, internal think-aloud, map task

![Ingredient map with community pins during week 11 testing](assets/w11-map.png)

<b>Functional Requirements</b>

In week 8 we planned a lot: recipe feed, ingredient map, festive collections, stock confirmation, a questions board, and links from ingredients to stores. Designing for ourselves helped us prioritise, but it didn't make all of it buildable while learning a stack none of us had used before.

What shipped: a tagged recipe feed, the ingredient map (praised in testing), a post-recipe form with ingredient autocomplete, Unsplash as a photo fallback, festive content as filtered feed banners instead of dynamic collections, and stock confirmation in the database even though the UI still needs polish. What we cut: the questions board entirely; open store search, multi-step posting, and richer festival hubs deferred. "Post a tip" exists but doesn't match what users expect — User 1 wanted a lighter contribution, not another recipe post. Unsplash works in code but I still hand-picked dummy feed images because culturally specific searches return generic results.

Against the BlaBla Corp brief: browse-and-post and responsive layout work; load time is mostly fine on the feed; WCAG AA is only partially met, cookie consent was out of scope. User testing adds another lens, one participant rated us 5/5, another 3/5. Usable, not polished.

**Evidence: functional requirements: planned vs shipped**

| Requirement | Outcome |
|---|---|
| Recipe feed with tagging | Shipped, both users browsed successfully |
| Ingredient finder map | Shipped, praised in testing, data bug found internally |
| Stock confirmation | In database, UI still needs polish |
| Festive collections | Rescoped to filtered feed banners |
| Questions board | Cut |
| "Post a tip" on map | Built, but wrong interaction model per User 1 |
| Deep links ingredients → stores | Partial |
| Open store / POI search | Deferred |
| WCAG AA / cookie consent | Partially met / out of scope |

<b>Lessons Learned</b>

The biggest lesson: people who didn't build the app find problems you never will alone. Natasha's recording caught the blank pin bug. User 1 flagged repeated buttons I'd stopped noticing. User 2 sailing through the same flows showed me the app can feel effortless or confusing depending on what stands out to you.

I also learned "it works in code" and "it's useful" aren't the same. Unsplash returns images, but not the right dish. "Post a tip" goes somewhere valid but not where users expect. These looked right on our project board and wrong to someone using the app cold.

I understand more than in week 6, but gaps remain. Schema changes need updated seed data, our pin bug was old IDs after a table change. Separating `Pin` and `Stock_Confirmation` so stock history isn't overwritten is a decision I'm proud of, even though the buttons around it still confused people.

If we had another month: (1) fix trust-breaking map data and show errors on broken pins; (2) one clear post action, distinguish filters from buttons, rethink "post a tip"; (3) split CSS, fix the slow top image, improve map accessibility.

SEAblings isn't finished. But for a project with no committed idea until week 8, built while genuinely learning, User 1 said they'd use it, User 2 said they'd come back, and two testers called out the map unprompted. The things that didn't work taught me more than the things that did. For someone who started this semester not really knowing how web apps get built, that feels like an honest place to land.

Thanks for reading this blog throughout the semester.
