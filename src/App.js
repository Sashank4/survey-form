import './App.css';
import {useState} from 'react';
import CountriesData from './countriesData'; 
function App() {
  const[data,setData] = useState({firstName: '', lastName:'',email:'', date:'',number:'',gender: '',country:''});
  
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]:value});   
  }

  const closePopup = () => {
    setPopupVisible(false);
    handleReset();
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (data.firstName && data.lastName && data.date && data.country && data.gender && data.email && data.number) {
      setPopupVisible(true);
      
      console.log(data);
    
    } else {
      alert('Please fill in all required fields.');
    }
  }

  const handleReset = () =>{
   
    setData({firstName:'', lastName:'',email:'', date:'',number:'',gender: '',country:''});
  }

  return (isPopupVisible)?(
    <div className="popup">
          <div className="popup-content">
            <h2>Check your details once again</h2>
            <p><span>First Name</span>: {data.firstName}</p>
            <p><span>Last Name</span>: {data.lastName}</p>
            <p><span>Date of Birth</span>: {data.date}</p>
            <p><span>Country</span>: {data.country}</p>
            <p><span>Gender</span>: {data.gender}</p>
            <p><span>Email</span>: {data.email}</p>
            <p><span>Mobile Number</span>: {data.number}</p>
            <button onClick={() => { closePopup(); }}>Close</button>
          </div>
        </div>
      
  ):(
    <div className="App"> 
    <section className="description">
    <div className="description-title">We want<br/>to know more<br/>about you</div>
    <div className="description-text"><p>We swear we are not selling<br/>your data, pinky promise!</p></div>
</section>
<section className="survey">
    <div className="survey-container">
        <form onSubmit={handleSubmit}>
            <fieldset className="first">
              <label htmlFor="firstName">first name <input id="firstName" name="firstName" type="text" placeholder=" Enter your first name" onChange={handleChange} value={data.name} required /></label>
              <label htmlFor="lastName">last name <input id="lastName" name="lastName" type="text" placeholder=" Enter your last name" onChange={handleChange} value={data.name} required /></label>
              <label htmlFor="email">email <input id="email" name="email" type="email" placeholder=" We would love to write back" onChange={handleChange} value={data.name} required /></label>
              <label htmlFor="number">mobile number <input id="number" name="number" type="tel" placeholder=" Great to know your number" onChange={handleChange} value={data.name} required /></label>
              <label htmlFor="date">date of birth <input id="age" type="date" name="date" onChange={handleChange} value={data.name}  placeholder="Date of birth" /></label>
            </fieldset>

            <fieldset className="second">
              <p>We would like to know your gender</p>
              <label htmlFor="male"><input id="male"  type="radio" name="gender"  className="inline" onChange={handleChange} value='Male'/> Male</label>
              <label htmlFor="female"><input id="female"  type="radio" name="gender"  className="inline" onChange={handleChange} value='Female'/> Female</label>
              <label htmlFor="notMention"><input id="notMention"  type="radio" name="gender"  className="inline" onChange={handleChange} value='Prefer not to say'/> Prefer not to say</label>
            </fieldset>

            <fieldset className="third">
              <label htmlFor="country">Which country do you belong to
                <select id="country" name="country" onChange={handleChange} value={data.name}>
                <option value="" disabled selected>Select country</option>
                {CountriesData.map((option) => (
                  <option key={option.code} value={option.name}>
                    {option.name}
                  </option>
                ))}
                
                </select>
              </label>
              
            </fieldset>
            <button type="submit" value="Submit" onSubmit={handleSubmit}>Submit</button>
            <button type='reset' value='Reset' onClick={handleReset}>Reset</button>
          </form>
          
    </div>
</section>   


</div>
      

  
  );
}

export default App;
