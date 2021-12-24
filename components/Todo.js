import React, { useEffect, useState } from "react";
import Image from "next/image";
function Todo({ todo, ipAddress }) {
  console.log(ipAddress, todo.ip, ipAddress === todo.ip);


  if (ipAddress === todo.ip) {
    return (
      <div className="chat-message right-0">
        <div className="flex items-end justify-end">
          <div
            className={
              "flex flex-col space-y-2 text-xL max-w-xs mx-2 order-1 items-end"
            }
          >
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                {" "}
                {todo.title}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-3"></div>
      </div>
    );
  }
  return (
    <div className="chat-message right-0 ">
      <div className="flex">
        <div className={"flex space-y-2 text-xL max-w-xs mx-2 order-2 w-full "}>
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">
              {" "}
              {todo.title}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="mb-3"></div>
    </div>
  );
}

export default Todo;
