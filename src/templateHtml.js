const generateCards = teamInfo => {
 
  const manager = teamInfo.manager.map(function(emp) {
      let managerHtml = `
      <div class="card" style="width: 18rem;">
          <h2>${emp.name}</h2>
          <h4>Manager<h4>
          <p>ID: ${emp.id}</p>
          <p>Email: <a href="mailto:${emp.email}">${emp.email}</a></p>
          <p>Office Number: ${emp.officeNumber}</p>
      </div>
      `
      return managerHtml
  });

  const engineer = teamInfo.engineer.map(function(emp) {
      let engineerHtml = `
      <div class="card" style="width: 18rem;">
          <h2>${emp.name}</h2>
          <h4>Engineer<h4>
          <p>ID: ${emp.id}</p>
          <p>Email: <a href="mailto:${emp.email}">${emp.email}</a></p>
          <p> Github: <a href="https://github.com/${emp.github}" target="_blank">${emp.github}</a></p>
      </div>
      `
      return engineerHtml
  })

  const intern = teamInfo.intern.map(function(emp) {
      let interHtml = `
      <div class="card" style="width: 18rem;">
          <h2>${emp.name}</h2>
          <h4>Intern<h4>
          <p>ID: ${emp.id}</p>
          <p>Email: <a href="mailto:${emp.email}">${emp.email}</a></p>
          <p> School: ${emp.school}</p>
      </div>
      `
      return interHtml
  })
  return [manager,engineer,intern];
}

module.exports = templateData => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <title>My Team</title>
      </head>
      <body>
          <header>
          <h1 class="text-center">My Team</h1>
          </header>
          ${generateCards(templateData)}


      </body>
      </html>    
      `
}


