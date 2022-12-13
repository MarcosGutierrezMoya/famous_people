import './App.css';
import contacts from "./contacts.json";
import React from "react"


function App() {
  const [contactos, setContatcs] = React.useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]);
  function addNewContact() {
    const rdmNum = Math.floor(Math.random() * ((contacts.length - 1) - 5 + 1)) + 5;
    if (contactos.filter(item => item.id === contacts[rdmNum].id) !== []) {
      console.log(contactos.filter(item => item.id === contacts[rdmNum].id));
      setContatcs([...contactos, contacts[rdmNum]])
    }
  }
  function sortByName() {
    const sortName = contactos.sort(function(contactA,contactB) {
      if(contactA.name < contactB.name){ return -1; }
      if(contactA.name > contactB.name) { return 1; }
      return 0;
    })
    console.log(sortName);
    setContatcs(sortName);
  }
  function sortByPopularity(){
    const sortPopularity = contactos.sort(function(contactA,contactB) {
      if(contactB.popularity < contactA.popularity){ return -1; }
      if(contactB.popularity > contactA.popularity) { return 1; }
      return 0;
    })
    console.log(sortPopularity);
    setContatcs(sortPopularity);
  }
  return (
    <div className="App">
      <div id='buttons'>
        <button className='button' onClick={addNewContact}>Add Random Contact</button>
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
      {contactos.map(item =>
        <ShowContact key={`contact${item.id}`} pos={item} />
      )}
    </div>
  );
}

function ShowContact(props) {
  return (
    <div className='contacts'>
      <img src={props.pos.pictureUrl} alt='' className="img" />
      <p className='text'>{props.pos.name}</p>
      <p className='text'>{props.pos.popularity.toFixed(2)}</p>
      <p className='text'>{props.pos.wonOscar ? <i class="fa fa-light fa-trophy"></i> : ""}</p>
      <p className='text'>{props.pos.wonEmmy ? <i class="fa fa-award"></i> : ""}</p>
    </div>
  )
}

export default App;
