var GeXxJS  = require('./GeXx.js')();
var fs      = require('fs');

function GeneratePayloadInASCII(cb){
  fs.readFile('./IN.dat', function (err, data) {
      if (err) { throw err; }
      console.log("Source code string length: "+data.toString().length);

      var data_to_write = GeXxJS.Text_To_ASCII_Encoded_String( data.toString() );
      console.log("ASCII payload string length: "+data_to_write.length);

      if(typeof cb === "function"){cb(null, data_to_write);}

      /*
      fs.writeFile("./build/ASCII.dat", data_to_write, function(err) {
          if(err) { return console.log(err); }
          console.log("ASCII file was saved!");

          if(typeof cb === "function"){cb(null, data_to_write);}
      });
      */
  });
}

function chunkSubstr(str, size) {
  var numChunks = Math.ceil(str.length / size),
      chunks = new Array(numChunks);
  for(var i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
}

function buildProgram2(chunks){
  var NewCode = '(({})['+GeXxJS.usefullShortcuts['"constructor"']+'])['+GeXxJS.usefullShortcuts['"constructor"']+']('+GeXxJS.TranslateText('setTimeout(function(){py=""},0)')+')()+';

  for(var i=0; i < chunks.length; i++) {
    NewCode    += '(({})['+GeXxJS.usefullShortcuts['"constructor"']+'])['+GeXxJS.usefullShortcuts['"constructor"']+']('+GeXxJS.TranslateText('setTimeout(function(){py+="'+chunks[i]+'"},0)')+')()+';
  }

  NewCode    += '(({})['+GeXxJS.usefullShortcuts['"constructor"']+'])['+GeXxJS.usefullShortcuts['"constructor"']+']('+GeXxJS.TranslateText('setTimeout(function(){(function(t){var a=t.split("a"),x="";for(var i=0;i<a.length;i=i+1){x+=String.fromCharCode(a[i])}eval(x)})(py)},0)')+')()';

  fs.writeFile("./build/program.dat", NewCode, function(err) {
      if(err) { return console.log(err); }
      console.log("Generating program...");
  });
}

function buildProgram(chunks){
  var NewCode = '(({})['+GeXxJS.usefullShortcuts['"constructor"']+'])['+GeXxJS.usefullShortcuts['"constructor"']+']('+GeXxJS.TranslateText('py=""')+')()+';

  for(var i=0; i < chunks.length; i++) {
    NewCode    += '(({})['+GeXxJS.usefullShortcuts['"constructor"']+'])['+GeXxJS.usefullShortcuts['"constructor"']+']('+GeXxJS.TranslateText('py+="'+chunks[i]+'"')+')()+';
  }

  NewCode    += '(({})['+GeXxJS.usefullShortcuts['"constructor"']+'])['+GeXxJS.usefullShortcuts['"constructor"']+']('+GeXxJS.TranslateText('var a=py.split("a"),x="";for(var i=0;i<a.length;i=i+1){x+=String.fromCharCode(a[i])}eval(x)')+')()';

  fs.writeFile("./build/program.dat", NewCode, function(err) {
      if(err) { return console.log(err); }
      console.log("Generating program...");
  });
}

GeneratePayloadInASCII(function(err, data){
  if(err){return;}
  var size = 3750;
  var chunks = chunkSubstr(data, size);
  console.log("Parsing ASCII encoded payload into chunks of "+size+" chars, number of chunks "+chunks.length+" .");
  buildProgram(chunks);
});

/*
fs.writeFile("./build/DEBUG.dat", GeXxJS.TranslateText( 'setTimeout(function(){py=""},0)' ), function(err) {
    if(err) { return console.log(err); }
    console.log("Generating DEBUG FILES...");
});
*/
/*
(({})["constructor"])["constructor"]('setTimeout(function(){py=""},0)')()+
(({})["constructor"])["constructor"]('setTimeout(function(){py+="99a111a110a115a111"},0)')()+
(({})["constructor"])["constructor"]("setTimeout(function(){py+=\"a108a101a46a108a111a103a40a39a72a101a121a32a115a108a97a118a101a110a105a32a106a111a353a32a115a116a101a32a382a105a118a105a33a39a41a59\"},0)")()+
(({})["constructor"])["constructor"]('setTimeout(function(){(function(t){var a=t.split("a"),x="";for(var i=0;i<a.length;i=i+1){x+=String.fromCharCode(a[i])}eval(x)})(py)},0)')()
*/
/*

(({})["constructor"])["constructor"]("payloadHELPER=\"ABCDEFGHIJKLMNOPR\";")()+
(({})["constructor"])["constructor"]("setTimeout(function(){py+=\"console.log('Hello \"},0);")()+
(({})["constructor"])["constructor"]("setTimeout(function(){py+=\"World');\"},0);")()+
(({})["constructor"])["constructor"]("setTimeout(function(){eval(py)},0);")()

*/