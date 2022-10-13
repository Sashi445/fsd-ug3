# The useEffect() Hook

Please follow the this [link](https://codesandbox.io/s/thirsty-germain-zn7odk?file=/src/components/SimpleComponent.jsx) for the code.


The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect is used to mimic life cycle methods in functional components.

---

### Case - 1 : Basic useEffect - Runs whenever the component rerenders

```javascript
  useEffect(() => {
    console.log("I'm useEffect and I run everytime a rerender happens!!");
  });
```

In this case the function executes whenever the component re-renders.

### Case - 2 : useEffect with dependencies - Runs whenever the dependencies change

```javascript
  useEffect(() => {
    console.log(
      "I'm useEffect with dependencies and I run only when my dependencies change!!"
    );
  }, [darkTheme]);
```

In this case the function executes only when the dependencies change.

### Case - 3 : useEffect with no depencies - The mounting phase!!

```javascript
  useEffect(() => {
    console.log("I RUN ONLY WHEN COMPONENT GETS MOUNTED!!");
  }, []);
```

In this case the function executes only when the component get mounted to the DOM.

### Case - 4 : useEffect and Unmounting phase!!

To mimic the unmount phase in useEffect
you should return a function in useEffect with no dependecies.

The returned function executes when the component gets unmounted from the DOM.


```javascript
  useEffect(() => {
    console.log("Mounting Done!!");
    return () => {
      console.log("Unmounting!!");
    };
  }, []);
```

The returned function in the above code will get executed only when the component gets unmounted.


---

## Further Learnings
* [Youtube Video](https://youtu.be/0ZJgIjIuY7U)
* [Blog](https://blog.webdevsimplified.com/2020-04/use-effect/)


