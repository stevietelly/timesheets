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
import Button from '../../components/atoms/Button/Button';
import IconButton from '../../components/atoms/IconButton/IconButton';
import FolderIcon from '../../icons/FolderIcon';
import Textarea from '../../components/atoms/Textarea/Textarea';

const Home = (props: any) => {
  const templates: Array<Object> = [{ "title": "Kenyan Highschool Timetable" }, { "title": "Random Generator Timetable" }, { "title": "Kenyan University Timetable" }, { "title": "Generic Timesheet" }]
  const [date, setCurrentDate]: [Date, React.Dispatch<React.SetStateAction<Date>>] = useState(new Date());
  // Popup
  const [isOpen, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className='Home'>
      <Popup isOpen={isOpen} setOpen={setOpen} title="New Timesheet">
     
      <PopupContents setOpen={setOpen}></PopupContents>
      </Popup>
      <Card>
        <div className='flex' style={{ justifyContent: "space-between" }}>
          <div className='color-primary' style={{ display: "inline-flex", gap: "10px" }}><TimesheetsIcon /> <h1>Timesheets</h1></div>
          <div className='flex-center' style={{ gap: "10px" }}>
            <IconLabelButton name="New Timesheet" onClick={() => setOpen(true)} icon={<PlusIcon color="white" />} style={{ backgroundColor: "#F64848", color: "white" }} />
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
        <Recents />
      </Card>

    </div>
  )
}

function PopupContents(props: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}){
  const [titleValue, setTitleValue] = useState("");
  const [pathValue, setPathValue] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [notes, setNotes] = useState("");
  const confirmValues = () =>{console.log(titleValue, pathValue)}
return(
  <div style={{ height: "100%" }}>
    <div className="top" style={{ height: "90%" }}>
      <TextInput label="Timesheet Title" setValue={setTitleValue}/>
      <TextInput label="Facility Name" setValue={setFacilityName} optional/>
      <div style={{ display: "grid", gridTemplateColumns: "94% 6%", width: "500px" }}><TextInput width='450px' label="File Location" setValue={setPathValue}/>

        <div className="flex-center"><IconButton icon={<FolderIcon />} /></div></div>


      <Textarea label='Notes' setNotes={setNotes} optional/>
    </div>
    <div className="bottom flex" style={{ float: "right", height: "10%" }}>
      <Button name="Cancel" onClick={() => props.setOpen(false)} />
      <Button name="Proceed" onClick={() => {confirmValues()}} />
    </div>
  </div>
)
}
export default Home
