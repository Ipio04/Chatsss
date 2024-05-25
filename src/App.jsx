import { useEffect } from "react"
import Chat from "./componets/chat/Chat"
import Detail from "./componets/detail/Detail"
import List from "./componets/list/List"
import Login from "./componets/login/login"
import Notification from "./componets/notification/notification"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { useChatStore } from "./lib/chatStore"


const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore()
  const {chatId} = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };

  }, [fetchUserInfo]);

  console.log(currentUser);

  if (isLoading) return <div className="loading">Cargando..</div>

  return (
    <div className='container'>
      { currentUser ? (
  <>   
      <List/>
      {chatId && <Chat/>}
      {chatId && <Detail/>}
      </> 
    )  : (<Login/>)}
    <Notification/>
    </div>
  )
}

export default App