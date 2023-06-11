
import { useSelector } from 'react-redux';

const ComponentC = () => {
    const text = useSelector((state) => state.textManager.text);
    
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default ComponentC