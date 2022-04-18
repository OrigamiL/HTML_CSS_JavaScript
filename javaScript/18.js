/**
 * 18-2
 */
var fromJava = "{\"total\":3,\"student\":[{\"name\":\"张三\",\"age\":18},{\"name\":\"李四\"," +
    "\"age\":19},{\"name\":\"王五\",\"age\":20}]}";
var students = JSON.parse(fromJava);
window.onload = function () {
    document.getElementById("btn").onclick = function () {
        document.getElementById("span1").innerHTML = students.total;
        console.log(students.student.length)
        for (var i = 0; i < students.student.length; i++) {
            document.getElementById("tbody1").innerHTML += "<tr><td>" + (i+1) +
                "</td><td>" + students.student[i].name + "</td><td>" + students.student[i].age + "<tr></tr>";
        }
    }
}