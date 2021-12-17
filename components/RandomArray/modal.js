import React, { useState } from "react";
import Fortune from "./Fortune";
import { motion } from "framer-motion"

export default function Pray() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      {showModal ? (
        <div>
          {/*body*/}
          <motion.div initial={{opacity :0}} animate ={{opacity : 1 ,transition: {duration:1,delay : 0.3}}}>
          <Fortune />
          </motion.div>
        </div>
      ) : null}{" "}
      <button
        className=" button cursor-pointer bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={() => setShowModal(true)}
        type="button"
      >
        เช็คดวงของคุณ
      </button>
    </div>
  );
}
