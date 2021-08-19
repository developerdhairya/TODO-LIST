const textArea = document.querySelector("#desc-text-area");
const title = document.querySelector("#title-input");
const tableBody = document.querySelector("#task-table-body");

let str = "";

const addItem = function () {
    if (localStorage.getItem("items") == null) {
        if (title.value != "" || textArea.value != "") {
            itemArr = [];
            itemArr.push([title.value, textArea.value]);
            localStorage.setItem("items", JSON.stringify(itemArr));
        } else {
            alert("Please Fill out all the fields");
        }
    } else {
        itemArr = JSON.parse(localStorage.getItem("items"));
        itemArr.push([title.value, textArea.value]);
        localStorage.setItem("items", JSON.stringify(itemArr));
    }

    renderTable();
}

const delItem = function (index) {
    itemArr = JSON.parse(localStorage.getItem("items"));
    itemArr.splice(index,1);
    localStorage.setItem("items",JSON.stringify(itemArr));
    renderTable();
    console.log(index);
}


const renderTable = function () {
    tableBody.innerHTML="";
    if (localStorage.getItem("items") != null) {
        itemArr = JSON.parse(localStorage.getItem("items"));
        str = "";
        itemArr.forEach((element, index) => {
            str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary btn-sm"  onclick="delItem(${index})">Delete</button></td>
        <td></td>

      </tr>`;
        });
        tableBody.innerHTML = str;
    }
}

const clearList=function(){
    localStorage.removeItem("items");
    renderTable();

}

renderTable();