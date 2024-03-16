const name="Parthib"
const repoCount=8
console.log(name+" has "+repoCount+" repositories ");

console.log(typeof name);

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName=new String('Krunker')
console.log(gameName);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(6));
console.log(gameName.indexOf('r'));

const Para="Hello Welcome to the world of programming!"

console.log(Para.substring(0,10));
console.log(Para.slice(-29,10));

const url='https://delta.com/my%20info'
console.log(url.replace('%20','_'));

console.log(url.includes('https'));

console.log(Para.split(' '));
console.log(url.split('/'));