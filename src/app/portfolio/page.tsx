import Link from 'next/link';
import TestCard from '@/components/TestCard';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen p-6">
      <TestCard />
      <h1 className="text-3xl font-bold">My Portfolio</h1>

      <p className="text-gray-600 mt-2">A collection of my projects.</p>

      <div className="mt-6 space-y-4">
        <Link
          href="/portfolio/project-1"
          className="text-blue-500 hover:underline"
        >
          Project 1
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;
