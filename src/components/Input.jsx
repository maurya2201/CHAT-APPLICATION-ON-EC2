import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser?.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now(),
        }),
      });
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data?.chatId + ".lastMessage"]: {
          text,
        },
        [data?.chatId + ".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db, "userChats", data?.user?.uid), {
        [data?.chatId + ".lastMessage"]: {
          text,
        },
        [data?.chatId + ".date"]: serverTimestamp(),
      });
    }
    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        value={text}
        placeholder="Type something ..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <input
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAY1BMVEX///8AAACdnZ1UVFR0dHStra2RkZGampqioqKpqanc3Nzy8vKmpqbExMS9vb0jIyMqKir4+Pjk5OQ5OTnPz89ubm5/f38YGBhpaWlKSkpfX18wMDCFhYW1tbVAQEBFRUUMDAy8fp2yAAAC60lEQVR4nO3b2ZKqMBAGYKIICiqLbI6Ozvs/5WyFgSQN2ehDnen/Vor6JpOkQwhBQKFQKBQKheIzyXGDkmMCEk4ZQ0t2Uhs2eITvbJTtgGtgTNEWaY6NyFMJccY2MHaWECE+IpQQW3zEdgKRdeGC6TIdRF0qB7C3lLUGYlnCd+YR8fKIZhaxWx4REeIPI4oiLf4tooy6S5Y9w4NYqPAQ1aAOhOP5Dw0Rs2HaUcHEQjRMyB4fUYsGxg7YiHfZwBjvFyiIolUhOlwEsGx/PWtgIApgkfZazWEgErWBPfvJM0ZAQA8wWd81MRAHAMGqv4bYrQFRAYYcs0+UyrmKsWt/AQYieFMjIlQE8Gz9Kh4oiOA62RBICFXXbPli0wuiOO1OivXrIHsZUfFffSAioXVVEeeKdmDwgCj6vl9PXlbdhobtaKXrjuCrx/vkdWn82oi4vI9/2rgihv/tacVXOd03dX2XN05dEeMyPd0vwDgiEmFGthvPboj0woTIu4CLIxQzoY3CCXGXDaNJCAOhXqy05pt9Dgho3zkzVtgjSsDA2E3eKE+TKZk1opAGBs9FrGb7x0feyLTXz7aIDjaIdyt+r72ACluEcmDwvA0uLfsXJzeo3FsiwFV8H/7WoPrgDQQo7BDQ0+UgfRkZbU0A1d4KAa3hx23x82cL20SdfDNLRPrUMHx1gfi8kYZQ4wsBPEboRfXi8WiOiKD7WyvMEcpNMJMc3RHQ061BpJewpohUZ2DMRaz2hoji4cEgtYUhwtMb22y84DZDxNBdjRWjYmaEcB4YPHlpidCoGPp5pFYIz2cZrjYIaHPYOryY9XuM84jJpZRVamPEEgdsGkPEMgdsYiOEh4qhzN4Akd6gu7hmp49QbgH6yVkXIb1P9JmKr92nEAufPKs0EOelT55lSV+TYITjklJHMb+FiBhCEIIQhCAEIf4TxCqOTK/i8PgqjtGv4oOCdXxagfuRSQ58ZBKs4nMbCoVCoVAoFJt8Au/oMsocJTHsAAAAAElFTkSuQmCC"
            alt="chat"
          />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
