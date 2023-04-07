import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'components/Layout';
import 'styles/App.css';
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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
