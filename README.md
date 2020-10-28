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

The framework is primarily html and css with a single initializing function in javascript, so long as specific options are not intended to be used. 

```javascript
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});
```

# Future considerations

Please note this is currently in progress. I am working on a fourth section with a custom effect.  All commented out code, in each file is a component of this effect.  The current approach is proving too complicated and needs to be torn down and reapproached; however, the code has not been removed (only commented out) to preserve for future reference.