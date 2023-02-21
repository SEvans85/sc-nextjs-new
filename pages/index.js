// import BookGrid from "@/components/book-grid";
import Bio from "../components/home/bio";
import Hero from "../components/home/hero";
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Hero name="Scott" />
      <Bio />
      <Link href="/resources">
        <button className="bg-blue-500 px-3 py-1 text-white rounded">Resources</button>
      </Link>
      <Link href="/bucketlist">
        <button className="bg-blue-500 px-3 py-1 text-white rounded">BucketList</button>
      </Link>
    </div>
  )
}
