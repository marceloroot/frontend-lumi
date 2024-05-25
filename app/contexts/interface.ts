import { UserProps } from "../model/user/user-model";


export interface UserContextProps {
  fetchUsers : () => void;
    isLoading: boolean;
    user: UserProps[];
   
  }
  
  export interface UserContextProviderType {
    children: React.ReactNode;
  }
  

  
  export const messageDefaultError = "Ocorreu um erro interno no servidor da API. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico.";