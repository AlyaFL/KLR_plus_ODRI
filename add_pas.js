
  const button = document.querySelector('#create-form-button');
  const formContainer = document.querySelector('#form-container');

  button.addEventListener('click', function() {
    const formHtml = `
      <form id="form553429455" name='form553429455' role="form" action='' method='POST' data-formactiontype="0" data-inputbox=".t-input-group" class="t-form js-form-proccess t-form_inputs-total_11 " data-success-callback="t702_onSuccess" >
        <div class="js-successbox t-form__successbox t-text t-text_md" aria-live="polite" style="display:none;color:#ffffff;background-color:#ff6800;" data-success-message="Дякуємо, що обрали наш сервіс онлайн бронювання! Протягом кількох хвилин диспетчер зв’яжеться з Вами для уточнення деталей замовлення."></div>
        <div class="t-form__inputsbox">
          <div class="t-input-group t-input-group_tx" data-input-lid="1495810354468">
            <div class="t-input-block">
              <div class="t-text" field="li_text__1495810354468">
                <div style="font-size:18px;" data-customstyle="yes"><strong>Пасажир № 1</strong></div>
              </div>
              <div class="t-input-error" aria-live="polite" id="error_1495810354468"></div>
            </div>
          </div>
          <div class="t-input-group t-input-group_nm" data-input-lid="1676899350493">
            <div class="t-input-block">
              <input type="text" autocomplete="name" name="Name" id="input_1676899350493" class="t-input js-tilda-rule " value="" placeholder="Прізвище" data-tilda-req="1" aria-required="true" data-tilda-rule="name" aria-describedby="error_1676899350493" style="color:#000000;border:1px solid #0099b9;border-radius: 30px; -moz-border-radius: 30px; -webkit-border-radius: 30px;font-family:'Georgia';">
              <div class="t-input-error" aria-live="polite" id="error_1676899350493"></div>
            </div>
          </div>
          <div class="t-input-group t-input-group_nm" data-input-lid="1676873251617">
            <div class="t-input-block">
              <input type="text" autocomplete="name" name="Name_2" id="input_1676873251617" class="t-input js-tilda-rule " value="" placeholder="Ім’я" data-tilda-req="1" aria-required="true" data-tilda-rule="name" aria-describedby="error_1676873251617" style="color:#000000;border:1px solid #0099b9;border-radius: 30px; -moz-border-radius: 30px; -webkit-border-radius: 30px;font-family:'Georgia';">`
  })             


// <!DOCTYPE html>
// <html>
// <head>
// 	<meta charset="UTF-8">
// 	<title>Dynamic Form Creation</title>
// </head>
// <body>
// 	<button id="createForm">Create Form</button>
// 	<script>
// 		document.getElementById("createForm").addEventListener("click", function() {
// 			// create form element
// 			var form = document.createElement("form");
// 			form.id = "form553429455";
// 			form.name = "form553429455";
// 			form.role = "form";
// 			form.action = "";
// 			form.method = "POST";
// 			form.dataset.formactiontype = "0";
// 			form.dataset.inputbox = ".t-input-group";
// 			form.classList.add("t-form", "js-form-proccess", "t-form_inputs-total_11");
// 			form.dataset.successCallback = "t702_onSuccess";

// 			// create success message element
// 			var successBox = document.createElement("div");
// 			successBox.classList.add("js-successbox", "t-form__successbox", "t-text", "t-text_md");
// 			successBox.setAttribute("aria-live", "polite");
// 			successBox.style.display = "none";
// 			successBox.style.color = "#ffffff";
// 			successBox.style.backgroundColor = "#ff6800";
// 			successBox.dataset.successMessage = "Дякуємо, що обрали наш сервіс онлайн бронювання! Протягом кількох хвилин диспетчер зв’яжеться з Вами для уточнення деталей замовлення.";
// 			form.appendChild(successBox);

// 			// create inputs
// 			var inputsBox = document.createElement("div");
// 			inputsBox.classList.add("t-form__inputsbox");

