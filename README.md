## React.memo()
* Won't render if 'props' isn't changed.

## useMemo()
* Returns a memoized value.
* Function passed to useMemo runs during rendering.
* Side effects belong in useEffect, not useMemo.
> const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

## useCallback()
* Returns a memoized callback.
* UseCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
> const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

## useRef(): examples in Page1
* Persist value between each render.
* don't use ref to change value of states, do that with useState.
* don't use ref to appendChild, let jsx handle it.
* use cases are:
1. Show how many times has a component been rendered
2. Reference an element inside HTML.
3. Get previous value of state vis useEffect


## React.lazy(): an example in App
* Must always have <Suspense> tag as parent, which have fallBack component as its props.
* Just doing code splitting by import the lazy component when need to be re-rendered.

