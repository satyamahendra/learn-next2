import Image from "next/image";

export default function HomePage() {

	const imagesArray = ["https://utfs.io/f/b8fa4382-9d63-48d3-8266-ad88e60f084f-14je.png", "https://utfs.io/f/d49d3727-01fc-4a69-a6f9-f591ad92560f-8iyzmm.jpg", "https://utfs.io/f/2b237895-37b2-42c7-8c56-3592c28d18bd-r2kr59.jpg"]

	return (
		<main className="min-h-screen p-6">
			<h1 className="text-center w-full">Your Gallery</h1>
			<div className="flex  h-40 w-40">
				{imagesArray.map((image, index) => <img src={image} alt={`image-${index}`} className="" />)}
			</div>
		</main>
	);
}
