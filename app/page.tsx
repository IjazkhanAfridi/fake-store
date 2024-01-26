'use client'
import Card from "@/components/home/Card";
import { useEffect, useState } from "react";
import { ProductData } from "../components/common/types";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  const [productData, setProductData] = useState<ProductData[] | null>(null);
  const [filteredData, setFilteredData] = useState<ProductData[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (productData) {
      let filteredProducts = productData;
      if (searchQuery) {
        filteredProducts = filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (selectedCategory) {
        filteredProducts = filteredProducts.filter((product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      setFilteredData(filteredProducts);
    }
  }, [searchQuery, selectedCategory, productData]);

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className="container mx-auto flex items-start flex-wrap justify-start mt-[100px]">
        {filteredData && filteredData?.map((data: ProductData, index) => (
          <Card key={index} data={data} />
        ))}
      </main>
    </>
  )
}
