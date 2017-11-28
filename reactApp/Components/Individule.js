import React from 'react';

import Table, {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const interval = [9325, 37950, 91900, 191650, 416700, 418400];
const rate = [0.1, 0.15, 0.25, 0.28, 0.33, 0.35, 0.3960];
const fix = [0, 932.5, 5226.25, 18713.75, 46643.75, 120910.25, 121505.25];



class Individule extends React.Component {


  render() {
    return (
      <div>
        <Paper>
          <Table>
          <TableHeader
            adjustForCheckbox={false}
            displaySelectAll={false}
            >
            <TableRow>
              <TableHeaderColumn>year</TableHeaderColumn>
              {this.props.data.map((item, key)=>{
                let year = item.start_date.slice(0, 4);
                return <TableHeaderColumn key={key}>{year}</TableHeaderColumn>
              })}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Your Age</TableRowColumn>
              {this.props.data.map((item, key) =>{
                let timingStr = item.start_date.slice(0, 4);
                let diff = parseInt(timingStr) - this.props.user_birthday;
                return <TableRowColumn key={key}>{diff}</TableRowColumn>
              })}
            </TableRow>

            <TableRow>
              <TableRowColumn>Income From Work</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.user_work}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>Social Security</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.user_social_security}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>Retirement Savings Withdrawals</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.asset_income}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>Combined Income</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.total}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn style={{color: 'red'}}>Tax</TableRowColumn>
              {this.props.data.map((item, key) =>{
                let timingStr = item.start_date.slice(0, 4);
                let diff = parseInt(timingStr) - this.props.startingDate;
                let map = interval.map(item =>{
                    return item * Math.pow((1.02), diff);
                })
                let taxAmount = this.props.tax(parseFloat(item.total), map, rate, fix);
                return <TableRowColumn style={{color: 'red'}} key={key}>{taxAmount}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>Net Income</TableRowColumn>
              {this.props.data.map((item, key) =>{
                let timingStr = item.start_date.slice(0, 4);
                let diff = parseInt(timingStr) - this.props.startingDate;
                let map = interval.map(item =>{
                    return item * Math.pow((1.02), diff);
                })
                let taxAmount = this.props.tax(parseFloat(item.total), map, rate, fix);
                return <TableRowColumn key={key}>{parseFloat(item.total) - taxAmount}</TableRowColumn>
              })}
            </TableRow>
          </TableBody>
        </Table>
          </Paper>
      </div>

    );
  };
}

export default Individule;
