# Angular FROST (Alpha)


## Installation

### Clone repo and install dependencies with npm

    git clone git@github.com:zhibek/angular-frost-alpha.git
    cd angular-frost-alpha
    npm install


## Running

### Run local dev server

    cd angular-frost-alpha
    npm start

The latest source files (TypeScript) will be complied into JS and a browser will be opened on the homepage.

Any changes made to the source files while `npm start` is running will result in re-complication and the browser reloading to show the changes.

### Fixing font issues

The fonts used rely on a specific subdomain being viewed.

You can fix this locally by adding an entry in your hosts file:

    127.0.0.1 angular-frost-alpha.comicrelief.com

Then you may view the app at the following URL:
http://angular-frost-alpha.comicrelief.com:3000/