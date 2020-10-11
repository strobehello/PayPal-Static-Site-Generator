# PayPal-Static-Site-Generator

Outputs an static ecommerce website's HTML file to be hosted. 

>Developed by: Misha Zelechowski, Shaun Xiong, Brian Bruns, Connor Wardell, Sonny Huynh


## Introduction
This 'technical' readme is for developers who want to understand more about what this plugin is doing behind the scenes.

This plugin is intended to help small business owners or individual sellers create a website which does not need to rely on server hosting besides the initial hosting of the outputted HTML file.

### What does this plugin do?

This plugin, "PayPal-Static-Site-Generator", outputs a static ecommerce website's html document for hosting using several 'single task'-focused sub-plugins.

> Example sub-plugins:
>- Creating a navigation bar
>- Creating a home page
>- Creating a products page

This plugin does not make use of any external server services which allow things like inventory management. If a website owner wishes to update their website, they will have to update their filesystem and use this plugin to output a new HTML file to be hosted.

#### Input
This plugin takes a directory which has a specific format as an input.

#### Output
This plugin creates and outputs a static HTML file which can be hosted by normal means.

### What does this plugin NOT do?
This plugin does not:
>- Host the outputted website.
>- Augment an existing website.


## Current Implementation

### PayPal Integration

The PayPal button is calculated into two sub-plugins:
>- paypalButton.js
>- paypalCheckoutOptions.js

**paypalButton.js**
>Creates a PayPal purchase button which receives information from the sub-plugin paypalCheckoutOptions,js and creates a call to PayPal's API to process a purchase. Options on the PayPal receipt is also determined within this function.

**paypalCheckoutOptions.js**
>Calls PayPal's API with product checkout data and returns keys and necessary information for paypalButton.js

---
### File Structure

File structure information here.

---
### Markdown Back-End

All information displayed in the store page and product pages are derived from the content markdown files, which are broken down into several custom keywords:

>- **'title'** = The title or name of the product being displayed.

>- **'price'** = The price of the product being displayed.

>- **'image'** = The location of the image of the product being displayed. (File location)

>- **'keyword'** = The category of the product being displayed.

>- **'options'** = The options being displayed with the item. 
> Format: ['Option 1', 'Option 2']
> Example: small, medium, large

>- **'enabled'** = The factor determining whether to display a product.
>> Example: | TRUE => Displaying | FALSE => Not Displaying |

>- **'active'** = The factor determining whether to display a product's payment information.
>> Example: | TRUE => Displaying Payment Information | FALSE => Not Displaying Payment Information |


## Downloading

Downloading instructions here.

## Installation

Installation instructions here.

## Dependencies

**1. 'gatsby-transformer-sharp'**
> Used to...

**2. 'gatsby-plugin-sharp'**
> Used to...

**3. 'gatsby-image'**
> Used to...

**4. 'gatsby-remark-relative-images'**
> Used to...

**5. 'gatsby-source-filesystem'**
> Used to find product data, images, and files in our plugin's created filesystem.

**6. 'gatsby-transformer-remark'**
> Used to...

**7. 'gatsby-remark-images'**
> Used to...

**8. 'gatsby-remark-copy-linked-files'**
> Used to...

## Metadata

Not sure what goes here.