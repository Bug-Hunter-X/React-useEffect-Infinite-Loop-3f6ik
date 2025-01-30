```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array.  'setCount' is a function, not a value.
    // This creates a new closure on every render, leading to an infinite loop.
    const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
    return () => clearInterval(interval);
  }, [setCount]); //Incorrect dependency

  return <div>Count: {count}</div>;
}
```