const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    console.log('User signed in:', user);
  } else {
    // User is signed out.
    console.log('User signed out');
  }
});

useEffect(() => {
  // Cleanup function to unsubscribe on unmount
  return () => {
    console.log('Cleaning up listener...');
    unsubscribe();
  };
}, []);