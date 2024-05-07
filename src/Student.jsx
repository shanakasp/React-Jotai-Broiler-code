import { useAtom } from "jotai";
import React, { useState } from "react";
import { studentNameAtom } from "./Atom";

const Student = () => {
  const [name, setName] = useState("");
  const [studentName, setStudentName] = useAtom(studentNameAtom);

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(setName);
  };

  const handleSave = () => {
    setStudentName(name);
  };

  return (
    <div>
      <h2>Student</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Student;
