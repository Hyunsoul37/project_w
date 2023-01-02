import './App.css';

function App() {
  const time = fetch('http://192.168.50.224:8080/api/time').then(res => console.log(res));
  console.log(time);
  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
