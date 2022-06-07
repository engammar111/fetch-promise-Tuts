// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//    (data.map((user) => user.name));
//   });

async function returnFetch(url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Ammar",
      }),
    });
    const post = await response.json();
    console.log(post);
  } catch (error) {}
}

returnFetch("https://jsonplaceholder.typicode.com/comments?postId=1");
