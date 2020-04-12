import React from 'react';
import useKey from '../functions/keyEvents';
import PieChart from 'react-simple-pie-chart';

const ands = (a, b, c) => a && b && c

function Extrapage() {
  const rKey = ands(!useKey('r'), !useKey('g'), !useKey('b'))
  const gKey = ands(!useKey('r'), useKey('g'), !useKey('b'))
  const bKey = ands(!useKey('r'), !useKey('g'), useKey('b'))
  return (

    <div>
      <p>She didn't understand how changed worked. When she looked at today compared to yesterday, there was nothing that she could see that was different. Yet, when she looked at today compared to last year, she couldn't see how anything was ever the same.
      He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.
The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over a week since their last meal and they were getting desperate. </p>
      <div id='graph'>
        {gKey && (
          <>
            <PieChart
              slices={[
                {
                  color: '#808080',
                  value: 10
                },
                {
                  color: '#008000',
                  value: 20,
                },
              ]}
            />
          </>
        )}
        {bKey && (
          <>
            <PieChart
              slices={[
                {
                  color: '#808080',
                  value: 10
                },
                {
                  color: '#0000FF',
                  value: 20,
                },
              ]}
            />
          </>
        )}
        {rKey && (
          <>
            <PieChart
              slices={[
                {
                  color: '#808080',
                  value: 10
                },
                {
                  color: '#FF0000',
                  value: 20,
                },
              ]}
            />
          </>
        )}

      </div>
    </div>
  );
}

export default Extrapage;
