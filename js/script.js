
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onreadystatechange = function() {
   if(xhr.readyState === 4 && xhr.status === 200) {
       let Obj = JSON.parse(xhr.responseText);
       console.log(Obj);
       let body = document.querySelector('body');
       let i=0;
       for (const user of Obj) {
           console.log(user.name);
           console.log(user.username);
           body.children[1].children[0].children[1].children[i].children[1].innerHTML = user.name;
           body.children[1].children[0].children[1].children[i].children[2].innerHTML = user.username;
           body.children[1].children[0].children[1].children[i].children[3].innerHTML = user.email;
           body.children[1].children[0].children[1].children[i].children[4].innerHTML = user.phone;
           i++;
       }
   }
}