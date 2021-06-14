import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Jobs.module.css";

const fetchJobs = () => {
  return axios.get(
    `https://api.lever.co/v0/postings/dreamsports?mode=json&team=Technology&team=-Technology`
  );
};

const createDepartments = (openings) => {
  if (!openings) {
    return;
  }
  return openings.reduce((departements, opening) => {
    if (departements[opening.categories.department]) {
      departements[opening.categories.department].push(opening);
    } else {
      departements[opening.categories.department] = [opening];
    }
    return departements;
  }, {});
};

const renderDepartments = (departments) => {
  if (departments) {
    const departmentNames = Object.keys(departments);
    return departmentNames.map((departmentName) => {
      return (
        <div>
          <h3>{departmentName}</h3>
          {departments[departmentName].map((opening) => {
            return (
              <div className={styles.jobContainer}>
                <h3 className={styles.jobTitle}>
                  <a target="_blank" href={opening.applyUrl}>
                    {opening.text}
                  </a>
                </h3>
                <div>
                  {opening.categories.team}, {opening.categories.location}
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  }
};

const Jobs = () => {
  const [filteredPpenings, setFilteredOpenings] = useState(null);
  const [totalOpenings, setTotalOpenings] = useState(null);

  useEffect(() => {
    fetchJobs().then((data) => {
      const departments = createDepartments(data?.data);
      setTotalOpenings(departments);
      setFilteredOpenings(departments);
    });
  }, []);

  const filteOpenings = (e) => {
    const query = e.target.value.trim();
    if (!query) {
      setFilteredOpenings(totalOpenings);
      return;
    }
    const filteredOpenings = {};
    for (var departmentName in totalOpenings) {
      filteredOpenings[departmentName] = totalOpenings[departmentName].filter(
        (opening) => {
          return opening.text.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }
      );
    }
    setFilteredOpenings(filteredOpenings);
  };

  return (
    <div id="jobs" className={styles.jobs}>
      <div className={styles.headerContainer + " row"}>
        <div className="col col--12">
          <h2>Join the Dream Team</h2>
        </div>
        <div className="navbar__items--right col col--12">
          <form>
            <div className="navbar__search">
              <input
                onChange={filteOpenings}
                className={styles.searchContainer + " navbar__search-input"}
                placeholder="Search for openings here"
              />
            </div>
          </form>
        </div>
      </div>
      <div>{renderDepartments(filteredPpenings)}</div>
    </div>
  );
};

export default Jobs;
