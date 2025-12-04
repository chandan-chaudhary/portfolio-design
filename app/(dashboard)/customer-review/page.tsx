"use client";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewProps, reviews } from "./reviews";
import { motion } from "framer-motion";

export default function Clients() {
  return (
    <main className="w-full">
      <Carousel className="overflow-hidden px-4">
        <CarouselContent>
          {reviews.map((review: ReviewProps, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="bg-inherit p-6 h-full flex flex-col justify-between">
                  <CardDescription className="text-base md:text-lg text-muted-foreground">
                    {review.reviewText}
                  </CardDescription>
                  <CardFooter>
                    <div>
                      <h3 className="font-medium">{review.clientName}</h3>
                      <p className="italic text-sm text-muted-foreground">
                        {review.profession}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden md:flex justify-center gap-4 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </main>
  );
}
