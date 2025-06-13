var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productType = document.getElementById("productType");
var productDescription = document.getElementById("productDescription");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var nameerror = document.getElementById("nameerror");
var productContainer = [];
function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        type: productType.value,
        description: productDescription.value
    };
    productContainer.push(product);
    displayProducts(productContainer);
    clearForm();
}

function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productType.value = "";
    productDescription.value = "";
}
function displayProducts(arr)
{
    var cartona = "";
    for (var i = 0; i < productContainer.length; i++)
    {
        cartona += ` <tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].price}</td>
                    <td>${arr[i].type}</td>
                    <td>${arr[i].description}</td>
                    <td> <button class="btn btn-warning" onclick="updateForm(${i})">Update</button></td>
                    <td> <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
    }
    document.getElementById('table').innerHTML = cartona;
    
}
function deleteProduct(index)
{
    productContainer.splice(index, 1);
    displayProducts(productContainer);
}

function updateForm(i) {
    addBtn.classList.replace("d-block", "d-none");
    updateBtn.classList.replace("d-none", "d-block");
    productName.value = productContainer[i].name;
    productPrice.value = productContainer[i].price;
    productType.value = productContainer[i].type;
    productDescription.value = productContainer[i].description;
}

function validationName() {
    
var regex = /^[A-Z][a-z]{3,8}$/;
var text = productName.value;

}