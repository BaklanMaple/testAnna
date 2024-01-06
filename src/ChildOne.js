import './App.css';
import React, { useMemo, useState } from 'react';

function ChildOne () {
  
  const [posts, setPosts] = useState([])

  function forTest() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setPosts(json))
        console.log(posts);
  }

  return (
    <div className="App">
       <div>
        <button onClick={forTest}>Кнопка</button>
      </div>
      <div>
        <h1>Таблица данных</h1>
        <div>
          {posts.map((item, index) => 
            index < 10
            ?
            <div >
              
              <div>{index}</div>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>----------------------------------</div>
            </div>
            :
            null
          )}
        </div>
      </div> 
    </div>
  );
}

  export default ChildOne;
