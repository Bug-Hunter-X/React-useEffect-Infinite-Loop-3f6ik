```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000);
    return () => clearInterval(interval);
  }, []); // Correct dependency array: empty array means only run on mount/unmount

  return <div>Count: {count}</div>;
}
```