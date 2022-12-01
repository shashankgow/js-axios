(() => {
  getAllUser();
})();
function createdata() {
  const firstname = document.getElementById("fn").value;

  const job = document.getElementById("job").value;
  // console.log(firstname.value, lastname.value, mail.value);
  axios
    .post("https://reqres.in/api/users", {
      name: firstname,
      job: job,
    })
    .then((response) => {
      console.log(response.data);
      var card = `<div class="card mt-5" style="width: 18rem">
    <img class="card-img-top" src='https://avatars.dicebear.com/api/male/${response.data.name}.svg' alt="Card image cap" />
    <div class="card-body">
      <p class="card-text">
       ${response.data.name}
       ${response.data.job}        
      </p>
    </div>
  </div>`;
      let row = document.getElementById("arrayid");
      var col = document.createElement("div");
      col.setAttribute("class", "col-4");
      col.innerHTML = card;
      // section.appendChild(newdiv);
      row.prepend(col);
    });
}
function getAllUser() {
  axios.get("https://reqres.in/api/users").then((response) => {
    console.log(response.data);
    response.data.data.forEach((element) => {
      // console.log(element);
      var card = `<div class="card mt-5" style="width: 18rem">
        <img class="card-img-top" src=${element.avatar} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">
           ${element.first_name}
           ${element.last_name}
           ${element.email}        
          </p>
        </div>
      </div>`;
      let section = document.getElementById("arrayid");
      var div = document.createElement("div");
      div.setAttribute("class", "col-4");
      div.innerHTML = card;
      section.appendChild(div);
    });
  });
}
