import React from 'react'
const contaierstyle={
    display:"flex",
    alignItems:"center",
    gap:"16px"
}
const starscontainer={
    display:"flex",
    gap:"4px"

}
const textstyle={
    lineHeight:"1",
    margin:"0"
}
export default function StarRating({maxrate =5}) {
  return (
    <div style={contaierstyle}>
        <div style={starscontainer}>
            {Array.from({length:maxrate},(_,i)=>(
                <span>s{i+1}</span>
            ))}
        </div>
        <p style={textstyle}>10</p>
    </div>
  )
}
