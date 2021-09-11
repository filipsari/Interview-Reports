const candidatesEndPoint = "http://localhost:3333/api/candidates";

export const getCandidates = () => {
  const token= localStorage.getItem('accessToken');
  return fetch(candidatesEndPoint, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then( (results) => results.json())
  .then( (candidates) => {
    console.log(candidates);
    return candidates.results
  })
} 


