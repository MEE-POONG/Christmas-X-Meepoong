import React, { useState } from "react";

import Fortune from "./Fortune";

export default function Pray() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      {showModal ? (
        <div>
          {/*body*/}

          <Fortune />
        </div>
      ) : null}{" "}
      <button
        className="mt-5 cursor-pointer bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={() => setShowModal(true)}
        type="button"
      >
        เช็คดวงของคุณ
      </button>
    </div>
  );
}
