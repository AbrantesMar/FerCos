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
        console.log(user)
        try {
            const result = this.instance.post("", user);
            this.state = result.data;
        } catch (err) {
            console.log(err);
        }
    }

    async fetchUser() {
        try {
            const result = await this.instance.get();
            if (result.status != 200) {
                Alert.alert('Error', 'Error tentar alterar usuário', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
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
            const result = this.instance.put(urlParams, user);
            const resultApi = {
                status: result.status,
                headers: result.headers,
                data: result.data,
              };
          
            if (resultApi.status != 200) {
                Alert.alert('Error', 'Error tentar alterar usuário', [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
                return;
            }

        } catch (err) {
            console.log(err);
        }
    }

    deleteUser(id: string) {
        try {
            const urlParams = "/" + id;
            this.instance.delete(urlParams);
        } catch (err) {
            console.log(err);
        }
    }
  }
  
  export default UserViewModel;