#Adding a new Blog post

To add a new post about (say) the effect of BIM data on the Romanian tree frog we start by creating
a new post from the template:
- Go to the _templates folder, above, click on [post.md](https://raw.githubusercontent.com/sitedesk/sitedesk.github.io/master/_templates/post.md), click edit, copy the text.
- Go to the _posts folder, click "New file", past the text in.  
- Name the file `[todays date in YYY-MM-DD format]-a-meaningfull-name-for-our-tree-frog-post.md`
- Edit the title and date [metadata](https://jekyllrb.com/docs/frontmatter/) at the top of the file. 
- Add a thumbnail: [Upload](https://help.github.com/articles/adding-a-file-to-a-repository/) it into the `images/blog` directory. Let's call ours `treefrog.png` and edit the link at the start of the post to `/images/blog/treefrog.png`
- Add the first paragraph which will apear in the [blog posts page](/blog/). Followed by `<!--more-->`
- Then add remainder of the article and hit save. 
For example:
```
---
layout: post
title:  You wont believe how BIM data improves the lives of Romanian tree frogs
date:   2016-08-05 12:00:00 +0000
author: Sitedesk
---

![]({{site.url}}/images/blog/treefrog.png)

These cute little critters had a hard life bfore BIM came along. Forever worrying about how to keep drawings and documentation safe in a harsh environment of near constant rain, predators and auditors.

<!-- more -->

But with a dedicated look into BIM procedures the work of a single tree frog is now shared with others. The whole lifecycle of collection food, storing in holes, and retreving later in the year is streamlined and sharable. External Ant contractors can be allowed access to only a portion of the infomation they require when providing transportation services.

...etc...
```
Headings, images etc are added using [simple markup](https://guides.github.com/features/mastering-markdown/) or HTML.

#Adding a page

To add a new page (say) detailing the amazing development team, we first need to create a file in the web location, for example: `sitedesk.xyz/team/index.html` by creating navigating to the right folder, above and clicking "New file". Add the basic [metadata](https://jekyllrb.com/docs/frontmatter/), and then your content.  For example: 
```
---
layout: page
title:  What a bunch of folks!
---

The salt of the earth, diamond in the rough, best looking t-shirts you have ever seen on a group of charming A+ team players...
```
See the `_layouts` folder for other templates. Some have more things you can fill in, but the process is the same. 

#Previewing changes (Staging)

Shortly (30s - 5mins) after making a change, you'll see it on the staging site [sitedesk.xyz](sitedesk.xyz).

As well as this, any automated tests will be performed and the pass/fail status of those tests can be seen [here](https://circleci.com/gh/sitedesk/sitedesk.github.io), or you'll get an email. 

*Note:* Test failures will prevent you from making the changes live. 

*Note:* The tests are very basic, it is up to you to test the site works on desktop (IE, Edge, Chrome, Safari, Firefox) and mobile (iOS, Android). 

#Publishing changes (production)

Once tested, changes can be pushed to production [sitedesk.com](sitedesk.com) by:
- Click on [releases](https://github.com/sitedesk/sitedesk.github.io/releases) at the top of this page. 
- Note the current release (e.g. `v3.2`) and click `Draft a new release`
- Enter new release (e.g. `v3.3`), and click `Publish`
- The new site will go live in a minute or so. 
