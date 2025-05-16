import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { photosList } from '@/app/intercepting/photoList';

export default function Intercepting() {
	return (
		<div className='container mx-auto py-12 px-4'>
			<h1 className='text-3xl font-bold mb-8 text-center'>
				Galerie Photos
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{photosList.map((photo) => (
					<Link
						href={`/intercepting/photo/${photo.id}`}
						key={photo.id}
						className='transform transition-transform hover:scale-105'
					>
						<Card className='h-full shadow-lg hover:shadow-xl'>
							<CardContent className='pt-6'>
								<div className='overflow-hidden rounded-lg mb-4'>
									<Image
										src={photo.src}
										alt={photo.alt}
										width={400}
										height={300}
										className='w-full h-48 object-cover'
									/>
								</div>
							</CardContent>
							<CardHeader>
								<h2 className='text-xl font-semibold text-center'>
									{photo.title}
								</h2>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
