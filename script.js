const hotels = [
  {
    id: 1,
    name: "Grand Hyatt Kochi",
    location: "Kochi, Kerala",
    city: "Kochi",
    rating: 4.8,
    price: 6500,
    room: "Deluxe King Room",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    description:
      "A luxurious waterfront hotel in Kochi offering elegant rooms, excellent dining and beautiful views.",
    amenities: ["Free WiFi", "Swimming Pool", "Breakfast", "Spa", "Parking"],
  },

  {
    id: 2,
    name: "Taj Malabar Resort",
    location: "Kochi, Kerala",
    city: "Kochi",
    rating: 4.7,
    price: 7200,
    room: "Premium Sea View",
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
    description:
      "A beautiful luxury resort overlooking the backwaters of Kochi with premium hospitality.",
    amenities: ["Sea View", "Free WiFi", "Pool", "Restaurant", "Gym"],
  },

  {
    id: 3,
    name: "Kochi Marriott Hotel",
    location: "Edappally, Kochi",
    city: "Kochi",
    rating: 4.6,
    price: 5800,
    room: "Executive Room",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern hotel located near Lulu Mall with comfortable rooms and excellent city access.",
    amenities: ["Breakfast", "Gym", "Pool", "Free WiFi", "Parking"],
  },

  /* ================= GOA ================= */

  {
    id: 4,
    name: "Taj Exotica Resort",
    location: "Benaulim, Goa",
    city: "Goa",
    rating: 4.9,
    price: 8500,
    room: "Luxury Garden Villa",
    guests: 4,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    description:
      "A luxury beach resort surrounded by tropical gardens and located close to the Arabian Sea.",
    amenities: ["Beach Access", "Pool", "Spa", "Breakfast", "WiFi"],
  },

  {
    id: 5,
    name: "W Goa",
    location: "Vagator, Goa",
    city: "Goa",
    rating: 4.8,
    price: 9200,
    room: "Ocean View Room",
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=80",
    description:
      "A stylish beachfront resort in Vagator offering modern rooms, nightlife and ocean views.",
    amenities: ["Beach", "Pool", "Restaurant", "Bar", "WiFi"],
  },

  {
    id: 6,
    name: "Goa Marriott Resort",
    location: "Miramar, Goa",
    city: "Goa",
    rating: 4.6,
    price: 6900,
    room: "Deluxe Room",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
    description:
      "A comfortable resort near Miramar Beach offering modern rooms and relaxing facilities.",
    amenities: ["Beach Access", "Pool", "Gym", "Breakfast", "Parking"],
  },

  /* ================= MUMBAI ================= */

  {
    id: 7,
    name: "The Taj Mahal Palace",
    location: "Colaba, Mumbai",
    city: "Mumbai",
    rating: 4.9,
    price: 11000,
    room: "Luxury Palace Room",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    description:
      "An iconic luxury hotel overlooking the Gateway of India in the heart of Mumbai.",
    amenities: ["Sea View", "Pool", "Spa", "Fine Dining", "WiFi"],
  },

  {
    id: 8,
    name: "The Oberoi Mumbai",
    location: "Marine Drive, Mumbai",
    city: "Mumbai",
    rating: 4.8,
    price: 9800,
    room: "Premier Sea View",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
    description:
      "A sophisticated luxury hotel located near Marine Drive with beautiful views of the Arabian Sea.",
    amenities: ["Sea View", "Pool", "Spa", "Gym", "Restaurant"],
  },

  {
    id: 9,
    name: "ITC Grand Central",
    location: "Parel, Mumbai",
    city: "Mumbai",
    rating: 4.6,
    price: 7600,
    room: "Executive Club Room",
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium city hotel offering elegant rooms and convenient access to Mumbai's business districts.",
    amenities: ["Pool", "Gym", "Breakfast", "WiFi", "Parking"],
  },

  /* ================= BANGALORE ================= */

  {
    id: 10,
    name: "The Leela Palace",
    location: "HAL Road, Bangalore",
    city: "Bangalore",
    rating: 4.9,
    price: 9000,
    room: "Royal Club Room",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
    description:
      "A grand luxury palace hotel offering elegant rooms, beautiful gardens and premium services.",
    amenities: ["Pool", "Spa", "Gym", "Breakfast", "WiFi"],
  },

  {
    id: 11,
    name: "Taj West End",
    location: "Race Course Road, Bangalore",
    city: "Bangalore",
    rating: 4.8,
    price: 7800,
    room: "Luxury Garden Room",
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    description:
      "A peaceful luxury hotel surrounded by lush gardens in central Bangalore.",
    amenities: ["Garden", "Pool", "Restaurant", "Spa", "WiFi"],
  },

  {
    id: 12,
    name: "ITC Gardenia",
    location: "Residency Road, Bangalore",
    city: "Bangalore",
    rating: 4.7,
    price: 8200,
    room: "Tower Suite",
    guests: 4,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern luxury hotel offering spacious suites and premium dining experiences.",
    amenities: ["Pool", "Gym", "Spa", "Restaurant", "WiFi"],
  },

  /* ================= DELHI ================= */

  {
    id: 13,
    name: "The Imperial New Delhi",
    location: "Connaught Place, Delhi",
    city: "Delhi",
    rating: 4.8,
    price: 8800,
    room: "Luxury Heritage Room",
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    description: "A historic luxury hotel located in the heart of New Delhi.",
    amenities: ["Pool", "Spa", "Restaurant", "Gym", "WiFi"],
  },

  {
    id: 14,
    name: "The Lalit New Delhi",
    location: "Barakhamba Avenue, Delhi",
    city: "Delhi",
    rating: 4.5,
    price: 6200,
    room: "Deluxe Room",
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
    description:
      "A centrally located premium hotel with modern facilities and comfortable rooms.",
    amenities: ["Pool", "Breakfast", "Gym", "WiFi", "Parking"],
  },

  /* ================= ST REGIS MUMBAI ================= */

  {
    id: 15,
    name: "The St. Regis Mumbai",
    location: "Lower Parel, Mumbai",
    city: "Mumbai",
    rating: 4.7,
    price: 17500,
    room: "Deluxe King Room",
    guests: 3,

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",

    description:
      "A luxury hotel in Lower Parel offering elegant rooms, premium dining, spa, swimming pool and convenient access to shopping and entertainment.",

    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Fitness Center",
      "Parking",
      "Room Service",
      "Concierge",
    ],
  },
];

