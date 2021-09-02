
var expedientes = [];

function search(){
    var raw = document.getElementById("input").value;
    document.getElementById('res').value='';
   // let replaced=raw.replace(/\n\t\n{2}/g,' ')
  let replaced=raw.replace(/\n/g,'^');
    replaced=replaced.replace(/[A-Z].  /g,'#')
   //replaced=replaced.replace(/ /g,'_')ç
   //replaced=replaced.replace(/\t/g,'?')
    //console.log(replaced);

    let splitted=replaced.split('#');
    console.log(splitted);
  
   
    for (let line of splitted) {

        for(var x=0; x<=expedientes.length;x++){

            if(line.includes(expedientes[x])) document.getElementById('res').value=document.getElementById('res').value+"\n"+line;

        }
           
        
      //console.log(line+'\n'+'-----------------');
    }
    res.innerHTML= "";
}

function download(){

   /* var url = 'http://www.pjbc.gob.mx/boletinj/2021/my_html/bc210826.htm'; // set your page url here
    with (new ActiveXObject("Microsoft.XmlHttp")) {
        open('GET', url, false);
        send('');
        var data = responseText;
        with (new ActiveXObject("ADODB.Stream")) {
            Open();
            Type = 2; // adTypeText
            Charset = 'utf-8'; // specify correct encoding
            WriteText(data);
            SaveToFile("page.txt", 2);
            Close();
        }
    }*/

    document.getElementById('expediente')
.innerHTML='Hola';
}

function save(){

    expedientes.push(document.getElementById("expediente").value);
  //  for(let value of expedientes){console.log(value);}
}
