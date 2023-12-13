import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAsking = () => {
  return (
    <section className="flex min-h-[81dvh] items-center dark:bg-zinc-900/70 lg:min-h-[63dvh]">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-around space-y-8 px-3 lg:flex-row lg:space-x-8">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold capitalize lg:max-w-lg lg:text-6xl">
            frequently Asked?
          </h1>
        </div>

        <div className="flex-1">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full text-base font-medium md:text-xl">
                Bisa interview diperntukkan siapa?
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm dark:prose-invert">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                quisquam deleniti expedita, nostrum odit fuga velit fugit
                molestias sapiente ducimus rem sequi tempora iste voluptas in
                impedit vitae quasi maiores est nobis, earum asperiores quia?
                Porro voluptates quia placeat, tenetur sint vitae tempore ipsa
                architecto fugit, ex, ducimus dolorum molestias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-medium md:text-xl">
                Apa saya bisa ikut berkontribusi?
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm dark:prose-invert">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci quisquam quo exercitationem incidunt blanditiis harum
                vero deleniti tenetur dolorum, dolorem magni dicta excepturi
                illum asperiores hic inventore distinctio ullam voluptates
                fugit. Adipisci, labore accusantium!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-medium md:text-xl">
                Other question?
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm dark:prose-invert">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                nihil nemo nostrum aspernatur consectetur, blanditiis veniam
                rerum illum architecto quia incidunt similique soluta dolore
                molestiae itaque! Eveniet ad in est sequi ipsam.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base font-medium md:text-xl">
                Bisa interview dibuat untuk apa?
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm dark:prose-invert">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                in deleniti quo beatae exercitationem repellat fuga,
                voluptatibus animi dolore tempore, mollitia, natus est. Cum enim
                tenetur suscipit aliquam quaerat error ipsam molestias est, at
                distinctio reiciendis repellat libero ducimus deserunt
                laboriosam magnam iusto ratione nostrum, nesciunt pariatur
                tempora! Quo ipsa dolor neque fuga reprehenderit voluptates
                accusantium illum, aliquam deleniti blanditiis, accusamus quia
                molestiae voluptatem expedita ratione reiciendis. Quos et, odio
                odit temporibus consequuntur optio maxime aut.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-base font-medium md:text-xl">
                Apakah saya bisa menyampaikan keluhan?
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm dark:prose-invert">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, quis?
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, ad aperiam.
                  </li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Harum minus esse quae consequatur expedita. Asperiores,
                    explicabo quam? Corporis quod id veritatis alias!
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsking;
