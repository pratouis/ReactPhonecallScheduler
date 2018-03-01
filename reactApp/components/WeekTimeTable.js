import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import _ from 'underscore';
const appts = [{
  day: 1,
  time: 9,
  who: 'cyrus'
},
{
  day: 2,
  time: 10,
  who: 'cyrus'
},
{
  day: 2,
  time: 11,
  who: 'cyrus'
},
{
  day: 2,
  time: 9,
  who: 'cyrus'
},
]

export default class WeekTimeTable extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    let groupByTime = _.groupBy(_.sortBy(appts, obj => obj.day), obj => obj.time);
    console.log(groupByTime);
    return(
      <Table
        showCheckboxes={false}>
        <TableHeader >
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
            <TableHeaderColumn key={day}>{day}</TableHeaderColumn>
          ))}
        </TableHeader>
        <TableBody>
          {_.map(_.range(9,18), (timeOfDay) => {
            return(<TableRow key={timeOfDay}>
              <TableRowColumn key={'time'+timeOfDay}>{timeOfDay < 12 ? `${timeOfDay} A.M.`: `${timeOfDay%12} P.M.`}</TableRowColumn>
              {_.map(_.range(1,5), dayOfWeek => {
                if(groupByTime[String(timeOfDay)] && groupByTime[String(timeOfDay)].day === dayOfWeek){
                  return (
                    <TableRowColumn style={{background: '#cccccc'}} key={timeOfDay+'_'+dayOfWeek}>
                    Phone {groupByTime[String(timeOfDay)].who}
                  </TableRowColumn>);
                }else{
                  return(<TableRowColumn key={timeOfDay+'_'+dayOfWeek}></TableRowColumn>);
                }
              })}
            </TableRow>)
          })}
        </TableBody>
      </Table>
    )
  }
}
