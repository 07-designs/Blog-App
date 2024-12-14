import config from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{ 

    client = new Client()
    account;
    constructor(){
        this.client
        .setProject(config.appwriteProjectId)
         .setEndpoint(config.appwriteUrl)

         this.account=new Account(client);
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
    async login({email,password}){
        try {
            return await account.createEmailPasswordSession({email,password})
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    


}

const authService=new AuthService();
export default AuthService