/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let currentHotels = [...hotels];

let selectedHotel = null;

let selectedRating = "all";

/* =====================================================
   INITIAL PAGE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setMinimumDates();

  displayHotels(hotels);

  setupScrollAnimations();
});

/* =====================================================
   DISPLAY HOTELS
===================================================== */

function displayHotels(hotelList) {
  const container = document.getElementById("hotelContainer");

  const loading = document.getElementById("loading");

  const noResults = document.getElementById("noResults");

  container.innerHTML = "";

  noResults.classList.remove("show");

  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    if (hotelList.length === 0) {
      noResults.classList.add("show");

      return;
    }

    hotelList.forEach((hotel, index) => {
      const card = document.createElement("div");

      card.className = "hotel-card";

      card.style.animationDelay = `${index * 0.08}s`;

      card.innerHTML = `

                <div class="hotel-image">

                    <img
                        src="${hotel.image}"
                        alt="${hotel.name}"
                    >

                    <span class="hotel-badge">
                        ${hotel.rating >= 4.8 ? "Top Rated" : "Popular"}
                    </span>

                    <span class="hotel-rating">
                        ⭐ ${hotel.rating}
                    </span>

                </div>


                <div class="hotel-info">

                    <h3>
                        ${hotel.name}
                    </h3>

                    <div class="hotel-location">
                        📍 ${hotel.location}
                    </div>

                    <p class="hotel-description">
                        ${hotel.description}
                    </p>


                    <div class="hotel-bottom">

                        <div class="price">

                            <strong>
                                ₹${hotel.price.toLocaleString("en-IN")}
                            </strong>

                            <span>
                                / night
                            </span>

                        </div>


                        <button
                            class="view-btn"
                            onclick="openHotel(${hotel.id})">

                            View Details

                        </button>

                    </div>

                </div>

            `;

      container.appendChild(card);
    });
  }, 450);
}

/* =====================================================
   LOCATION SUGGESTIONS
===================================================== */

