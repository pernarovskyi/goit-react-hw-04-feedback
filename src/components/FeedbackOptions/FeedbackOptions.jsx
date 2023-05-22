import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedbackClick }) => {
  const optionList = Object.keys(options);

  return (
    <>
      {optionList.map(option => {
        return (
          <Button
            type="button"
            onClick={onFeedbackClick}
            key={option}
            name={option}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.object,
  onFeedbackClick: PropTypes.func.isRequired,
};
