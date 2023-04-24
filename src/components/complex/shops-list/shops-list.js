fetch('/shops?offset=10')
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  });
