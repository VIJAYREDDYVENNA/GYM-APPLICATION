import React,{useEffect} from 'react'

function Payments() {
  useEffect(() => {
    document.title = "FitZone - Payments";
  }, []);
  return (
    <div>Payments</div>
  )
}

export default Payments