# css-frameworks-deliverable
SEIR CSS Frameworks Deliverable

This site is made using the Materialize CSS framework. Documentation can be found at [https://materializecss.com/].

## The following elements were included

| Element | Description|
|---       |---|
| Cards | Vertical cards with a button action and cards with a reveal|
| Wave Effect | Wave effect to fill button when clicked|
| Fixed Nav Bar | Floating nav bar that scrolls with you|
| Carousel | Rotating deck of cards|
| Loading Bar | Indefinite loading bar to show page loading status|
| Footer | Materialize footer format|
| Grid | Materialize standardized grid format|
|  | |


The framework is primarily html and css with a single initializing function in javascript, so long as specific options are not intended to be used. 

```javascript
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});
```