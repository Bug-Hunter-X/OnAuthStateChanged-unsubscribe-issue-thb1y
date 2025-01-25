# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` listener: improper unsubscription leading to memory leaks.  The provided code shows the incorrect and correct implementations.

## Problem

The `onAuthStateChanged` listener, when not properly unsubscribed, continues to listen even after the component where it's used is unmounted. This results in memory leaks and potential performance issues.  The `unsubscribe` function, returned by `onAuthStateChanged`, is crucial for cleaning up the listener.

## Solution

The solution involves utilizing the `useEffect` hook to ensure the listener is unsubscribed when the component unmounts. The cleanup function within `useEffect` is executed before the component is removed from the DOM, effectively preventing the memory leak.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run the application. Observe the console logs to verify listener behavior.
4. Unmount the component (if using React) to see the difference between the incorrect and correct implementation. In the incorrect implementation, console logs will continue despite unmounting, whereas the correct implementation will stop.
