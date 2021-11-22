const { Router } = require("express")
const requestDogController = require("../controllers/requestDogController")

const router = Router()

router.get('/', requestDogController.getDogs)
router.get('/breed/:id', requestDogController.getBreeds)

module.exports = router