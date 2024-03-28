import React, { useState } from 'react';
import "./Dashboard.css";
import Alert from '../../components/atoms/Alert/Alert';

const Dashboard = (props: {handleScreenChange: Function, filepath: string, newfile?: boolean}) => {
  const [isOpen, setAlertOpen] = useState(true);
  return (
    <div>
      <Alert type='success' message='New Timesheet Created' isOpen={isOpen} setOpen={setAlertOpen}/>
      Dashbaord
      {props.filepath}
    </div>
  )
}

export default Dashboard
