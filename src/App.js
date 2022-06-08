import './App.css';
import { Link } from "react-router-dom";
import React from 'react'

const App = () => {
    return(
      <>
        <div className='App'>
          <nav>
            <h1>
              Welcome to Spotified Music !
            </h1>
          </nav>
        </div>
        <div className='homelinks'>
          <button className='button'>
            <Link to="/topTenSongs" 
              style={{ textDecoration: 'none', color: 'black', padding: '10px'}}>
                TOP 10 SONGS</Link>
          </button>
        </div>
      </>
    )
}

export default App;


































































// import './App.css';
// import {useState, useEffect} from 'react';
// import Axios from 'axios';

// function App() {

//   const [song, setSong] = useState('');
//   const [dateofrelease, setDateofrelease] = useState('');
//   const [artists, setArtists] = useState('');

//   const [list, setList] = useState([]);

//   //helps to display all the results
//   useEffect(() => {
//     Axios.get('http://localhost:3001/api/get').then((response) => {
//       setList(response.data)
//     });
//   }, [])

//   const submitReview  = () => {
//     Axios.post("http://localhost:3001/api/insert", {
//       song: song, 
//       dateofrelease: dateofrelease, 
//       artists: artists
//     })
//     setList([
//       ...list, 
//       {song: song, dateofrelease: dateofrelease, artists: artists}
//     ]);
//   }

//   return (
//     <div className="App">

//       <div className='form'>
//         <label>SONG</label>
//         <input type="text" name="song" onChange={(e) => { setSong(e.target.value) }} />
//         <label>DATE OF RELEASE</label>
//         <input type="date" name="dateofrelease" onChange={(e) => { setDateofrelease(e.target.value) }}/>
//         <label>ARTISTS</label>
//         <input type="text" name="artists" onChange={(e) => { setArtists(e.target.value) }}/>
//       </div> 

//       <button onClick={submitReview}>SUBMIT</button>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th className='tables'>SONG</th>
//               <th className='tables'>DATE OF RELEASE</th>
//               <th className='tables'>ARTISTS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list.map((val) => {
//               return (
//                 <tr>
//                   <td className='tables'>{val.song}</td>
//                   <td className='tables'>{val.dateofrelease}</td>
//                   <td className='tables'>{val.artists}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         {/* <Link to='/addSongs'>Add Song</Link> */}
//       </div>

//     </div>
//   );
// }

// export default App;
