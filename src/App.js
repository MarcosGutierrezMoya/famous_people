import './App.css';
import contacts from "./contacts.json";
import React from "react"


function App() {
  const [contactos, setContatcs] = React.useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]);
  function RandomNumber() {
    const rdnNum = Math.floor(Math.random() * ((contacts.length - 1) - 5 + 1)) + 5;
    const filter = contactos.map(item => item.id === contacts[rdnNum].id);
    addNewContact(rdnNum,filter);
  }
  function addNewContact(num,filter) {
    
    let repeticion = false;
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] === true) {
        repeticion = true;
      }
    }
    if (!repeticion) {
      console.log(contactos.filter(item => item.id === contacts[num].id));
      setContatcs([...contactos, contacts[num]])
    }
    else{
      RandomNumber();
    }
  }
  function sortByName() {
    const sortName = contactos.sort(function (contactA, contactB) {
      if (contactA.name < contactB.name) { return -1; }
      if (contactA.name > contactB.name) { return 1; }
      return 0;
    })
    setContatcs([...sortName]);
  }

  function sortByPopularity() {
    const sortPopularity = contactos.sort(function (contactA, contactB) {
      if (contactB.popularity < contactA.popularity) { return -1; }
      if (contactB.popularity > contactA.popularity) { return 1; }
      return 0;
    })
    // console.log(sortPopularity);
    setContatcs([...sortPopularity]);
  }
  return (
    <div className="App">
      <div id='buttons'>
        <button className='button' onClick={RandomNumber}>Add Random Contact</button>
        <button className='button' onClick={sortByName}>Sort by name</button>
        <button className='button' onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <nav id='nav'>
        <h3>Picture</h3>
        <h3>Name</h3>
        <h3>Popularity</h3>
        <h3>Won Oscar</h3>
        <h3>Won Emmy</h3>
      </nav>
      <ShowContact contactos={contactos} />

    </div>
  );
}

function ShowContact({contactos}) {
  return (
    <>
      {contactos.map((item, i) => {
        return (<div className='contacts'  key={i} >
          <img src={item.pictureUrl} alt='' className="img"/>
          <p className='text'>{item.name}</p>
          <p className='text'>{item.popularity.toFixed(2)}</p>
          <p className='text'>{item.wonOscar ? <i className="fa fa-light fa-trophy"></i> : ""}</p>
          <p className='text'>{item.wonEmmy ? <i className="fa fa-award"></i> : ""}</p>
        </div>)
      }
      )}
    </>


  )
}

export default App;
