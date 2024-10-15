// import { useUser, SignInButton } from "@clerk/clerk-react";
// import { useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const { isSignedIn, isLoaded } = useUser();
//   const { pathname } = useLocation();

//   if (isLoaded && !isSignedIn) {
//     // Show the SignInButton if the user is not signed in
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-xl font-bold mb-4">You need to sign in to access this page</h1>
//         <SignInButton />
//       </div>
//     );
//   }

//   // If the user is signed in, show the protected content
//   return children;
// };

// export default ProtectedRoute;





import { useUser, SignInButton } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import { Button } from '@/components/ui/button'


const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn) {
    // Show the styled SignInButton if the user is not signed in
    return (
      <div className="flex flex-col items-center justify-center h-screen  text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">You need to sign in to access this page</h1>
        <SignInButton className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">SignIn
        </SignInButton>
      </div>
    );
  }

  // If the user is signed in, show the protected content
  return children;
};

export default ProtectedRoute;


