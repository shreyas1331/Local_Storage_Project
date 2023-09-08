//show
function show(ev){
    pdataobj=JSON.parse(localStorage.getItem("product"));
    let container=document.querySelector(".list");
    console.log("show");
    container.innerHTML=`<tr>
    <TH>NAME</TH>
    <TH>QUANTITY</TH>
    <TH>PRICE</TH>
    <TH>ID</TH>
</tr>`;
    pdataobj.forEach((element,index) => {
        let tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${element.name}</td>
        <td>${element.qnty}</td>
        <td>${element.price}</td>
        <td>${element.id}</td>
        `;
        container.append(tr);
    })
};
let showbtn=document.querySelector(".display");
let table=document.querySelector(".list");
showbtn.addEventListener("click",ev=>{
    table.classList.toggle("hidden");
    show();
});
let updatebtn=document.querySelector(".updatebtn");
updatebtn.addEventListener("click",ev=>{
    show();
});

