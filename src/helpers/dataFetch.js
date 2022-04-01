import {nameHandler} from './nameHandler'

var url1 = "https://query.wikidata.org/sparql?query=SELECT%20distinct%20%3Fitem%20%3FitemLabel%20(SAMPLE(%3FRIP)%20as%20%3FRIP)%20(SAMPLE(%3Fimage)as%20%3Fimage)%20WHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ5.%0A%20%20%3Fitem%20%3Flabel%20%22"
var url2 = "%22%40en.%20%20%0A%20%20%3Farticle%20schema%3Aabout%20%3Fitem%20.%0A%20%20%3Farticle%20schema%3AinLanguage%20%22en%22%20.%0A%20%20OPTIONAL%7B%3Fitem%20wdt%3AP570%20%3FRIP%20.%7D%20%20%20%20%20%23%20P570%20%3A%20Date%20of%20death%0A%20%20OPTIONAL%7B%3Fitem%20wdt%3AP18%20%3Fimage%20.%7D%20%20%20%20%20%23%20P18%20%3A%20image%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%7D%20%20%20%20%0A%7D%0AGROUP%20BY%20%3Fitem%20%3FitemLabel"

export const fetchData = async (val) => {
    let nameCap = nameHandler(val)
    if (nameCap.length > 0) {
        const response = await fetch(`${url1}${nameCap}${url2}`, {
            headers : { 'Accept': 'application/sparql-results+json' }
        })
        .catch(err => {
            console.log('caught it!',err)
        })

        if (!response.ok) {
            throw Error(response.statusText)
        }
        return await response.json();
    }
  }