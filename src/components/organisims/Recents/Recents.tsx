import React from 'react';
import "./Recents.css";
import Table from '../../molecules/Table/Table';
import TableContainer from '../../atoms/TableContainer/TableContainer';
import TableHead from '../../atoms/TableHead/TableHead';
import TableRow from '../../atoms/TableRow/TableRow';
import TableCell from '../../atoms/TableCell/TableCell';
import TimesheetsIcon from '../../../icons/TimesheetsIcon';
import TableBody from '../../atoms/TableBody/TableBody';
import { TimeSince } from '../../../assets/Utilities';
import TableHeadRow from '../../atoms/TableHeadRow/TableHeadRow';
import { RecentsDatabase } from '../../../assets/Data';
// import { RecentsDatabase } from '../../../assets/Data';

const Recents =  () => {
  var data = [{title: "Rongo University Timetable", date: "2024-02-25T15:58:45.194Z", location: "Desktop", id: 1}];
  // RecentsDatabase.insertOne("a", "Rongo University");
  // RecentsDatabase.insertOne("b", "Kisii University");
  // RecentsDatabase.insertOne("c", "Nairobi University");
 
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  
  // console.log(RecentsDatabase.getAll())
  console.log(RecentsDatabase.getAll())
  var rows = data.map(datum => <TableRow key={datum.id}><TableCell><TimesheetsIcon width={20} /></TableCell> <TableCell flex={2}><div><div>{datum.title}</div><div><h6 className='color-grey'>{datum.location}</h6></div></div></TableCell><TableCell>{TimeSince(datum.date)}</TableCell></TableRow>)
  return (
    <div className="Recents" >
      <h2 className='color-primary' >Recents</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableCell><TimesheetsIcon width={20} /></TableCell>
              <TableCell flex={2} >Name</TableCell>
              <TableCell>Last modified</TableCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Recents
