import { useSelector } from "react-redux"

export const Exercise = () => {
  const testValue = useSelector((state) => {
    console.log(state, 'state w useSelector');
    return state.test.value
  })
  return <div>To jest wartość ze store {testValue}</div>
}