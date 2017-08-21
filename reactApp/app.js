
import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['new york', 'seattle', 'L.A'];


class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
      <p>Helo</p>
      <ul>
        {dummyData.map((task, i) => <li key={i}> {task} </li>)}
      </ul>
    </div>
    )
  }
}

ReactDOM.render(<TodoList/>,
   document.getElementById('root'));
