const addStaffBtn = document.getElementById("addStaffBtn");
const addPersn = document.getElementById("AddPersn");


addStaffBtn.addEventListener('click', () =>{
    addPersn.classList.toggle("hidden")
    
});

let counterExp = 0;

function addExperience() {
    counterExp++;

    const wrapper = document.createElement("div");
    wrapper.className = "border p-4 rounded-lg mb-4 bg-gray-50";
    wrapper.innerHTML = `
        <h3 class="font-bold text-lg mb-2">Experience #${counterExp}</h3>

        <label class="block mb-1 font-semibold">Experience :</label>
        <input type="text" class="experience w-full p-2 border rounded mb-3" placeholder="Enter the experience" required>

        <label class="block mb-1 font-semibold">Place:</label>
        <input type="text" class="place w-full p-2 border rounded mb-3" placeholder="Enter the place" required>

        <label class="block mb-1 font-semibold">Start Date:</label>
        <input type="date" class="start w-full p-2 border rounded mb-3" required>

        <label class="block mb-1 font-semibold">End Date:</label>
        <input type="date" class="end w-full p-2 border rounded mb-3" required>

        <button type="button" class="mt-2 bg-red-500 text-white px-3 py-1 rounded removeBtn">
            Remove This Experience
        </button>
    `;
    
    wrapper.querySelector(".removeBtn").addEventListener("click", () => {
        wrapper.remove();
    });

    document.getElementById("experiences").appendChild(wrapper);
}

addExperience();

document.getElementById("addBtn").addEventListener("click", addExperience);

document.getElementById("experienceForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Staff Saved successfully !");
});

const toExpBtn = document.getElementById("toExpBtn");
const exp = document.getElementById("experienceForm");

toExpBtn.addEventListener('click', () =>{
    exp.classList.remove("hidden");
    addPersn.classList.add("hidden");
});

addPersn.addEventListener("submit", e =>{
    e.preventDefault();
});

let backBtn = document.getElementById("backBtn");

backBtn.addEventListener('click', () =>{
    exp.classList.add("hidden");
    addPersn.classList.remove("hidden");  
});


saveBtn.addEventListener('click', () => {
    const Name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

     
    const expWrappers = document.querySelectorAll("#experiences > div");
    let experiences = [];

    expWrappers.forEach(wrapper => {
        let experience = wrapper.querySelector(".experience").value;
        let place = wrapper.querySelector(".place").value;
        let start = wrapper.querySelector(".start").value;
        let end = wrapper.querySelector(".end").value;

        experiences.push({ experience, place, start, end });
    });

    
    let Staff = {
        name: Name,
        role: role,
        phone: phone,
        email: email,
        experiences: experiences,
    };

    console.log(Staff);
    alert("Staff data collected successfully!");
});
