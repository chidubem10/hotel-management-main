import { House } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

export default function Itenirary() {
  return (
    <section className="w-[96%] mx-auto flex flex-col gap-12 py-6">
      <div>
        <div className=" flex justify-between gap-6">
          <h1 className="text-black dark:text-white text-4xl   pb-30">
            Weekly Itinerary
          </h1>
          <div className="flex gap-6">
            <Button className="bg-white text-black dark:text-black hover:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white border border-gray-200">
              Best one
            </Button>
            <Button className="bg-white text-black dark:text-black hover:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white border border-gray-200">
              Recommendation
            </Button>
            <Button className="bg-white text-black dark:text-black hover:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white border border-gray-200">
              Popular
            </Button>
            <Button className="bg-white text-black dark:text-black hover:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white border border-gray-200">
              Cheaper
            </Button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-2xl pb-6">Barcelona</h2>
              <p className="pb-17 font-semibold">
                Providing a mix of cultural sights, <br />
                iconic landmarks,authentic food <br /> experiences,vibrant local{" "}
                <br /> neighborhoods.
              </p>
              <Tabs defaultValue="stay" className="">
                <TabsList className="bg-white/20 rounded-2xl p-0 h-fit">
                  <TabsTrigger
                    className="py-py md:py-1 text-xs md:text-sm h-7 md:h-9 text-black data-[state=active]:text-black md:px-5 rounded-2xl hover:bg-black hover:text-white"
                    value="stay"
                  >
                    <House />
                  </TabsTrigger>
                  <TabsTrigger
                    className="py-py md:py-1 text-xs md:text-sm h-7 md:h-9 text-black data-[state=active]:text-black md:px-5 rounded-2xl hover:bg-black hover:text-white"
                    value="experience"
                  >
                    Book
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="stay"></TabsContent>
                <TabsContent value="experience"></TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-end gap-4">
              <img
                src="/images/house3.jpg"
                alt="House3"
                className="w-50 h-50 rounded-2xl"
              />
              <div className="w-50 h-50 rounded-2xl bg-black p-1 flex flex-col">
                <div className=" gap-2 bg-gray-900 p-2 rounded-2xl">
                  <span className="text-white text-6xl">23</span>
                  <span className="text-gray-500 pt-3">
                    to <br /> 26 December
                  </span>
                  <div>
                    <Badge className="text-white">M</Badge>
                    <Badge className="text-white">T</Badge>
                    <Badge className="text-white rounded-full">W</Badge>
                    <Badge className="bg-orange-500 text-white rounded-full">
                      T
                    </Badge>
                    <Badge className="bg-orange-500 text-white">F</Badge>
                    <Badge className="bg-orange-500 text-white">S</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 p-2">4 Days Itinerary</p>
                  <Badge className="bg-white text-gray-500 rounded-full">
                    Cultural
                  </Badge>
                  <Badge className="bg-white text-gray-500 rounded-full">
                    Beach view
                  </Badge>
                  <Badge className="bg-white text-gray-500 rounded-full">
                    12+
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>London</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Madrid</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator />
        </div>
      </div>
    </section>
  );
}
