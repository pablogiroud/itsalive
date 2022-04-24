import React from 'react'

function Result({ result, resultImg }) {
  return (
    <div className="justify-content-center">
      <div className="text-center">
        <h2>{result}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <img className="resultImg" src={resultImg} alt="" />
      </div>
    </div>
  )
}

export default Result
