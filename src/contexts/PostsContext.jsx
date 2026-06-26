import { useState, useContext, createContext } from 'react';

const PostsContext = createContext(null);

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL =
  "http://localhost:3000";

const fetchPostsByUser = async (userId) => {
  try {
    setLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URL}/posts/user/${userId}`);

    if (!response.ok) {
      throw new Error("Error fetching posts");
    }

    const data = await response.json();

    setPosts(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        error,
        fetchPostsByUser
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}