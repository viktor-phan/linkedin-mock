import React from "react";
import "./InputOption.css";
interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string;
  Icon?: any;
  color: any;
}
export const InputOption = ({ Icon, title, color }: Props) => {
  return (
    <div className="inputOption">
      <Icon style={{color: color}} />
      <h4>{title}</h4>
    </div>
  );
};
