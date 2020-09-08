const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }else {
        throw new Error('Unable to fetch the country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=8697fd99f1a94c')
    if(response.status === 200){
        return response.json()
    }else {
        throw new Error('Unable to fetch the location.') 
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
} 

export { getPuzzle as default }

