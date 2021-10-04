 const Engineer = require('./lib/engineer.js');
 const Manager = require('./lib/manager.js');
 const Intern = require('./lib/intern.js');

 



function generateHtml(data) {
    return `<!DOCTYPE html>
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
                Team Profile
              </p>
            </div>
          </section>
    </header>
    <body>
        <div class="container is-flex-direction-row block">
            <div class="card block">
                <div class="card-content block">
                    <section class="hero is-primary block">
                        <div class="hero-body">
                          <p class="title">
                            Name:
                          </p>
                          <p class="subtitle">
                            Title:
                          </p>
                        </div>
                    </section>
                    <div class="container block">
                        <div class="card block">
                            ID:
                        </div>
                        <div class="card block">
                            Email:
                        </div>
                        <div class="card block">
                            Employee specific info:
                        </div>
                    </div>
                </div>
            </div>
    
           <div class="card block">
                <div class="card-content block">
                    <section class="hero is-primary block">
                        <div class="hero-body">
                          <p class="title">
                            Name:
                          </p>
                          <p class="subtitle">
                            Title:
                          </p>
                        </div>
                    </section>
                    <div class="container block">
                        <div class="card block">
                            ID:
                        </div>
                        <div class="card block">
                            Email:
                        </div>
                        <div class="card block">
                            Employee specific info:
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card block">
                <div class="card-content block">
                    <section class="hero is-primary block">
                        <div class="hero-body">
                          <p class="title">
                            Name:
                          </p>
                          <p class="subtitle">
                            Title:
                          </p>
                        </div>
                    </section>
                    <div class="container block">
                        <div class="card block">
                            ID:
                        </div>
                        <div class="card block">
                            Email:
                        </div>
                        <div class="card block">
                            Employee specific info:
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = generateHtml;