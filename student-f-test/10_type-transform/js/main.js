// Хранение данных в браузере
let data = localStorage.getItem("studentsList");
let studentsList = []; // Массив объектов студентов

if (data !== "" && data !== null) {
  studentsList = JSON.parse(data);
}

// //Флаги для сортировки
// let sortColumnFlag = 'fio',
//     sortDirFlag = true;

//Создание элементов
//Форма добавления нового студента
const $app = document.getElementById("app"),
  $addForm = document.createElement("form"),
  $surnameInp = document.createElement("input"),
  $nameInp = document.createElement("input"),
  $lastnameInp = document.createElement("input"),
  $studyStartInp = document.createElement("input"),
  $birthdayInp = document.createElement("input"),
  $facultyInp = document.createElement("input"),
  $addForm__Btn = document.createElement("button"),
  //Таблица массива обьектов
  $table = document.createElement("table"),
  $tableHead = document.createElement("thead"),
  $tableBody = document.createElement("tbody"),
  //Заглавочная строка таблицы
  $tableHeadTr = document.createElement("tr"),
  $tableHeadThFIO = document.createElement("th"),
  $tableHeadThStudyStart = document.createElement("th"),
  $tableHeadThBirthday = document.createElement("th"),
  $tableHeadThFaculty = document.createElement("th"),
  $tableHeadDelete = document.createElement("th"),
  $tableBodyTHAll = $table.querySelectorAll("th"),
  // e.attributes['data-sort-column-flag'] = 'fio'

  //Форма фильтрации
  $filterForm = document.createElement("form"),
  $filterHeader = document.createElement("h1"),
  $filterFormFIOInp = document.createElement("input"),
  $filterFormFacultyInp = document.createElement("input"),
  $filterFormStudyStartInp = document.createElement("input"),
  $filterFormLastYStudyInp = document.createElement("input"),
  $btnResetfilter = document.createElement("button");

// //Кнопки сортировки
// $btnSortGroup = document.createElement('div'),
// $btnSortFio = document.createElement('button'),
// $btnSortStudyStart = document.createElement('button');

//Тип значений полей для ввода данных
$addForm.action = "#";
$surnameInp.type = "text";
$nameInp.type = "text";
$lastnameInp.type = "text";
$studyStartInp.type = "number";
$birthdayInp.type = "date";
$facultyInp.type = "text";

$studyStartInp.min = "2000";
$studyStartInp.max = new Date().getFullYear();
$birthdayInp.min = "1900-01-01";
$birthdayInp.max = new Date();

$addForm__Btn.type = "submit";

$filterFormFIOInp.type = "text";
$filterFormFacultyInp.type = "text";
$filterFormStudyStartInp.type = "number";
$filterFormLastYStudyInp.type = "number";
$btnResetfilter.type = "submit";

//Подписи к полям ввода данных
$surnameInp.placeholder = "Фамилия";
$nameInp.placeholder = "Имя";
$lastnameInp.placeholder = "Отчество";
$studyStartInp.placeholder = "Начало учебы";
$birthdayInp.placeholder = "Дата рождения";
$facultyInp.placeholder = "Факультет";

//Подписи столбцов списка
$tableHeadThFIO.textContent = "ФИО";
$tableHeadThStudyStart.textContent = "Начало учебы";
$tableHeadThBirthday.textContent = "Дата рождения";
$tableHeadThFaculty.textContent = "Факультет";
$addForm__Btn.textContent = "Добавить студента";

// //Подписи кнопок сортировки
// $btnSortFio.textContent = 'Сортировка по ФИО'
// $btnSortStudyStart.textContent = 'Сортировка по началу учебы'

$btnResetfilter.textContent = "Скинуть фильтр";

//Подписи формы фильтрации
$filterHeader.textContent = "Фильтрация";
$filterFormFIOInp.placeholder = "ФИО";
$filterFormFacultyInp.placeholder = "Факультет";
$filterFormStudyStartInp.placeholder = "Год начала учебы";
$filterFormLastYStudyInp.placeholder = "Год окончания учебы";

//Классы для формы добавления нового обьекта
$addForm.classList.add("mb-3");
$table.classList.add("table", "table-info", "table-striped", "table-hover");
$tableHeadTr.classList.add("table-active");
$surnameInp.classList.add("form-control", "mb-3");
$nameInp.classList.add("form-control", "mb-3");
$lastnameInp.classList.add("form-control", "mb-3");
$studyStartInp.classList.add("form-control", "mb-3");
$birthdayInp.classList.add("form-control", "mb-3");
$facultyInp.classList.add("form-control", "mb-3");
$addForm__Btn.classList.add("btn", "btn-primary", "mb-3");

