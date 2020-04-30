import React, { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

const ResouceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  // const fetchResource = async (resource) => {
  //   const response = await axios.get(
  //     `http://jsonplaceholder.typicode.com/${resource}`
  //   );

  //   setResources(response.data);
  // };

  // useEffect(() => {
  //   fetchResource(resource);
  // }, [resource]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  });

  return (
    <ul>
      {resources.map((record) => (
        <li key={render.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResouceList;
