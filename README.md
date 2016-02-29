#Adding a new Blog post

To add a new post about the interesting effect of BIM data on the romaninan tree frog we start by creating
a new post from the template.

`cp  _templates/post.md > _posts/[todays date in YYY-MM-DD format]-a-meaningfull-name-for-our-tree-frog-post.md`

Then the post [metadata](https://jekyllrb.com/docs/frontmatter/) needs to be added/changed.

- Ensure the layout is of type `post`
  - `layout: post`
- Change the title
  - `title: You wont believe how BIM data improves the lives of romanian tree frogs`
- Change the date to reflect the desired post date, which is probably todays date
  - `date: 2016-08-05 12:00:00 +0000`
- Give credit to the author, or default to the whole team with `Sitedesk`
  - `author: Sitedesk`


And you should have something looking like this at the top of your new post.

```
---
layout: post
title:  You wont believe how BIM data improves the lives of romanian tree frogs
date:   2016-08-05 12:00:00 +0000
author: Sitedesk
---
```

Now this post needs some content. The post template will require an image in the post which will become
a thumbnail for this post in the [list of all blog posts](/blog/). So one should be added.

With a reprecentative image, [uplaod](https://help.github.com/articles/adding-a-file-to-a-repository/) it into the `images/blog` directory. Lets call ours `treefrog.png`.
This should be added as a [markdown embedded image](https://guides.github.com/features/mastering-markdown/) at the start of the post.
`![]({{site.url}}/images/blog/treefrog.png)`

Then add the first paragraph which will apear in the [list of all blog posts](/blog/). Followed by the seperator `<!--more-->`. Followed by the remainder of the article which
should continue seamlessly from the first paragraph. Now the post should look something like

```
---
layout: post
title:  You wont believe how BIM data improves the lives of romanian tree frogs
date:   2016-08-05 12:00:00 +0000
author: Sitedesk
---

![]({{site.url}}/images/blog/treefrog.png)

These cute little critters had a hard life bfore BIM came along. Forever worrying about how to keep drawings and dumentation safe in a harsh
environment of near constant rain, preditors, auitors and a constant threat of thoe whole landscape being cut down.

<!-- more -->

But with a dedicated look into bim procedures the work of a single tree from is now shared with others. The whole lifecycle of collection food, storing in holes,
and retreving later in the year is streamlined and sharable. External Ant contractors can be allowed access to only a portion of the infomation
they require when providing transportation services.

Racing into the 2016, the tree frog population adn building industry is soaring to new hights, with many treefron firms looking to expand into
nut & berry collection as their small teams are empowered by this efficiency.
```

#Adding a page


#Adding a template


#Checking new changes (staging)

Shortly (30s - 5mins) after making modifications to the site, these modifications will be avaliable to view on [sitedesk.xyz](sitedesk.xyz).

As well as this, any automated tests will be performed and the pass/fail status of those tests can be seen [here](https://github.com/sitedesk/sitedesk.github.io/branches)

*Note:* if the set of files is failing tests, it will **not** be pushed to production when the site is tagged.

#Pulishing new changes (production)

When the state of staging is correct and ready to be moved into production [sitedesk.com](sitedesk.com), this is done by [tagging](https://help.github.com/articles/working-with-tags/).

find the latest released tag version E.G. `v6` and add a new tag with the version number incrimentend E.G. `v7`