// ... existing code ...

export const registerWithEmailAndPassword = async (name, email, password, isCorporateUser) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    
    // Create a reference to the users collection
    const userRef = doc(db, "users", user.uid);
    
    // Set the user data with isCorporateUser flag
    await setDoc(userRef, {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      isCorporateUser: isCorporateUser
    });
    
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// ... existing code ...