import "./list.css"
import ChatList from "./chatlist/ChatList"
import Userinfo from "./userinfo/UserInfo"

const List = () => {
  return( 
    <div className="list">
        <Userinfo/>
        <ChatList/>
    
    
    </div>
    )  
   
}

export default List