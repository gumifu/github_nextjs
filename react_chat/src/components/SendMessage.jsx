import React, { useState } from 'react';
import { db,auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send"

function SendMessage() {
    const [message, setMessage] = useState("");
    const sendMessage = (e) => {
        //エンターを押したときにリロードされないようにする
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={sendMessage} action="">
                <div className='sendMsg'>
                    <Input
                        style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                        value={message} type="text" placeholder='メッセージを入力してください' onChange={(e) => setMessage(e.target.value)} />
                    <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
                </div>
            </form>
        </div>
    );
}

export default SendMessage;