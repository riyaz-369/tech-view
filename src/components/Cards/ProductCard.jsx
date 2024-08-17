import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ProductCard = ({ product }) => {
  const {
    product_name,
    product_image,
    description,
    price,
    category,
    ratings,
    product_creation_date,
  } = product;

  return (
    <Card className="flex flex-col justify-between">
      <div>
        <CardHeader>
          <img
            className="rounded-md"
            src="https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg"
            alt=""
          />
          <CardTitle>{product_name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          <p>Rating: {ratings}</p>
          <p>Creation date: {product_creation_date}</p>
        </CardContent>
      </div>
      <CardFooter>
        <Button>Buy now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
