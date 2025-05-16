import Modal from '@/app/intercepting/Modal';
import { photosList } from '@/app/intercepting/photoList';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

type Params = Promise<{ photoId: string }>;
export default async function PhotoModal({ params }: { params: Params }) {
	const { photoId } = await params;
	const src = photosList.find(
		(photo) => photo.id.toString() === photoId
	)?.src;
	if (!src) {
		return <div>Photo not found</div>;
	}

	return (
		<Modal className='flex flex-col items-center justify-center bg-gray-100'>
			<Card className='max-w-sm mx-auto mt-10'>
				<CardHeader className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold text-center'>
						Photo ID: {photoId}
					</h1>
				</CardHeader>
				<CardContent className='flex flex-col items-center'>
					<Image
						src={src}
						alt={`Photo ${photoId}`}
						width={200}
						height={200}
					/>
				</CardContent>
			</Card>
		</Modal>
	);
}
