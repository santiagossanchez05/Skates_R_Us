// Function to handle form submission
document.getElementById("post-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const picture = document.getElementById("picture").files[0];

  if (name && description && picture) {
      // Create a new listing object
      const newListing = {
          name,
          description,
          picture: URL.createObjectURL(picture), // Convert the image file to a URL
      };

      // Get existing listings from localStorage or create an empty array
      const existingListings = JSON.parse(localStorage.getItem("listings")) || [];

      // Add the new listing to the existing listings
      existingListings.push(newListing);

      // Store the updated listings back in localStorage
      localStorage.setItem("listings", JSON.stringify(existingListings));

      // Clear the form
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("picture").value = "";

      // Redirect to the marketplace page (e.g., "marketplace.html")
      window.location.href = "marketplace3.html";
  }
});
