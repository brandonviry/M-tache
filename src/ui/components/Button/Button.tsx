import "./Button.css";

const Button = ({
  children,
  onclick,
  style,
  id,
}: {
  children?: React.ReactNode;
  onclick?: () => void;
  style?: React.CSSProperties;
  id?: string;
}) => {
  return (
    <button onClick={onclick} style={style} className="button-18" id={id}>
      {children}
    </button>
  );
};

export default Button;
