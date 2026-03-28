var groupmates = [
    {
        "name": "Алексей",
        "group": "911-2",
        "age": 20,
        "marks": [5, 4, 4, 5, 3]
    },
    {
        "name": "Екатерина",
        "group": "911-1",
        "age": 19,
        "marks": [4, 3, 4, 3, 4]
    },
    {
        "name": "Николай",
        "group": "911-2",
        "age": 20,
        "marks": [3, 4, 5, 4, 5]
    },
    {
        "name": "Мария",
        "group": "911-1",
        "age": 19,
        "marks": [5, 5, 4, 5, 5]
    },
    {
        "name": "Сергей",
        "group": "911-2",
        "age": 21,
        "marks": [4, 5, 4, 3, 4]
    },
    {
        "name": "Ольга",
        "group": "911-1",
        "age": 20,
        "marks": [5, 4, 5, 4, 5]
    }
];

console.log(groupmates);

var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length)
        str = str + ' ';
    return str;
};

var printStudents = function(students) {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );
    for (var i = 0; i <= students.length - 1; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['age'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n');
};

printStudents(groupmates);

var filterByGroup = function(students, group) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i]['group'] === group) {
            result.push(students[i]);
        }
    }
    return result;
};

console.log("Студенты группы 911-1:");
printStudents(filterByGroup(groupmates, "911-1"));

console.log("Студенты группы 911-2:");
printStudents(filterByGroup(groupmates, "911-2"));
