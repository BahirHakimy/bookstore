import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'components/Layout';
import BookList from 'components/BookList';
import Categories from 'components/Categories';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'books', element: <BookList /> },
        { path: 'categories', element: <Categories /> },
        { path: '/', element: <BookList /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
