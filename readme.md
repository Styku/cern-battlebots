# Contributing to this website
As the page is hosted using Github Pages, contributing is as easy as pushing stuff to this repository. 
Get a GitHub account if you do not have one already, and let me know you want to contribute - I'll 
add you as a collaborator.

## Adding a part to the recommended parts list
To add a part to the list, you just need to create an .md file in the *_parts* folder. Look at the 
existing parts to understand the file structure. The meta-data is self explanatory: there's name, 
link to buy the part, tournament weight category for which the part is recommended and type of the 
part (BEC, motor, etc.). Everything below is the description - you can put detailed specs or your 
comments there.

## Adding a bot guide
To add a bot guide, simply create (or edit an existing) guide file in the *_bots* folder. 

### Edit the meta-data
*title* - name of the robot. Will be displayed on the Bots page.

*thumbnail* - thumbnail image name that will be displayed on the Bots page.

### Upload the thumbnail image
Add the thumbnail image to the *img/bots* folder! If *image* parameter set in the previous 
step matches the name of the image, the thumbnail will be displayed on the Bots page.

### Add guide contents
Look at the [_bots/timmy.md](https://raw.githubusercontent.com/Styku/cern-battlebots/master/_bots/timmy.md) for reference! 

# Using GitHub Pages

You can use the [editor on GitHub](https://github.com/Styku/cern-battlebots/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

## Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

## Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
