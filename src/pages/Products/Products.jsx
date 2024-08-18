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
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getProducts = async () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append("search", searchTerm);
    if (category) params.append("category", category);
    if (priceRange) params.append("priceRange", priceRange);
    if (sortOrder !== "default") params.append("sort", sortOrder);
    params.append("page", currentPage);
    params.append("limit", 8);

    try {
      const { data } = await axios.get(
        `http://localhost:5000/products?${params.toString()}`
      );
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [currentPage, category, sortOrder]);

  // Handle search
  const handleSearch = () => {
    setCurrentPage(1);
    getProducts();
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getProducts();
  };

  return (
    <section className="container my-12">
      {/* search bar */}
      <div className="bg-slate-100 p-4 rounded-md lg:flex justify-between mb-8">
        <div className="flex gap-3 lg:w-1/3 mb-4 lg:mb-0">
          <Input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleSearch}>
              Search
            </Button>
            {/* reset button */}
            <div>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setCategory("");
                  setPriceRange("");
                  setSortOrder("default");
                  setCurrentPage(1);
                  getProducts();
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-4 lg:mb-0">
          <RadioGroup
            defaultValue="laptop"
            className="grid grid-cols-1 md:grid-cols-2"
            onValueChange={(value) => {
              setCategory(value);
              setCurrentPage(1);
              getProducts();
            }}
          >
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
              <RadioGroupItem value="smartwatch" id="smartwatch" />
              <Label htmlFor="smartwatch">Smartwatch</Label>
            </div>
          </RadioGroup>
        </div>

        {/* sorted by select */}
        <div className="flex items-center gap-2">
          <div>
            <p className="text-xs font-bold">Sorted by:</p>
          </div>
          <Select
            onValueChange={(value) => {
              setSortOrder(value);
              setCurrentPage(1);
              getProducts();
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue defaultChecked="default" placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="low-high">Price: low - high</SelectItem>
              <SelectItem value="high-low">Price: high - low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* pagination */}
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((page, index) => (
            <PaginationItem key={index}>
              <PaginationLink onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Products;
