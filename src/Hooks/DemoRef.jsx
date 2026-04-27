import { useRef } from 'react';

export default function MyComponent() {
    // 1. Initialize the ref
    const myRef = useRef(null);

    function handleClick() {
        // 2. Access or update the value
        console.log(myRef.current);
        myRef.current = newValue;
    }

    // 3. Attach to a DOM element (optional)
    return <div ref={myRef}>Hello World</div>;
}
