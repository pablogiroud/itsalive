import { useState } from 'react'
import { fetchData } from '../helpers/dataFetch'
import dateFormat from 'dateformat'
import Result from './Result'
import logo from '../assets/logo-happy.png'
import { Button } from 'react-bootstrap'

const Search = () => {

    const [result, setResult] = useState('')
    const [resultImg, setResultImg] = useState('')

    async function handleSearch(e) {
        if (e.key === 'Enter') {
            const { value } = e.target
            const resp = await fetchData(value)
            try {
                if (resp.results.bindings[0].RIP === undefined) {
                    if (
                        resp.results.bindings[0].image.value === null ||
                        resp.results.bindings[0].image.value === 0
                    ) {
                        setResultImg(require('../assets/logo-death.png'))
                    } else {
                        setResultImg(resp.results.bindings[0].image.value)
                        setResult(`${value} sigue vive`)
                    }
                } else {
                    let date = resp.results.bindings[0].RIP.value
                    let ripDate = dateFormat(date, 'dd/mm/yyyy')
                    setResultImg(resp.results.bindings[0].image.value)
                    setResult(`${value} falleció el ${ripDate}`)
                }
            } catch (error) {
                setResult(`A la wiki no le suena ese nombre, fijate si esta bien escrito.`)
            }
        }
    }

    const clearResult = () => {
        setResult('')
        window.location.reload(false);
    }

    return (
        <>
            <div className='main'>
                {result
                    ? <Button variant="outline-secondary" className="d-flex justify-content-center m-4" onClick={clearResult}>Nueva busqueda</Button>
                    : <div className="text-center">
                        <img className="img-logo" src={logo} alt="Fantasmano" />
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
                        <div className="m-4">
                            <p>Fijate de escribir bien el nombre</p>
                            <p>la info viene directo de wikipedia.</p>
                        </div>
                    </div>
                }
            </div>
            <Result result={result} resultImg={resultImg} />
        </>
    )
}
export default Search