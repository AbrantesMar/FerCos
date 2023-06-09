import axios from 'axios'

class UserViewModel {
    state = {
        data: []
    }

    constructor() {
    }
  
    insertUser(user: any) {
        console.log(user)
    }

    fetchUser(): any {
        axios.get('https://6482945cf2e76ae1b95b5107.mockapi.io/api/v1/user').then(response => {
            this.state = { data: response.data };
            console.log(this.state)
            return this.state
        }).catch(() => {
            console.log('Erro ao chamar serviço');
        }) 
    }
  }
  
  export default UserViewModel;