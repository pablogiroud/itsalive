import React from 'react'

function Result({result, resultImg}) {
  console.log(resultImg)
  return (
    <div className="row">
      <div className="col">
        <h1 className="table search-table">Veamo...</h1>
        <hr />
        <h2>{result}</h2>
        <img className="resultImg" src={resultImg} alt="" />
      </div>
    </div>
  )
}

export default Result
