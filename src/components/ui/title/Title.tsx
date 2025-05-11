import { title } from "./title.css";

interface ITitleProps {
  text: string;
}

function Title({ text }: ITitleProps) {
  return <h3 className={title}>{text}</h3>;
}

export default Title;
