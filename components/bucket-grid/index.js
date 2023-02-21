import { useState, useEffect } from "react";
import BucketItem from "./bucket-item.js";
import { initialBuckets } from "./buckets.js";

export default function BucketGrid() {
  const [lastLikedBucket, setLastLikedBucket] = useState("");
  const [mostLikedBucketPlace, setMostLikedBucketPlace] = useState("");
  const [mostLikedBucketLikes, setMostLikedBucketLikes] = useState(0);
  const [buckets, setBuckets] = useState([]);
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  


    
  useEffect(() => {
    getBuckets()
  }, []);

  const getBuckets = async () => {
    const data = await fetch("/api/buckets");
    const response = await data.json();
    setBuckets(response);
  }


  const handleLike = (details) => {
    const { place, likes } = details;

    if (likes > mostLikedBucketLikes) {
      setMostLikedBucketPlace(place);
      setMostLikedBucketLikes(likes);
    }

    setLastLikedBucket(place);
  }

  const handleAddBucket = () => {
    let bucket = {
      place: place,
      country: country,
    };

    let newBuckets = [...buckets, bucket];
    setBuckets(newBuckets)
  }

  const handleSetPlace = (event) => {
    let place = event.target.value;
    setPlace(place);
  }

  const handleSetCountry = (event) => {
    let country = event.target.value;
    setCountry(country);
  }



  return (
    <div className="w-full flex flex-col">
      <div className="w-full my-5">
        <form>
          <input
            className="border border-blue-500 mr-1 px-3 py-1 hover:bg-gray-100 rounded-md"
            value={place}
            onChange={handleSetPlace}
            placeholder="Place"
            
          />
          <input
            className="border border-blue-500 mr-1 px-3 py-1 rounded-md"
            value={country}
            onChange={handleSetCountry}
            placeholder="Country"
          />

          <button
            className="bg-blue-500 px-3 py-1 text-white rounded"
            type="button"
            onClick={handleAddBucket}
          >
            Add bucketlist item
          </button>
        </form>
      </div>
      <div className="mt-20 grid grid-cols-3 w-full bg-red-100">
        {buckets.map((bucket) => {
          return (
            <BucketItem
              place={bucket.place}
              country={bucket.country}
              image={bucket.image}
              onLike={handleLike}
            ></BucketItem>
          )
        })}
      </div>
      <div className="w-full my-10">
        The last liked bucketlist item is: {lastLikedBucket}
      </div>
      <div className="w-full my-10">
        The most liked bucketlist item is: {mostLikedBucketPlace}
      </div>
    </div>
  );
}