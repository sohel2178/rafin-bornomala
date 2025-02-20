import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <Link href="/swaraborno">
        <Button variant="outline">SwaraBorno</Button>
      </Link>
    </div>
  );
}
