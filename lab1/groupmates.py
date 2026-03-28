groupmates = [
    {"name": "Алексей", "group": "912-2", "age": 20, "marks": [5, 3, 4, 5, 3]},
    {"name": "Екатерина", "group": "912-1", "age": 19, "marks": [4, 3, 5, 3, 4]},
    {"name": "Николай", "group": "912-2", "age": 20, "marks": [3, 4, 5, 3, 5]},
    {"name": "Мария", "group": "912-1", "age": 19, "marks": [5, 5, 4, 5, 5]},
    {"name": "Сергей", "group": "912-2", "age": 21, "marks": [4, 5, 4, 3, 4]},
]


def print_students(students):
    print(
        "Имя студента".ljust(15),
        "Группа".ljust(8),
        "Возраст".ljust(8),
        "Оценки".ljust(20),
    )
    for student in students:
        print(
            student["name"].ljust(15),
            student["group"].ljust(8),
            str(student["age"]).ljust(8),
            str(student["marks"]).ljust(20),
        )
    print()


def filter_by_avg_mark(students, min_avg):
    result = []
    for student in students:
        avg = sum(student["marks"]) / len(student["marks"])
        if avg >= min_avg:
            result.append(student)
    return result


print("Студенты")
print_students(groupmates)

min_avg = 4.0
print(f"Студенты со средним баллом >= {min_avg}")
filtered = filter_by_avg_mark(groupmates, min_avg)
print_students(filtered)
