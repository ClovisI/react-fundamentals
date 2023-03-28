// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({style, size, className = '', ...otherProps})=>{
  const sizeClassName = size ? `box--${size}` : ''
  return(
    <div
    className={`box ${className} ${sizeClassName}`}
    style={{fontStyle: 'italic', ...style}}
  {...otherProps}
  />)
}

const smallBox = <Box size="small"style={{backgroundColor: "lightblue", fontStyle:"italic"}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: "pink", fontStyle:"italic"}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: "orange", fontStyle:"italic"}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
