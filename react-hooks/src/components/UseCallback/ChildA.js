import {React,memo} from 'react'

const ChildA = (Learning,count) => {
    console.log("Child Component");
  return (
    <></>
  )
}

export default memo(ChildA);