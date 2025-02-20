import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex gap-4  justify-center items-center flex-col">
      <Link href="/swaraborno">
        <Button variant="outline">স্বরবর্ণ</Button>
      </Link>

      <Link href="/swaraborno-random">
        <Button variant="outline">এলোমেলো স্বরবর্ণ</Button>
      </Link>

      <Link href="/banjonborno">
        <Button variant="outline">ব্যঞ্জনবর্ণ</Button>
      </Link>

      <Link href="/banjonborno-random">
        <Button variant="outline">এলোমেলো ব্যঞ্জনবর্ণ</Button>
      </Link>
    </div>
  );
}
