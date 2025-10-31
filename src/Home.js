import React, { useState, useEffect } from 'react';
import './Home.css';
import { Helmet } from 'react-helmet';
import HomeNav from './components/HomeNav';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import SvgLoading from './components/icons/Loading';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const latestPhotos = async () => {
    const res = await fetch(`/api/home/`, {method: 'POST',headers: {'Content-Type': 'application/json',}});
    const newPosts = await res.json();
    if(!newPosts['message']){
      try{
        setPosts(posts => [...posts, ...newPosts]);
      }catch(e){
        console.log(e);
      }
    }else{
      console.log('some error occured');
    }
  };

  const getMorePosts = async () => {
    try{
      const res = await fetch(`/api/get/photos/count/${posts.length}/`, {method: 'POST',headers: {'Content-Type': 'application/json',}});
      const newPosts = await res.json();
      if(!newPosts['message']){
        try{
          setPosts(posts => [...posts, ...newPosts]);
        }catch(e){
          console.log(e);
        }
      }
    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    latestPhotos();
  },[]);

  return (
    <div>
        <Helmet>
          <title>Fagacy</title>
          <meta name='description' content='Photo sharing platform' />
        </Helmet>
        <HomeNav />
        <InfiniteScroll
          dataLength={posts.length}
          next = {getMorePosts}
          hasMore={true}
          loader={<div id="allphotosofgcontainerloading">
                    <div style={{textAlign:'center'}}><SvgLoading /></div>
                  </div>
          }
          endMessage={<div style={{textAlign:'center'}}><h3>Fagacy</h3></div>}
          >
            {posts.map((post) => (
              <div key={post.id} className={`separateclass`}>
                <Link to={`/photograph/${post.id}/`}>
                  <a>
                    <img src={post.photo ? '/posts/gallery/'+post.photo : (post.small ? post.small : post.photo_links)} alt={post.caption ? post.caption : ''} />
                  </a>
                </Link>
              </div>
            ))}
          </InfiniteScroll>
    </div>
  );

}

export default Home;
