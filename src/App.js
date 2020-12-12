import React, { useState } from "react";
import "./styles.css";

const twitterDB = {
  Entrepreneurs: [
    {
      name: "Elon Musk",
      followers: "40.7M",
      link: "https://twitter.com/elonmusk"
    },
    {
      name: "Naval Ravikant",
      followers: "1M",
      link: "https://twitter.com/naval"
    },
    {
      name: "Kunal Shah",
      followers: "229K",
      link: "https://twitter.com/kunalb11"
    },
    {
      name: "Jack Dorsey",
      followers: "5M",
      link: "https://twitter.com/jack"
    },
    {
      name: "Gaurav Munjal",
      followers: "49K",
      link: "https://twitter.com/gauravmunjal"
    }
  ],
  Writers: [
    {
      name: "David perell",
      followers: "141K",
      link: "https://twitter.com/david_perell"
    },
    {
      name: "Julian Shapiro",
      followers: "37.4K",
      link: "https://twitter.com/julian"
    },
    {
      name: "Greg Isenberg",
      followers: "28.2K",
      link: "https://twitter.com/gregisenberg"
    },
    {
      name: "Shane Parrish",
      followers: "247K",
      link: "https://twitter.com/shaneaparrish"
    }
  ],
  Startups: [
    {
      name: "Mschf",
      followers: "7K",
      link: "https://twitter.com/mschf"
    },
    {
      name: "Levels",
      followers: "9K",
      link: "https://twitter.com/levels"
    },
    {
      name: "Italic",
      followers: "5K",
      link: "https://twitter.com/italic"
    },
    {
      name: "Fast",
      followers: "23K",
      link: "https://twitter.com/fast"
    },
    {
      name: "Superhuman",
      followers: "33K",
      link: "https://twitter.com/superhuman"
    }
  ]
};

var twitterList = Object.keys(twitterDB);

export default function App() {
  const [list, setList] = useState([]);
  function clickEventHandler(item) {
    setList(twitterDB[item]);
  }

  return (
    <div className="App">
      <h1>🐤 Twitter Recommendation</h1>
      <p>
        Check out some of my twitter recommendations. Select a topic to get
        started!!
      </p>
      <div id="listItems">
        {twitterList.map((item, index) => {
          return (
            <span key={index} onClick={() => clickEventHandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
      <hr />
      <div id="secondDiv">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <a target="_blank" href={item.link}>
                    {item.name}
                  </a>
                </div>
                <div>{item.followers} followers</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
