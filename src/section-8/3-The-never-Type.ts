function chatFeed(): never {
  while (true) {
    console.log('Chat feed');
  }
}

// do not call the function
// chatFeed();
console.log(typeof chatFeed);
// The never type represents the type of values that never occur. For example, a function that never returns a value or a function that throws an error. The never type is a subtype of all types. This means that you can assign a value of type never to any other type.
