
# Traffic Light Simulation using React JS

This project implements a simple traffic light simulation using React and Tailwind CSS. The application displays a traffic light with three signals: red, yellow, and green. The signals change dynamically based on predefined time intervals, looping indefinitely.





## Features

- Dynamic Signal Switching: The traffic light transitions between red, yellow, and green signals automatically.

- Time Intervals:

     - Red light: 4000ms (4 seconds)

     - Yellow light: 500ms (0.5 seconds)

     -  Green light: 3000ms (3 seconds)

- Responsive Design: The layout is styled using Tailwind CSS and adapts well to different screen sizes

## Code Breakdown

### Logic for Signal Transition

The activeLight state tracks the current active signal. The useEffect hook is used to set timers for transitions based on the active signal:

``` javascript
 useEffect(() => {
  let timer;

  switch (activeLight) {
    case "red":
      timer = setTimeout(() => {
        setActiveLight("green");
      }, 4000);
      break;
    case "yellow":
      timer = setTimeout(() => {
        setActiveLight("red");
      }, 500);
      break;
    case "green":
      timer = setTimeout(() => {
        setActiveLight("yellow");
      }, 3000);
      break;
    default:
      break;
  }

  return () => {
    clearTimeout(timer);
  };
}, [activeLight]);
```


## Technologies Used

- React: For building the user interface.

- Tailwind CSS: For styling the components.

- JavaScript (ES6): For implementing the application logic.