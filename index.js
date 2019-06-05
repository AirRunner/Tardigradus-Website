var canAdd;
var countDownDate;
var taskPosition = 0;

window.addEventListener("load", start, true);

function start() {
    block();
    showTasks();
    getTasks();
    initPageButtons();
}

function partial(func /*, 0..n args */) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var allArguments = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(this, allArguments);
  };
}

function add() {
    if(canAdd)
    {
        var firstName = document.getElementById("first_name").value;
        var lastName = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var role = document.getElementById("role").value;

        var line = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var lastNameCell = document.createElement("td");
        var emailCell = document.createElement("td");
        var roleCell = document.createElement("td");

        line.appendChild(firstNameCell);
        line.appendChild(lastNameCell);
        line.appendChild(emailCell);
        line.appendChild(roleCell);

        firstNameCell.textContent = firstName;
        lastNameCell.textContent =lastName;
        emailCell.textContent = email;
        roleCell.textContent = role;

        var table = document.getElementById("usersTable");
        table.appendChild(line);
        block();
    }
    else
    {
        alert("Patience is the key to well-being....");
    }
}
function empty(id) {
    var table = document.getElementById(id);
    var rowCount = table.rows.length;
    while (--rowCount) {
        table.deleteRow(rowCount);
    }
}
function block() {
    canAdd = false;
    countDownDate = new Date().getTime();
    document.getElementById("submit").innerHTML = "Add (10)";
    document.getElementById("submit").style.color = "#A9A9A9";
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = now - countDownDate;
        var secondsLeft = 10 - Math.floor(distance/1000);
        if (secondsLeft > 0)
        {
            document.getElementById("submit").innerHTML = "ADD (" + secondsLeft + ")";
        }
        else
        {
            clearInterval(x);
            document.getElementById("submit").innerHTML = "Add";
            document.getElementById("submit").style.color = "black";
            canAdd = true;
        }
    }, 1000);
}

function showUsers() {
    document.getElementById("users").style.display = "";
    document.getElementById("tasks").style.display = "none";
}

function showTasks() {
    document.getElementById("tasks").style.display = "";
    document.getElementById("users").style.display = "none";
}

function getTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())                                         
        .then(function (data) {
            // The console logs a whole array.
            // The data seems to be an object with methods.
            // each data in the array is composed of a userid, an id, a title and a completed or not statement
            console.log('data', data)
            if(taskPosition >= data.length)
            {
                taskPosition = data.length - 10;
            }
            for (var i = taskPosition, len = data.length; i < len && i < taskPosition+10; i++) {
                createTask(data[i].userId, data[i].id, data[i].title, data[i].completed);
            }
        })
}

function createTask(userId, id, title, completed) {
    var line = document.createElement("tr");
    var userIdCell = document.createElement("td");
    var idCell = document.createElement("td");
    var titleCell = document.createElement("td");
    var completedCell = document.createElement("td");

    line.appendChild(userIdCell);
    line.appendChild(idCell);
    line.appendChild(titleCell);
    line.appendChild(completedCell);

    userIdCell.textContent = userId;
    idCell.textContent =id;
    titleCell.textContent = title;
    completedCell.textContent = completed;

    var table = document.getElementById("tasksTable");
    table.appendChild(line);
}


function changePage(page) {
    if(page === "right")
    {
        taskPosition += 10;
    }
    else if(page === "left")
    {
        taskPosition -= 10;
        if(taskPosition < 0)
        {
            taskPosition = 0;
        }
    }
    else
    {
        taskPosition = page*10;
    }
    empty("tasksTable");
    console.log("WOAW");
    getTasks();
}

function initPageButtons() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(function (data) {
            var nav = document.getElementById("pageNav");
            for (var i = 0, len = data.length/10; i < len; i++) {
                var button = document.createElement("button");
                button.type = "button";
                var func = partial(changePage, i);
                button.addEventListener("click", func);
                button.textContent = i;
                nav.appendChild(button);
            }
        });
}
