const baseUrl = process.env.API_URL || "https://api-candidate-test.workforce-develop.com/v1"
const initToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjRhODkzNzliYzg2Yzk5Y2QxYWUzOGQiLCJpYXQiOjE2NDkwNTE5NTksImV4cCI6MTY0OTA4Nzk1OX0.LDpd_24kRLmkxrJLJ6D3Gcy0yU-dE7p5t5sBrtkWkxQ"
const fetchData = async (url) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET'
    })
    const data = await res.json()
    return data
}

const getData = async (url) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem("token") ? localStorage.getItem("token") : `Bearer ${initToken}`
        }
    })
    const data = await res.json()
    return data
}

const postData = async (url, body) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${initToken}`
        },
        body: JSON.stringify(body)
    })

    const data = await res.json()
    return data
}

const putData = async (url, body) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token") ? localStorage.getItem("token") : `Bearer ${initToken}`
        },
        body: JSON.stringify(body)
    })

    const data = await res.json()
    return data
}

const deleteData = async (url) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token") ? localStorage.getItem("token") : `Bearer ${initToken}`
        }
    })

    const data = await res.json()
    return data
}

module.exports = {
    fetchData,
    getData,
    postData,
    putData,
    deleteData,
}