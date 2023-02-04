var contact = JSON.parse(localStorage.getItem("detail"));
console.log(contact);

document.querySelector("#box").innerText = "";
contact.map((el) => {
  var tr = document.createElement("div");
  var td1 = document.createElement("h3");
  td1.innerText = `Email:${el.email}`;
  td1.style.textAlign = "center";
  td1.setAttribute("class", "mail");
  var tr1 = document.createElement("div");
  tr1.setAttribute("class", "code");
  var td2 = document.createElement("h3");
  td2.innerText = `${el.mobile}`;
  td2.style.textAlign = "center";
  var td3 = document.createElement("h3");
  td3.innerText = `Mobile No:+${el.code.s.dialCode}-`;
  td3.style.textAlign = "center";
  tr1.append(td3, td2);
  tr.append(td1, tr1);
  document.querySelector("#box").append(tr);
});
