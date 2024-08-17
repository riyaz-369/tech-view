import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const Products = () => {
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
      <div className="grid grid-cols-3 gap-6">
        {/* <h1>All Products</h1> */}
        <Card>
          <CardHeader>
            <img
              className="rounded-md"
              src="https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg"
              alt=""
            />
            <CardTitle>Product name</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur iusto optio voluptas, voluptatibus mollitia vitae
              aliquid pariatur, aut culpa atque provident quod necessitatibus
              autem rem perspiciatis natus sequi! Nostrum, praesentium.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Price: $500</p>
            <p>Category: Laptop</p>
            <p>Rating: 5.00</p>
            <p>Creation date: January, 2023</p>
          </CardContent>
          <CardFooter>
            <Button>Buy now</Button>
          </CardFooter>
        </Card>
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
