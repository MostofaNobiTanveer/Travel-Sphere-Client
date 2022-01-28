import React, { useEffect, useState } from 'react';

// react toastify
// import { toast } from 'react-toastify';

// react icons
import { BsBoxArrowInRight, BsGoogle } from 'react-icons/bs';

// react router
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthProvider';

// cmponent
const LoginPage = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({});
  const { signInWithGoogle,isLoading, handleForgotPassword, signinUser, user } =
    useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  let from = state?.from?.pathname || '/';

  useEffect(() => {
    if (user && user.emial) navigate(from);
  }, [user, navigate, from]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser(formData.email, formData.password, state, navigate);
  };

  // email password login
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // login user
  //   try {
  //     const result = await signInWithEmailAndPassword(auth, email, password);
  //     const { user } = result;
  //     const idTokenResult = await user.getIdTokenResult();

  //     createOrUpdateUser(idTokenResult.token)
  //       .then((res) => {
  //         dispatch({
  //           type: 'LOGGED_IN_USER',
  //           payload: {
  //             name: res.data.name,
  //             email: res.data.email,
  //             token: idTokenResult.token,
  //             role: res.data.role,
  //             _id: res.data._id,
  //           },
  //         });
  //         roleBasedRedirect(res.data.role);
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (error) {
  //     toast.error(error.message);
  //     setLoading(false);
  //   }
  // };

  // handle forgot password
  // const handleForgotPassword = async () => {
  //   await sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       toast.success('Password reset email sent successfully');
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  return (
    <section className="md:py-12 py-6 w-full mx-auto px-3 md:px-6">
      <div className="max-w-3xl md:h-[35rem] bg-white shadow-2xl rounded-xl md:grid md:grid-cols-5 mx-auto p-3 md:p-0">
        <div
          className={`${
            mounted
              ? 'transform translate-y-0 opacity-100'
              : 'transform translate-y-2 opacity-0'
          } md:col-span-2 md:m-3 rounded-xl bg-sky-500 bg-patterns2 shadow-lg shadow-sky-300 transition-all ease-in duration-300`}
        >
          <div className="text-white h-full flex flex-col justify-between">
            <div className="flex-1 flex gap-2 md:gap-5 flex-col justify-center md:m-4 m-3">
              <h3 className="font-semibold tracking-wide text-3xl">Sign In</h3>
              <p className="mt-1 text-sm text-sky-100 max-w-sm">
                Enter your login information and enjoy experiences shared by all
                travelers and share your experience!
              </p>
            </div>
            <div className="md:m-4 m-3 p-4 bg-sky-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-60 rounded-xl flex flex-col gap-2 mt-4">
              <p className="text-sky-100">Don't have an account?</p>
              <Link to="/user/register" className="font-medium inline">
                Register
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            mounted
              ? 'transform translate-y-0 opacity-100'
              : 'transform translate-y-2 opacity-0'
          } mt-5 md:mt-0 md:col-span-3 transition-all ease-in duration-300 delay-300`}
        >
          <div className="overflow-hidden h-full flex items-center">
            <div className="md:mr-4 md:px-10 py-5 flex-1 grid grid-cols-6 gap-4">
              {/* <div className=""> */}
              {/* email */}
              <form onSubmit={handleSubmit} className="col-span-6 space-y-4">
                {/* email input */}
                <div>
                  <label htmlFor="email" className="block text-md text-text">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      onChange={handleOnChange}
                      required
                      autoComplete="email"
                      placeholder="example@mail.com"
                      className="appearance-none block w-full px-3 py-2 border border-sky-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* password input */}
                <div>
                  <label htmlFor="password" className="block text-md text-text">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      onChange={handleOnChange}
                      type="password"
                      placeholder="Password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-sky-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* login button */}
                <div>
                  <button
                    type="submit"
                    disabled={
                      !formData?.email || formData?.password?.length < 6
                    }
                    className="w-full disabled:opacity-90 disabled:cursor-not-allowed flex items-center gap-2 justify-center py-2 px-4 border border-transparent rounded-md shadow-md shadow-sky-300 text-sm font-normal text-white bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    {/* {isLoading ? 'Loading...' : 'Sign up'} */}
                    {/* {loading ? (
                      <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-6 h-6 border-l-2 border-b-2 border-r-2 rounded-full"></div>
                      </div>
                    ) : ( */}
                    <>
                      <span>{isLoading ? 'Loading...' : 'Log In'}</span>{' '}
                      <BsBoxArrowInRight className="text-xl" />
                    </>
                    {/* )} */}
                  </button>
                </div>
              </form>
              {/* Google signin */}
              <div className="col-span-6 space-y-4">
                <button
                  onClick={() => signInWithGoogle(state, navigate)}
                  className="w-full flex items-center gap-2 justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-normal transition text-sky-500 border-sky-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  {/* {isLoading ? 'Loading...' : 'Sign up'} */}
                  <BsGoogle className="text-xl" />
                  <span>Login with Google</span>
                </button>
              </div>
              {/* forgot password */}
              <div className="col-span-6 space-y-4 text-right">
                <button
                  onClick={handleForgotPassword}
                  disabled={!formData.email}
                  className="underline text-text disabled:opacity-70 hover:decoration-wavy transition-all"
                >
                  <span>Forgot Password</span>
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
