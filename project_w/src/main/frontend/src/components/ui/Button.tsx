import styled from "./Button.module.css";

interface buttonProps {
  buttontext: string;
  buttonColor: "main" | "second";
  buttonSize?: "s" | "m" | "l";
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent) => void | null;
}

const Button: React.FC<buttonProps> = (props) => {
  return (
    <button
      className={[
        props.buttonColor === "main" ? styled.main : styled.second,
        props.buttonSize === "s"
          ? styled.small
          : props.buttonSize === "m"
          ? styled.medium
          : styled.large,
      ].join(" ")}
      onClick={props.onClick ? props.onClick : undefined}
      onSubmit={props.onSubmit ? props.onSubmit : undefined}
    >
      {props.buttontext}
    </button>
  );
};
export default Button;
