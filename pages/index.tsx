import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Featured Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Sample Listing" image="/assets/sample-image.jpg" />
        </div>
        <div className="mt-4">
          <Button label="Explore More" onClick={() => alert('Clicked!')} />
        </div>
      </main>
    </div>
  );
}
