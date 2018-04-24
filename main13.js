console.log(__filename);
function printHello(){
	console.log("hello ,world");
}

var timeout = setTimeout(printHello,0);
//clearTimeout(timeout);
process.on("exit",function(code){
	setTimeout(function(){
		console.log("no run in this line");
	},0);
	console.log("exit code :"+code);
});
console.log("exit ");
process.stdout.write("Hello world! \n");
process.argv.forEach(function(val,index,array){
console.log(index+": "+val+" array:"+array)}

);
console.log(process.execPath);

console.log(process.platform);
console.log(process.memoryUsage());

