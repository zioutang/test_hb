import React from 'react';

import Table, {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


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
          </TableBody>
        </Table>
          </Paper>
      </div>

    );
  };
}

export default Individule;
