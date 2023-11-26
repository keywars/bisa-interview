import InterviewNavigator from "@/components/interview-navigator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DetailInterviewPageProps {
  params: {
    slug: string;
  };
}

const DetailInterviewPage = ({
  params: { slug },
}: DetailInterviewPageProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 h-[87dvh]">
      <div className="p-5 flex flex-col justify-between h-full space-y-24">
        <div className="space-y-6">
          <h2 className="text-2xl font-medium">{slug}</h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-bold py-1">
                See Answer
              </AccordionTrigger>

              <AccordionContent className="leading-relaxed p-3 prose lg:prose-md">
                <p>
                  Static blocks or static initializers are used to initialize
                  static fields in java. we declare static blocks when we want
                  to initialize static fields in our class. static blocks gets
                  executed once when the class is loaded. Static blocks are
                  executed even before the constructors execuret.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, vitae cum atque neque sint velit tempora tenetur
                  nihil architecto. Assumenda dolor aspernatur velit est,
                  perspiciatis porro itaque ab sunt vero consequatur tenetur
                  corrupti quod dolores eveniet laboriosam doloremque nulla
                  inventore minima laborum. Odit optio officiis qui? Aliquam et
                  delectus repellat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  libero iure maiores numquam labore incidunt repellendus. Id
                  earum sequi enim rerum repellat magnam! Fuga, doloremque
                  reprehenderit quibusdam veniam cumque officiis delectus ullam
                  assumenda voluptatum fugit temporibus doloribus, explicabo
                  nihil quo corporis veritatis dolore sint quod? Numquam quod
                  itaque, possimus laudantium nesciunt laboriosam quidem fugiat
                  voluptas assumenda. Nesciunt quas quisquam, soluta animi velit
                  labore, dolorum id reprehenderit fuga corporis nam adipisci
                  veritatis nihil veniam temporibus porro aperiam dicta. Natus
                  commodi veniam numquam quidem! Soluta quod facilis blanditiis
                  ex rerum vel vero nam commodi eligendi illo optio rem, saepe
                  libero dolore repellendus adipisci similique perspiciatis
                  laborum numquam quis. Recusandae est eveniet temporibus!
                  Dolores ullam, deserunt maiores molestiae voluptates
                  aspernatur. Omnis, fugit nobis accusamus qui hic facere
                  repellendus deserunt itaque quasi recusandae aut vitae
                  eligendi cumque, nemo sequi officiis assumenda, nam error?
                  Accusantium soluta, voluptatum harum quaerat similique maxime
                  repellendus nostrum quam tempora rem, corporis tenetur
                  laboriosam cupiditate obcaecati dolorum iusto optio mollitia
                  exercitationem est praesentium molestias dignissimos ab.
                  Consequuntur ab perspiciatis nam officia debitis rerum
                  excepturi eaque voluptates unde voluptatibus nobis repellat,
                  aspernatur accusantium aliquam. At, deserunt in, aspernatur
                  ullam ut pariatur omnis quidem molestiae expedita obcaecati
                  quo. Vitae dolorum rem perferendis.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <InterviewNavigator />
      </div>
    </div>
  );
};

export default DetailInterviewPage;
