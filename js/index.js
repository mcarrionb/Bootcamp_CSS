console.log("hello world!")

document.addEventListener("DOMContentLoaded", function(){
    /* Change profile image when selected */
    const miniImgs = document.querySelectorAll(".about-me-mini-img-container img");
    const profileImg = document.querySelector(".profile-img");

    miniImgs.forEach(img => {
        img.addEventListener("click", function () {
            profileImg.src = this.src;
            miniImgs.forEach(img => img.classList.remove("selected"));

            this.classList.add("selected");
        });
    });

    /* Get all departments */
    const jobSelector = document.getElementById("job-selector");
    const options = ["Job Candidates", "Amazon Devices", "Amazon Fresh", "Amazon Pharmacy", "Appliances", "Apps & Games", "Arts, Crafts & Sewing", "Automotive Parts & Accessories", "Baby", "Beauty & Personal Care", "Books", "CDs & Vinyl", "Cell Phones & Accessories", "Clothing, Shoes & Jewelry", "Collectibles", "Computers", "Digital Music", "Electronics", "Entertainment Collectibles", "Grocery & Gourmet Food", "Handmade", "Health & Household", "Home & Kitchen", "Industrial & Scientific", "Kindle Store", "Luggage & Travel Gear"]

    options.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        jobSelector.appendChild(opt);
    });
})