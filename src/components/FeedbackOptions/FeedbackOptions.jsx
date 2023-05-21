import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedbackClick }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            type="button"
            onClick={() => onFeedbackClick(option)}
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};
