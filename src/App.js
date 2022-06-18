import './App.css';
import './components/Header.css';
import './components/Contact.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';
const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  // const newdata = contacts.map((data, index) => {
  //   return (
  //     <Contact key={index} name={data.name} phone={data.phone} email={data.email} photo={data.photo} />
  //   )
  // });
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Contact data={contacts[0]}></Contact>
        <Contact data={contacts[1]}></Contact>
        <Contact data={contacts[2]}></Contact>
        <Contact data={contacts[3]}></Contact>
        <Contact data={contacts[4]}></Contact>
        <Contact data={contacts[5]}></Contact>
        {/* {newdata} */}
      </div>
    </div>
  );
}

export default App;
