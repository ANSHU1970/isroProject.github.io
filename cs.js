fetch("https://isro.vercel.app/api/customer_satellites").then((data => {
    // console.log(data)
    return data.json();
})).then(
    (objectData) => {
        console.log(objectData.customer_satellites[0].id);
        let tableData = "";
        objectData.customer_satellites.map((values) => {
            tableData += ` <tr>
            <td>${values.id}</td>
            <td>${values.country}</td>
            <td>${values.launch_date}</td>
            <td>${values.mass}</td>
            <td>${values.launcher}</td>
          </tr>`
        })
        document.getElementById("table_body").innerHTML = tableData;

    })





