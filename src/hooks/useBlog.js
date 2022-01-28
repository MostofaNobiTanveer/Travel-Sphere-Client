import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthContext } from '../contexts/AuthProvider';

const useBlog = () => {
  const { admin } = useAuthContext();
  const [blogs, setBlogs] = useState([]);
  const [fetchBlogs, setFetchBlogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const postNewBlog = (blogData) => {
    setIsLoading(true);
    try {
      fetch('https://fathomless-eyrie-68291.herokuapp.com/blogs', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(blogData),
      }).then(() => {
        admin
          ? toast('Blog posted successfully!')
          : toast('Post request sent for approval.');
        setFetchBlogs(!fetchBlogs);
      });
    } catch (error) {
      toast('Something went wrong! Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const approveBlog = (id) => {
    setIsLoading(true);
    try {
      fetch(`https://fathomless-eyrie-68291.herokuapp.com/approveBlog/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
      }).then(() => {
        setFetchBlogs(!fetchBlogs);
        toast('Blog approved successfully!');
      });
    } catch (error) {
      toast('Something went wrong! Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBlog = (id) => {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if (confirmation) {
      setIsLoading(true);
      fetch(`https://fathomless-eyrie-68291.herokuapp.com/blog/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setFetchBlogs(!fetchBlogs);
            setIsLoading(false);
            toast('Blog deleted!');
          } else {
            return;
          }
        });
    } else return;
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fathomless-eyrie-68291.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, [fetchBlogs]);

  //   const saveUsersToDb = (email, displayName, photoURL, method) => {
  //     const user = { email, displayName, photoURL, role: 'subscriber' };
  //     fetch('https://fathomless-eyrie-68291.herokuapp.com/users', {
  //       method: method,
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(user),
  //     }).then();
  //   };

  return {
    blogs,
    isLoading,
    postNewBlog,
    deleteBlog,
    approveBlog,
  };
};

export default useBlog;
