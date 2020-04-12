import React from 'react';
import useKey from '../functions/keyEvents';
import PieChart from 'react-simple-pie-chart';
import '../../index.css';


const ands = (a, b, c) => a && b && c

function Extrapage() {
  // Key event combinations to make sure only specific graphs are shown.
  const rKey = ands(!useKey('r'), !useKey('g'), !useKey('b'))
  const gKey = ands(!useKey('r'), useKey('g'), !useKey('b'))
  const bKey = ands(!useKey('r'), !useKey('g'), useKey('b'))
  return (

    <div id="top">

      <p><font size="+2">Here was have a demonstration of a simple graph change. Default color is Red and Grey. But based on if you press "G" then the chart will swap the red with green.
        Similar affect will occur with pressing "B" to replace the red with blue. Also if you would like the chart to disapear just press "R".</font></p>
      <div id='graph'>
        {gKey && (
          // Where the events occur.
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
