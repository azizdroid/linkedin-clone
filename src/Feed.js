import React, { useEffect, useState } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import firebase from "firebase";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Posts from "./Posts";
import { db } from "./firebase";
function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, [setPosts]);

  const sendPosts = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "John",
      description: "@IamJohn",
      message: input,
      url: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputoptions">
          <InputOption
            Icon={ImageIcon}
            title="photo"
            color="#70b5f9"
          ></InputOption>
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7fc15e"
          ></InputOption>{" "}
          <InputOption
            Icon={EventNoteIcon}
            title="Event"
            color="#e7a33e"
          ></InputOption>
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#f5987e"
          ></InputOption>
        </div>
      </div>{" "}
      {posts.map(({ id, data: { name, description, message, url } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          url={url}
        />
      ))}{" "}
    </div>
  );
}

export default Feed;
