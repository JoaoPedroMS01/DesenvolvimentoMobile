export const login = () => {
    //api.post('/login', {login: email, password: senha})

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'eyfhfkdsmf.osjnfjkdiosmsdssj29',
                user: {
                    name: 'João Pedro',
                    email: 'joao@gmail.com'
                }
            })
        }, 1000);
    })
}