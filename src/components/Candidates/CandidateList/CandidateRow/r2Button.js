import { useNavigate } from 'react-router-dom';

const R2Button = (props) => {
    const navigate = useNavigate();
    const toR2 = () => {
      navigate("/r2",{ state: {level1: props.level1,techno1: props.techno1 }} );
    };
    return (
      <button
        onClick={() => {
          toR2();
        }}
      >
        Editer
      </button>
    );
  };
  
  export default R2Button;
  