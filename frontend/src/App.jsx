import { SignInButton, SignOutButton, UserButton, useAuth } from "@clerk/react";

function App() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello</h1>
      {!isSignedIn ? (
        <SignInButton mode="modal" />
      ) : (
        <>
          <UserButton />
          <SignOutButton />
        </>
      )}
    </div>
  );
}

export default App;
