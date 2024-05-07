import { useAtom } from "jotai";
import React from "react";
import { studentNameAtom } from "./Atom";

const Class = () => {
  const [studentName] = useAtom(studentNameAtom);

  return (
    <div>
      <h2>Class</h2>
      <p>Student Name: {studentName}</p>
    </div>
  );
};

export default Class;
