// this script.js

document.addEventListener("DOMContentLoaded", function() {
    // Check if user is logged in
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        window.location.href = "login.html"; // Redirect to login if not logged in
    }

    // Display user details
    document.getElementById("username").textContent = user.name;
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-email").textContent = user.email;

    // Dummy list of mechanics
    const mechanics = [
        { name: "John's Auto Repair", location: "Downtown", phone: "123-456-7890" },
        { name: "Quick Fix Garage", location: "Uptown", phone: "987-654-3210" },
        { name: "Speedy Mechanic", location: "Suburb", phone: "555-333-2222" }
    ];

    let mechanicList = document.getElementById("mechanicList");
    mechanics.forEach(mechanic => {
        let li = document.createElement("li");
        li.innerHTML = `<b>${mechanic.name}</b> - ${mechanic.location} 
                        <br> 📞 ${mechanic.phone}
                        <br> <button onclick="bookMechanic('${mechanic.name}')">Book Now</button>`;
        mechanicList.appendChild(li);
    });
  
    // Logout function
    // document.getElementById("logoutBtn").addEventListener("click", function() {
    //     localStorage.removeItem("user");
    //     window.location.href = "login.html";
    // });

    document.getElementById("findMechanicBtn").addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
    
                const map = L.map('map').setView([lat, lng], 13);
    
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(map);
    
                // Mark user's location
                L.marker([lat, lng]).addTo(map)
                    .bindPopup("You are here").openPopup();
    
                // Sample mechanics (dummy data for now)
                const mechanics = [
                    { name: "Ravi Auto Works", lat: lat + 0.01, lng: lng + 0.01 },
                    { name: "QuickFix Garage", lat: lat - 0.005, lng: lng - 0.01 }
                ];
    
                mechanics.forEach(mech => {
                    L.marker([mech.lat, mech.lng]).addTo(map)
                        .bindPopup(`<b>${mech.name}</b><br>10+ years experience`);
                });
            });
        } else {
            alert("Geolocation not supported");
        }
    });
    
});

// Dummy function for booking mechanics
function bookMechanic(name) {
    alert(`You have booked ${name}. They will contact you shortly.`);
}

// Dummy function to simulate finding mechanics
function findMechanic() {
    alert("Locating nearby mechanics... (Feature coming soon!)");
}
