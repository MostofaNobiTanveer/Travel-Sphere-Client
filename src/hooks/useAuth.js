import { useEffect, useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  updatePassword,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import initializeFirebase from '../pages/user/firebase/Firebase.init';

// initialize firebase app
initializeFirebase();

const useAuth = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(false);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const sendVerificationEmail = async (email) => {
    setIsLoading(true);
    const actionCodeSettings = {
      url: 'http://localhost:3000/user/register/complete',
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForRegistration', email);
        toast(`A verification email has been sent to ${email}`);
        setIsLoading(false);
      })
      .catch((error) => {
        toast(error.message);
        setIsLoading(false);
      });
  };

  const completeRegisterWithEmailLink = async (name, password, navigate) => {
    setIsLoading(true);
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForRegistration');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      await signInWithEmailLink(auth, email, window.location.href)
        .then(async (result) => {
          if (result.user.emailVerified) {
            // remove user email from localStorage
            window.localStorage.removeItem('emailForRegistration');
            // notify user
            toast.success('Regestration completed succesfully!');
            // Update password
            let user = auth.currentUser;
            await updatePassword(user, password);
            await updateProfile(user, {
              displayName: name,
            });
            setIsLoading(false);
            saveUsersToDb(email, user.displayName, user.photoURL, 'POST');
            navigate('/');
          }
        })
        .catch((error) => {
          toast('invalid or expired OTP. Please try again!');
          navigate('/user/register');
          setIsLoading(false);
        });
    }
  };

  const signinUser = (email, password, state, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirectUri = state?.from || '/';
        navigate(redirectUri, { replace: true });
        toast('Sign in success!');
      })
      .catch((error) => {
        toast(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleForgotPassword = (email) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast('Password reset email sent!');
      })
      .catch((error) => {
        toast(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInWithGoogle = (state, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // save user to database
        saveUsersToDb(user.email, user.displayName, user.photoURL, 'PUT');
        // redirect after sign in
        const redirectUri = state?.from || '/';
        navigate(redirectUri, { replace: true });
      })
      .catch((error) => {
        toast(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    setAdminLoading(true);
    fetch(`https://fathomless-eyrie-68291.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [user.email]);

  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // sign out successful
      })
      .catch((error) => {
        //   An error happened
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUsersToDb = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch('https://fathomless-eyrie-68291.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    adminLoading,
    isLoading,
    completeRegisterWithEmailLink,
    userSignOut,
    signInWithGoogle,
    signinUser,
    sendVerificationEmail,
    handleForgotPassword,
  };
};

export default useAuth;
