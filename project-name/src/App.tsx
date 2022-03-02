import React from 'react';
import './App.css';


interface Person{
  name:string;
  age: number;
}
function App() {
  function hello(p:Person): void {
    console.log(`안녕하세요 ${p.name} 입니다`)
  }

  const p1:Person ={ 
    name:'Mark',
    age:20
  }
  hello(p1)
  return (
    <div className="App">

    </div>
  );
}

export default App;
