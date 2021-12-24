import React, { useEffect, useRef, useState } from "react";
import { Snapshot, snapshot_UNSTABLE } from "recoil";
import firebase from "../firebase";
import Todo from "./Todo";
import macaddress from "macaddress";

function TodoList() {
  const messagesEndRef = useRef(null);
  const [todoList, setTodoList] = useState();
  const [ipAddress, setIpAddress] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
    getIP();
  }, []);
  const getIP = async () => {
    macaddress.all().then(function (all) {
      console.log(JSON.stringify(all, null, 2));
    });
    const data = 5;
    setIpAddress(data);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [todoList]);

  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => (
            <Todo todo={todo} ipAddress={ipAddress} key={index} />
          ))
        : ""}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default TodoList;
