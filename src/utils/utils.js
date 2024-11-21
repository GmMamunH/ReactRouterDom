export const loadUserData= ()=>{
    return new Promise((resolve)=>{
        setTimeout(async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            resolve(data);
        }, 300);
    })
}

export const loadPostData = (clientId) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${clientId}`
      );
      const data = await response.json();
      resolve(data);
    }, 300);
  });
};