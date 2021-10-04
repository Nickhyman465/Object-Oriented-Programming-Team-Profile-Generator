//This file handles the html creation and file writing
const fs = require("fs");

//This variable handles the main layout of the HTML 
 let htmlMain =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <title>Profile-Generator</title>
    </head>
    <header>
        <section class="hero is-primary block">
            <div class="hero-body">
              <p class="title">
                The Best Company in the World!
              </p>
              <p class="subtitle">
                Check out this amazing team!
              </p>
            </div>
          </section>
    </header>
    <br>
    <body>
        <div class="container is-flex-direction-row block"> 
    `;

//We can this function once the user selects "View my current team" form the prompts
function generateHtml(data) {
    console.log(data);
    let htmlEnding = `</div>
    </body>
    </html>`;
    
//Loops through our list of team members, creates a card for them with all their information 
    for (let i = 0; i < data.length; i++) {
        let htmlCards = `<div class="card block">
        <div class="card-content block">
            <section class="hero is-primary block">
                <div class="hero-body">
                  <p class="title">
                    Name: ${data[i].name}
                  </p>
                  <p class="subtitle">
                    Title: ${data[i].title}
                  </p>
                </div>
            </section>
            <div class="container block">
                <div class="card block">
                    ID: ${data[i].id}
                </div>
                <div class="card block">
                    Email: ${data[i].email}
                </div>`;
            if(data[i].officeNumber) {
            htmlCards += `
            <div class="card block">
                Office Number: ${data[i].officeNumber}
            </div>
            `
            }
            if(data[i].school) {
            htmlCards += `
            <div class="card block">
                School/University: ${data[i].school}
            </div>
            `
            }
            if(data[i].githubUsername) {
            htmlCards += `
            <div class="card block">
                Github: ${data[i].githubUsername}
            </div>
            `
            }
        htmlCards += `
        </div>
        </div>
        </div>
        
        `
        htmlMain += htmlCards;
    }
    htmlMain += htmlEnding;
    
//Once loop is done we write out the index.html file
    fs.writeFile("index.html", htmlMain, (err) =>
         err ? console.error(err) : console.log('HTML CREATED')
         );
}
 

       

module.exports = generateHtml;