import React,{useState} from 'react'
import "./CSS/styles.css"
import {Link,useMatch,useResolvedPath} from 'react-router-dom';

export default function NavigationBar() {

  return (
    <nav className="nav">
      <Link to="/" className="site-title">Tools Master</Link>
      <ul>
        <CustomLink to="/YouTubeDownloader">YouTube </CustomLink>
        <CustomLink to="/InstagramDownloader">Instagram </CustomLink>
        <CustomLink to="/FaceBookDownloader">Facebook </CustomLink>
        <CustomLink to="/TwitterDownloader">Twitter </CustomLink>
        <CustomLink to="/TikTokDownloader">TikTok </CustomLink>
      </ul>
    </nav>

  )
}
function CustomLink({to,children,...props}){
  const resolvedPath=useResolvedPath(to);
  const isActive=useMatch({path:resolvedPath.pathname,end:true});

  return(
    <li className={isActive?"active":""}>
      <Link to={to}{...props} >{children}</Link>
    </li>)
}
