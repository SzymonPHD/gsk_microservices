import * as express from 'express'
import * as newsletterServices from '../services/newsletterServices'

export const newsletters = express.Router()


newsletters.get('/', async (req, res) => {
    const newsletters = newsletterServices.getAllNewsletters()
    res.send(newsletters)
})