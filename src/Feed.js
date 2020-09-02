import React,{useState, useEffect} from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import bunny from './assets/bunny.webp';
import back3 from './assets/back3.webp';
import Post from './Post';
import './Feed.css';
import db from './firebase';

function Feed(){
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()} ) ) )
    ))
  },[]);

  return(
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {
        posts.map(post=>(
          <Post
            key={post.key}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))
      }
      <Post
        profilePic={bunny}
        message="how you doing"
        timestamp="timestamp"
        username="Ayobami"
      />
      <Post
        profilePic={bunny}
        message="how you doing"
        timestamp="timestamp"
        username="Ayobami"
        image={back3}
      />
    </div>
  )
}

export default Feed;
