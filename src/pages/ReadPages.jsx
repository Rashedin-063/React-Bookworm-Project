import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  BarChart as BChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { getReadBooks } from '../utilities';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const ReadPages = () => {
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
          Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('./bookData.json');
      const data = await res.json();
      setBooks(data);
    };
    fetchDetails();
  }, []);

  const readBookIds = getReadBooks();
  const readBooks = books.filter((book) => readBookIds.includes(book.id));

  return (
    <div className='mr-4 ml-1 md:mr-0 md:ml-0 h-[85vh] flex items-center'>
      <div
        className='bg-gray-200 px-6 pt-8 pb-24 rounded-2xl'
        style={{ width: '100%', height: 500 }}
      >
        <h2 className='text-3xl text-center font-semibold text-green-600 pb-10'>
          Pages you have read so far
        </h2>
        <ResponsiveContainer>
          <BChart
            width={800}
            height={300}
            data={readBooks}
            margin={{
              top: 20,
              right: 30,
              left: -10,
            }}
          >
            <CartesianGrid strokeDasharray='4 4' />
            <XAxis dataKey='bookName' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey='totalPages'
              fill='#8884d8'
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {readBooks.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

ReadPages.propTypes = {
  fill : PropTypes.string,
  x : PropTypes.string,
  y : PropTypes.string,
  width : PropTypes.number,
  height : PropTypes.number,
};

export default ReadPages;
