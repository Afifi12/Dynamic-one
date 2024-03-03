let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productDescription = document.getElementById("productDescription");
let addBtn = document.getElementById("addBtn");
let allProducts = [];
if (window.localStorage.getItem("products") !== null) {
allProducts = JSON.parse(window.localStorage.getItem("products"));
loopData();}
addBtn.addEventListener("click", function () {
if (
    productName.value !== "" &&
    productPrice.value !== "" &&
    productCategory.value !== "" &&
    productDescription.value !== ""){
    let productData = {
    pname: productName.value,
    pprice: parseInt(productPrice.value),
    pcat: productCategory.value,
    pdesc: productDescription.value,};
    allProducts.push(productData);
    window.localStorage.setItem("products", JSON.stringify(allProducts));
    loopData();
    clearData();} else {
    alert("Wrong Data");
}});
function loopData() {
let tableData = ``;
let id = 0;
for (let i = 0; i < allProducts.length; i++) {
    tableData += `
    <tr>
    <td>${++id}</td>
    <td>${allProducts[i].pname}</td>
    <td>${allProducts[i].pprice}</td>
    <td>${allProducts[i].pcat}</td>
    <td>${allProducts[i].pdesc}</td>
    <td><button class="deleteBtn" onclick="deleteProduct(${i})">Delete</button></td>
    <td><button class="updateBtn" onclick="updateProduct(${i})">Update</button></td>
    </tr>
    `;}
document.getElementById("info").innerHTML = tableData;}
function deleteProduct(ok) {
allProducts.splice(ok, 1);
window.localStorage.setItem("products", JSON.stringify(allProducts));
loopData();}
let updateBtn = document.getElementById("updateBtn");
let productIndex = 0;
function updateProduct(k) {
productIndex = k;
productName.value = allProducts[k].pname;
productPrice.value = allProducts[k].pprice;
productCategory.value = allProducts[k].pcat;
productDescription.value = allProducts[k].pdesc;
updateBtn.classList.toggle("hide");
addBtn.classList.toggle("hide");}
updateBtn.addEventListener("click", function () {
allProducts[productIndex].pname = productName.value;
allProducts[productIndex].pprice = productPrice.value;
allProducts[productIndex].pcat = productCategory.value;
allProducts[productIndex].pdesc = productDescription.value;
updateBtn.classList.toggle("hide");
addBtn.classList.toggle("hide");
window.localStorage.setItem("products", JSON.stringify(allProducts));
loopData();
clearData();});
function clearData() {
productName.value = "";
productPrice.value = "";
productDescription.value = "";
productCategory.value = "";}