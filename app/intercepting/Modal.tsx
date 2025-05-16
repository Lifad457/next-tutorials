'use client';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

export default function Modal({
	// We pass the children and className as a prop to keep modal reusable.
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const router = useRouter();
	// This will change the URL to the previous state, for example if we have navigated to the login page from `/` route, when the function will trigger the URL will be changed from `/login` to `/`.
	function handleOpenChange() {
		router.back();
	}

	return (
		// We are using the shadcn ui's dialog component
		<Dialog
			// It will be open by default.
			defaultOpen={true}
			// It needs to be set in order to be able to use onOpenChange handler (https://www.radix-ui.com/primitives/docs/components/dialog#dialog)
			open={true}
			// This will trigger whenever we close the modal by clicking outside the modal or by clicking on the cross button
			onOpenChange={handleOpenChange}
		>
			<DialogContent className={className || ''}>
				<DialogTitle className='text-center text-2xl font-bold'>
					Photo Modal
				</DialogTitle>
				{children}
			</DialogContent>
		</Dialog>
	);
}
