//Dependancies
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = [];

//First promp to run that will grab manager info(only called once)
inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Enter the managers name"
    },
    {
        type: "number",
        name: "managerID",
        message: "Enter the managers ID"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the managers email address"
    },
    {
        type: "number",
        name: "managerPhone",
        message: "Enter the managers phone number"
    }

]).then(result => {

    let manager = new Manager(result.managerName, result.managerID, result.managerEmail, result.managerPhone);

    console.log(`Manager info:\n Name: ${manager.name}\n ID: ${manager.id}\n Email:  ${manager.email}\n Phone: ${manager.officeNumber}\n Role: ${manager.getRole()}`);
    console.log(`\n-------------------------\n`);
    //adding object to array to store it and access it globally
    team.push(manager);
    //Call the main menu to ask the default questions
    mainMenu();
});


//Default menu to building the team for manager
function mainMenu() {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "-----Main Menu----- \nAdd team member",
        choices: ["Intern", "Engineer", "Finish Team"],
    }]).then(answers => {
        if (answers.menu === "Engineer" || answers.menu === "engineer") {
            console.log(`Answer 1: ${answers.menu} was selected`);
            addEngineer();
        }
        else if (answers.menu === "Intern" || answers.menu === "intern") {
            console.log(`Answer 2: ${answers.menu} was selected`);
            addIntern();
        }
        else if (answers.menu === "Finish Team") {
            console.log(`Answer 3: ${answers.menu} was selected`);
            let html = finishedTeam();
            fs.writeFile("index.html", html, (err) => {
                if (err) console.log("Error:", err);
                console.log("HTML has been generated");
            });
        }
        else {
            console.log(`No options selected`);
        }
    })
};

//Creates intern object
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the intern name"
        },
        {
            type: "number",
            name: "internID",
            message: "Enter the interns ID"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the interns email address"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern school name"
        }

    ]).then(data => {

        let intern = new Intern(data.internName, data.internID, data.internEmail, data.school);
        console.log(intern);
        team.push(intern);
        mainMenu();
    });
};

//Creates engineer object
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the engineer name"
        },
        {
            type: "number",
            name: "engineerID",
            message: "Enter the engineer's ID"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineer's email address"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the github username"
        }

    ]).then(data => {

        let engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.github);
        console.log(engineer);
        team.push(engineer);
        mainMenu();
    });
}

//Creates HTML cards to append to the html document
function finishedTeam() {
    for (var i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {

            team[i].cardText = `
      <div class="card shadow mb-5 m-5 bg-white rounded" style="width: 300px;">
        <div class="card-header bg-primary text-light">
            <div> <p>${team[i].getName()}</p> </div>
            <div><i class="bi bi-cup"></i> <p style="display:inline">${team[i].getRole()}</p> </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item">Office number: ${team[i].getOfficeNumber()}</li>
            </ul>
        </div>`
            console.log(`team member added: ${team[i].getName()}`)
        }
        else if (team[i].getRole() === "Engineer") {
            team[i].cardText = `
      <div class="card shadow mb-5 m-5 bg-white rounded" style="width: 300px;">
        <div class="card-header bg-primary text-light"> 
            <div> <p>${team[i].getName()}</p> </div>
            <div><i class="bi bi-eyeglasses"></i> <p style="display:inline">${team[i].getRole()}</p> </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].getGithub()}" target="_blank">${team[i].getGithub()}</a></li>
            </ul>
        </div>`
            console.log(`Team member added: ${team[i].getName()}`)
        } else if (team[i].getRole() === "Intern") {
            team[i].cardText = `
      <div class="card shadow mb-5 m-5 bg-white rounded" style="width: 300px;">
        <div class="card-header bg-primary text-light"> 
            <div> <p>${team[i].getName()}</p> </div>
            <div> <i class="bi bi-book"></i><p style="display:inline">${team[i].getRole()}</p> </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${team[i].getSchool()}</li>
            </ul>
        </div>`
            console.log(`Team member added: ${team[i].getName()}`)
        }
    }
    //converts objects in the array to string of arrays to another array of string to append to html template literal
    let teamHTML = team.map(htmlCard => htmlCard.cardText);

    let cards = teamHTML.join(" ");

    console.log(teamHTML);

    const html = `
    <!doctype html>
    <html lang="en">

    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"          rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <title>My Team</title>
    </head>

    <body class="container-fluid bg-white p-0">
        <div class= w-100"> 
            <h1 class="text-uppercase text-center bg-danger font-weight-bold text-white pt-3 pb-3">
            My Team</h1>
        </div>
        <div>
            <div class=" d-flex justify-row m-3"> ${cards} </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
        integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG"
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
        integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
        crossorigin="anonymous"></script>
    </body>

</html>`;
    return html;
};


