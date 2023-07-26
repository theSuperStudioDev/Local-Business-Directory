// Sample data representing businesses (replace this with actual data from your backend or database)
let businesses = [
    { name: 'Business 1', category: 'Restaurant', address: '123 Main St', contact: '111-111-1111', description: 'A great restaurant serving delicious food.' },
    { name: 'Business 2', category: 'Gym', address: '456 Park Ave', contact: '222-222-2222', description: 'A fitness center with state-of-the-art equipment.' },
    // Add more businesses here...
];

// Function to display the business listings on the website
function displayBusinessListings(businessesToShow) {
    const businessListings = document.getElementById('business-listings');

    // Clear existing listings before displaying the filtered ones
    businessListings.innerHTML = '';

    businessesToShow.forEach((business) => {
        const listingDiv = document.createElement('div');
        listingDiv.className = 'business-listing';

        listingDiv.innerHTML = `
            <h2>${business.name}</h2>
            <p><strong>Category:</strong> ${business.category}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Contact:</strong> ${business.contact}</p>
            <p>${business.description}</p>
            <!-- Add more details and options if needed (e.g., reviews, ratings) -->
        `;

        businessListings.appendChild(listingDiv);
    });
}

// Function to filter businesses based on the search input
function searchBusiness() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBusinesses = businesses.filter((business) => {
        return (
            business.name.toLowerCase().includes(searchInput) ||
            business.category.toLowerCase().includes(searchInput) ||
            business.address.toLowerCase().includes(searchInput)
        );
    });
// JavaScript
// Add event listener to handle job ad submission
document.addEventListener('DOMContentLoaded', function () {
    const jobAdForm = document.getElementById('jobAdSubmitForm');
    if (jobAdForm) {
        jobAdForm.addEventListener('submit', submitJobAd);
    }
});
    // Display the filtered results
    displayBusinessListings(filteredBusinesses);
}

// Function to get businesses from local storage (or any other data source)
function getBusinesses() {
    const businessesString = localStorage.getItem('businesses');
    return JSON.parse(businessesString) || [];
}

// Function to save businesses to local storage (or any other data source)
function saveBusinesses(businesses) {
    const businessesString = JSON.stringify(businesses);
    localStorage.setItem('businesses', businessesString);
}

// Function to display the business listings on the website
function displayBusinessListings(businessesToShow) {
    const businessListings = document.getElementById('business-listings');

    // Clear existing listings before displaying the filtered ones
    businessListings.innerHTML = '';

    businessesToShow.forEach((business) => {
        const listingDiv = document.createElement('div');
        listingDiv.className = 'business-listing';

        listingDiv.innerHTML = `
            <h2>${business.name}</h2>
            <p><strong>Category:</strong> ${business.category}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Contact:</strong> ${business.contact}</p>
            <p>${business.description}</p>
            <!-- Add more details and options if needed (e.g., reviews, ratings) -->
        `;

        businessListings.appendChild(listingDiv);
    });
}

// Function to filter businesses based on the search input
function searchBusiness() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBusinesses = getBusinesses().filter((business) => {
        return (
            business.name.toLowerCase().includes(searchInput) ||
            business.category.toLowerCase().includes(searchInput) ||
            business.address.toLowerCase().includes(searchInput)
        );
    });

    // Display the filtered results
    displayBusinessListings(filteredBusinesses);
}

// Function to handle job ad submission
function submitJobAd(event) {
    event.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const jobCategory = document.getElementById('jobCategory').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const contactInfo = document.getElementById('contactInfo').value;

    // Create a new job ad object
    const newJobAd = {
        name: jobTitle,
        category: jobCategory, // Use the selected category
        address: companyName,
        contact: contactInfo,
        description: jobDescription,
    };

    // Get the existing job ads from local storage
    const jobAds = getBusinesses();

    // Add the new job ad to the existing list
    jobAds.push(newJobAd);

    // Save the updated job ads list back to local storage
    saveBusinesses(jobAds);

    // Reset the form fields after submission
    document.getElementById('jobAdSubmitForm').reset();
}
function submitJobAd(event) {
    event.preventDefault();
}
