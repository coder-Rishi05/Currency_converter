// const url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_M5juaCdwZd0voerYegLFUM1n9TiqItlfLVTBANXb&base_currency="

const tableBody = document.querySelector("tbody");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = Number(document.querySelector("input[name='quantity']").value);
  const currency = document.querySelector("select[name='currency']").value;

  populate(value, currency);
});

const populate = async (value, currency) => {
  let str = "";

  const data = await fetch(url+currency);
  const jsonData = await data.json();

  document.querySelector(".output").style.display="block"

    
  for (let key of Object.keys(jsonData["data"])) {
    str += `
 <tr>
   <td>${key}</td>
   <td>${jsonData["data"][key]["code"]}</td>
   <td>${Math.round(jsonData["data"][key]["value"] * value)}</td>
</tr>

`;
  }

  tableBody.innerHTML = str;
};
