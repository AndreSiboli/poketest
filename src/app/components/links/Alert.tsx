"use client";

interface PropsType {
  text: string;
}

export default function Alert(props: PropsType) {
  const { text } = props;

  return <h1 onClick={() => alert(text)}>{text}</h1>;
}
