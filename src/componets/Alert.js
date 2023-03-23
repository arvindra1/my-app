import React from 'react'

function Alert(props) {
  return (
   props.Alert && <div style={{zIndex:-1}} className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.Alert.type} </strong>:{props.Alert.msg} 
</div>
  )
}

export default Alert