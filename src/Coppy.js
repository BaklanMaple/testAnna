const [posts, setPosts] = useState([])

  function forTest() {
    fetch('https://jsonplaceholder.typicode.com/users')
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
          {posts.map((item) =>
            <div >
              <div style={{backgroundColor: "aqua", width: "700px"}}>
                {item.phone[item.phone.length - 1] % 2
                ?
                <div style={{backgroundColor: "red"}} >{item.phone}</div>
                :
                <div style={{backgroundColor: "green"}} >item.phone</div>
                }
                </div>
              <div>{item.company.name}</div>
              <div>----------------------------------</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
