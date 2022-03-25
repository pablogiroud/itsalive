import React from 'react'

function Result({ result }) {
  return (
    <div className="row">
      <div className="col">
        <h1 className="table search-table">Veamo...</h1>
        <hr />
        <h2>{result}</h2>
      </div>
    </div>
  )
}

export default Result
