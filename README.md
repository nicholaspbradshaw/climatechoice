# ClimateChoice Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/4740b85b-51d2-436a-a0b2-ddfd6ce6cb23/deploy-status)](https://app.netlify.com/sites/climatechoice/deploys)


## Installing

Clone the repo to your computer.

```bash
git@github.com:shylands/climatechoice.git
cd climatechoice
```

Then install dependencies
```bash
npm install
```


## Running

Start the development server and visit http://localhost:8000/

```bash
gatsby develop
```

&nbsp;

## Deploying with Netlify
Merge changes to master and push.

# Site Structure

## Making changes to HTML/CSS/JS

The editable site is located in the src folder, it is structured as outlined below:

```
|--src                  // Everything in here will be built with Gatsby
|  |--components        // This is where reusable components live
|  |  |--component-name // Folder to group component files
|  |  |  |--index.js    // The JS and HTML of the component
|  |  |  |--styles.scss // The CSS for the component written in SASS
|  |--pages             // This is where page specific components and styles live
|  |--styles            // This is where site wide styles are defined
|  |--templates         // Components for Ghost blog elements
```

## Blog posts

Netlify CMS is setup for the blog, any changes to blog content be made at https://climatechoice.netlify.com/admin/. When changes are published the site is redeployed automatically to Netlify.