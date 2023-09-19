const nome = document.querySelector('[data-dado="nome"]');
const sobrenomenome = document.querySelector('[data-dado="sobrenome"]');
const telefone = document.querySelector('[data-dado="telefone"]');
const table = document.querySelector('.table');
const buttonAdicionar = document.querySelector('[data-btn="adicionar"]');

const containerModal = document.querySelector(".modal_container");
const closeModal = document.querySelector("[data-btn='closeModal']")

// FUNÇÕES 
const inputsValues = () => {
  const inputName = document.querySelector('[data-input="nome"]').value;
  const inputLastName = document.querySelector('[data-input="sobrenome"]').value;
  const inputTelephone = document.querySelector('[data-input="telefone"]').value;

  if (inputName === '' && inputLastName === '' && inputTelephone === '') {
    alert('Preencha todos os campos');
  } else {
    newElements(inputName, inputLastName, inputTelephone);
  }

  cleanInput();
};

const cleanInput = () => {
  const inputs = [...document.querySelectorAll('input')];
  inputs.map((input) => {
    input.value = '';
  });

  inputs[0].focus()
};

const fecharModal = () => {
  containerModal.classList.remove("ativo")
}


const newElements = (name, lastName, telephone) => {
  const newLine = document.createElement('tr');
  const collumnName = document.createElement('td');
  const collumnLastName = document.createElement('td');
  const collumnTelephone = document.createElement('td');
  const collumnActions = document.createElement('td');

  collumnName.innerHTML = name;
  collumnLastName.innerHTML = lastName;
  collumnTelephone.innerHTML = telephone;

  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('btnEditar');
  buttonEdit.innerText = 'Editar';

  buttonEdit.addEventListener('click', ()=>{
    const btnAlterar = document.querySelector('[data-btn="alterar"]')

    btnAlterar.addEventListener('click', ()=>{
      const alterName = document.querySelector("[data-alter='nome']").value
      const alterLastName = document.querySelector("[data-alter='sobrenome']").value
      const alterTelephone = document.querySelector("[data-alter='telefone']").value

      if(alterName == "" || alterLastName == "" || alterTelephone == ""){
        
      }else{
        collumnName.innerText = alterName;
        collumnLastName.innerText = alterLastName;
        collumnTelephone.innerText = alterTelephone;

        fecharModal()
      }
    })
    containerModal.classList.add("ativo")
  })


  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('btnDelete');
  buttonDelete.innerText = "Excluir"

  buttonDelete.addEventListener("click", (evt)=>{
    const target = evt.target.parentNode.parentNode;
    const confirm = window.confirm("Deseja realmente excluir? ")

    if(confirm){
      target.remove();
    }else{
      alert("Exclusao cancelada!")
    }

  })


  collumnActions.appendChild(buttonEdit);
  collumnActions.appendChild(buttonDelete);

  collumnActions.classList.add('acoes');

  newLine.appendChild(collumnName);
  newLine.appendChild(collumnLastName);
  newLine.appendChild(collumnTelephone);
  newLine.appendChild(collumnActions);

  table.appendChild(newLine);
};



// EVENTOS
buttonAdicionar.addEventListener('click', () => {
  inputsValues();
});


closeModal.addEventListener("click", ()=>{
  containerModal.classList.remove("ativo")
})


