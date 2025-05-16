import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { photosList } from '@/app/intercepting/photoList';

export default function Intercepting() {
	return (
		<>
			<div className='flex items-center min-h-screen justify-center bg-gray-100'>
				{photosList.map((photo) => (
					<Link
						href={`/intercepting/photo/${photo.id}`}
						key={photo.id}
						className='max-w-sm mx-auto mt-10'
					>
						<Card className='max-w-sm mx-auto mt-10'>
							<CardHeader>
								<h1 className='text-2xl font-bold text-center'>
									{photo.title}
								</h1>
							</CardHeader>
							<CardContent>
								<Image
									src={photo.src}
									alt={photo.alt}
									width={200}
									height={200}
									className='rounded-lg'
								/>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
}
