import { useState } from "react";
import Form from "../Form/Form"

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [todos, setTodos] = useState([])

  const putTodo = (value, type, date) => {
    if (value) {
      const newItem = {id: Date.now(), text: value, done: false, status: "Не завершено", date: date}
      if (type === "default"){
        newItem.type = "Обычный"
      }
      else {
        newItem.type = "Срочный"
      }
      setTodos([...todos, newItem])
    }
    else {
      alert("Введите текст!")
    }
  }

  const ToggleStatus = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id != id) return todo;
      return {
        ...todo,
        status: "Завершено"
      }
    }))
  }


  return (
    <div className="wrapper">
        <div className="container">
          <h1 className='text-center mb-5'>Список задач: {todos.length}</h1>
          <div className='text-center mb-5' ><Form  putTodo = {putTodo} /></div>
          
          <Container>
            <Row>
              <Col className="text-center"><h2>Список дел</h2></Col>
              <Col className="text-center"><h2>Невыполненные дела со срочным приоритетом</h2></Col>
              <Col className="text-center" ><h2>Выполненные дела</h2></Col>
            </Row>
            <Row>
              <Col>
              <ol className="todos">
            {
              todos.map(todo => {
                return(
                  <li className="" key={todo.id}>
                  <div className="text">{todo.text}</div>
                  <div className="priority">
                  <u>Приоритет:</u> <span className={todo.type === "Обычный" ? "default": "urgent"}>{todo.type}</span>
                  </div>
                  <div className="date">
                  <u>Дедлайн:</u> {todo.date}
                  </div>
                  <div className="status" onClick={() => ToggleStatus(todo.id)}>
                  <u>Статус:</u> <span className={todo.status === "Завершено" ? "done": "undone"}>{todo.status}</span>
                  </div>
                </li>
                  
                )
              })
            }
          </ol>
              </Col>
              <Col>
              <ol className="todos">
            {
              todos.map(todo => {
                if (todo.status === "Не завершено" & todo.type === "Срочный") {
                  return(
                    <li className="" key={todo.id}>
                    <div className="text">{todo.text}</div>
                    <div className="priority">
                    <u>Приоритет:</u> <span className={todo.type === "Обычный" ? "default": "urgent"}>{todo.type}</span>
                    </div>
                    <div className="date">
                    <u>Дедлайн:</u> {todo.date}
                    </div>
                    <div className="status" onClick={() => ToggleStatus(todo.id)}>
                    <u>Статус:</u> <span className={todo.status === "Завершено" ? "done": "undone"}>{todo.status}</span>
                    </div>
                  </li>
                    
                  )       
                }

              })
            }
          </ol>
              </Col>
              <Col>
              <ol className="todos">
            {
              todos.map(todo => {
                if (todo.status === "Завершено") {
                  return(
                    <li className="" key={todo.id}>
                      <div className="text">{todo.text}</div>
                      <div className="priority">
                      <u>Приоритет:</u> <span className={todo.type === "Обычный" ? "default": "urgent"}>{todo.type}</span>
                      </div>
                      <div className="date">
                      <u>Дедлайн:</u> {todo.date}
                      </div>
                      <div className="status" onClick={() => ToggleStatus(todo.id)}>
                      <u>Статус:</u> <span className={todo.status === "Завершено" ? "done": "undone"}>{todo.status}</span>
                      </div>
                    </li>
                    
                  )       
                }

              })
            }
          </ol>
              </Col>
            </Row>
          </Container>
          
        </div>
    </div>
  );
}

export default App;