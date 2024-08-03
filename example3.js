//thread = a process 
//asynchronus request -> non blocking
//synchronus->blocking //unless the 1st thread work is done the next thread won't be executed
//created a file prior to the execution of the code
//fs=file system 

const fs= require("fs");
const filename = 'ex.txt';//make sure the file contain some content
fs.readFile(filename,'utf-8',(err,data)=>{//utf-8 convert the content into human readable format ex - 35 = A;
//this is a asynchronus from 8-12 will be executed seperatly so we are left with 6,7,13 so they will get executed first
    if(err) throw err;//whenever the file cannot be read //cases-ram,no available 
console.log("file data",data);//either we have data as null or err as null
});
console.log("End!!!");

//3 breads 2 sides each side takes 10 sec to be bakes and there is a pan who can take 2 breads capacity 
//how much time will it take?
//30 sec 

// if you made a folder inside another folder
// const path = require("path");
// const fileName = path.join('folder Names',...,'abc.txt');