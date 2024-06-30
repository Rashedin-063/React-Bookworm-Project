import { useState } from "react";

const [books, setBooks] = useState([]);
const [dataLength, setDataLength] = useState(8);

const handleSeeMore = () => {
  setDataLength(21);
};

useEffect(() => {
  const fetchDetails = async () => {
    const res = await fetch('./bookData.json');
    const data = await res.json();
    setBooks(data);
  };
  fetchDetails();
}, []);
