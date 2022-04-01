import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/logo-happy.png'
import Result from '../components/Result'
import { fetchData } from '../helpers/dataFetch'

const Home = () => {
  const [result, setResult] = useState('')
  const [resultImg, setResultImg] = useState('')

  async function handleSearch(e) {
    if (e.key === 'Enter') {
      const { value } = e.target
      const resp = await fetchData(value)
      if (!resp.results.bindings[0].RIP) {
        if (resp.results.bindings[0].image.value === null && resp.results.bindings[0].image.value === 0){
          setResultImg(require('../assets/logo-death.png'))
        } else {
          setResultImg(resp.results.bindings[0].image.value)
          setResult(`${value} sigue vive`)
        }
      }
      setResultImg(resp.results.bindings[0].image.value)
      setResult(`${value} fallecio el: ${resp.results.bindings[0].RIP.value}`)
      console.log(resp)
    }
  }

  console.log(resultImg)

  return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={10}>
          <div className="card-home border-0 my-4">
            <div className="p-0">
              <Row>
                <div className="img-side-box">
                  <img className="img-logo" src={logo} alt="Fantasmano" />
                </div>
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="mb-4">
                      <b>¿Sigue vivo?</b>
                    </h1>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="inputCommon"
                        onKeyUp={handleSearch}
                      />
                    </div>
                    <div>
                      <Result result={result} resultImg={resultImg} />
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
