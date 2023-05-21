import PropTypes from 'prop-types';
import { List, ListItem } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
   <>
     <List>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>      
    </List>

    <List>
        <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positivePercentage} %</ListItem>
    </List>
   </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