function showLocationSuggestions() {
  const input = document.getElementById("locationInput");

  const suggestions = document.getElementById("locationSuggestions");

  const value = input.value.trim().toLowerCase();

  if (!value) {
    suggestions.classList.remove("show");

    return;
  }

  const locations = [...new Set(hotels.map((hotel) => hotel.city))];

  const matches = locations.filter((location) =>
    location.toLowerCase().includes(value),
  );

  if (matches.length === 0) {
    suggestions.innerHTML = `
            <div class="location-option">
                🔍 No matching destination
            </div>
        `;

    suggestions.classList.add("show");

    return;
  }

  suggestions.innerHTML = matches
    .map(
      (location) => `

            <div
                class="location-option"
                onclick="selectLocation('${location}')">

                📍 ${location}

            </div>

        `,
    )
    .join("");

  suggestions.classList.add("show");
}

/* =====================================================
   SELECT LOCATION
===================================================== */

function selectLocation(location) {
  document.getElementById("locationInput").value = location;

  document.getElementById("locationSuggestions").classList.remove("show");

  searchHotels();
}

/* =====================================================
   SEARCH HOTELS
===================================================== */

function searchHotels() {
  const location = document
    .getElementById("locationInput")
    .value.trim()
    .toLowerCase();

  const checkIn = document.getElementById("checkIn").value;

  const checkOut = document.getElementById("checkOut").value;

  const guests = Number(document.getElementById("guests").value);

  /* ================= DATE VALIDATION ================= */

  if (checkIn && checkOut) {
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out date must be after check-in date.");

      return;
    }
  }

  /* ================= FILTER LOCATION ================= */

  let results = hotels.filter((hotel) => {
    const locationMatch =
      !location ||
      hotel.city.toLowerCase().includes(location) ||
      hotel.location.toLowerCase().includes(location);

    const guestMatch = hotel.guests >= guests;

    return locationMatch && guestMatch;
  });

  /* ================= RATING FILTER ================= */

  if (selectedRating !== "all") {
    results = results.filter((hotel) => hotel.rating >= selectedRating);
  }

  currentHotels = results;

  /* ================= RESULT TEXT ================= */

  const resultText = document.getElementById("hotelResultText");

  if (location) {
    if (results.length > 0) {
      resultText.innerHTML = `Showing ${results.length} hotel(s) in <strong>${capitalize(location)}</strong>`;
    } else {
      resultText.innerHTML = `No hotels available in <strong>${capitalize(location)}</strong>`;
    }
  } else {
    resultText.innerHTML = "Discover comfortable stays in popular destinations";
  }

  /* ================= DISPLAY ================= */

  displayHotels(results);

  /* ================= SCROLL ================= */

  setTimeout(() => {
    document.getElementById("hotels").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

/* =====================================================
   RATING FILTER
===================================================== */

function filterByRating(rating, button) {
  selectedRating = rating;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  const location = document
    .getElementById("locationInput")
    .value.trim()
    .toLowerCase();

  let results = hotels.filter((hotel) => {
    const locationMatch =
      !location ||
      hotel.city.toLowerCase().includes(location) ||
      hotel.location.toLowerCase().includes(location);

    return locationMatch;
  });

  if (rating !== "all") {
    results = results.filter((hotel) => hotel.rating >= rating);
  }

  currentHotels = results;

  displayHotels(results);

  const resultText = document.getElementById("hotelResultText");

  if (location) {
    resultText.innerHTML = `Showing ${results.length} hotel(s) in <strong>${capitalize(location)}</strong>`;
  } else {
    resultText.innerHTML = `Showing hotels rated ${rating}+`;
  }
}

/* =====================================================
   SHOW ALL HOTELS
===================================================== */

function showAllHotels() {
  document.getElementById("locationInput").value = "";

  selectedRating = "all";

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.querySelector(".filter-btn").classList.add("active");

  currentHotels = [...hotels];

  displayHotels(hotels);

  document.getElementById("hotelResultText").innerText =
    "Discover comfortable stays in popular destinations";
}

/* =====================================================
   HOTEL DETAILS MODAL
===================================================== */

/* =====================================================
   OPEN HOTEL DETAILS PAGE
===================================================== */

function openHotel(id) {
  const hotel = hotels.find((hotel) => hotel.id === id);

  if (!hotel) {
    return;
  }

  // Save selected hotel
  localStorage.setItem("selectedHotelId", id);

  // Navigate to separate hotel details page
  window.location.href = `hotel-details.html?id=${id}`;
}

/* =====================================================
   CLOSE HOTEL MODAL
===================================================== */

function closeModal() {
  document.getElementById("hotelModal").classList.remove("show");

  document.body.style.overflow = "auto";
}

/* =====================================================
   BOOK HOTEL
===================================================== */

function bookHotel() {
  if (!selectedHotel) return;

  const checkIn = document.getElementById("checkIn").value;

  const checkOut = document.getElementById("checkOut").value;

  const guests = document.getElementById("guests").value;

  if (!checkIn || !checkOut) {
    alert("Please select your check-in and check-out dates first.");

    return;
  }

  const message = document.getElementById("bookingMessage");

  message.innerHTML = `

        Your booking at
        <strong>${selectedHotel.name}</strong>
        is confirmed for
        <strong>${formatDate(checkIn)}</strong>
        to
        <strong>${formatDate(checkOut)}</strong>
        for
        <strong>${guests} guest(s)</strong>.

    `;

  closeModal();

  document.getElementById("bookingSuccess").classList.add("show");
}

/* =====================================================
   CLOSE BOOKING SUCCESS
===================================================== */

function closeBookingSuccess() {
  document.getElementById("bookingSuccess").classList.remove("show");
}

/* =====================================================
   DATE SETUP
===================================================== */

function setMinimumDates() {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, "0");

  const day = String(today.getDate()).padStart(2, "0");

  const todayString = `${year}-${month}-${day}`;

  const checkIn = document.getElementById("checkIn");

  const checkOut = document.getElementById("checkOut");

  checkIn.min = todayString;

  checkOut.min = todayString;

  checkIn.addEventListener("change", () => {
    checkOut.min = checkIn.value;
  });
}

/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/* =====================================================
   CAPITALIZE
===================================================== */

function capitalize(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* =====================================================
   CONTACT FORM
===================================================== */

function submitContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value;

  alert(`Thank you ${name}! Your message has been received.`);

  document.getElementById("contactForm").reset();
}

/* =====================================================
   SCROLL TO HOTELS
===================================================== */

function scrollToHotels() {
  document.getElementById("hotels").scrollIntoView({
    behavior: "smooth",
  });
}

/* =====================================================
   SCROLL TO TOP
===================================================== */

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scrollTop");

  if (window.scrollY > 500) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

/* =====================================================
   CLOSE MODALS BY CLICKING OUTSIDE
===================================================== */

window.addEventListener("click", (event) => {
  const hotelModal = document.getElementById("hotelModal");

  const bookingSuccess = document.getElementById("bookingSuccess");

  if (event.target === hotelModal) {
    closeModal();
  }

  if (event.target === bookingSuccess) {
    closeBookingSuccess();
  }
});

/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();

    closeBookingSuccess();
  }
});

