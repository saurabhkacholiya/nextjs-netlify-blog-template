import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./github.module.css";
const repoImg = require("../../../public/repo.png");
const forkImg = require("../../../public/fork.jpg");
const starImg = require("../../../public/star.jpg");

const fetchOpenSourceRepos = () => {
  return axios.get("https://api.github.com/users/dream11/repos");
};
const sortAndFilterRepos = (data) => {
  const repos = data.data;
  return repos
    .sort((repo1, repo2) => {
      return repo2.stargazers_count - repo1.stargazers_count;
    })
    .slice(0, 3);
};

const OpenSourceSection = (props) => {
  const [openSourceRepos, setOpenSourceRepos] = useState(null);

  useEffect(() => {
    fetchOpenSourceRepos().then((data) => {
      const sortedRepos = sortAndFilterRepos(data);
      console.log("what is sorted", JSON.stringify(sortedRepos));
      setOpenSourceRepos(sortedRepos);
    });
  }, []);

  if (!openSourceRepos) {
    return null;
  }

  function Card(repo) {
    return (
      <div className={" col col--4"}>
        <div className={styles.container}>
          <div style={{ display: "flex" }}>
            <img
              style={{ height: 16, width: 16, marginRight: 10, marginTop: 6 }}
              src={repoImg}
            />
            <a href={repo.html_url} target="_blank">
              <span
                style={{ textAlign: "center" }}
                className="repo"
                title="gitlab-cli"
              >
                {repo.name}
              </span>
            </a>
          </div>
          <div>
            <span>{repo.description}</span>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 16,
                width: 16,
                borderRadius: "100%",
                backgroundColor: "black",
                marginRight: 8,
              }}
            />
            <span
              style={{ textAlign: "center", marginTop: 3, marginRight: 10 }}
            >
              {repo.language}
            </span>

            <img
              src={starImg}
              style={{ height: 16, width: 16, marginRight: 8 }}
            />
            <span
              style={{ textAlign: "center", marginTop: 3, marginRight: 10 }}
            >
              {repo.stargazers_count}
            </span>

            {!!repo.forks_count && (
              <>
                <img
                  src={forkImg}
                  style={{ height: 16, width: 16, marginRight: 8 }}
                />
                <span
                  style={{ textAlign: "center", marginTop: 3, marginRight: 10 }}
                >
                  {repo.forks_count}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.openSourceSectionContainer} id="openSource">
      <h2>Open source</h2>
      <p>
        We use open source and contribute to it. Here are some of our popular
        open source contributions.{" "}
      </p>
      <div className="row">{openSourceRepos.map((repo) => Card(repo))}</div>
    </div>
  );
};

export default OpenSourceSection;
