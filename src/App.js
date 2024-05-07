import React from 'react'
// import Body from './Component/Body'
import toast, { Toaster } from "react-hot-toast";
import Browser from './Component/Browser';
import DetailPage from './Component/DetailPage';
const App = () => {
  return (
    <>
    
      {/* <Toaster /> */}
      <Browser />
      <DetailPage/>
    </>
  );
}

export default App