/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */

function setupScrollAnimations() {
  const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  /* ================= COUNTERS ================= */

  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {
          entry.target.classList.add("counted");

          animateCounter(entry.target);
        }
      });
    },
    {
      threshold: 0.6,
    },
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

/* =====================================================
   COUNTER ANIMATION
===================================================== */

function animateCounter(counter) {
  const target = Number(counter.dataset.target);

  let current = 0;

  const increment = Math.ceil(target / 80);

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;

      clearInterval(timer);
    }

    counter.innerText = current.toLocaleString("en-IN") + "+";
  }, 20);
}

/* =====================================================
   CLOSE LOCATION SUGGESTIONS
===================================================== */

document.addEventListener("click", (event) => {
  const locationInput = document.getElementById("locationInput");

  const suggestions = document.getElementById("locationSuggestions");

  if (
    !locationInput.contains(event.target) &&
    !suggestions.contains(event.target)
  ) {
    suggestions.classList.remove("show");
  }
});
/* =====================================================
   HOTEL DETAILS PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const detailsPage = document.getElementById("detailName");

  // Run only on hotel-details.html
  if (!detailsPage) {
    return;
  }

  loadHotelDetails();
});

/* =====================================================
   LOAD SELECTED HOTEL
===================================================== */

function loadHotelDetails() {
  const params = new URLSearchParams(window.location.search);

  const hotelId = Number(params.get("id"));

  const hotel = hotels.find((hotel) => hotel.id === hotelId);

  if (!hotel) {
    document.getElementById("detailName").innerText = "Hotel not found";

    return;
  }

  /* ================= BASIC DETAILS ================= */

  document.getElementById("detailName").innerText = hotel.name;

  document.getElementById("breadcrumbName").innerText = hotel.name;

  document.getElementById("detailLocation").innerText = hotel.location;

  document.getElementById("detailRating").innerText = hotel.rating;

  document.getElementById("detailReviews").innerText =
    getReviewCount(hotel) + " reviews";

  /* ================= PRICE ================= */

  document.getElementById("detailPrice").innerText =
    "₹" + hotel.price.toLocaleString("en-IN");

  /* ================= IMAGES ================= */

  document.getElementById("detailMainImage").src = hotel.image;

  document.getElementById("detailImage2").src = hotel.image;

  document.getElementById("detailImage3").src = hotel.image;

  document.getElementById("detailImage4").src = hotel.image;

  /* ================= ABOUT ================= */

  document.getElementById("detailAbout").innerText = hotel.description;

  document.getElementById("detailAbout2").innerText =
    `${hotel.name} provides comfortable accommodation with convenient facilities for both leisure and business travellers. Guests can enjoy the hotel's rooms, dining facilities, internet access and other services during their stay.`;

  /* ================= AMENITIES ================= */

  const amenities = document.getElementById("detailAmenities");

  amenities.innerHTML = hotel.amenities
    .map(
      (item) => `

        <div class="detail-amenity">

            <i class="fa-solid fa-circle-check"></i>

            <span>
                ${item}
            </span>

        </div>

      `,
    )
    .join("");

  /* ================= ROOMS ================= */

  createRooms(hotel);

  /* ================= REVIEWS ================= */

  document.getElementById("reviewScore").innerText = hotel.rating;

  document.getElementById("reviewCount").innerText =
    getReviewCount(hotel) + " reviews";

  /* ================= ADDRESS ================= */

  const address = getHotelAddress(hotel);

  document.getElementById("detailHotelAddress").innerText = hotel.name;

  document.getElementById("detailAddress").innerText = address;

  /* ================= MAP ================= */

  const mapQuery = encodeURIComponent(address);

  document.getElementById("hotelMap").src =
    `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  document.getElementById("googleMapLink").href =
    `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  /* ================= PARKING ================= */

  document.getElementById("parkingDetails").innerText =
    "Parking facilities are available for guests. Valet parking may be available depending on the property.";

  /* ================= INTERNET ================= */

  document.getElementById("internetDetails").innerText =
    "Wi-Fi internet access is available for guests. Availability and charges may vary by property.";

  /* ================= POLICIES ================= */

  createPolicies(hotel);

  /* ================= ACCESSIBILITY ================= */

  createAccessibility();

  /* ================= DATE ================= */

  setupDetailDates();
}

