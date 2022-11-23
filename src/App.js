// import Apple from './components/apple/Apple'

import Cards from "./components/cards/Cards";

// import Mango from './components/mango/Mango';
function App(){
  return(
    <>
    {/* <Apple/>
      <Mango />
      <Apple />
      <Mango />
      <Apple />
      <Mango />
      <Apple />
    <Mango/> */}
      <Cards  name="Ankit" info="He is completed BCA"/>
      <Cards name="Satyam" info="He is completed B-tech" />
      <Cards name="Avishkar" info="He is completed BCCs" />
      <Cards name="Abhishek" info="He is completed BHMS" />
      <Cards name="Arjun" info="He is completed MBBs" />


    </>
  )
}
export default App;