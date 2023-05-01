var searchURL = 'https://api.klr.com.ua/api/info/get_cities?name=';
var search_city = 'https://al-trans.com.ua/api/v2/booking/search_trips';
const city_info_url ="https://al-trans.com.ua/api/v2/references/cities";

function func(){
    document.getElementById('form').addEventListener('submit', function(e) {
      e.preventDefault(); 
    })
    console.log("Hello");
}

const sendReq = (method, url, h) => {
    const headers = {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + h,
    }
  
    return fetch(url, {
      method: method,
      // body: JSON.stringify(body),
      headers: headers
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
  
      return response.json()
      .then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
      })
    })
  }

function get_search_string(first_id, second_id, departure_date,cur) {
    let search_link = 'https://api.klr.com.ua/api/booking/search?from_city_id='+ first_id+ '&to_city_id='+ second_id+ '&departure_date='+departure_date+'&currency_id='+cur;
    return search_link;
}

const sendReq_o = (method, url, h, body=null) => {
  const headers = {
    'Content-Type': 'application/json',
    'odri-api-key':'vmuRLTyVnU+5KWbl9FPjqQ==',
    'Accept-Language':'uk',
    'Authorize': 'Bearer ' + h,
  }

  return fetch(url, {
    method: method,
    body:JSON.stringify(body),
    headers: headers
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json()
    .then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}

function clean_detail(n){
  let count_routes = Object.values(n)[0];
    let new_var = "";
    if (count_routes > 9){
      count_routes = 9;
    }
    for (let i = 0; i < count_routes; i++) {
      new_var = "ul" + i;
      new_var1 = "dis_ul" + i;
      const list = document.getElementById(new_var);
      const list1 = document.getElementById(new_var1);
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
      while (list1.hasChildNodes()) {
        list1.removeChild(list1.firstChild);
      }
    }
}

function clean_detail_odri(n){
  for (let i = 0; i < n; i++) {
  new_var = "ul" + i;
  new_dis = "dis_ul" + i;
  new_info = 'dop_info0';
  const list = document.getElementById(new_var);
  const list_1 = document.getElementById(new_dis);
  const list_2 = document.getElementById(new_info);
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  while (list_1.hasChildNodes()) {
    list_1.removeChild(list_1.firstChild);
  }
  while (list_2.hasChildNodes()) {
    list_2.removeChild(list_2.firstChild);
  }
}
}

function get_details(n){
  let count_routes = Object.values(n)[0];
  if (count_routes > 9){
    count_routes = 9;
  }
  //console.log(count_routes);
  clean_detail(n);
  for (let i = 0; i < count_routes; i++) {
    let klr = Object.values(n.items)[i];
    let timetable = klr.timetable;
    let discounts = klr.discounts;
    let count_discounts = Object.values(discounts).length;
    let count_cities = Object.values(timetable).length;
    let transfer = '';
    let som = "ul" + i;
    for (let j=0; j<count_cities; j++){
      let city_address ='';
      if (timetable[j].transfer_point == true){
        transfer = ' (Можлива пересадка) ';
      } else {
        transfer = '';
      }
      
      let city_time = timetable[j].datetime + " ";
      let t_index = city_time.indexOf(":");
      city_time = city_time.slice(t_index-2,);
      const para_li = document.createElement("li");
      const para_strong = document.createElement("strong");
      const para_i = document.createElement("span");
      para_i.setAttribute("id", "para_i");
      para_i.setAttribute("style", "color:#ff6800;font-weight:bold;font-style:italic;");
      //para_i.setAttribute("style", ");
      
      const node_time = document.createTextNode(city_time);
      const node_city = document.createTextNode(timetable[j].title+', ');
      const node_transfer = document.createTextNode(transfer);
      const node_address = document.createTextNode(timetable[j].address);
      
      para_li.appendChild(para_strong);
      para_strong.appendChild(node_time);
      para_li.appendChild(node_city);
      para_li.appendChild(para_i);
      
      para_i.appendChild(node_transfer);
      
      para_li.appendChild(node_address);

      const element = document.getElementById(som);
      const child = document.getElementById("li");
      element.insertBefore(para_li, child);
      }
    som = "dis_ul" + i;
    for (let j=0; j<count_discounts; j++){
      let percent_title = discounts[j].value +'%'+' - '+discounts[j].title;
      if ( discounts[j].title.indexOf('Групова') == 0 || discounts[j].title.indexOf('студент') == 0 || discounts[j].title.indexOf('5%') == 0){
        percent_title = '';
      }
      const para = document.createElement("li");
      if (percent_title != ''){
        const node = document.createTextNode(percent_title);
      para.appendChild(node);
      const element = document.getElementById(som);
      const child = document.getElementById("li");
      element.insertBefore(para, child);
      } 
    }
  }
}

function hide_info(){
  let som ='';
  let det = '';
  for (let i = 0; i < 9; i++){
    som = "show"+i;
    det = "detail"+i;
    document.getElementById(som).hidden=true;
    document.getElementById(det).hidden=true;
  }
}

function first_klr_info(){
  const list = document.getElementById("dop_info0");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  let para = document.createElement("li");
  let node = document.createTextNode('Періодичність - майже щодня');
  para.appendChild(node);
  let element = document.getElementById("dop_info0");
  let child = document.getElementById("li");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("li");
  node = document.createTextNode('Доступний багаж Не більше 2 сумок, розм: 40*60*90 см (загальна вага: Польща - 30 кг; Німеччина - 40 кг) + ручна поклажа 5 кг');
  para.appendChild(node);
  element = document.getElementById("dop_info0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("li");
  node = document.createTextNode('Виїзд та прибуття за місцевим часом');
  para.appendChild(node);
  element = document.getElementById("dop_info0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
  // document.getElementById("dop_info0");
}

function klr_get_data(n){
    hide_info();
    let count_routes = Object.values(n)[0];
    if (count_routes > 9){
      count_routes = 9;
    }
    //console.log(count_routes);
    clean_detail(n);
    let shoe_string = "";
    for (let i = 0; i < count_routes; i++) {
      const klr = Object.values(n.items)[i];
      let discounts = klr.discounts;
      let price = klr.price.value;
      price = price.toString();
      let price_currency = klr.price.currency;
      let curr = '';
      let new_price = price;
      if (price_currency == "UAH"){
        curr = ' грн';
        let length1 = price.length;
        if (length1==4){
          new_price = price.slice(0,1)+"," + price.slice(-3);
        }
      }else if (price_currency == "EUR"){
        curr = ' EUR';
      }else if (price_currency == "PLN"){
        curr = ' PLN';
      }else if (price_currency == "CZK"){
        curr = ' CZK';
      }
      var id_show = "show"+i;
      let som = '';
      document.getElementById(id_show).hidden=false;
      som = "start_date"+i;
      document.getElementById(som).innerHTML = klr.start_date;
      som = "carrier_name"+i;
      document.getElementById(som).innerHTML ='Перевізник: ' + klr.carrier_name;
      som = "start_city_name"+i;
      document.getElementById(som).innerHTML = klr.start_city_name;
      som = "end_city_name"+i;
      document.getElementById(som).innerHTML = klr.end_city_name;
      som = "start_time"+i;
      document.getElementById(som).innerHTML = klr.start_time;
      som = "end_time"+i;
      document.getElementById(som).innerHTML = klr.end_time;
      som = "end_date"+i;
      document.getElementById(som).innerHTML = klr.end_date;
      som = "price"+i;
      
      document.getElementById(som).innerHTML = new_price+curr;
      som = "start_station"+i;
      document.getElementById(som).innerHTML = klr.start_station.name + ', ' +klr.start_station.address;
      som = "end_station"+i;
      document.getElementById(som).innerHTML = klr.end_station.name + ', ' +klr.end_station.address;
      som = "time_in_road"+i;
      document.getElementById(som).innerHTML = klr.time_in_road.days + ' д. ' + klr.time_in_road.hours + ' год. ' + klr.time_in_road.minutes + ' хв.';
    }
}

const find_klr = async (first_word, second_word, date_form, currency,t_k) => {
    
    let currency_id = '';
    if (currency == "UAH"){
      currency_id = 1;
    } else if (currency == "EUR"){
      currency_id = 2;
    } else if (currency == "PLN"){
      currency_id = 4;
    } else if (currency == "CZK"){
      currency_id = 8;
    }
    
    data = '';
  // Date from form
    let first_link = searchURL + first_word;
    let second_link = searchURL + second_word;
  // Get city id
    var new_request1 = await sendReq('GET', first_link, t_k);
    n = new_request1.data.response.cities;
    let first_id = Object.values(n)[0].id;
  var new_request2 = await sendReq('GET', second_link, t_k);
  n = new_request2.data.response.cities;
  let second_id = Object.values(n)[0].id;
  // Get trip info
  let new_link = get_search_string(first_id, second_id, date_form,currency_id)
  var search_request = await sendReq('GET', new_link, t_k);

  //console.log(search_request);
  if (search_request.count == 0){
    hide_info();
    document.getElementById("rec553549662").hidden=false;
  } else {
    document.getElementById("rec553549662").hidden=true;
    klr_get_data(search_request);
    add_klr_info();
  get_details(search_request);
  }
}

function add_altrans_dis(){
  let para = document.createElement("li");
  let node = document.createTextNode('50% - Діти до 4 років');
  para.appendChild(node);
  let element = document.getElementById("dis_ul0");
  let child = document.getElementById("li");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("li");
  node = document.createTextNode('30% - Діти від 4 до 12 років');
  para.appendChild(node);
  element = document.getElementById("dis_ul0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
}

function add_grandes_dis(){
  let para = document.createElement("li");
  let node = document.createTextNode('50% - Діти до 4 років');
  para.appendChild(node);
  let element = document.getElementById("dis_ul0");
  let child = document.getElementById("li");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("li");
  node = document.createTextNode('30% - Діти від 4 до 12 років');
  para.appendChild(node);
  element = document.getElementById("dis_ul0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("li");
  node = document.createTextNode('10% - Пенсіонери від 60 років');
  para.appendChild(node);
  element = document.getElementById("dis_ul0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
}

function add_klr_info(){
  let para = document.createElement("p");
  para.setAttribute("style", "text-align: left");
  let node = document.createTextNode('У вартість квитка пасажиру дозволяється '+
  'перевезти: не більше 2-х сумок/валіз, розміром 40×60×90 загальною вагою до 30 кг до Польщі, Чехії, Словаччини, '+
  'Австрії. На маршрутах до Німеччини, Бельгії, Нідерландів, Люксембургу, Франції, Швейцарії до 40 кг, та ручна '+
  'поклажа пасажирів до 5 кг. Наявність вільного місця для додаткового багажу у багажному відділенні '+
  'автобуса та розмір доплати вирішується по факту на посадці. Додатковий багаж за розмірами та вагою не має перевищувати основний багаж');
  para.appendChild(node);
  let element = document.getElementById("dop_info0");
  let child = document.getElementById("p");
  element.insertBefore(para, child);
  
}

function add_altrans_info(){
  let para = document.createElement("p");
  para.setAttribute("style", "text-align: left");
  let node = document.createTextNode('У вартість повного (дорослого) квитка входить безкоштовне перевезення багажу розміром до 40x60x80см,'+
  'загальною вагою до 30кг та ручного багажу вагою до 10кг. У вартість пільгового (дитячого) квитка'+
  'входить безкоштовне перевезення багажу загальною вагою до 20кг.'+
  'При перевищенні даних лімітів щодо ваги і розмірів багажу за нього сплачується по 1 євро/кг.'+
  'Додатковий багаж перевозиться лише при наявності вільного місця в багажному відділенні автобуса.'+
  'Додатковий багаж не повинен перевищувати розмірів та ваги основного багажу.');
  para.appendChild(node);
  let element = document.getElementById("dop_info0");
  let child = document.getElementById("p");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("p");
  para.setAttribute("style", "text-align: left");
  node = document.createTextNode('Перевізник не відповідає за запізнення під час руху і несвоєчасність прибуття до станцій слідування,'+
  'якщо це спричинилося незалежними від нього обставинами (в тому числі затримки під час проходження кордонів,'+
  'погодними умовами, транспортними пробками, діями державних органів, ремонтними роботами на дорогах і т.д,'+
  'діями самих пасажирів, що впливали на виконання даних обставин) та іншими причинами (технічними проблемами,'+
  'що виникли з автобусом під час руху, котрі не могли бути попереджені фірмою-перевізником,'+
  'не зважаючи на всі прийняті засоби застереження).');
  para.appendChild(node);
  element = document.getElementById("dop_info0");
  child = document.getElementById("p");
  element.insertBefore(para, child);
}

function add_grandes_info(){
  let para = document.createElement("p");
  para.setAttribute("style", "text-align: left");
  let node = document.createTextNode('  Кожен пасажир має право на перевезення багажу загальною вагою до 40 кг на 1 особу (не більше 2 валіз)'+
  'та ручного багажу вагою до 10 кг. При перевищенні даних лімітів щодо ваги за багаж береться доплата'+
  'як за додатковий багаж по 1.2 євро за кожен додатковий кілограм.'+
  'Додатковий багаж перевозиться при наявності вільного місця в багажному відділенні автобуса та не повинен'+
  'перевищувати розмірів та ваги основного багажу.');
  para.appendChild(node);
  let element = document.getElementById("dop_info0");
  let child = document.getElementById("p");
  element.insertBefore(para, child);
  // --------------------------------
  para = document.createElement("p");
  para.setAttribute("style", "text-align: left");
  node = document.createTextNode('  Перевізник не відповідає за запізнення під час руху і несвоєчасність прибуття до станцій слідування,'+
  'якщо це спричинилося незалежними від нього обставинами (в тому числі затримки під час проходження кордонів,'+
  'погодними умовами, транспортними пробками, діями державних органів, ремонтними роботами на дорогах і т.д,'+
  'діями самих пасажирів, що впливали на виконання даних обставин) та іншими причинами (технічними проблемами,'+
  'що виникли з автобусом під час руху, котрі не могли бути попереджені фірмою-перевізником,'+
  'не зважаючи на всі прийняті засоби застереження).');
  para.appendChild(node);
  element = document.getElementById("dop_info0");
  child = document.getElementById("p");
  element.insertBefore(para, child);
}

function show_detail_odri(response_odri){
  let para = document.createElement("li");
  let para1 = document.createElement("strong");
  para.appendChild(para1);
  let dep_time = response_odri.departure_time_hhmm + " ";
  let node = document.createTextNode(dep_time);
  para1.appendChild(node);
  let city_address = response_odri.departure_city + ', ' + response_odri.departure_place;
  let node1 = document.createTextNode(city_address);
  para.appendChild(node1);
  
  let element = document.getElementById("ul0");
  let child = document.getElementById("li");
  element.insertBefore(para, child);
  // ------------------------------
  para = document.createElement("li");
  para1 = document.createElement("strong");
  para.appendChild(para1);
  node = document.createTextNode('');
  para1.appendChild(node);
  city_address = "Львів або Стрий - Можлива пересадка";
  node1 = document.createTextNode(city_address);
  para.appendChild(node1);
  
  element = document.getElementById("ul0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
  // -------------------------------------------
  para = document.createElement("li");
  para1 = document.createElement("strong");
  para.appendChild(para1);
  let ar_time = response_odri.arrival_time_hhmm + " ";
  node = document.createTextNode(ar_time);
  para1.appendChild(node);
  let city_address_ar = response_odri.arrival_city + ', ' + response_odri.arrival_place;
  node1 = document.createTextNode(city_address_ar);
  para.appendChild(node1);
  
  element = document.getElementById("ul0");
  child = document.getElementById("li");
  element.insertBefore(para, child);
  if (response_odri.carrier_name =="AL-TRANS"){
    add_altrans_dis();
    add_altrans_info();
  } else if(response_odri.carrier_name =="GRANDES TOUR"){
    add_grandes_dis();
    add_grandes_info();
  }
}

function show_info_odri(resp, curr){
  document.getElementById("show0").hidden=false;
  document.getElementById("start_date0").innerHTML = resp.departure_date;
  document.getElementById("carrier_name0").innerHTML = 'Перевізник: ' + resp.carrier_name;
  document.getElementById("start_city_name0").innerHTML = resp.departure_city;
  document.getElementById("end_city_name0").innerHTML = resp.arrival_city;
  document.getElementById("start_time0").innerHTML = resp.departure_time_hhmm;
  document.getElementById("end_time0").innerHTML = resp.arrival_time_hhmm;
  document.getElementById("end_date0").innerHTML = resp.arrival_date;
  let price = resp.price;
  document.getElementById("price0").innerHTML = price.toString() + " " + curr;
  document.getElementById("start_station0").innerHTML = resp.departure_place;
  document.getElementById("end_station0").innerHTML = resp.arrival_place;
  document.getElementById("time_in_road0").innerHTML = resp.duration_dd + ' д. ' + resp.duration_hh + ' год. ' + resp.duration_mm + ' хв.';
}

const find_odri = async (first_word, second_word, date_form, currency,t_o) => {
  if (currency != "UAH" && currency !="EUR"){
    currency = "EUR";
  }
  var req = await sendReq_o('POST', city_info_url, t_o);
  city_array = req.cities;
  //console.log(city_array);
  const count_routes = Object.values(req)[0].length;
  let first_link = '';
  let second_link = '';
  for (let i=0; i < count_routes; i++){
      if (city_array[i].name ==first_word){
          first_link = city_array[i].id;
      }
      if (city_array[i].name == second_word){
          second_link = city_array[i].id;
      }
  }
  clean_detail_odri(9);
  hide_info();
  //console.log(first_link);
  //console.log(second_link);
  let spain_city = ["Аліканте", "Альмерія", "Барселона", "Бенідорм", "Валенсія", "Жирона", "Кастельон де ла Плана", 
  "Мадрид", "Малага", "Мурсія", "Севілія", "Таррагона"];

  let body= {"arrival_city_id":second_link,
  "departure_city_id":first_link,
  "depature_date":date_form,
  "search_with_cross":false,
  "back":false,
  "currecny_code":currency,
  "days_count_limit":1,
  "return_only_dates":false}
  var req = await sendReq_o('POST', search_city, t_o, body);
  try{
    response_odri = req.trips_sequences[0].trips[0];
    //console.log(response_odri);
    show_info_odri(response_odri, currency);
    show_detail_odri(response_odri);
    document.getElementById("rec553549662").hidden=true;
  } catch (e){
    
    if (spain_city.includes(first_word) || spain_city.includes(second_word)){
      document.getElementById("not_found").innerHTML ='Рейси з України до Іспанії - вівторок, середа та четвер. У зворотньому напрямку з Іспанії до України - п’ятниця, субота та неділя. Будь ласка, оберіть відповідну дату, або зателефонуйте диспетчеру.';
    } else {
      document.getElementById("not_found").innerHTML ='Рейси з України до Італії та зворотньому напрямку відбуваються за певним графіком, до 4-х разів на тиждень. Будь ласка, оберіть іншу дату, або зателефонуйте диспетчеру.';
    }
    document.getElementById("rec553549662").hidden=false;

  }
  
}

function func() {
  const t_k = document.getElementById('tkt_k').innerHTML; 
  const t_o = document.getElementById('tkt_o').innerHTML;
    document.getElementById('form').addEventListener('submit', function(e) {
      e.preventDefault(); 
    })
    first_word = document.getElementById('from_city').value;
    second_word = document.getElementById('to_city').value;
    date_form = document.getElementById('date_form').value;
    currency = document.getElementById('currency').value;

    let cities_italy = ["Андрія", "Анкона", "Барі","Бергамо", "Болонья", "Брешія", "Венеція", "Местре", "Верона","Віченца", 
    "Казерта", "Капуа", "Кассіно", "Каянелло", "Комо", "Мілан", "Модена", "Неаполь", "Падуя", "Пезаро", "Пескара", 
    "Равенна", "Реджо-Емілія", "Рим", "Ріміні", "Ровіго", "Салерно", "Сан-Бенедетто-дель-Тронто", "Трані","Удіне",
     "Фаенца", "Феррара", "Флоренція", "Фоджа", "Чезена", "Черіньола", "Чивітанова-Марке", "Аліканте", "Альмерія", 
     "Барселона", "Бенідорм", "Валенсія", "Жирона", "Кастельон де ла Плана", 
     "Мадрид", "Малага", "Мурсія", "Севілія", "Таррагона", "Трієст", "Парма","П’яченца","Тортона","Генуя","Савона","Імперія"];

    if (cities_italy.includes(first_word) || cities_italy.includes(second_word)){
      find_odri(first_word, second_word, date_form, currency,t_o);     
      //console.log('Odri');
    } else {
        find_klr(first_word, second_word, date_form, currency,t_k);
    }
   
}

function choose(num){
  
  let som = "start_city_name" + num;
  let start_city_name = document.getElementById(som).innerHTML;
  let som_end = "end_city_name" + num;
  let end_city_name = document.getElementById(som_end).innerHTML;

  document.getElementById("label").innerHTML = start_city_name +" - "+end_city_name;

  let departure_date = document.getElementById("start_date" + num).innerHTML;

  let departure_time = document.getElementById("start_time" + num).innerHTML;
  document.getElementById("departure_info").innerHTML = departure_date + ', '+ departure_time;
  
  document.getElementById("departure_address").innerHTML = document.getElementById("start_station"+num).innerHTML;

  document.getElementById("arrival_info").innerHTML = document.getElementById("end_date" + num).innerHTML + ', '+ document.getElementById("end_time" + num).innerHTML;

  document.getElementById("arrival_address").innerHTML = document.getElementById("end_station"+num).innerHTML;
}