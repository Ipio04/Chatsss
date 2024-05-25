import "./detail.css"
import { auth, db } from "../../lib/firebase"
import { useChatStore } from "../../lib/chatStore"
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, updateDoc , doc} from "firebase/firestore";


const Detail = () => {
  const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();
  const {currentUser} = useUserStore();

  const handleBlock = async () =>{
    if(!user) return;

    const userDocRef = doc(db,"users", currentUser.id)
    
    try{
      await updateDoc(userDocRef,{
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock()

    } catch(err){
      console.log(err)
    }
  } 

  return( 
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2> {user?.username} </h2>
        <p> Esta es la cuenta de un pollito</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span> Ajustes del chat</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span> Privacidad y Ayuda</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span> Compartir fotos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zk42vP2KTa-IqsznLRCxRiUJJmuneqQ7MrtQAIA80w&s"  alt="" />
              <span>foto</span>
              </div>
              <img src="./download.png" alt=""  className="icon"/>
            </div>
            
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span> Compartir archivos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>{
        isCurrentUserBlocked ? "Estas Bloqueado!" : isReceiverBlocked ? "Usuario Bloqueado" : "Bloquear Usuario"}
        
        </button>
        <button className="logout"  onClick={() => auth.signOut()}>Salir</button>
      </div>

    </div>
    )  
   
}

export default Detail