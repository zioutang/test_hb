import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Individule from './Individule';
import Family from './Family'
class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singles: [],
      spouses: [],
      user_birthday: 1988,
      spouse_birthday: 1993,
      join: false,
      start: 0,
      end: 5,
      startingDate: 2017
    }
    this.toggle = this.toggle.bind(this);
    this.preHandler = this.preHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  };
  nextHandler() {
    if (this.state.end >= this.state.singles.length || this.state.end >= this.state.spouses.length) {
      return;
    }
    let nextStart = this.state.start + 5;
    let nextEnd = this.state.end + 5;

    this.setState({
      start: nextStart,
      end: nextEnd
    })
  }
  preHandler() {
    if (this.state.start === 0 && this.state.end === 5) {
      return;
    }
    let preStart = this.state.start - 5;
    let preEnd = this.state.end - 5;
    this.setState({
      start: preStart,
      end: preEnd
    })
  }
  toggle() {
    let toggle = !this.state.join;
    this.setState({
      join: toggle
    })
  };
  buttonCreater({
    label,
    icon,
    func
  }) {
    return (
      <FlatButton
        label={label}
        icon={icon}
        onClick={func.bind(this)}
        primary={true}
      />
    )
  }
  tax(income, interval, rate, fix) {
    let index = interval.length - 1;
    for (let i = 0; i < interval.length; i++) {
      let curr = interval[i];
      if (income < curr) {
        index = i;
        break;
      }
    }
    let taxable = index - 1 < 0 ? 0 : interval[index - 1];
    return (income - taxable) * rate[index] + fix[index];
  }
  componentDidMount() {
    fetch(`http://localhost:3000/data`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        let list = JSON.parse(data);
        this.setState({
          singles: list
        })
      }).catch(err => {
        console.log('err: ', err);
      })
    fetch(`http://localhost:3000/dataWithSpouse`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        let arr = JSON.parse(data);
        this.setState({
          spouses: arr
        })
      }).catch(err => {
        console.log('err: ', err);
      })
  };

  render() {
    let content = null;
    if (this.state.join) {
      content = <Family
        data={this.state.spouses.slice(this.state.start, this.state.end)}
        user_birthday={this.state.user_birthday}
        spouse_birthday={this.state.spouse_birthday}
        tax={this.tax}
        startingDate={this.state.startingDate}
      />
    } else {
      content = <Individule
        data={this.state.singles.slice(this.state.start, this.state.end)}
        user_birthday={this.state.user_birthday}
        tax={this.tax}
        startingDate={this.state.startingDate}
      />
    }
    return (
      <div>
        {this.state.join ? (this.buttonCreater({label: 'Show Individule', func: this.toggle}))
        : (this.buttonCreater({label: 'Show Family', func: this.toggle}))}
        <br />
        <br />
        {content}
        <br />
        {this.buttonCreater({icon: (<i className="material-icons">keyboard_arrow_left</i>), func: this.preHandler})}
        {this.buttonCreater({icon: (<i className="material-icons">keyboard_arrow_right</i>), func: this.nextHandler})}
      </div>
    )
  }
}
export default Table;
