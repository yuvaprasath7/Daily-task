// function search() {
//     const input = document.getElementById("getInputValue");
//     const inputStr = input.value.toUpperCase();
//     document.querySelectorAll('#myTable tr:not(.header)').forEach((tr) => {
//         const anyMatch = [...tr.children]
//             .some(td => td.textContent.toUpperCase().includes(inputStr));
//         if (anyMatch) tr.style.removeProperty('display');
//         else tr.style.display = 'none';
//     });
// }
// function myFunction() {
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("mylist");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }

// }


// <!-- <input type="text" id="getInputValue" onkeypress="search()"> -->
// <!-- <select name="cars" id="cars">
//     <option value="male">All</option>
//     <option value="male">Male</option>
//     <option value="female">Female</option>
//     <option value="audi">Audi</option>
//     <option value="audi">Audi</option>
//     <option value="audi">Audi</option>
// </select> -->