// //Классы для кнопок сортировки
// $btnSortGroup.classList.add('btn-group-lg', 'mb-3', 'd-grid', 'gap-2', 'd-md-flex', 'justify-content-md-end')
// $btnSortFio.classList.add('btn', 'btn-outline-warning', 'mb-3', 'me-md-2')
// $btnSortStudyStart.classList.add('btn', 'btn-outline-warning', 'mb-3')

$btnResetfilter.classList.add("btn", "btn-warning", "mb-3");

//Классы для формы фильтрации
$filterForm.classList.add("mb-3");
$filterHeader.classList.add("mb-3");
$filterFormFIOInp.classList.add("form-control", "mb-3");
$filterFormFacultyInp.classList.add("form-control", "mb-3");
$filterFormLastYStudyInp.classList.add("form-control", "mb-3");
$filterFormStudyStartInp.classList.add("form-control", "mb-3");

//Добавление в форму полей для ввода данных
$addForm.append(
  $surnameInp,
  $nameInp,
  $lastnameInp,
  $studyStartInp,
  $birthdayInp,
  $facultyInp,
  $addForm__Btn
);
$app.append($addForm);

// //Добавление в документ группы кнопок сортировки
// $btnSortGroup.append($btnSortFio, $btnSortStudyStart)
// $app.append($btnSortGroup)

//Добавление в форму для фильтрации ее составляющих
$filterForm.append(
  $filterHeader,
  $filterFormFIOInp,
  $filterFormFacultyInp,
  $filterFormStudyStartInp,
  $filterFormLastYStudyInp,
  $btnResetfilter
);

//Добавление формы в контейнер
$app.append($filterForm);

//Добавление в шапку таблицы названий столбцов
$tableHeadTr.append(
  $tableHeadThFIO,
  $tableHeadThStudyStart,
  $tableHeadThBirthday,
  $tableHeadThFaculty,
  $tableHeadDelete
);
$tableHead.append($tableHeadTr);

//Добавление таблицы в общий блок
$table.append($tableHead, $tableBody);

$app.append($table);

//Получаем возраст студента

let copyStudentsList = [...studentsList];

