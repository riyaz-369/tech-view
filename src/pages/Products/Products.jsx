import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "@/components/Cards/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container my-12">
      {/* search bar */}
      <div className="bg-slate-100 p-4 rounded-md flex justify-between mb-8">
        <div className="flex gap-3 w-1/3">
          <Input type="text" placeholder="Search products" />
          <Button variant="outline">Search</Button>
        </div>

        <div>
          <RadioGroup defaultValue="laptop" className="grid grid-cols-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="laptop" id="laptop" />
              <Label htmlFor="laptop">Laptop</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="computer" id="computer" />
              <Label htmlFor="computer">Computer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mobile" id="mobile" />
              <Label htmlFor="mobile">Mobile</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="smart watch" id="smart watch" />
              <Label htmlFor="smart watch">Smart Watch</Label>
            </div>
          </RadioGroup>
        </div>

        {/* sorted by select */}
        <div className="flex items-center gap-2">
          <div>
            <p className="text-xs font-bold">Sorted by:</p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="low-high">Price: low - high</SelectItem>
              <SelectItem value="high-low">Price: high - low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Products;
