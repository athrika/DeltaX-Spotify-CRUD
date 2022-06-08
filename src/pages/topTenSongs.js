import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import '../pages/topTenSongs.css'

function TopTenSongs() {

  const [list, setList] = useState([]);

  //helps to display all the results
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setList(response.data)
    });
  }, []);

  return (
    <div className="table">

      <div>
       
        <button className='button'>
            <Link to="/addSong" 
              style={{ textDecoration: 'none', color: 'black', padding: '10px'}}>
                + ADD SONG
            </Link>
        </button>
        <table>
          <thead>
            <tr>
              <th className='tables'>SONG</th>
              <th className='tables'>DATE OF RELEASE</th>
              <th className='tables'>ARTISTS</th>
            </tr>
          </thead>
          <tbody>
            {list.map((val) => {
              return (
                <tr>
                  <td className='tables'>{val.song}</td>
                  <td className='tables'>{val.dateofrelease}</td>
                  <td className='tables'>{val.artists}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TopTenSongs;
