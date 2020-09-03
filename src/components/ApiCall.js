import React, { useState, useEffect } from "react";

const ApiCall = () => {
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCall = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await resp.json();
      setTodo(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Api call</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <p>
            Title-{todo.title} + Body-{todo.body}
          </p>
          <button onClick={makeApiCall} data-testid="my-btn">
            Get Todo
          </button>
        </>
      )}
    </div>
  );
};

export default ApiCall;
