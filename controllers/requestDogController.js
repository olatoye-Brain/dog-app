const fetch = require('node-fetch')

module.exports.getDogs =  async(req, res)=>{
    const breeds = []
    try {
        let fetchDogList =  await fetch('https://dog.ceo/api/breeds/list/all')
        let dogList =  await fetchDogList.json()
        console.log(dogList)
        let listedBreeds = []
        
        for (const breed in dogList.message){
            listedBreeds.push(breed)
        }

        let otherDogsBreed = [...listedBreeds]
    
        for (let i = 0; i < 20; i++){
            let dogImage = await fetch(`https://dog.ceo/api/breed/${listedBreeds[i]}/images/random`)
            let result = await dogImage.json()
            breeds.push({breed: listedBreeds[i], image: result.message})
        }
            otherDogsBreed = await otherDogsBreed.filter((breed, index)=>{
                return index > 20
            })
            // console.log(breeds)
            res.render('index', {breeds, otherDogsBreed})
       
    } catch (err) {
        console.log(`Error: ${err}`)
    
    }
}

module.exports.getBreeds = async (req, res)=>{
    try {
        let breedID = req.params.id
        const breed = await fetch(`https://dog.ceo/api/breed/${breedID}/images`)
        let result = await breed.json()
        let dogBreeds = []
        dogBreeds = [...result.message]

        console.log(result.message)
    
        
        if(dogBreeds.length > 20) {
            dogBreeds =  dogBreeds.filter((dog, index)=> index < 20)
        }

        console.log(dogBreeds)
        res.render('breed', {dogBreeds, breedName: breedID})
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

