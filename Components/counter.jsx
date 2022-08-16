import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterAction";

export default function Counter() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Remove</button>
    </>
  );
}
