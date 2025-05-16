'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

export default function Modal({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const router = useRouter();
	function handleOpenChange() {
		router.back();
	}

	return (
		<Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
			<DialogTitle className='sr-only'>Modal Title</DialogTitle>
			<DialogContent className={className || ''}>
				{children}
			</DialogContent>
		</Dialog>
	);
}
