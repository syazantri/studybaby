// components/Button.tsx
interface ButtonProps {
    label: string;
    onClick?: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
      <button 
        className="learn-btn bg-secondary text-white p-2 mt-4 w-36 text-sm rounded"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  Button.defaultProps = {
    onClick: () => {}, // No operation by default
  };
  
  export default Button;
  