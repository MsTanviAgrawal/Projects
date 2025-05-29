import './App.css';
import UserCard from './components/UserCard';
import Card from './components/Card';
import Counter from './components/Counter';
function App() {
  return (
    <>
    <div>
      <Card title= "User Info:">
        <UserCard name="Tanvi Agrawal" age={21} isOnline={true}/>
        <UserCard name="Yash Kavishwar" age={22} isOnline={false}/>
      </Card>

      <Card title="About the User:">
        <p>Motivated Electrical and Electronics Engineering student with hands-on vocational training experience in Electrical maintenance, Power Transmission and Power 
Generation at Madhikheda Hydel Power Station, MPPTCL, and NPTI. Skilled in Java, Project Management, and MS Office. Strong leadership and teamwork skills, 
demonstrated through event coordination and volunteering. Eager to contribute technical expertise to the organization for optimizing power and electrical operations. </p>
      </Card>

      <Card title= "Skills:">
        <h4>
          <ul>
            <li>Languages: JAVA</li>
            <li>Frontend: HTML, CSS, JavaScript</li>
            <li>Tools: Vs Code, Sublime, MS-Office Suite (Word, Excel, Power Point), Git-Github, Canva</li>
          </ul>
        </h4>
      </Card>

      <Card title="Counter Section:">
        <Counter/>
      </Card>
    </div>
    
      
    </>
  )
}

export default App