/* =====================================================
   REVIEW COUNT
===================================================== */

function getReviewCount(hotel) {
  // Special detailed value for St. Regis
  if (hotel.id === 15) {
    return 774;
  }

  // Demo value for other hotels
  return Math.floor(hotel.rating * 100) + 120;
}

/* =====================================================
   HOTEL ADDRESS
===================================================== */

function getHotelAddress(hotel) {
  if (hotel.id === 15) {
    return "462 Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013";
  }

  return `${hotel.location}, India`;
}

/* =====================================================
   CREATE ROOMS
===================================================== */

function createRooms(hotel) {
  const container = document.getElementById("roomsContainer");

  const rooms = [
    {
      name: hotel.room,
      image: hotel.image,
      guests: hotel.guests,
      price: hotel.price,
      features: [
        "Free WiFi",
        "Air conditioning",
        "Private bathroom",
        "Daily housekeeping",
      ],
    },

    {
      name: "Premium Room",
      image: hotel.image,
      guests: hotel.guests + 1,
      price: hotel.price + 2000,
      features: [
        "Premium room",
        "Free WiFi",
        "Breakfast available",
        "City view",
      ],
    },

    {
      name: "Luxury Suite",
      image: hotel.image,
      guests: hotel.guests + 2,
      price: hotel.price + 7000,
      features: [
        "Separate living area",
        "Premium amenities",
        "Room service",
        "Luxury bathroom",
      ],
    },
  ];

  container.innerHTML = rooms
    .map(
      (room) => `

        <article class="detail-room-card">

            <img
                src="${room.image}"
                alt="${room.name}">


            <div class="detail-room-info">

                <h3>
                    ${room.name}
                </h3>


                <div class="room-meta">

                    <span>
                        <i class="fa-solid fa-user-group"></i>
                        Sleeps ${room.guests}
                    </span>


                    <span>
                        <i class="fa-solid fa-bed"></i>
                        Comfortable bedding
                    </span>

                </div>


                <div class="room-feature-list">

                    ${room.features
                      .map(
                        (feature) => `
                          <span>
                              ✓ ${feature}
                          </span>
                        `,
                      )
                      .join("")}

                </div>

            </div>


            <div class="detail-room-price">

                <small>
                    Starting from
                </small>

                <strong>
                    ₹${room.price.toLocaleString("en-IN")}
                </strong>

                <span>
                    / night
                </span>


                <button
                    onclick="reserveDetailRoom('${room.name}')">

                    Reserve

                </button>

            </div>

        </article>

      `,
    )
    .join("");
}

