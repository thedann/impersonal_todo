import React, { useState, useEffect } from "react";

export interface ITodoProps {
  id: number;
  isChecked: boolean;
  description: string;
  onDelete: (id: number) => void;
}

const Todo: React.FC<ITodoProps> = (props: ITodoProps) => {
  const [effectClass, setEffectClass] = useState("");

  useEffect(() => {
    setInterval(() => {
      setEffectClass("show");
    }, 50);
  });

  return (
    <li className={effectClass}>
      <span className="todo">{props.description}</span>
      <div className="cross-box" onClick={() => props.onDelete(props.id)}>
        <span>X</span>
      </div>
    </li>
  );
};

export default Todo;
