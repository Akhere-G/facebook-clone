import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });
  return (
    <div className="Feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
}

/*
   image="https://images.pexels.com/photos/1839836/pexels-photo-1839836.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        title="Steve Rogers"
      />
      <Story
        image="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        title="Emma Smith"
      />
      <Story
        image="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        title="John Hall"
      />
      <Story
        image="https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Stacy Addams"
      />
      <Story
        image="https://images.pexels.com/photos/10922/pexels-photo-10922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        profileSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Maria Santos"

/*
<Post
        profilePic={
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        }
        message={"Amazing!"}
        timestamp={"03/11/2020"}
        username={"Steve Rogers"}
      />
      <Post
        profilePic={
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }
        message={"Amazing!"}
        timestamp={"03/11/2020"}
        username={"Stacy Addams"}
        image={
          "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }
      />
      <Post
        profilePic={
          "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }
        message={"Amazing!"}
        timestamp={"03/11/2020"}
        username={"Bob Smith"}
        image={
          "https://images.pexels.com/photos/10922/pexels-photo-10922.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }
      />


*/
