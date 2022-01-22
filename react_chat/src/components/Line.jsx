import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
            //作成順番
            .orderBy("createdAt")
            //表示数の上限
            .limit(50)
            //dbから取ってくる
            .onSnapshot((snapshot) => {
                //snapshotのdocsをmapを使って一つ一つデータを取り出す
                setMessages(snapshot.docs.map((doc) => doc.data()));
            });
    }, []);
    return (
        <div>
            {console.log(messages)}
            <SignOut />
            <div className='msgs'>
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage/>
        </div>
    );
};

export default Line;
