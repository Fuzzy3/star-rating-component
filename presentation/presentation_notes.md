# Presentation Overview

* Accessibility (increase size, screen reader, keyboard, RTL, other)
* Web Components
* Framework: Lit or Angular (Angular it is)
* 1-5 star rating (extend with custom number of stars)
* Keyboard (two options: tab and press enter, or tab to component and press a number)
* 3 states: Inactive (+hover), Focus, Disabled
* Unit Tests

## What's missing

* HOVER
* Better accessibility (Screen reader?)
* Sizing option for integrators (Size is hardcoded to 1.5rem)

## Known Bugs

* Star is focussed on mouse click. It stays focussed until new mouse click.
* No check on inputs (Maybe user inputted a larger current rating number than the maxStars)

## Better Code

* Performance penalty from the template when calling function from attribute (SRC).
* Should have had only 2 SVGs (and not 4) and then have used styling to change fill color.

## Completing the component

* Documenting the API (The inputs and outputs) in the code
* Documenting the API (For design guide)
* Description of component
* Code Examples of different usages of this component
* Stackblitz example project.
* Integrate with forms
* Half star support

## Missing Activities

* Kick-off
* Draft Reviews with other developer
* PR Inspection
* More Manual testing in integration with other components (look and feel)
* Early demo for PO and UI Designer (Maybe demo for the full team)