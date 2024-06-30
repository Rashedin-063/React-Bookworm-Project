import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../error/ErrorPage"
import ListedBooks from './../pages/ListedBooks';
import ReadPages from './../pages/ReadPages';
import About from './../pages/About';
import Contact from './../pages/Contact';
import BookDetails from "../components/BookDetails";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: async () => await fetch('./bookData.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: '/pages',
        element: <ReadPages></ReadPages>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: async () => await fetch('./bookData.json'),
      },
    ],
  },
]);

export default router;