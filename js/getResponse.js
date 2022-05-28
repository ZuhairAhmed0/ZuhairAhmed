async function getResponse(url) {
  // const response = await await fetch(`http://localhost:3000/api/${url}`, {
  //   method: "GET",
  // });
  // const response = await fetch(`https://zuhair-api.herokuapp.com/api/${url}`, {
  //   method: "GET",
  // });

  const response = await await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default getResponse;

