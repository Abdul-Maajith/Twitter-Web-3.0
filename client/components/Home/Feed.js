import React, { useState, useContext } from "react";
import { BsStars } from "react-icons/bs";
import Post from "../Post";
import TweetBox from "./TweetBox";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

// const tweets = [
//   {
//     displayName: "Maajee",
//     userName: "0xn8978htb837gt4yb10TRC7tgh757786573p97GFT",
//     avatar:
//       "https://yt3.ggpht.com/yti/APfAmoGQplgsM_8fz3gtTkjH3NnKdv7Pe1PNQZsg_w=s88-c-k-c0x00ffffff-no-rj-mo",
//     text: "Hello, I am Maajee",
//     isProfileNft: false,
//     timestamp: "2022-02-14T12:00:00.000Z",
//   },
//   {
//     displayName: "Abdul",
//     userName: "0xn8978htb837gt4yb10TRC7tgh757786573p97GFT",
//     avatar:
//       "https://yt3.ggpht.com/yti/APfAmoGQplgsM_8fz3gtTkjH3NnKdv7Pe1PNQZsg_w=s88-c-k-c0x00ffffff-no-rj-mo",
//     text: "Hello, I am Abdul",
//     isProfileNft: false,
//     timestamp: "2022-02-14T12:00:00.000Z",
//   },
//   {
//     displayName: "Alexa",
//     userName: "0xn8978htb837gt4yb10TRC7tgh757786573p97GFT",
//     avatar:
//       "https://yt3.ggpht.com/yti/APfAmoGQplgsM_8fz3gtTkjH3NnKdv7Pe1PNQZsg_w=s88-c-k-c0x00ffffff-no-rj-mo",
//     text: "Hello, I am Alexa",
//     isProfileNft: true,
//     timestamp: "2022-02-14T12:00:00.000Z",
//   },
// ];

const Feed = () => {
  const { tweets } = useContext(TwitterContext);

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === "Unnamed"
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4
          )}...${tweet.author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
