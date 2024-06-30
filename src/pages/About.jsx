

const About = () => {
  return (
    <div className='max-w-md md: md:max-w-xl lg:max-w-2xl mx-auto mt-12 space-y-4 px-2'>
      <h2 className='text-3xl text-center mb-8 font-bold'>About Us</h2>
      <h5 className='text-lg font-semibold'>Welcome to BookWorm</h5>
      <p>
        At BookWorm, we believe in the transformative power of books. Our
        mission is to provide you with a carefully curated selection of
        literature that will inspire, educate, and entertain. Whether you are
        looking for the latest bestsellers, timeless classics, or hidden gems,
        we have something to freshen up your mind and soul.
      </p>
      <p>
        Our collection is meticulously chosen to cater to readers of all tastes.
        From fiction to non-fiction, from mystery to romance, and from self-help
        to science fiction, BookWorm is your go-to destination for all things
        literary. We believe that a good book has the power to change your
        perspective, ignite your imagination, and offer a sanctuary from the
        hustle and bustle of everyday life.
      </p>
      <p>
        Join our community of passionate readers and embark on a literary
        journey with us. At BookWorm, we strive to create a welcoming space
        where book lovers can discover new favorites, share recommendations, and
        connect with fellow bibliophiles. Connect with Us and be a part of our
        vibrant community:{' '}
        <a
          className='text-blue-800 font-semibold hover:underline'
          href='https://www.facebook.com'
          target='_blank'
        >
          Facebook
        </a>
        ,{' '}
        <a
          className='text-blue-800 font-semibold hover:underline'
          href='https://www.twitter.com'
          target='_blank'
        >
          Twitter
        </a>
        ,{' '}
        <a
          className='text-blue-800 font-semibold hover:underline'
          href='https://www.instagram.com'
          target='_blank'
        >
          Instagram
        </a>{' '}
        Feel free to reach out to us through our social media channels or drop
        us an email at{' '}
        <a
          className='text-blue-800 font-bold hover:underline'
          href='https://mail.google.com/mail/?view=cm&fs=1&to=rashedinislam.06@gmail.com'
          target='_blank'
        >
          contact@bookworm.com
        </a>{' '}
        We look forward to connecting with you!
      </p>
    </div>
  );
};

export default About;