fetch("https://isro.vercel.app/api/launchers").then((data => {
    // console.log(data)
    return data.json();
})).then(
    (objectData) => {
        console.log(objectData.launchers[0].id);
        let tableData = "";
        objectData.launchers.map((values) => {
            tableData += ` <tr>
            <td>${values.id}</td>
            </tr>`
        })
        document.getElementById("table_body").innerHTML = tableData;

    })





