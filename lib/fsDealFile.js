const fs =require('fs');
const path = require('path');

class Fs{
  constructor(dir){
    this.dir = dir;
  }

  read(){                         //!{ encoding: 'utf8', flag: "r" } --> for formatting
    return fs.readFileSync(path.resolve(__dirname, `.${this.dir}`), { encoding: 'utf8', flag: "r" });
  }

  write(chunk){
     fs.writeFileSync(path.resolve(__dirname, this.path), JSON.stringify(chunk))
  }
}

module.exports = Fs;