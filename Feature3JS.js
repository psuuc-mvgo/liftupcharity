var selectedRow = null;

//onSubmit
function onFormSubmit(){
event.preventDefault();

//Read Form Variable
var formData = readFormData();

if(selectedRow === null){
    insertNewRecord(formData);
}

else{
    updateRecord(formData);
}
resetForm();
}


//Read Data
function readFormData(){
    var formData = {};
    formData["Text"] = document.getElementById("Text").value;
    formData["Date"] = document.getElementById("Date").value;
    return formData;
}

//Insert
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Text;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Date;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "<button class='btn btn-warning mt-2 mb-3' onClick='onEdit(this)'>Edit</button> <button class='btn btn-danger mt-2 mb-3' onClick='onDelete(this)'>Delete</button>";


    
}

//EDIT
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Text").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Date").value = selectedRow.cells[1].innerHTML;
    
}

//Update Record
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Text;
    selectedRow.cells[1].innerHTML = formData.Date;
}

//DELETE
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset
function resetForm(){
    document.getElementById("Text").value = "";
    document.getElementById("Date").value = "";
}


//onLogOut
function onLogOut(){
    if(confirm('Are you sure you want to logout?')){
        window.location.href="Login.html";
    }
}