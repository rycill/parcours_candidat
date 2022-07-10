import { useNavigate } from 'react-router-dom';

const R1Button = (props) => {
    const navigate = useNavigate();
    const toR1 = () => {
      navigate("/r1");
    };
    return (
      <button
        onClick={() => {
          toR1();
        }}
      >
        Editer
      </button>
    );
  };
  
  export default R1Button;
  