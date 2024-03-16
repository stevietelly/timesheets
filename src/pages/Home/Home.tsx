import React, { useState } from 'react';
import "./Home.css";
import Card from '../../components/atoms/Card/Card';
import TimesheetsIcon from '../../icons/TimesheetsIcon';
import HyperlinkButton from '../../components/atoms/HyperLinkButton/HyperlinkButton';
import IconLabelButton from '../../components/atoms/IconLabelButton/IconLabelButton';
import PlusIcon from '../../icons/PlusIcon';
import TemplateHolder from '../../components/molecules/TemplateHolder/TemplateHolder';
import Recents from '../../components/organisims/Recents/Recents';
import Popup from '../../components/atoms/Popup/Popup';
import TextInput from '../../components/atoms/TextInput/TextInput';

const Home = (props: any) => {
  const templates: Array<Object> = [{ "title": "Kenyan Highschool Timetable" }, {"title": "Random Generator Timetable" }, {"title": "Kenyan University Timetable"}, {"title": "Generic Timesheet"}]
  const [date, setCurrentDate]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState(new Date());
  // Popup
  const [isOpen, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className='Home'>
      <Popup isOpen={isOpen} setOpen={setOpen} title="New Timesheet">
        <TextInput label="Timesheet Title"/>
      </Popup>
      <Card>
        <div className='flex' style={{ justifyContent: "space-between" }}>
          <div className='color-primary' style={{ display: "inline-flex", gap: "10px" }}><TimesheetsIcon /> <h1>Timesheets</h1></div>
          <div className='flex-center' style={{ gap: "10px" }}>
            <IconLabelButton name="New Timesheet" onClick={()=>setOpen(true)} icon={<PlusIcon color="white" />} style={{ backgroundColor: "#F64848", color: "white" }} />
            <HyperlinkButton name="Open Timesheet" />

          </div>
        </div>

      </Card>

      <Card>
        <div style={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
          <div style={{ backgroundColor: "#ffff", borderRadius: "5px", boxShadow: "0 1px 10px rgba(0, 0, 0, 0.2)", padding: "10px" }}>
            <div> <h4 className='color-grey'>Today is </h4></div>
            <div><h1 className='color-primary' >{days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</h1></div>

          </div>
        </div>


      </Card>
      <Card height={"100%"}>
        <TemplateHolder data={templates} />
        <Recents/>
      </Card>
     
    </div>
  )
}

export default Home
