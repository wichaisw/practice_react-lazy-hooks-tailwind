## React.memo()
* Won't render if 'props' isn't changed.

## useRef(): examples in Page1
* Persist value between each render.
* don't use ref to change value of states, do that with useState.
* don't use ref to appendChild, let jsx handle it.
* use cases are:
1. Show how many times has a component been rendered
2. Reference an element inside HTML.
3. Get previous value of state vis useEffect

## forwardingRef
* Parent attaches its ref to child. parent will be able to access child DOM element with the ref.current
* This also helps the child to read and modify the element from any location where it is used.

## useMemo()
* Returns a memoized value.
* use case: if there is an expensive function, we might want to run it only when any arguments is changed (which change result in the process), useMemo can be used to remember the returned value and make the function run again only when arguments are changed.
* Function passed to useMemo runs during rendering.
* Side effects belong in useEffect, not useMemo.
> const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

## useCallback(): examples in Page2
* Returns a memoized callback.
* Solves referential equality problem
* use case: if a function is passed as prop, and that function is referenced by useEffect, it will run every times its parent re-render. useCallback can prevent that.
* UseCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
> const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

#### useMemo vs useCallback
* useMemo take a function and return the value of that function.
* useCallback take a function and return that function
## React.lazy(): an example in App
* Must always have <Suspense> tag as parent, which have fallBack component as its props.
* Just doing code splitting by import the lazy component when need to be re-rendered.

