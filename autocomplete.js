var countries = [
  "Андрія", "Анкона", "Барі","Бергамо", "Болонья", "Брешія", "Венеція", "Местре", "Верона","Віченца", 
  "Казерта", "Капуа", "Кассіно", "Каянелло", "Комо", "Мілан", "Модена", "Неаполь", "Падуя", "Пезаро", "Пескара", 
  "Равенна", "Реджо-Емілія", "Рим", "Ріміні", "Ровіго", "Салерно", "Сан-Бенедетто-дель-Тронто", "Трані","Удіне",
   "Фаенца", "Феррара", "Флоренція", "Фоджа", "Чезена", "Черіньола", "Чивітанова-Марке",
   "Аліканте", "Альмерія", "Барселона", "Бенідорм", "Валенсія", "Жирона", "Кастельон де ла Плана", 
  "Мадрид", "Малага", "Мурсія", "Севілія", "Таррагона",
  "Камʹянець-Подільський", "Дунаївці", "Хмельницький", "Старокостянтинів","Шепетівка","Славута","Нетішин",
"Рівне","Луцьк","Ковель","Ковель","Хелм","Люблін","Пулави","Радом","Варшава","Волочиськ","Підволочиськ","Тернопіль","Золочів","Львів","Перемишль","Жешув",
"Тарнув","Краків","Катовіце","Ополе","Вроцлав","Лешно","Познань","Гнезно","Бидгощ","Вінниця","Летичів","Зборів","Трускавець","Дрогобич","Стрий",
"Рогатин","Бурштин","Галич","Івано-Франківськ","Калуш","Долина","Торунь","Хуст","Калинівка",
"Житомир","Київ","Ямпіль","Кременець","Почаїв","Хмільник","Бердичів","Уланів","Бориспіль","Пирятин","Полтава","Харків",
"Чернівці","Хотин","Сокиряни","Херсон","Миколаїв","Одеса","Умань","Герліц","Дрезден","Хемніц","Хоф","Байройт","Нюрнберг","Регенсбург",
"Мюнхен","Аугсбург","Ульм","Штуттгарт","Пфорцхайм","Карлсруе","Лейпциг","Гера","Єна","Ерфурт","Айзенах","Бад-Герсфельд",
"Фульда","Вюрцбург","Франкфурт","Хальбронн","Маннгейм","Запоріжжя","Дніпро","Олександрія","Кропивницький","Котбус",
"Берлін","Шверин","Гамбург","Бремен","Оснабрюк","Білефельд","Мюнстер","Дортмунд","Ессен","Дюсельдорф","Кельн",
"Ярослав","Переворськ","Дембиця","Глівіце","Ланьцут","Магдебург","Брауншвайг","Ганновер",
"Ужгород","Лубни","Острава","Оломоуц","Брно","Прага","Кривий Ріг","Черкаси","Красноград","Валки","Кременчук","Сміла","Звенигородка",
"Тальне","Гайсин","Немирів","Мукачево","Вознесенськ","Южноукраїнськ",
"Первомайськ","Щецин","Володимир Волинський","Борщів","Копичинці","Теребовля","Фридек-Мистек",
"Градець Кралове","Гожув Велькопольський","Маріямполе","Каунас","Вільнюс","Панєвєжис","Рига","Дубно","Белосток","Сувалки","Сарни","Островець-Свентокшиський",
"Лодзь","Голенюв","Свіноуйсьце","Ніско","Стальова Воля","Сандомеж","Опатув","Кельце","Пйотркув-Трибунальський","Кутно","Влоцлавек",
"Ловіч","Гловно","Грудзьондз","Гданьск","Новояворівськ","Яворів","Яремче","Чернігів","Бровари",
"Нова Каховка","Хорол","Решитилівка","Чутово","Словʹянськ","Кремінна","Рубіжне","Новоайдар","Щастя","Петрівка",
"Станиця Луганська","Ченстохова","Оструда","Ельблонг","Єленя Гура","Млада Болеслав","Вуперталь","Коломия","Могилів-Подільський","Тульчин",
"Плзень","Стебник","Броди","Легніца","Снятин","Червоноград","Париж","Леон","Марсель","Тулуза",
"Брюссель","Амстердам","Відень","Коблево","Южне","Конін","Гродзиськ Великопольський","Вольштин","Сулехув","Зелена Гура",
"Коростень","Маневичі","Хшанув","Хожув","Тихи","Пщина","Чеховіце-Дзедзіце","Бельсько-Бяла","Плоцьк","Гдиня",
"Женева","Біла Церква","Сквира","Козятин","Радомсько","Каліш","Ходзеж","Піла","Старгард Щециньський","Люцерн",
"Кросно-Оджанське","Швецко","Моршин","Камʹянське","Жовква","Городище","Корсунь-Шевченківський","Новоград Волинський","Слубице","Скаржисько-Каменна",
"Забже","Нововолинськ","Ратне","Лукув","Сельдце","Білосток","Тчев","Чуднів","Любар","Варна","Звягель",
"Болград","Деражня","Колобжег","Кассель","Дуйсбург","Бонн","Кобленц","Трір","Цвікау","Інгольштадт",
"Баден-Баден","Оффенбург","Лар","Фрайбург","Кайзерслаутерн","Саарбрюкен","Галле","Гіссен","Майнц","Росток",
"Любек","Кіль","Лемборк","Слупськ","Яготин","Кошалін","Битом","Любляна","Мальборк","Вейгерово",
"Утрехт","Гаага","Роттердам","Тільбург","Бреда","Коло","Свебодзін","Лілль","Ланс","Ліберец",
"Усті-над-Лабем","Чеські Будейовиці","Пардубице","Злін","Кладно","Мост","Опава","Тепліце","Горохів","Оборнікі",
"Бжег","Олава","Цешин","Золотоноша","Вжесня","Нікополь","Костянтинівка","Ізюм","Чугуїв","Буковель",
"Серадз","Кемпно","Острув-Велькопольський","Яроцин","Ольборг","Йоррінг","Крістіансанн","Арендал","Ларвік","Драммен",
"Осло","Оденце","Хальмстад","Копенгаген","Свалява","Кошіце","Зволень","Братислава","Фленсбург","Приморськ","Нова Одеса","Єдинці","Рокицани","Плонськ","Млава",
"Ольштин","Ольштинек","Здолбунів","Любін","Нова Суль","Шегені","Радехів","Шпола","Суми","Ромни",
"Каварна","Балчик","Албена","Кранево","Золоті піски","Обзор","Святой Влас",
"Сонячний берег","Несебр","Равда","Ахелой","Тячів","Андрихув","Вадовице","Олькуш","Бжесько","Переяслав-Хмельницький",
"Світави","Літомишль","Високе Мито","Хомутов","Карлові Вари","Хеб","Рахів","Їглава","Чеське Будійовіце",
"Скадовськ","Ілава","Квідзин","Клодзько","Валбжих","Свідниця","Свебодзіце","Явор",
"Болеславець","Любань","Згожелець","Страконіце","Радивилів","Конотоп","Ніжин","Прилуки","Софіївка","Новоархангельськ","Щецинек","Гумполец",
"Капліце","Простейов","Зволень","Любава","Жарув","Гайдельберг","Бамберг","Ашафенбург","Дармштадт","Візбаден",
"Франкфурт-на-Одере","Вісмар","Ольденбург","Бауцен","Інновроцлав","Виноградів","Іршава","Фрайберг","Знам`янка","Аахен","Генк","Хасселт","Люмен","Левен",
"Гент","Антверпен","Дордрехт","Терни","Грац","Кагарлик","Брюге","Лейден","Ейндховен","Маастріхт","Венло","Даугавпілс",
"Гота","Страсбург","Нансі","Реймс","Мец","Вільгельмсгафен","Віттмунд","Ауріх",
"Емден","Лер","Гронінген","Енсхеде","Алмело","Апелдорн","Зволле","Люксембург","Бухарест","Русе","Велико Тирново","Гурково",
"Стара Загора","Стамбул","Охтирка","Котельва","Кіцмань","Заліщики","Товсте","Арнем","Анталія","Татарбунари",
"Ізмаїл","Констанца","Добрич","Бургас","Бурса","Бурдур","Ісакча","Браіла","Брашов","Бєльці","Оргіїв","Кишинів", 
"Мюлуз","Базель","Берн","Лозанна","Ліон","Рашат", "Трієст", "Парма","П’яченца","Тортона","Генуя","Савона","Імперія",
"Павлоград","Таллінн","Реус","Ельче","Картахена","Мотріль","Леріда","Сарагоса"
];

function autocomplete(inp, arr) {
    
    var currentFocus;
   
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
autocomplete(document.getElementById("from_city"), countries);
autocomplete(document.getElementById("to_city"), countries);