import PropTypes from 'prop-types';

const Button = ({label, type}) => {
  let buttonClass =
    'px-2 py-1 md:px-4 md:py-2 rounded-md text-white hover:text-black -mt-2 md:-mt-0';

  if (type === 'primary') {
    buttonClass += ' primary-bg hover-primary';
  } else if (type === 'secondary') {
    buttonClass += ' secondary-bg hover-secondary';
  }

 return <button className={buttonClass}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  place: PropTypes.string,
};

export default Button;