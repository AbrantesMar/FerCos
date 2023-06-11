import axios from 'axios'
import { Alert } from 'react-native';

class UserViewModel {
    state = []
    instance: any
    

    constructor() {
        this.instance = axios.create({
            //baseURL: "http://localhost:3000/api/users",
            baseURL: "https://6482945cf2e76ae1b95b5107.mockapi.io/api/v1/user",
            headers: {
              "Content-Type": "application/json",
            },
        });
    }
  
    async insertUser(user: any) {
        user.insertDate = new Date()
        user.changeDate = new Date()
        console.log(user)
        try {
            user.inset
            const result = this.instance.post("", user);
            if (result.status != 200) {
                this.alert('Error', 'Não conseguimos cadastrar seu usuário');
                return;
            }
            this.state = result.data;
        } catch (err) {
            console.log(err);
            this.alert('Error', 'Não conseguimos cadastrar seu usuário');
        }
    }

    async fetchUser() {
        try {
            const result = await this.instance.get();
            if (result.status != 200) {
                this.alert('Error', 'Usuário não encontrado');
                return;
            }
            this.state = result.data;
        } catch (err) {
            console.log(err);
        }
    }

    changeUser(user: any) {
        try {
            const urlParams = "/" + user.id; 
            user.changeDate = new Date();
            const result = this.instance.put(urlParams, user);
            const resultApi = {
                status: result.status,
                headers: result.headers,
                data: result.data,
              };
          
            if (resultApi.status != 200) {
                this.alert('Error', 'Error tentar alterar usuário');
                return;
            }

        } catch (err) {
            console.log(err);
        }
    }

    deleteUser(email: string, user: any) {
        try {
            const urlParams = "/?email=" + email;
            user.status = "inativo";
            user.changeDate = new Date();
            this.instance.put(urlParams,user);
        } catch (err) {
            console.log(err);
        }
    }

    deleteAllUser(users: any) {
        try {
            users.map((user) => { 
                user.status = "inativo",
                user.changeDate = new Date()
            });
            console.log(users);
            this.instance.put(users);
            this.instance.delete();
        } catch (err) {
            console.log(err);
        }
    }

    alert(title: string, info: string) {
        console.log("antes do alerta: " + title + " - " + info);
        Alert.alert(title, info, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }
  }
  
  export default UserViewModel;