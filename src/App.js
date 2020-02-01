import React, { useState } from "react";
import "./styles.css";
import * as utils from './utils';



export default function App() {
  const [list, setTodolist] = useState([utils.defaultElement]);
  const [name, setName] = useState('');
  const [priority, setPriority] = useState(0);

  const handleOnAddClick = () => {
    const updatedList = utils.addItem(name, priority, list);
    setTodolist(updatedList);
  }

  const handleOnDeleteClick = (id) => {
    const updatedList = utils.deleteItem(id, list);
    setTodolist(updatedList);
  }

  const handleOnSortClick = (id) => {
    const updatedList = utils.sortDesc(list);
    setTodolist(updatedList);
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <label> Name: </label>
      <input className={!utils.validateName(name) && 'error'} value={name} onChange={e => setName(e.target.value)} />
      <label> Priority: </label>
      <input className={!utils.validatePriority(name) && 'error'}  value={priority} onChange={e => setPriority(e.target.value)} />
      <button className="add" onClick={handleOnAddClick}>Add</button>
      <button className="sort" onClick={handleOnSortClick}>SortList</button>
      <table>
        <thead>
          <tr>
            <td>Priority</td>
            <td>Message</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {list.map(
            el => <tr key={el.id}>
              <td>
                <span className={`prior-${el.priority}`}>
                  {el.priority}
                </span>
              </td>
              <td>
                <span className={`message`}>
                  {el.name}
                </span>
              </td>
              <td>
                {el.id}
              </td>
              <td>
                <button className="delete" onClick={() => handleOnDeleteClick(el.id)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
