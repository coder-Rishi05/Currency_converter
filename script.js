// // const url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_M5juaCdwZd0voerYegLFUM1n9TiqItlfLVTBANXb&base_currency="

// const tableBody = document.querySelector("tbody");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const value = Number(document.querySelector("input[name='quantity']").value);
//   const currency = document.querySelector("select[name='currency']").value;

//   populate(value, currency);
// });

// const populate = async (value, currency) => {
//   let str = "";

//   const data = await fetch(url+currency);
//   const jsonData = await data.json();

//   document.querySelector(".output").style.display="block"

    
//   for (let key of Object.keys(jsonData["data"])) {
//     str += `
//  <tr>
//    <td>${key}</td>
//    <td>${jsonData["data"][key]["code"]}</td>
//    <td>${Math.round(jsonData["data"][key]["value"] * value)}</td>
// </tr>

// `;
//   }

//   tableBody.innerHTML = str;
// };


const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_M5juaCdwZd0voerYegLFUM1n9TiqItlfLVTBANXb&base_currency=";
const tableBody = document.querySelector("tbody");
const btn = document.querySelector(".btn");
const form = document.querySelector("#convertForm");
const historyList = document.querySelector("#historyList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = Number(document.querySelector("#quantity").value);
  const currency = document.querySelector("#currency").value;

  try {
    const res = await fetch(url + currency);
    if (!res.ok) throw new Error("Failed to fetch exchange rates");
    const jsonData = await res.json();
    const data = jsonData.data;

    document.querySelector(".output").style.display = "block";

    const rows = Object.keys(data).map((key) => {
      return `
        <tr>
          <td>${key}</td>
          <td>${data[key].code}</td>
          <td>${Math.round(data[key].value * value)}</td>
        </tr>`;
    }).join("");

    tableBody.innerHTML = rows;

    // Save to localStorage history
    const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
    history.unshift({ value, currency, date: new Date().toLocaleString() });
    localStorage.setItem("conversionHistory", JSON.stringify(history.slice(0, 5)));

    showHistory();

  } catch (err) {
    alert("Error fetching data: " + err.message);
    document.querySelector(".output").style.display = "none";
  }
});

function showHistory() {
  const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
  historyList.innerHTML = history.map(item => `<li>${item.value} ${item.currency} on ${item.date}</li>`).join("");
}

window.addEventListener("load", showHistory);