function getAge(birthday) {
  birthday = new Date(birthday);

  let diff_ms = Date.now() - birthday.getTime();
  let age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

//Создание id для каждого студента
function getNewID(arr) {
  let max = 0;
  for (const item of arr) {
    if (item.id > max) max = item.id;
  }
  return max + 1;
}

// let column = 'fio',
//     columnDir = true

//     // Получить сортировку массива по параметрам
// function getSortstudents(prop, dir) {
//   let studentsCopy = [...students]
//   return studentsCopy.sort(function(studentA, studentB) {
//       if ((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
//           return -1;
//   })
// }

// Функция вывода одного студента в таблицу. Возвращает html элемент с информацией о пользователе
function getStudentItem(student) {
  //Создание строки с информацией об 1 обьекте
  const $studentTr = document.createElement("tr"),
    $studentFIO = document.createElement("th"),
    $studentStudyStart = document.createElement("th"),
    $studentBirthday = document.createElement("th"),
    $studentFaculty = document.createElement("th"),
    $studentID = getNewID(copyStudedntsList),
    $studDelete = document.createElement("th"),
    $btnStudDelete = document.createElement("button");

  //Классы для кнопки удаления строки со студентом
  $btnStudDelete.classList.add("btn", "btn-outline-danger");

  //   let copyStudentsList = [...studentsList];

  //Правильное склонение возраста: «год», «года», «лет»
  function declOfNumbers(age) {
    let count = age % 100;

    if (count >= 10 && count <= 20) {
      return "лет";
    } else {
      count = age % 10;
      if (count === 1) {
        return "год";
      } else if (count >= 2 && count <= 4) {
        return "года";
      } else {
        return "лет";
      }
    }
  }

  // //Получаем возраст студента

  // function getAge(birthday) {
  //     birthday = new Date(birthday)

  //     let diff_ms = Date.now() - birthday.getTime();
  //     let age_dt = new Date(diff_ms);

  //     return Math.abs(age_dt.getUTCFullYear() - 1970);
  // }
  // document.write(declOfNumbers(getAge(student.birthday), ['год', 'года', 'лет']));
  // console.log(new Date(student.birthday).toLocaleDateString())

  //ФИО обьекта
  for (const student of copyStudentsList) {
    student.birthday = new Date(student.birthday);

    student.fio = student.surname + " " + student.name + " " + student.lastname;
    student.lastY = student.studyStart + 4;
    student.age =
      getAge(student.birthday) + " " + declOfNumbers(getAge(student.birthday));

    //Метод который возвращает текущий курс(student.currCourse) студента
    student.currentObjCourse = function () {
      let startDate = new Date(student.studyStart, 8, 1);
      let diff_ms = Date.now() - startDate.getTime();
      currCourse = Math.floor(diff_ms / (365 * 24 * 60 * 60 * 1000));

      if (student.studyStart == new Date().getFullYear()) {
        return `${currCourse + 1} курс`;
      } else if (currCourse == 0) {
        return `${currCourse + 1} курс`;
      } else if (currCourse <= 4) {
        return `${currCourse} курс`;
      } else {
        return `Закончил обучение`;
      }
    };
  }

  //добавление в колонки информации об обьекте из формы для ввода данных
  $studentFIO.textContent = student.fio;
  $studentStudyStart.textContent =
    student.studyStart +
    "-" +
    student.lastY +
    " " +
    " (" +
    student.currentObjCourse() +
    ")";
  $studentBirthday.textContent =
    new Date(student.birthday).toLocaleDateString() + " (" + student.age + ")";
  ($studentFaculty.textContent = student.faculty),
    ($btnStudDelete.textContent = "Удалить");

  $btnStudDelete.addEventListener("click", () => {
    $studentTr.remove();
    studentsList = studentsList.filter((el) => el.id !== $studentTr.id);
    localStorage.setItem("studentsList", JSON.stringify(studentsList));
  });

  $studDelete.append($btnStudDelete);
  //Добавление в строку обьекта столбцов
  $studentTr.append(
    $studentFIO,
    $studentStudyStart,
    $studentBirthday,
    $studentFaculty,
    $studDelete
  );

  // console.log(student);
  return $studentTr;
}

for (const student of studentsList) {
  getStudentItem(student);
}

//Фильтрация
function filter(arr, prop, value) {
  return arr.filter(function (student) {
    return String(student[prop]).includes(value.trim());
  });

  // let result = [],
  //     copy = [...arr]
  // for (const item of copy) {
  //     if (String(item[prop]).toLowerCase().includes(value.toLowerCase().trim()) == true) result.push(item)

  // }
  // return result
}
//Флаги для сортировки
let sortColumnFlag = "fio",
  sortDirFlag = true;
// const $studentsList = document.getElementById('students-list'),
//     $studentsListTHAll = document.querySelectorAll('.studentsTable th');

// Событие сортировки
$tableBodyTHAll.forEach((element) => {
  element.addEventListener("click", function () {
    sortColumnFlag = "fio";
    sortDirFlag = !sortDirFlag;
    render(studentsList);
  });
});

//Рендер

// Функция отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.
function render(studentsList) {
  //Очищает содержимое таблицы обьектов для ее перерисовки
  $tableBody.innerHTML = "";

  //Подготовка
  let copyStudentsList = [...studentsList];

  // Получить сортировку массива по параметрам
  function getSortstudents(prop, dir) {
    return copyStudentsList.sort(function (studentA, studentB) {
      if (
        !dir == false
          ? studentA[prop] < studentB[prop]
          : studentA[prop] > studentB[prop]
      )
        return -1;
    });
  }

  copyStudentsList = getSortstudents(sortColumnFlag, sortDirFlag);

  // //Сортировка
  // copyStudentsList = copyStudentsList.sort(function(a, b) {
  //     let sort = a[sortColumnFlag] < b[sortColumnFlag]
  //     if (sortDirFlag == false) sort = a[sortColumnFlag] > b[sortColumnFlag]
  //     if (sort) return -1;
  // })

  //Фильтрация
  if ($filterFormFIOInp.value.trim() !== "") {
    copyStudentsList = filter(copyStudentsList, "fio", $filterFormFIOInp.value);
  }

  if ($filterFormFacultyInp.value.trim() !== "") {
    copyStudentsList = filter(
      copyStudentsList,
      "faculty",
      $filterFormFacultyInp.value
    );
  }

  if ($filterFormStudyStartInp.value.trim() !== "") {
    copyStudentsList = filter(
      copyStudentsList,
      "studyStart",
      $filterFormStudyStartInp.value
    );
  }

  if ($filterFormLastYStudyInp.value.trim() !== "") {
    copyStudentsList = filter(
      copyStudentsList,
      "lastY",
      $filterFormLastYStudyInp.value
    );
  }

  //Отрисовка
  for (const student of copyStudentsList) {
    const $newTr = getStudentItem(student);
    $tableBody.append($newTr);
  }
  $addForm.reset();

  localStorage.setItem("studentsList", JSON.stringify(studentsList));
}
render(studentsList);

//Валидация для формы добавления обьекта
$addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //Валидация
  if ($surnameInp.value.trim() == "") {
    $surnameInp.classList.add(
      "login",
      "error-label",
      "border",
      "border-danger"
    );
    $surnameInp.placeholder = "Поле не заполнено! Введите фамилию студента";
    return;
  }

  if ($nameInp.value.trim() == "") {
    $nameInp.classList.add("login", "error-label", "border", "border-danger");
    $nameInp.placeholder = "Поле не заполнено! Введите имя студента";
    return;
  }

  if ($lastnameInp.value.trim() == "") {
    $lastnameInp.classList.add(
      "login",
      "error-label",
      "border",
      "border-danger"
    );
    $lastnameInp.placeholder = "Поле не заполнено! Введите отчество студента";
    return;
  }

  if ($studyStartInp.value.trim() == "") {
    $studyStartInp.classList.add(
      "login",
      "error-label",
      "border",
      "border-danger"
    );
    $studyStartInp.placeholder =
      "Поле не заполнено! Введите год начала учебы студента";
    return;
  }

  if ($birthdayInp.value.trim() == "") {
    $birthdayInp.classList.add(
      "login",
      "error-label",
      "border",
      "border-danger"
    );
    $birthdayInp.placeholder =
      "Поле не заполнено! Введите дату рождения студента";
    return;
  }

  if (getAge(new Date($birthdayInp.value.trim())) < 16) {
    alert("Студенту меньше 16-ти лет!");
    return;
  }

  if ($facultyInp.value.trim() == "") {
    $facultyInp.classList.add(
      "login",
      "error-label",
      "border",
      "border-danger"
    );
    $facultyInp.placeholder = "Поле не заполнено! Введите факультет студента";
    return;
  }

  // //Функция которая возвращает текущий курс(student.course) студента

  // currentObjCourse() {
  //     let startY = 2017
  //     let startDate = new Date(startY, 8, 1)

  //     let diff_ms = Date.now() - startDate.getTime();
  //     let diff_date = new Date(diff_ms);
  //     let course = Math.abs(diff_date.getUTCFullYear() - 1970)

  //     if (course <= 4) {
  //         console.log(`${course} курс`)
  //     } else {
  //         console.log('Закончил обучение')
  //     }

  // }

  //Добавление в массив нового обьекта из данными из полей для ввода
  let studentObj = {
    surname: $surnameInp.value.trim(),
    name: $nameInp.value.trim(),
    lastname: $lastnameInp.value.trim(),
    studyStart: Number($studyStartInp.value.trim()),
    birthday: new Date($birthdayInp.value.trim()),
    faculty: $facultyInp.value.trim(),
  };

  studentsList.push(studentObj);
  render(studentsList);

  localStorage.setItem("studentsList", JSON.stringify(studentsList));
});

// //Функция сортировки массива студентов
// //Клики сортировки
// $btnSortFio.addEventListener('click', function() {
//     sortColumnFlag = 'fio'
//     sortDirFlag = !sortDirFlag
//     render(studentsList)
// })

// $btnSortStudyStart.addEventListener('click', function() {
//     sortColumnFlag = 'studyStart'
//     sortDirFlag = !sortDirFlag
//     render(studentsList)
// })

//Фильтрации массива студентов и добавьте события для элементов формы.

$filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  render(studentsList);
});

$filterFormFIOInp.addEventListener("input", function () {
  render(studentsList);
});

$filterFormFacultyInp.addEventListener("input", function () {
  render(studentsList);
});

$filterFormStudyStartInp.addEventListener("input", function () {
  render(studentsList);
});

$filterFormLastYStudyInp.addEventListener("input", function () {
  render(studentsList);
});

$btnResetfilter.addEventListener("click", function (e) {
  e.preventDefault();
  $filterForm.reset();
  render(studentsList);
});
