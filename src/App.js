import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from 'components/BookList';
import Layout from 'components/Layout';
import Categories from 'components/Categories';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <BookList /> },
        { path: 'books', element: <BookList /> },
        { path: 'categories', element: <Categories /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
