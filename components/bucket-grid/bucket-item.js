import { useState } from "react";

export default function BucketItem({ place, country, onLike, image }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleIncrementLike = () => {
    let newValue = likes + 1;

    let details = {
      place: place,
      likes: newValue
    }

    onLike(details);
    
    setLikes(newValue);
  }

  const handleDecrementLike = () => {
    let newValue = dislikes + 1;
    setDislikes(newValue);
  }

  return (
    <div className="bg-green-100 p-4">
      <p className="mb-4 text-center text-xl font-medium">
        {place}
      </p>

      <p className="text-sm text-gray-700 text-center">
        {country}
      </p>

      <img src={image} alt={place} className="w-60 h-60 object-cover object-center mx-auto"/>

      <p className="text-center text-red-600 font-medium">
        {likes} likes
      </p>

      <div className="w-full flex flex-row justify-center">
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-lg"
          onClick={handleIncrementLike}
        >
          Like
        </button>
      </div>

      <p className="text-center text-blue-500 font-medium mt-10">
        {dislikes} likes
      </p>

      <div className="w-full flex flex-row justify-center">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          onClick={handleDecrementLike}
        >
          Dislike
        </button>
      </div>
    </div>
  );
}