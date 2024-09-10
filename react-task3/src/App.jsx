import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [date, setDate] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState("");

  const [addtaskclick, setAddtaskClick] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  function handletaskClick() {
    setAddtaskClick(true);

    if (addtaskclick) {
      setAddtaskClick(false);
    }
  }

  //to push task to toDolist array

  function add() {
    if (todo.length != 0) {
      setTodoList((currentState) => [...currentState, todo]);
      setTodo("");
    } else {
      alert("Type something first");
    }
  }

  //to delete the task
  function handleDelete(index) {
    const updatedList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];

    setTodoList(updatedList);
  }

  //editing tasks
  function handleEdit(index) {
    setEditIndex(index);
  }

  function handleSave(index) {
    const updatedList = [...todoList];
    updatedList[index] = todo;
    setTodoList(updatedList);
    setEditIndex(null);
  }

  console.log(todo);
  console.log("list:", todoList);

  useEffect(() => {
    const today = new Date();
    const formattedDAte = today.toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setDate(formattedDAte);
  }, []);

  return (
    <>
      <div className=" h-60 bg-black text-white grid grid-cols-6 p-12 ">
        {" "}
        <h1 className="text-5xl font-bold col-start-1 col-span-2">
          Welcome to Your Todo App
        </h1>
        <h1 className=" col-start-6 text-4xl font-bold hover:cursor-pointer">
          {date}
        </h1>
      </div>

      <h1 className=" font-bold text-3xl text-center mt-20">Your TODO List</h1>

      <button
        className="bg-black text-white font-bold  ml-16 w-36 hover:text-black hover:bg-gray-500"
        onClick={handletaskClick}
      >
        Add Task{" "}
      </button>
      {addtaskclick ? (
        <div>
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            className=" border-black border-[2px] ml-16 w-72 mt-2 font-semibold"
            placeholder="add task"
          />{" "}
          <button
            className=" bg-green-500 text-white w-20 font-bold hover:bg-green-600"
            onClick={add}
          >
            Add
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="  bg-gray-200 mt-7 ml-16 mr-16">
        {todoList.length == 0 ? (
          <h1 className=" text-center font-semibold text-gray-700 ">
            No task for Today
          </h1>
        ) : (
          <ul className=" p-4">
            {todoList.map((todos, index) => (
              <li
                className="  bg-white font-semibold p-2 grid grid-cols-7 m-4 "
                key={index}
              >
                {editIndex === index ? (
                  <input
                    className=" col-start-1 col-span-4 border-black border-[2px]"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                  />
                ) : (
                  // Otherwise, show text
                  <span className=" col-start-1 col-span-4">{todos}</span>
                )}

                {editIndex === index ? (
                  // show Save button
                  <button
                    className=" col-start-7 bg-green-400 text-white w-20 hover:bg-gray-600"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                ) : (
                  //show Edit button if not editing
                  <button
                    className=" col-start-7 bg-blue-400 text-white w-20 hover:bg-gray-600"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className=" col-start-7 bg-black text-white w-20 hover:bg-gray-600 mt-3"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
