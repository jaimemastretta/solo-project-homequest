const URL = "http://localhost:3001";

function fetchRequest (path, options) {
  return fetch(URL + path, options)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then( res => res.status !== 204 ? res.json() : res)
  .catch(error => {
    return console.log('Error: ', error);
  })
}

async function getTasks() {
  return await fetchRequest('/tasks');
}

async function postTask(body) {
  return await fetchRequest('/tasks', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
}

async function removeTask(id) {
  return await fetchRequest(`/tasks/${id}`, { method: "DELETE" });
}


const ApiService = { getTasks, removeTask, postTask };

export default ApiService;