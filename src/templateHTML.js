const generateTeamPage = function (createTeam) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${createTeam}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
  }

const generateManager = function (manager) {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>
    `;
};

const generateEngineer = function (engineer) {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">Office number: <a href="mailto:${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>
    `;
};

const generateIntern = function (intern) {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">Office number: <a href="mailto:${intern.getSchool()}">${intern.getSchool()}</a></li>
    </ul>
</div>
</div>
    `;
};

generateHtml = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerProfile = generateManager(employee);
            console.log(employee);
            pageArray.push(managerProfile);
        }

        if (role === "Engineer") {
            const engineerProfile = generateEngineer(employee);
            console.log(engineerProfile)
            pageArray.push(engineerProfile);
        }

        if (role === "Intern") {
            const internProfile = generateIntern(employee);

            pageArray.push(internProfile);
        }
    }

    const createTeam = pageArray.join('');

    const generateTeamProfile = generateTeamPage(createTeam);
    return generateTeamProfile;
}

  module.exports = generateHtml; 