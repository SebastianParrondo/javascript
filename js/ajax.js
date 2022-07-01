/* ***** XMLHttpRequest ***** */
(()=>{
    const xhr = new XMLHttpRequest(),
          $xhr = document.getElementById("xhr"),
          $fragment = document.createDocumentFragment();
          
      
        xhr.addEventListener("readystatechange", (e) => {
          // Validando el estado de la petición
          if (xhr.readyState !== 4) return;
              
          if(xhr.status >= 200 && xhr.status <= 300){
            //console.log("exito")
            const json = JSON.parse(xhr.responseText);
            //console.log(xhr);
            //console.log(json);
            json.forEach(el => {
              const $li = document.createElement("li");
              $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
              $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
          
          }else{
            console.log("error")
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;

          }
      
          //console.log(xhr)  
        })
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    //xhr.open("GET", "assets/users.json") /* haciendo una peticion local */
    xhr.send();

})();
/* ***** Fetch ***** */
(()=>{
  const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta =>{
         //console.log(respuesta)
          return respuesta.ok? respuesta.json(): Promise.reject(respuesta)
        })
        .then(json=>{
          //console.log(json)
          json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
          });
          $fetch.appendChild($fragment)
        })
        .catch(error =>{
          console.log(error)
          let message = error.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${error.status}: ${message}`;
        })
        .finally(()=>{
         console.log(`Esto se ejecutara independientemente del resultado de la promesa Fetch `)
        });

})();
/* ***** Fetch con async-await ***** */
(()=>{
  const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

        async function getData(){
          try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await respuesta.json();

            if(!respuesta.ok){
            // El throw es como un return que envia el flujo de información al catch
              throw {status: respuesta.status, 
                     statusText: respuesta.statusText
                    }
            }

            //console.log(respuesta, json)
            json.forEach(obj =>{
              const $li = document.createElement("li");
              $li.innerHTML = `${obj.name} -- ${obj.email} -- ${obj.phone}`;
              $fragment.appendChild($li)
            })
            $fetchAsync.appendChild($fragment)            
          }catch(error){
            console.log(error)
            const message = error.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`          
          }finally{
            console.log(`Esto se ejecutara independientemente del resultado del try-catch desde Fetch con async-await `)
          }
          
        }

        getData()

        

})();
/* ***** Axios ***** */
(()=>{
  const $axios = document.getElementById("axios"),
  $fragment = document.createDocumentFragment();

  axios.get("https://jsonplaceholder.typicode.com/user")
    .then(respuesta =>{ 
      let json = respuesta.data; 
      
      json.forEach(obj =>{
        const $li = document.createElement("li");
        $li.innerHTML = `${obj.name} -- ${obj.email} -- ${obj.phone}`;
        $fragment.appendChild($li);
      })
      $axios.appendChild($fragment)
    })
    .catch(error =>{
      //console.log(error.response)
      const err = error.response;

      let message = err.statusText || `Ocurrió un error`;
      $axios.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(() =>{
      console.log(`Esto se ejecutara independientemente del resultado del try-catch desde Axios`)
    });

})();
/* ***** Axios con async-await ***** */
(()=>{
  const $axiosAsync = document.getElementById("axios-async"),
  $fragment = document.createDocumentFragment();
  
  async function getData(){
    try {    
      const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users"),
      json = await respuesta.data;

      json.forEach(obj =>{
        const $li = document.createElement("li");
        $li.innerHTML = `${obj.name} -- ${obj.email} -- ${obj.phone}`;
        $fragment.appendChild($li);
      })
      $axiosAsync.appendChild($fragment)
    }catch (error) {
      console.log(error.response)
      const err = error.response;
      let message = err.statusText || `Ocurrió un error`;
      $axiosAsync.innerHTML = `Error ${err.status}: ${message}`
  
    }finally{
      console.log(`Esto se ejecutara independientemente del resultado del try-catch desde Axios con async-await `)
    };
  };
  getData();

})()
    