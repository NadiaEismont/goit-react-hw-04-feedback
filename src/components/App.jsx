import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(prevState => (prevState[option] += 1));
  };
  render() {
    return (
      <>
        {/* <Section title=""></Section> */}

        <h1>Please leave feedback</h1>
        <div>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>

          {/* <Section title=""></Section> */}
          <Statistics
            onLeaveFeedback={this.onLeaveFeedback}
            good={this.good}
            neutral={this.neutral}
            bad={this.bad}
            total={this.total}
            positivePercentage={this.positivePercentage}
          ></Statistics>
        </div>
      </>
    );
  }
}
