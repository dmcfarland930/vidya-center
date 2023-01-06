import { Component, useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth'

import { 
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    useEffect(() => {
      async function fetchUser(){
        const response = await getRedirectResult(auth);
        if(response){
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
      };
      fetchUser();
    }, []);

    const logGoogleUserPopUp = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUserPopUp}>Sign in with Google Popup</button>
        <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      </div>
    );

};

export default SignIn;
