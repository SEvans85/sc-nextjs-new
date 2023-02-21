export default function handler(request, response) {
    const buckets = [
      { place: "Great Wall of China", country: "China", image: "/wall.jpg"},
      { place: "The Taj Mahal", country: "India", image: "/taj.jpg"},
      { place: "Bora Bora", country: "French Polynesia", image: "/bora.jpg"}
    ];
  
    setTimeout(() => {
      response.json(buckets)
    }, 1500);
  
  }
  