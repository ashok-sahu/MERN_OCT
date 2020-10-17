import axios from 'axios'
import {BASE_URI} from './Api'
const BASE_URL = axios.create({
    baseURL:BASE_URI
})

export default BASE_URL