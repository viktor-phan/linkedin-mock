import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/EventNote";
import CalendarIcon from "@material-ui/icons/CalendarViewDay";
import { InputOption } from "./InputOption";
import { Post } from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { GET_POSTS } from "./queries";
import { useQuery } from "@apollo/client";

interface Props {
  id: string;
  username: string;
  body: string;
} //important

export const Feed = () => {
  const [input, setInput] = useState<string>("");
  const [posts, setPosts] = useState<any>([]); //important
  // useEffect(() => {
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           //important
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, [input]);

  const { loading, error, data } = useQuery(GET_POSTS);
  useEffect(() => {
    if (loading) {
      console.log("Loading");
    }
    if (data) {
      setPosts(data.getPosts);
      console.log(posts);
    }
  }, [data]);
  const sendPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await db.collection("posts").add({
      name: "Vegeta",
      description: "Capsule Corp",
      message: input,
      photoURL: "https://miro.medium.com/max/636/1*Z14pvsjLwMRE0KV2HhU_LA.png",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const photomainURL =
    "https://miro.medium.com/max/636/1*Z14pvsjLwMRE0KV2HhU_LA.png";
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption color="red" title="Photo" Icon={ImageIcon} />
          <InputOption color="blue" title="Video" Icon={SubscriptionsIcon} />
          <InputOption color="green" title="Event" Icon={EventIcon} />
          <InputOption
            color="yellow"
            title="Write article"
            Icon={CalendarIcon}
          />
        </div>
      </div>
      <div className="feed__Posts">
        {posts.map(({ id, username, body }: Props) => {
          return (
            <Post
              key={id}
              name={username}
              description={"Corp"}
              message={body}
              photoURL={photomainURL}
            />
          );
        })}
      </div>
    </div>
  );
};