/* =====================================================
   POLICIES
===================================================== */

function createPolicies(hotel) {
  const container = document.getElementById("policyContainer");

  const policies = [
    {
      icon: "fa-clock",
      title: "Check-in",
      text: "From 3:00 PM",
    },

    {
      icon: "fa-clock-rotate-left",
      title: "Check-out",
      text: "Until 12:00 PM",
    },

    {
      icon: "fa-paw",
      title: "Pets",
      text: "Pet policy depends on the property.",
    },

    {
      icon: "fa-id-card",
      title: "Identification",
      text: "Government-issued ID may be required.",
    },

    {
      icon: "fa-credit-card",
      title: "Payment",
      text: "Major payment methods are accepted.",
    },

    {
      icon: "fa-ban",
      title: "Smoking",
      text: "Smoking restrictions may apply.",
    },
  ];

  container.innerHTML = policies
    .map(
      (policy) => `

        <div class="policy-card">

            <i class="fa-solid ${policy.icon}"></i>

            <div>

                <strong>
                    ${policy.title}
                </strong>

                <p>
                    ${policy.text}
                </p>

            </div>

        </div>

      `,
    )
    .join("");
}

/* =====================================================
   ACCESSIBILITY
===================================================== */

function createAccessibility() {
  const container = document.getElementById("accessibilityContainer");

  const features = [
    "Accessible elevators",

    "Accessible routes",

    "Accessible parking",

    "Accessible public areas",

    "Accessible room options",

    "Wheelchair accessibility",
  ];

  container.innerHTML = features
    .map(
      (feature) => `

        <div>

            <i class="fa-solid fa-circle-check"></i>

            ${feature}

        </div>

      `,
    )
    .join("");
}

/* =====================================================
   DETAIL PAGE DATE SETUP
===================================================== */

function setupDetailDates() {
  const checkIn = document.getElementById("detailCheckIn");

  const checkOut = document.getElementById("detailCheckOut");

  if (!checkIn || !checkOut) {
    return;
  }

  const today = new Date().toISOString().split("T")[0];

  checkIn.min = today;

  checkOut.min = today;

  checkIn.addEventListener("change", () => {
    checkOut.min = checkIn.value;
  });
}

/* =====================================================
   CHECK AVAILABILITY
===================================================== */

function checkHotelAvailability() {
  const checkIn = document.getElementById("detailCheckIn").value;

  const checkOut = document.getElementById("detailCheckOut").value;

  const guests = document.getElementById("detailGuests").value;

  if (!checkIn || !checkOut) {
    alert("Please select your check-in and check-out dates.");

    return;
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    alert("Check-out date must be after check-in date.");

    return;
  }

  alert(`Availability checked for ${guests} from ${checkIn} to ${checkOut}.`);
}

/* =====================================================
   RESERVE ROOM
===================================================== */

function reserveDetailRoom(roomName) {
  alert(`${roomName} selected. This is a demo booking system.`);
}
