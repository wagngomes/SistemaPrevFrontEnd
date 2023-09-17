import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const createSession = async (dados) => {

    try{

        return api.post('/auth/login', dados)

    }catch(error){

        createSession()
        .then()
        .catch((response) =>{

            return (error.message)
            alert(error.message)


        })


    }

    

}