import React from 'react';
import ReactDOM from 'react-dom';

import Countdown, { CountdownRenderProps } from '../dist';
import { CountdownHookBasicUsage, CountdownHookCompletionist } from './CountdownHook';
import CountdownApi from './CountdownApi';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with completed condition
const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
  return completed ? (
    <Completionist />
  ) : (
    <span>
      {hours}:{minutes}:{seconds}
    </span>
  );
};

class App extends React.PureComponent {
  render() {
    const date = Date.now() + 5000;
    return (
      <>
        <h1>React {'<Countdown />'} (E2E)</h1>
        <section>
          <h2>Basic Usage</h2>
          <h3>Date in the future</h3>
          <div id="basic-usage">
            <Countdown date={date} />
          </div>
          <hr />
          <h3>Date in the past</h3>
          <div id="basic-usage-past">
            <Countdown date={date * -1} />
          </div>
          <hr />
        </section>
        <section>
          <h2>Custom &amp; Conditional Rendering</h2>
          <h3>Using a React Child for the Completed State</h3>
          <div id="children-conditional">
            <Countdown date={date}>
              <Completionist />
            </Countdown>
          </div>
          <h3>Custom Renderer with Completed Condition</h3>
          <div id="renderer-conditional">
            <Countdown date={date} renderer={renderer} />
          </div>
          <hr />
        </section>
        <section>
          <h2>
            Countdown (<code>overtime</code>)
          </h2>
          <div id="overtime">
            <Countdown date={date} overtime={true} />
          </div>
        </section>
        <section>
          <h2>
            Countdown Hook (<code>useCountdown</code>)
          </h2>
          <h3>Date in the future</h3>
          <div id="hook-basic-usage">
            <CountdownHookBasicUsage date={date} />
          </div>
          <hr />
          <h3>Date in the past</h3>
          <div id="hook-basic-usage-past">
            <CountdownHookBasicUsage date={date * -1} />
          </div>
          <hr />
          <h3>Conditional Rendering</h3>
          <div id="hook-conditional">
            <CountdownHookCompletionist date={date} />
          </div>
          <hr />
        </section>
        <section>
          <h2>Countdown API</h2>
          <h3>Countdown with Start, Pause, Stop and Reset Controls (Custom Renderer)</h3>
          <div id="api">
            <CountdownApi />
          </div>
        </section>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
