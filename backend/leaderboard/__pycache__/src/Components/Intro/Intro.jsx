import "./Intro.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const Intro = () => {
  const navigate = useNavigate();
  const backend_url=process.env.REACT_APP_BACKEND;
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);
  // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch user profile data from Google API
        const userInfoResponse = await fetch(
          `https://www.googleapis.com/oauth2/v3/userinfo`,        
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        const userInfo = await userInfoResponse.json();
        // console.log("Google User Info:", userInfo);

        // Save email and name to localStorage
        localStorage.setItem("name", userInfo.name);
        const player_name= userInfo.name;
        const checkResponse = await fetch("https://treeversebackend-production.up.railway.app/api/player/");
        if (!checkResponse.ok) throw new Error("Error fetching player data");
  
        const players = await checkResponse.json();
        const playerExists = players.some(player => player.name === player_name);
        setIsGoogleAuth(true);
        
        if (!playerExists) {
          // https://treeversebackend-production.up.railway.app
          // If the player does not exist, add them
<<<<<<< HEAD:backend/leaderboard/__pycache__/src/Components/Intro/Intro.jsx
          const addPlayerResponse = await fetch("https://treeversebackend-production.up.railway.app/api/player/", {
=======
          await fetch("https://treeversebackend-production.up.railway.app/api/player/", {
>>>>>>> 00d28956342fc85b493d71bdf9400b405bf3e62c:src/Components/Intro/Intro.jsx
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: player_name,
              is_complete: false,
              score : 0,
            }),
          });
          // console.log("New player added!");
        } else {
          // console.log("Player already exists, skipping creation.");
        }
  
        navigate("/adventure");
  
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
    onError: () => {
      // console.log("Google Login Failed");
    },
    
  });

  return (
    <>
      <Navbar />
      <div className="treasure-map">
        {/* Animated background elements */}
        <div className="ocean-waves"></div>
        <div className="ship ship-1"></div>
        <div className="ship ship-2"></div>
        <div className="compass"></div>
        <div className="x-mark x-mark-1"></div>
        <div className="x-mark x-mark-2"></div>
        <div className="x-mark x-mark-3"></div>
        <div className="palm-tree palm-tree-1"></div>
        <div className="palm-tree palm-tree-2"></div>
        <div className="map-route"></div>

        {/* Content container */}
        <div className="content-container">
          <h1 className="main-title">Innoverse-25</h1>
          <h2 className="sub-title">organized by SAE</h2>

          <button className="adventure-button" onClick={login}>
            Start the adventure
            <div className="ripple-effect"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;