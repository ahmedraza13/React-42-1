// import {SCHOOL_NAME, STUDENT} from "./utils/constant"
import * as constant from "./utils/constant"
import  {Button}  from "./components/Button"
// import  {Button as MButton}  from "./components/MButton"


function App() {
  // console.log(constant)
  return (
    <div>
      <Button value="Submit" color="red"/>
      <Button value="Click" color="green"/>
      <Button value="SMIT" color="blue"/>

      {/* <MButton value="Click"/> */}
      {/* <h1>{SCHOOL_NAME}</h1>
      <h1>{STUDENT}</h1> */}
    </div>
  )
}

export default App