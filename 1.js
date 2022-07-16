// console.log("working");

const addlist = document.getElementById("addlist");
const popup = document.querySelector(".popup");


addlist.addEventListener('click',addlistitems);

function addlistitems(e){
  e.preventDefault();
   
  const popupbox = document.createElement("div");
  popupbox.className = "popup-box";
  popup.appendChild(popupbox);
  const popHeading = document.createElement("p");
  popHeading.innerText = "Add new List";
  popupbox.appendChild(popHeading);
  const popInput = document.createElement("input");
  popInput.type = "text";
  popInput.placeholder = "Add New List Name Here";
  popInput.style.textAlign= 'center';
  popupbox.appendChild(popInput); 
  const addBtn = document.createElement("div");
  addBtn.className = "popup-box-button";
  addBtn.innerText = "Add";
  popupbox.appendChild(addBtn);
  
  const closeBtn = document.createElement("div");
  closeBtn.className = "popup-box-button";
  closeBtn.innerText = "close";
  popupbox.appendChild(closeBtn);


  closeBtn.addEventListener("click", () => {
    popup.removeChild(popupbox);

  })


  addBtn.addEventListener("click", () => {
    

    document.getElementById("intro-text").style.display="none";

    // const container2=document.querySelector(".container-2");

    // const box = document.createElement("div");
    // box.className = "box";
    // container2.appendChild(box);
    // box.appendChild(boxHeading);
    // box.appendChild(btnContainer);

    // const btnContainer = document.createElement("div");
    // btnContainer.className = "button-container";
    // btnContainer.appendChild(add);
    // btnContainer.appendChild(deleteBtn);
  
    // const boxHeading = document.createElement("span");
    // boxHeading.id="box-heading";
    // boxHeading.innerText = popInput.value;

    //  const add = document.createElement("i");
    // add.className = "fa-solid fa-circle-plus";
    

    // const deleteBtn = document.createElement("i");
    // deleteBtn.className = "fa-solid fa-trash-can";

      const box = document.createElement("div");
      box.className = "box";
      const boxHeading = document.createElement("span");
      boxHeading.id="box-heading";
      const add = document.createElement("i");
      add.className = "fa-solid fa-circle-plus";
      const deleteBtn = document.createElement("i");
      deleteBtn.className = "fa-solid fa-trash-can";
      const btnContainer = document.createElement("div");
      btnContainer.className = "button-container";
  
      const container2=document.querySelector(".container-2");
      container2.appendChild(box);
      box.appendChild(boxHeading);
      box.appendChild(btnContainer);
      btnContainer.appendChild(add);
      btnContainer.appendChild(deleteBtn);
      boxHeading.innerText = popInput.value;

      closeBtn.addEventListener("click", () => {
        popup.removeChild(popupbox);
  })

        boxHeading.addEventListener('click',()=>{
          const heading=document.getElementById("heading");
          heading.innerText=boxHeading.innerText;
          const container=document.querySelector(".container");
          const container3=document.querySelector(".container-3");
         
          container.style.visibility="hidden";
          container3.style.visibility="visible";
          const backBtn=document.getElementById("backbtn");
          
          container3.appendChild(box);
          deleteBtn.addEventListener('click',()=>{
            document.querySelector(".container-3").removeChild(box);
            document.querySelector(".container").style.visibility="visible";
            document.querySelector(".container-3").style.visibility="hidden";
          })
          backBtn.addEventListener('click',()=>{
            container3.removeChild(box);
            container2.appendChild(box);
            document.querySelector(".container").style.visibility="visible";
            document.querySelector(".container-3").style.visibility="hidden";
          })
          })
  
      boxHeading.style.borderBottom = "1px solid black";
      popup.removeChild(popupbox);
      deleteBtn.addEventListener("click", () => {
        document.querySelector(".container-2").removeChild(box);
        if(document.querySelector(".container-2").innerText===""){
          document.querySelector("#intro-text").style.display="block";
        }
      });

      add.addEventListener("click", () => {
        const popupbox = document.createElement("div");
        const popHeading = document.createElement("p");
        const popInput = document.createElement("input");
        const addBtn = document.createElement("div");
        const closeBtn = document.createElement("div");
        popup.appendChild(popupbox);
        popupbox.className = "popup-box";
        popHeading.innerText = "Add new Items";
        popInput.type = "text";
        popInput.style.textAlign = "center";
        popInput.placeholder = "Add New Items Here";
        addBtn.className = "popup-box-button";
        closeBtn.className = "popup-box-button";
        addBtn.innerText = "Add";
        closeBtn.innerText = "Close";
      
        popupbox.appendChild(popHeading);
        popupbox.appendChild(popInput);
        popupbox.appendChild(addBtn);
        popupbox.appendChild(closeBtn);

        addBtn.addEventListener("click", () => {
        if (popInput.value !== "") {
            const task = document.createElement("div");
            const taskText = document.createElement("span");
            const doneButton = document.createElement("button");
            taskText.className = "task-text";
            doneButton.className = "done-button";
            task.className = "task";
            taskText.innerText = popInput.value;
           doneButton.innerText = "mark done";
  
            box.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            popup.removeChild(popupbox);
            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          }
        });
        closeBtn.addEventListener("click", () => {
          popup.removeChild(popupbox);
        })
        });
      });
    }
