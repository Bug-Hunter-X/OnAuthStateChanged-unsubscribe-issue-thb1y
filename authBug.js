const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe from the listener when component unmounts
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);