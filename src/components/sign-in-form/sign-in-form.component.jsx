import { useState} from 'react';

import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    }catch(error){
      switch(error.code){
        case 'auth/wrong-password':
          alert("Incorrect password. Please try again.");
          break;
        case 'auth/user-not-found':
          alert('Could not find a user with the entered email.');
          break;
        default:
          console.log("User sign in error. ", error)
      }
    };

  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({ ...formFields, [name]:value })
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required 
          onChange={handleChange} 
          name="email" 
          value={email} 
        />
        <FormInput
          label="Password"
          type="password"
          required 
          onChange={handleChange} 
          name="password" 
          value={password} 
        />
        <div className='buttons-container'>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  );

};

export default SignIn;
