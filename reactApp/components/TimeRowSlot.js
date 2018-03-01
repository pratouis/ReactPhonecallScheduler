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

export default class TimeRowSlot extends React.Component {
  constructor() {
    super();
  }

  render() {

    return(
      {_.map(_.range(1,6), (dayOfWeek) => {
        return ({this.props.appts[String(dayOfWeek)] ? (
          <TableRowColumn style={{background: '#DC143C'}}>Phone {this.props.appts[String(dayOfWeek)].who}
          </TableRowColumn>
        ) : (<TableRowColumn></TableRowColumn>)})
      }
    )}
    )
  }
}
