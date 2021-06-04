
let xhr = new XMLHttpRequest();
//console.log('Cambio stato: ' + xhr.readyState);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//console.log('Cambio stato: ' + xhr.readyState);
xhr.send();
xhr.onreadystatechange = function() {
   // console.log('Cambio stato: ' + xhr.readyState);
   // console.log(xhr.responseText);
   if(xhr.readyState === 4 && xhr.status === 200) {
       let Obj = JSON.parse(xhr.responseText);
       console.log(Obj);
       let body = document.querySelector('body');
       let i=0;
       for (const user of Obj) {
           console.log(user.name);
           console.log(body.children[1].children[0].children[1].children[i].children[1].innerHTML);
           body.children[1].children[0].children[1].children[i].children[1].innerHTML = user.nome;
           i++;
       }
   }
}