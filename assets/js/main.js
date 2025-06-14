var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productType = document.getElementById("productType");
var productDescription = document.getElementById("productDescription");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

var currentIndex;

var nameError = document.getElementById("nameError");
var priceError = document.getElementById("priceError");
var typeError = document.getElementById("typeError");
var descError = document.getElementById("descError");
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
    currentIndex = i;
}


function updateProduct() {
    productContainer[currentIndex].name = productName.value;
    productContainer[currentIndex].price = productPrice.value;
    productContainer[currentIndex].type = productType.value;
    productContainer[currentIndex].description = productDescription.value;

    displayProducts(productContainer);
    clearForm();

    addBtn.classList.replace("d-none", "d-block");
    updateBtn.classList.replace("d-block", "d-none");
}


  

function validationName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    var text = productName.value;
    var result = regex.test(text); //true or false
    if (result) {
        nameError.classList.add("d-none");
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        return true;
    } else {
        nameError.classList.remove("d-none");
        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");

        return false;
    }
}


function validationPrice() {
    var regex = /^(10000|[1-9][0-9]{3})$/;
    var price = productPrice.value.trim();
    var result = regex.test(price);
    
    
    if (result) {
        priceError.classList.add("d-none");
        productPrice.classList.add("is-valid");
        productPrice.classList.remove("is-invalid");
        priceIcon.classList.remove("d-none");
        return true;
    } else {
        priceError.classList.remove("d-none");
        productPrice.classList.add("is-invalid");
        productPrice.classList.remove("is-valid");
        priceIcon.classList.add("d-none");
        return false;
    }
}

function validationType () {
    var regex = /^(Mobile|Watch|Screen)$/;
    var type = productType.value.trim();
    var result = regex.test(type);
  
    if (result) {
        typeError.classList.add("d-none");
        productType.classList.add("is-valid");
        productType.classList.remove("is-invalid");
        typeIcon.classList.remove("d-none");
        return true;
    } else {
        typeError.classList.remove("d-none");
        productType.classList.add("is-invalid");
        productType.classList.remove("is-valid");
        typeIcon.classList.add("d-none");
        return false;
    }
}



function validateDescription() {
    var regex = /^.{3,500}$/;
    var desc = document.getElementById("productDescription").value.trim();

    var productDescription = document.getElementById("productDescription");


    var result = regex.test(desc);

    if (result) {
        descError.classList.add("d-none");
        productDescription.classList.add("is-valid");
        productDescription.classList.remove("is-invalid");
        descIcon.classList.remove("d-none");
        return true;
    } else {
        descError.classList.remove("d-none");
        productDescription.classList.add("is-invalid");
        productDescription.classList.remove("is-valid");
        descIcon.classList.add("d-none");
        return false;
    }
}
