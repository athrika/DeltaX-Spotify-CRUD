import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import "./addSong.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function AddSong() {

  const [song, setSong] = useState('');
  const [dateofrelease, setDateofrelease] = useState('');
  const [artists, setArtists] = useState('');

  const [list, setList] = useState([]);

  const navigate = useNavigate();


  //helps to display all the results
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setList(response.data)
    });
  }, [])

  const submitReview  = () => {

    Axios.post("http://localhost:3001/api/insert", {
      song: song, 
      dateofrelease: dateofrelease, 
      artists: artists
    });
    
    setList([
      ...list, 
      {song: song, dateofrelease: dateofrelease, artists: artists}
    ]);

    // do what you want with your form data
    navigate('/topTenSongs');


    
  }

  const getInitialState = () => {
    const value = "Ed Sheeran";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setArtists(e.target.value);
  };

  return (
    <div className="card">
      <div>
        <div className='song'>
        <label>SONG :&nbsp;&nbsp;</label>
        <input type="text" name="song" onChange={(e) => { setSong(e.target.value)}} />
        </div>

        <div className='date'>
        <label>DATE OF RELEASE :&nbsp;&nbsp;</label>
        <input type="date" name="dateofrelease" onChange={(e) => { setDateofrelease(e.target.value) }}/>
        </div>

        <div className='artist'>
        <label>ARTISTS :&nbsp;&nbsp;</label>
            <select value={value} onChange={handleChange}>
                <option value="Ed Sheeran">Ed Sheeran</option>
                <option value="The Weeknd">The Weeknd</option>
                <option value="Tones and I">Tones and I</option>
                <option value="Post Malone">Post Malone</option>
                <option value="Lewis Capaldi">Lewis Capaldi</option>
                <option value="Drake">Drake</option>
                <option value="Post Malone ">Post Malone </option>
                <option value="The Chainsmokers">The Chainsmokers</option>
                <option value="Shawn Mendes">Shawn Mendes</option>
                <option value="Imagine Dragons">Imagine Dragons</option>
            </select>
        </div>
      </div> 
      <div className='submit'>
      <button onClick={submitReview}>SAVE</button>&nbsp;&nbsp;
      <button className='cancel'><Link to='/topTenSongs'
      style={{ textDecoration: 'none', color: 'black', padding: '10px', height:'40px'}}
      >BACK</Link></button>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default AddSong;
