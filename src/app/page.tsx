import Link from "next/link";

const mockUrls =[
  "https://utfs.io/f/146b3591-f1d3-48f1-9930-dbd06b9ac99b-1vx6r.jpg",
  "https://utfs.io/f/bfcea573-7558-4714-8a54-8a59e5ffa06c-1vx6q.jpeg",
  "https://utfs.io/f/50899a8d-86ee-4fad-b7f3-7688dc4e899e-1vx6s.jpg",
  "https://utfs.io/f/7aa2cd6e-f5b6-493a-83da-4d4367260490-1vx6t.jpeg",
  "https://utfs.io/f/47a4c472-6694-426a-8d5f-1badebda8725-1vx6u.jpeg"
]
const mockImages = mockUrls.map((url,index)=>({
id:index+1,
url
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
      Hello (gellary in progress)
    </main>
  );
}
