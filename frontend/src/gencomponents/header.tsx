import User from './user';
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from 'react';
import logo from "../assets/ScrappyLogo.svg"

export default function Header({ user }: { user: User }) {

    const navigate = useNavigate();

    return (
        <div id="header">
            <div id="navbar">
                <div id="left-nav">
                    <img src={logo} id="logo-nav"></img>

                    <button
                        onClick={async () => {
                            console.log("Friends clicked!")
                            navigate("/friends" + "/" + user.username, { state: user })
                        }}
                        id="headerButton">Friends</button>

                    <button
                        onClick={async () => {
                            console.log("Gallery clicked!")
                            navigate("/gallery" + "/" + user.username, { state: user })
                        }}
                        id="headerButton">Gallery</button>

                    <button
                        onClick={async () => {
                            console.log("Profile clicked!")
                            navigate("/profile:" + "/" + user.username, { state: user })
                        }}
                        id="headerButton">Profile</button>
                </div>

                <div id="prof-in-nav">
                    <img src={user.profilePic} id="profile-pic" referrerPolicy="no-referrer" />
                    <button
                        onClick={async () => {
                            console.log("Profile clicked!")
                            navigate("/")
                        }}>
                        {"Logout " + user.username}
                    </button>
                </div>
            </div>
        </div>
    )
}
