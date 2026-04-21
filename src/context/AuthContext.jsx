import { createContext, useContext, useEffect, useState } from "react";
import { supabase, insertUser } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event,session) => {
        if (session === null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertUsers(session?.user.user_metadata, session?.user.id)
          // console.log("event", event);
          // console.log("session", session?.user.user_metadata);
        }
      }
    );

    return () => {
      authListener.subscription;
    };

  }, []);

  const insertUsers = async (dataProvider, idAuthSupabase) => {

    const p = {
      name: dataProvider.name,
      picture: dataProvider.picture,
      id_auth_supabase: idAuthSupabase
    }


    await insertUser(p)

  }

  return (
    <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};