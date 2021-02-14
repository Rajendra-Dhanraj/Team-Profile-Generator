const generateCards = (teamInfo) => {
  const manager = teamInfo.manager.map(function (emp) {
    let managerHtml = `
      <div class="card" style="width: 18rem;">
      <div class= "bg-primary">
          <h2>${emp.name}</h2>
          <h4>Manager<h4>
          </div>
          <div class="mb-2 p-3">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${emp.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
          <li class="list-group-item">Office Number: ${emp.officeNumber}</li>
          </ul>
          </div>
      </div>
      `;
    return managerHtml;
  });

  const engineer = teamInfo.engineer.map(function (emp) {
    let engineerHtml = `
      <div class="card" style="width: 18rem;">
      <div class= "bg-primary">    
      <h2>${emp.name}</h2>
          <h4>Engineer<h4>
          </div>
          <div class="mb-2 p-3">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${emp.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
          <li class="list-group-item"> Github: <a href="https://github.com/${emp.github}" target="_blank">${emp.github}</a></li>
          </ul>
          </div>
      </div>
      `;
    return engineerHtml;
  });

  const intern = teamInfo.intern.map(function (emp) {
    let internHtml = `
      <div class="card" style="width: 18rem;">
      <div class= "bg-primary">    
      <h2>${emp.name}</h2>  
          <h4>Intern<h4>
          </div>
          <div class="mb-2 p-3">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${emp.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
          <li class="list-group-item"> School: ${emp.school}</li>
          </ul>
          <div>
      </div>
      `;
    return internHtml;
  });
  return [manager, engineer, intern];
};

module.exports = (templateData) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <link rel='stylesheet' href="./style.css">
      <title>My Team</title>
    </head>
    <body>
      <header>
        <h1 class="text-center p-3 mb-2 bg-danger text-white">My Team</h1>
      </header>
  
      <main class="row container-fluid d-flex justify-content-around">
        ${generateCards(templateData)}
      </main>
    </body>
  </html>    
      `;
};


