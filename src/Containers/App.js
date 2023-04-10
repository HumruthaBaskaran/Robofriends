import './App.css';
import CardList from '../Component/CardList';
import Search from '../Component/Search';
import React, {useState , useEffect}from 'react';
import Scroll from '../Component/Scroll';

// class App extends React.Component {
function App(){
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState("")

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  }, [])
  // constructor(){
  //   super()
  //   this.state = {
  //     robots: [],
  //     SearchField: ""
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }
  const onSearch = (event) => {
      setSearchfield(event.target.value)     
  }
  // render(){
      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return  (!robots.length)?
        <h1>Loading</h1>:
      ( <div className="App">
          <h1>ROBOFRIENDS</h1>
          <Search searchChange={onSearch} />
          <Scroll>
            <CardList  robots={filteredRobots} />
          </Scroll>
        </div>
      );
    // }
}

export default App;