// 			var inputGroup1 = document.createElement("div");
// 			inputGroup1.classList.add("t-input-group", "t-input-group_tx");
// 			inputGroup1.dataset.inputLid = "1495810354468";
// 			var inputBlock1 = document.createElement("div");
// 			inputBlock1.classList.add("t-input-block");
// 			var liText1 = document.createElement("div");
// 			liText1.classList.add("t-text");
// 			liText1.setAttribute("field", "li_text__1495810354468");
// 			liText1.innerHTML = '<div style="font-size:18px;" data-customstyle="yes"><strong>Пасажир № 1</strong></div>';
// 			var inputError1 = document.createElement("div");
// 			inputError1.classList.add("t-input-error");
// 			inputError1.setAttribute("aria-live", "polite");
// 			inputError1.id = "error_1495810354468";
// 			inputBlock1.appendChild(liText1);
// 			inputBlock1.appendChild(inputError1);
// 			inputGroup1.appendChild(inputBlock1);
// 			inputsBox.appendChild(inputGroup1);

// 			var inputGroup2 = document.createElement("div");
// 			inputGroup2.classList.add("t-input-group", "t-input-group_nm");
// 			inputGroup2.dataset.inputLid = "1676899350493";
// 			var inputBlock2 = document.createElement("div");
// 			inputBlock2.classList.add("t-input-block");
// 			var input2 = document.createElement("input");
// 			input2.type = "text";
// 			input2.autocomplete = "name";
// 			input2.name = "Name";
// 			input2.id = "input_1676899350493";
// 			input2.classList.add("t-input", "js-tilda-rule");
// 			input2.value = "";
// 			input2



// // Находим контейнер, в котором будут появляться формы
// const formContainer = document.getElementById('t-form__inputsbox');

// // Добавляем обработчик события "клик" на кнопку
// function add_pas(){
//   // Создаем элементы формы
//   const form = document.createElement('div');
//   form.class = "t-input-group t-input-group_nm";
//   const form2 = document.createElement('div') ;
//   form2.class = "t-input-block";
//   //const lastNameLabel = document.createElement('label');
//   const lastNameInput = document.createElement('input');
//   lastNameInput.type = 'text';
//   lastNameInput.name = 'Name';
//   lastNameInput.class = "t-input js-tilda-rule ";
//   lastNameInput.value = '';
//   lastNameInput.placeholder = "Прізвище";
//   lastNameInput.style = "color:#000000;border:1px solid #0099b9;border-radius: 30px; -moz-border-radius: 30px; -webkit-border-radius: 30px;font-family:'Georgia';";
// //   const firstNameLabel = document.createElement('label');
// //   const firstNameInput = document.createElement('input');
// //   const discountLabel = document.createElement('label');
// //   const discountSelect = document.createElement('select');
// //   const discountOption1 = document.createElement('option');
// //   const discountOption2 = document.createElement('option');
// //   const discountOption3 = document.createElement('option');

//   // Настраиваем элементы формы
//   //lastNameLabel.textContent = 'Фамилия:';
// //   lastNameInput.type = 'text';
// //   lastNameInput.name = 'lastName';
// //   firstNameLabel.textContent = 'Имя:';
// //   firstNameInput.type = 'text';
// //   firstNameInput.name = 'firstName';
// //   discountLabel.textContent = 'Скидка:';
// //   discountOption1.textContent = 'Нет';
// //   discountOption2.textContent = '5%';
// //   discountOption3.textContent = '10%';

//   // Добавляем элементы формы в контейнер
// //   discountSelect.appendChild(discountOption1);
// //   discountSelect.appendChild(discountOption2);
// //   discountSelect.appendChild(discountOption3);
//   form.appendChild(form2);
//   form.appendChild(lastNameInput);
// //   form.appendChild(firstNameLabel);
// //   form.appendChild(firstNameInput);
// //   form.appendChild(discountLabel);
// //   form.appendChild(discountSelect);
//   formContainer.appendChild(form);
// };
