import React, { useState, useEffect } from "react";

export interface TodoProps {
  id: number;
  startDate?: Date;
  endDate?: Date;
  description: string;
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const [effectClass, setEffectClass] = useState("");

  useEffect(() => {
    setInterval(() => {
      setEffectClass("show");
    }, 50);
  });

  return (
    <li className={effectClass}>
      <span className="todo">{props.description}</span>
      <div className="cross-box">
        <span>X</span>
      </div>
    </li>
  );
};

export default Todo;
