import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (<>
  
  <nav className="py-4 flex justify-between items-center" >
        <Link>
          <img src="/logo.png" className="h-15 sm:h-20" alt="SparkXpressPoint" />
        </Link>

        <SignedOut>
        
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton 
        appearance={{
          elements: {
            avatarBox: "w-10 h-10"
          }
        }} />
      </SignedIn>
    </nav>
    </>
  );
};

export default Header


