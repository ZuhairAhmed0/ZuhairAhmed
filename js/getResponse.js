async function getResponse(url) {
  const response = await await fetch(`http://localhost:3000/api/${url}`, {
    method: "GET",
  });
//   const response = await fetch(`https://zuhair-api.herokuapp.com/api/${url}`, {
//     method: "GET",
//   });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default getResponse;

function nameInfo(event) {
    event.preventDefault();

  var FirstName = document.getElementById("FirstName");
  var MiddleName = document.getElementById("MiddleName");
  var LastName = document.getElementById("LastName");
  var FullName = document.getElementById("output");
  FullName.innerHTML = `${FirstName.value} ${MiddleName.value} ${LastName.value}.`;
}
