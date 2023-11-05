"use client"
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

export const CookieConsent = () => {
const [showConsent, setShowConsent] = useState(false);

useEffect(() => {
// If no consent cookie is present, show the consent popup
if (!hasCookie('consent')) {
setShowConsent(true);
}
}, []);

const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie('consent', 'true');
  
    // Trigger GTM script load
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('updateGTMConsent'));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setShowConsent(false);
};

  

if (!showConsent) {
return null;
}

return (
    <div className='ml-0 fixed bottom-0 md:-bottom-10 left-1/2 w-full  md:w-2/3 max-w-2xl min-w-xs py-15 p-8 m-4 bg-green-primary text-white flex flex-col items-center justify-center transform -translate-x-1/2'> 
    <div> 
        <p>We use some <strong>standard analytics packages</strong> to understand general user behaviour, so we can figure out how to improve our content. This involves some cookies. Are you OK with this?</p> 
    </div> 
    <div className="flex mt-2">
        <button onClick={acceptConsent} className='bg-white text-blue-500 px-4 py-2 rounded mr-2'>Accept</button>
        <button onClick={declineConsent} className='bg-white text-red-500 px-4 py-2 rounded'>Decline</button>
    </div>
</div>
);
}; 