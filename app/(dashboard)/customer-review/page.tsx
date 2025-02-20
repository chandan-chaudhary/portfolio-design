'use client'
import {
    Card,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ReviewProps, reviews } from './reviews';


export default function Clients() {
    return (
        <main className=''>
            <Carousel>
                <CarouselContent>
                    {
                        reviews.map((review: ReviewProps, idx) =>
                            <CarouselItem key={idx} className="basis-2/3 md:basis-3/12 xl:basis-6/12 relative">
                                <Card className='bg-inherit p-4 '>
                                    <CardDescription>
                                        {review.reviewText}
                                    </CardDescription>
                                    <CardFooter>
                                        <div>
                                            <h3>{review.clientName}</h3>
                                            <p className='italic text-gray-500'>{review.profession}</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        )
                    }
                </CarouselContent>

                <div className="xs:max-lg:hidden">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </main>
    )
}