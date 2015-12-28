# tips

Tips is an agnostic tooltip framework which allows management 
of tooltip settings & content via a UI. Tips allows placement 
of tooltips on any page element. 

The framework aims to allow for easy implementation of 3rd party 
tooltip libraries. Integrating an external library is as simple 
as defining it in the Tips info hook and listing out each setting 
variable as a form element.

Tips provides integration for:
+ Smallipop
+ Tooltipster
+ Opentip

The intended audience for this module is site builders. Even defining 
new tooltip libraries should be relatively straight forward using the 
current examples provided. Please help by creating patches with 
additional library integrations.

## Installation

    Download any of the supported libraries listed above, 
    E.G. Smallipop, Tooltipster & Opentip.
    Copy the library to the Backdrop libraries directory, 
    E.G. libraries\tooltipster\js\jquery.tooltipster.js

## Configuration

    Navigate to admin/config/content/tips
    Add a settings group & a content item.
    Add a HTML selector & attach both settings group & content item.

  Tips provides basic token support for nodes, site information, 
  variables & taxonomies. Please note that tokens can only be accessed 
  if the object is loaded by the current menu item.
  
## License

This project is GPL v2 software. See the LICENSE.txt file in this
directory for complete text.
    
        
## Current porting to Backdrop

Graham Oliver (github.com/Graham-72/)

## Credits

### Maintainer for Drupal:

- Nicholas James (swim)


### Acknowledgement

This port to Backdrop would not, of course, be possible without all
the work done by the developers and maintainers of the Drupal module.


