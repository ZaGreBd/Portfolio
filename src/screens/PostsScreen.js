import React from "react";
import "./PostsScreen.css"

import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

function PostsScreen(){
    return (
        <div className="posts_screen">
            <Header title="Publicações"/>
            <Posts/>
            <Footer/>
        </div>
    )
}

export default PostsScreen