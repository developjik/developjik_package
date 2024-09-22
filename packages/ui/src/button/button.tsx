export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // 버튼 내부에 들어갈 콘텐츠
}

function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

export { Button };
