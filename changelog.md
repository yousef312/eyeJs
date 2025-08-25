# Changelog

## [6.2.0] - 2025-08-25

### Changed

 - `.each` function can be interrupted from inside by returning false in the function.

### Added

 - new `.eachChild` function to loop through selected elements children, also can be interupted by returning false.

## [6.1.2] - 2025-08-17

### Changed

 - added more delegation events `dblclick`, `pointerevents` & more `mouseevents`...

### Added

 - new `position` function, to find element position within parent element

## [6.0.2] - 2025-08-01

### Changed

 - Better documentation for `.find` function

### Fixed

 - when using `.class` to add simple classes the first character of each class get trimmed, Fixed.

## [6.0.1] - 2025-07-30

### Changed

 - `EyeElement` is also exported to help you better document your code using VSDocs

### Fixed

 - using `.class("class1/class2")` shows error undefined variable v1 or v2, Fixed!

## [6.0.0] - 2025-07-30

### Changed

 - Library name changed to `eyjs`
 - main function name changed to `e` instead of `eye`
 - `after` `before` function now accepts both HTMLElement & EyeElement

### Added
 
 - new `childlen` attribute to get children length
 - new `rAttr` function to remove attribute of an element
 - new `client` function to access client attributes such as "clientWidth" "clientLeft" ..
 - `.append` now also accepts new possible `pos` options `first`|`afterbegin` `last`|`beforeend`

### Fixed

 - fixed error when using `.animate` function

## [5.0.0] - 2025-07-21

### Changed

 - library now uses ES6 class definition.
 - `.find` function `multiple` parameter is removed, also it return an HTMLElement instead of EyeElement, and an array if many selectors were found.
 - cloning a new model will return EyeElement instead of HTMLDivElement.

## [4.0.4] - 2025-07-18

### Changed

 - the libarary behavior changed now, instead of created element by directly puting them as `eye("div")`, now you do `eye("<div>")` instead for all elements ofc.
 - library now uses ES6.
 - `.animate` function now can return a direct animation object if selection is single.

## [3.4.1] - 2025-07-16

### Changed

 - `.pointer` function only effect the first element of a collection
 - better commentation and params definition

## [3.4.0] - 2025-07-16

### Added

 - new `.after` function 
 - new `.before` function 
 - new `.animate` function 

## [3.3.4] - 2025-07-11

### Fixed

 - error when using `.data`, fixed!

## [3.3.2] - 2025-07-10

### Fixed

 - fixed `.html` `.text` and `.val` to accept empty strings two!

## [3.3.0] - 2025-07-009

### Added

 - new `.redefine` function that redefine how to set/get or use `.text` and `.val` in general

### Fixed

 - Accessing children length is now possible using empty/parameterless call of `.child`

## [3.2.0] - 2025-07-08

### Added

 - new `.serialize` function for form elements, check out [READM.md](./readme.md) for tutorial

### Fixed

 - PROBLEM: `.append` function not accepting EyeElement as parameter(only accept pure HTMLElements), now accepts both.
 - PROBLEM: `.replaceWith` also accepts HTMLElements only, fixed to accept Eye elements too.
 - PROBLEM: `.is` only accepts HTMLElement, fixed to accept EyeElement too.

## [3.1.1] - 2025-07-07

### Added

 - function `val` added for supporting inputs manipulation
 - function `child` added for child selection

### Fixed

 - function `css` now accept empty string value to remove style!

## [3.0.1] - 2025-07-04

### Added

 - new `.append` function with flexible `pos` to expand wide range of opportunities
 - new `.replaceWith` function
 - new `.parent` set/get function
 - new `.is` to compare nodes with flexible `check`
 - new `.each` to run multi selected elements
 - new `.off` function to remove event listeners
 - new `.trigger` function to ease controlling events
 - new `.find` function to find sub elements with `multiple` wild card parameter
 - new `.clone` function to clone current node
 - new `.compute` function to get element computed style declaration or DOMRect box
 - new `.pointer` function to unleash the PointerLock API and pointerCapture features 

### Changed

 - a better modern core wrapper.
 - library now support processing multiple selection at once.
 - `.on` function now support targeted callbacks for event delegation.
 - `.data` function no more use dataset, rather it uses RAM.
 - `.attr` support setting to dataset using data-...
 - main function `eye` now support multi selection with [optional] "!" at the end of the selector to perform first occurence only.

## [2.1.1] - 2025-07-01

**Breaking News!**

we've added a new feature in our little library!

### Added

 - introducing a new feature `model`, where you can create models and use them multiple times around your code, without having to create the whole shit over and over, similar to react components but with less muli-files headache(check out readme.md to more tutorial of how to use).

 - `class` attribute now can accept a string concatenation of classes beside an array of them, so instead of `eye("div",{ class: ["class1","class2"]})` you can do `eye("div",{ class: "class1 class2" })`.