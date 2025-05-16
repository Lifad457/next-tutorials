import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Link href='intercepting'>
				<Card className='max-w-sm mx-auto mt-10'>
					<CardTitle className='text-xl font-bold text-center'>
						Routing
					</CardTitle>
					<CardContent>
						<h1 className='text-2xl font-bold'>
							Intercepting Routes
						</h1>
						<p className='text-gray-600'>
							Intercepting routes allows you to load a route from
							another part of your application within the current
							layout. This routing paradigm can be useful when you
							want to display the content of a route without the
							user switching to a different context.
						</p>
					</CardContent>
				</Card>
			</Link>
		</>
	);
}
