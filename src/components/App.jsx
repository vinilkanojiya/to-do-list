import React, {useState} from "react";

function App(){
    const [item, setitem] = useState();
    const [itemlist, setitemlist] = useState([]);
  
    function handleChange(event) {
      var value = event.target.value;
      setitem(value);
    }
    function handleClick() {
      setitemlist((preitems) => {
        return [item, ...preitems];
      });
      setitem("");

    }
    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input id="item" type="text" onChange={handleChange} value={item} />
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {itemlist.map((items) => (
              <li>{items}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


export default App;