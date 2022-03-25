import React from 'react'

function ResultsList({result}) {
  console.log(result.result)
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

export default ResultsList