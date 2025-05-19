import Modal from '@/app/intercepting/Modal';
import { photosList } from '@/app/intercepting/photoList';
import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

type Params = Promise<{ photoId: string }>;
export default async function PhotoModal({ params }: { params: Params }) {
	const { photoId } = await params;
	const photo = photosList.find((photo) => photo.id.toString() === photoId);
	if (!photo) {
		return <div>Photo not found</div>;
	}

	return (
		<Modal className='backdrop-blur-sm bg-black/30 flex items-center justify-center'>
			<Card className='max-w-2xl w-full shadow-2xl overflow-hidden border-0'>
				<div className='relative'>
					<Image
						src={photo.src}
						alt={photo.title || `Photo ${photoId}`}
						width={800}
						height={600}
						className='w-full h-auto max-h-[70vh] object-contain'
					/>
				</div>
				<CardHeader className='border-t bg-white/95 backdrop-blur-sm'>
					<h1 className='text-xl font-medium'>
						{photo.title || `Photo ${photoId}`}
					</h1>
				</CardHeader>
			</Card>
		</Modal>
	);
}
