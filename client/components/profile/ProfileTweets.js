import Post from "../Post";
import { TwitterContext } from "../../context/TwitterContext";
import React, { useContext, useState, useEffect } from "react";

const style = {
  wrapper: `no-scrollbar`,
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

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(TwitterContext);
  const [tweets, setTweets] = useState([
    {
      timestamp: "",
      tweet: "",
    },
  ]);
  const [author, setAuthor] = useState({
    name: "",
    profileImage: "",
    walletAddress: "",
    isProfileImageNft: undefined,
  });

  useEffect(() => {
    if (!currentUser) return;

    setTweets(currentUser.tweets);
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    });
  }, [currentUser]);

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            author.name === "Unnamed"
              ? `${author.walletAddress.slice(
                  0,
                  4
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={currentUser.isProfileImageNft}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
