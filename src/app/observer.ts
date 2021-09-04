import { observable, of } from "rxjs";

// Create simple observable that emits three values
const myObservable = of(1, 2, 3);

// Create observer object
const myObserver:any = {
  next: (x: string) => console.warn('Observer got a next value: ' + x),
  error: (err: string) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object
myObservable.subscribe(myObserver);

// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification