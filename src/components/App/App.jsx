import { Component } from 'react';
import { Section } from 'components/Section';
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistic } from "components/Statistic";
import { Notification } from "components/Notification";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onFeedbackClick = state => {
    this.setState(prevState => ({      
      [state]: prevState[state] + 1,
    }))
  }
  
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, prev) => acc + prev);    
  }; 
 
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render(){
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    
    return(
      <Container>
        <Section title={"Please leave your feedback"}>
          <FeedbackOptions 
            options = { options }
            onFeedbackClick = { this.onFeedbackClick }
          />         
        </Section>

        <Section>
        {this.countTotalFeedback() > 0 ? (
          <Statistic 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={this.countTotalFeedback()} 
          positivePercentage={ this.countPositiveFeedbackPercentage()}
        />
        ) : (
          <Notification message={"No feedbacks yet"}/>
        )}
        </Section>
      </Container>
    )    
  }
}