import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import BooksSection from "../components/BooksSection";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookWorm | Home</title>
      </Helmet>
      <Banner></Banner>
      <BooksSection></BooksSection>
      <Accordion/>
    </div>
  );
};

export default Home;