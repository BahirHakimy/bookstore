import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from 'components/BookList';
import Layout from 'components/Layout';
import Categories from 'components/Categories';
import { Provider } from 'react-redux';
import store from 'redux/store';

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
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
