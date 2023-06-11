
import { useDispatch } from 'react-redux';
import { updateText } from '../redux/actions';

const ComponentB = () => {
    const dispatch = useDispatch();

    const handleChange=(e)=>{
      dispatch(updateText(e.target.value));
    }

  return (
    <div>
        <input type="text" onChange={handleChange} placeholder=' Write Here Anything..'/>
    </div>
  )
}

export default ComponentB