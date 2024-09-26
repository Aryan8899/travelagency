# Special Travel Offers Section

This project demonstrates a dynamic, responsive Offers Section for a travel website using **Next.js**, **Tailwind CSS**, **React Slick**, and **Framer Motion**. The Offers Section includes sorting functionality, countdown timers, and animations for a smooth user experience.

## Features

- **Dynamic Offers Display**: 
  - Displays multiple travel offers with details like offer name, description, discount percentage, original and discounted price, and expiration date.
  
- **Sorting**:
  - Two sorting buttons:
    - `Sort by Best Deal`: Sorts offers by the highest discount percentage.
    - `Sort by Expiring Soon`: Sorts offers by the nearest expiration date.
    
- **Responsive Design**:
  - The Offers Section is fully responsive, supporting desktop, tablet, and mobile screen sizes.
  - Uses **React Slick** for swipeable cards on smaller screens.

- **Best Deal Highlight**:
  - One offer is highlighted as the "Best Deal" with a distinct background color and a badge.

- **Countdown Timer**:
  - A countdown timer shows how much time is left until the offer expires.
  - The countdown numbers animate smoothly as they update.

- **Error Handling**:
  - Displays a proper message if there are no available offers or if an offer has expired.

## Tech Stack

- **Next.js**: React framework for server-side rendering and routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Slick**: Carousel component for creating swipeable cards.
- **Framer Motion**: Animation library for smooth UI transitions.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/travel-offers.git
   cd travel-offers
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` to view it in browser 


## Data Structure

The offers are stored in a JSON file (`offers.json`) with the following fields:

```json
[
  {
    "id": 1,
    "name": "Tropical Island Escape",
    "description": "Relax on the tropical island...",
    "discountPercentage": 30,
    "originalPrice": 1000,
    "discountedPrice": 700,
    "expirationDate": "2024-09-30T23:59:59.000Z",
    "isBestDeal": false
  },
  {
    "id": 2,
    "name": "Mountain Adventure",
    "description": "Experience an unforgettable adventure in the majestic mountains.",
    "discountPercentage": 20,
    "originalPrice": 800,
    "discountedPrice": 640,
    "expirationDate": "2024-10-10T23:59:59.000Z",
    "isBestDeal": false
  },
  {
    "id": 3,
    "name": "City Break Getaway",
    "description": "Discover the city's best attractions and nightlife with this deal.",
    "discountPercentage": 15,
    "originalPrice": 500,
    "discountedPrice": 425,
    "expirationDate": "2024-11-01T23:59:59.000Z",
    "isBestDeal": true
  }
]
```


### Animations
- Framer Motion is used for smooth transitions when offers enter the view.
- The countdown numbers animate smoothly with each update, providing a more visually appealing experience.


