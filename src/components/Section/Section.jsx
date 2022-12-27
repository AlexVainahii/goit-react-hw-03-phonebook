import PropTypes from 'prop-types';
import { H2 } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <H2>{title}</H2>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
