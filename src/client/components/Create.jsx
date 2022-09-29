import React, { useState } from 'react';
// Do we need to import Home here? 
// Do we need to import Link here? 

const CreatePage = (props) => {
  // create a click handler to submit form to backend - account for async
  const handleCreateMedSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const medForm = {
      title: event.target[0].value,
      prescription: event.target[1].value,
      description: event.target[2].value,
      startdate: event.target[3].value
    };
    console.log(medForm);
  }
  // description, frequency, taketime, startdate, quantity, title, prescription
//     // prevent reloading of page when form is submitted
//     event.preventDefault();
//     // add input from form 
// //     const title = event.target[0].value;
// //     const medName = event.target[1].value;
// //     const medDesc = event.target[2].value;
// //     const start = event.target[3].value;
// //     const frequency = event.target[4].value;
// //     const administrationTime = event.target[5].value;
// //     const doses = event.target[6].value;
// //     const updateCalendar = event.target[7].value;
    
//     // take input information and create an object to send to backend
//     const formData = { title, medName, medDesc, start, frequency, administrationTime, doses, updateCalendar };
//     console.log(formData);
    
//     const url = '/homepage'; 
    
//     const sendFormData = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData),
//     });
//     // await response and parse information into json
//     const response = await sendFormData.json();
//     // save this to props? Save this to store? 
//     // once submitted redirect back to /home
//   } 

  return (
    <div>
      <h1>Fill out the form to add a new medication</h1>
      <form className="medicationForm" onSubmit={handleCreateMedSubmit} >
        <div className="newInput">
          What is the title for your medication event?
            <label className="newInputLabel">
              <input className="newInputBox" name="title">
            </input>
          </label>
        </div>
        <div className="newInput">
          What is the name of your medication?
          <label className="newInputLabel">
            <input className="newInputBox" >
            </input>
          </label>
        </div>
        <div className="newInput">
          Please enter your prescription information.
            <label className="newInputLabel">
              <input className="newInputBox">
              </input>
            </label>
          </div>

        <div className="newInput">
          When did you start taking this medication?
          <label className="newInputLabel">
            <input className="newInputBox" placeholder="dd/mm/yyyy"></input>
          </label>
        </div>
        <div className="newInput">
          How often do you take this medication?
          <label className="newDropdownContainer">
            <select className="newDropdownMenu">
              <option disabled selected>Select the days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </label>
        </div>
        <div className="newInput">
          What time do you take your medication?
            <label className="newDropdownContainer">
              <select className="newDropdownMenu">
                <option disabled selected>Select your time</option>
                <option value="00:00">00:00</option>
                <option value="00:15">00:15</option>
                <option value="00:30">00:30</option>
                <option value="00:45">00:45</option>
                <option value="01:00">01:00</option>
                <option value="01:15">01:15</option>
                <option value="01:30">01:30</option>
                <option value="01:45">01:45</option>
                <option value="02:00">02:00</option>
                <option value="02:15">02:15</option>
                <option value="02:30">02:30</option>
                <option value="02:45">02:45</option>
                <option value="03:00">03:00</option>
                <option value="03:15">03:15</option>
                <option value="03:30">03:30</option>
                <option value="03:45">03:45</option>
                <option value="04:00">04:00</option>
                <option value="04:15">04:15</option>
                <option value="04:30">04:30</option>
                <option value="04:45">04:45</option>
                <option value="05:00">05:00</option>
                <option value="05:15">05:15</option>
                <option value="05:30">05:30</option>
                <option value="05:45">05:45</option>
                <option value="06:00">06:00</option>
                <option value="06:15">06:15</option>
                <option value="06:30">06:30</option>
                <option value="06:45">06:45</option>
                <option value="07:00">07:00</option>
                <option value="07:15">07:15</option>
                <option value="07:30">07:30</option>
                <option value="07:45">07:45</option>
                <option value="08:00">08:00</option>
                <option value="08:15">08:15</option>
                <option value="08:30">08:30</option>
                <option value="08:45">08:45</option>
                <option value="09:00">09:00</option>
                <option value="09:15">09:15</option>
                <option value="09:30">09:30</option>
                <option value="09:45">09:45</option>
                <option value="10:00">10:00</option>
                <option value="10:15">10:15</option>
                <option value="10:30">10:30</option>
                <option value="10:45">10:45</option>
                <option value="11:00">11:00</option>
                <option value="11:15">11:15</option>
                <option value="11:30">11:30</option>
                <option value="11:45">11:45</option>
                <option value="12:00">12:00</option>
                <option value="12:15">12:15</option>
                <option value="12:30">12:30</option>
                <option value="12:45">12:45</option>
                <option value="13:00">13:00</option>
                <option value="13:15">13:15</option>
                <option value="13:30">13:30</option>
                <option value="13:45">13:45</option>
                <option value="14:00">14:00</option>
                <option value="14:15">14:15</option>
                <option value="14:30">14:30</option>
                <option value="14:45">14:45</option>
                <option value="15:00">15:00</option>
                <option value="15:15">15:15</option>
                <option value="15:30">15:30</option>
                <option value="15:45">15:45</option>
                <option value="16:00">16:00</option>
                <option value="16:15">16:15</option>
                <option value="16:30">16:30</option>
                <option value="16:45">16:45</option>
                <option value="17:00">17:00</option>
                <option value="17:15">17:15</option>
                <option value="17:30">17:30</option>
                <option value="17:45">17:45</option>
                <option value="18:00">18:00</option>
                <option value="18:15">18:15</option>
                <option value="18:30">18:30</option>
                <option value="18:45">18:45</option>
                <option value="19:00">19:00</option>
                <option value="19:15">19:15</option>
                <option value="19:30">19:30</option>
                <option value="19:45">19:45</option>
                <option value="20:00">20:00</option>
                <option value="20:15">20:15</option>
                <option value="20:30">20:30</option>
                <option value="20:45">20:45</option>
                <option value="21:00">21:00</option>
                <option value="21:15">21:15</option>
                <option value="21:30">21:30</option>
                <option value="21:45">21:45</option>
                <option value="22:00">22:00</option>
                <option value="22:15">22:15</option>
                <option value="22:30">22:30</option>
                <option value="22:45">22:45</option>
                <option value="23:00">23:00</option>
                <option value="23:15">23:15</option>
                <option value="23:30">23:30</option>
                <option value="23:45">23:45</option>
              </select>
            </label>
          </div>
          <div className="newInput">
          How much medication do you have?
            <label className="newInputLabel">
              <input className="newInputBox" placeholder="Please insert number"></input>
            </label>
          </div>
          <button className="createNewMedication" type="submit" value="submit" >Submit</button>
      </form>
    </div>
  )
}

export default CreatePage;