import React from 'react'


function PropsEx1(props) {
   
    return (
        <>
                  <div>PropsEx1</div>
            <div>this is {props.propVal} - { props.age}</div>
        </>

  )
}

export default PropsEx1