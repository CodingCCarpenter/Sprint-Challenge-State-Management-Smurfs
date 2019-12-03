1. What problem does the context API help solve?
    Context API helps us avoid prop drilling, making state management easier.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -Actions are objects that tell the reducer about the actions that are happening in our app.
    -Reducers are functions that manage state changes in a predictable way. (Pure functions)
    -Redux Store is an object that contains our state

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Application state is global, while component state is defined in a specific component. You want to use application state when you need to access your state from a lot of different components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -It's a middleware that lets us run asynchronous operations. It changes our action creators by letting them return a function rather than just an object, which lets us dispatch more than one action.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    -Context API! Redux makes my brain hurt, and I wish I hadn't used it here :(
