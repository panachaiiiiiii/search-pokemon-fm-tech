"use client";
import {  Input, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title } = Typography;
const { Search } = Input;

export default function HomePage() {
  const router = useRouter();
  const handleSearch = async (value: string) => {
    router.push(`/pokemon/${value}`);
    
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-white p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Title className="!mb-2 !text-4xl !font-bold">
            Pokémon Explorer
          </Title>

          <p className="text-gray-500">
            Search your favorite Pokémon
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 flex justify-center">
          <Search
            placeholder="Search Pokémon..."
            enterButton
            size="large"
            onSearch={handleSearch}
            className="max-w-2xl"
          />
        </div>

        
      </div>
    </div>
  );
}