import React from 'react';
import "./Assets/calendar.module.css";
import { ScheduleComponent, Inject, Agenda, Day, Month, Week, WorkWeek, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';
class Calend extends React.Component 
{
  private localData: EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2019, 0, 11, 6, 30),
      StartTime: new Date(2019, 0, 11, 4, 0)
    }]
  };
  private remoteData = new DataManager({
    url: '', 
    adaptor: new WebApiAdaptor(), 
    crossDomain: true 
  });
 
  
  render() 
  {
    return (
    <div style= {{'marginLeft':'16.7%'}} >  
      <ScheduleComponent currentView='Month'
      eventSettings={{ dataSource: this.remoteData }} selectedDate={new Date(2022, 10, 10)} > 
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> 
    </div>   
      
    );
  }
}
   

export default Calend;