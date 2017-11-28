import React from 'react';

import Table, {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class Family extends React.Component {

  render() {
    return (
      <div>
        <Paper >
          <Table >
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
              <TableRowColumn>Your Spouse's Age</TableRowColumn>
              {this.props.data.map((item, key) =>{
                let timingStr = item.start_date.slice(0, 4);
                let diff = parseInt(timingStr) - this.props.spouse_birthday;
                return <TableRowColumn key={key}>{diff}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>My Income</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.user_work}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>Spouse's Income</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.spouse_work}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn >Income From Work</TableRowColumn>
              {this.props.data.map((item, key) =>{
                let myIncome = parseFloat(item.sources.user_work);
                let spouseIncome = parseFloat(item.sources.spouse_work);
                return <TableRowColumn key={key}>{myIncome + spouseIncome}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>My SS</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.user_social_security}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>Spouse's SS</TableRowColumn>
              {this.props.data.map((item, key) =>{
                return <TableRowColumn key={key}>{item.sources.spouse_social_security}</TableRowColumn>
              })}
            </TableRow>
            <TableRow>
              <TableRowColumn>total SS</TableRowColumn>
              {this.props.data.map((item, key) =>{
                let mySS = parseFloat(item.sources.user_social_security);
                let spouseSS = parseFloat(item.sources.spouse_social_security);
                return <TableRowColumn key={key}>{mySS + spouseSS}</TableRowColumn>
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

export default Family;
