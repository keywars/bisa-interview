import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsArticleProps {
  title: string;
}

const NewsArticle = ({ title }: NewsArticleProps) => {
  return (
    <article className="prose md:prose-md prose-p:text-justify dark:prose-invert px-5 lg:px-0">
      <div>
        <p className="m-2.5 text-sm">
          <Link
            className="no-underline hover:underline font-medium"
            href="#author-detail"
          >
            Moh. Ilhamuddin
          </Link>{" "}
          | <span className="font-bold">22 June 2023</span>
        </p>
        <h1>{title}</h1>
      </div>

      <Image
        priority
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZFZ9pODw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ed87bw1p17zusq15mzyp.PNG"
        alt="article dummy img"
        className="object-cover h-[434px] w-full rounded-md"
        width={500}
        height={500}
      />

      <div>
        <h2>Pramp</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          dicta est voluptates ab asperiores sapiente, repudiandae voluptate a
          veritatis quas nobis minus, praesentium magnam illo fugiat vero
          quibusdam, aliquam accusamus. Laudantium excepturi quidem neque
          delectus maiores unde libero atque quod ad! Officiis, doloribus.
          Excepturi expedita rem quasi adipisci voluptatibus assumenda inventore
          tempora dolorum aliquid vel pariatur corrupti vitae, sunt eos, cumque,
          ipsum aspernatur similique ea totam. Suscipit nisi culpa iure sint
          maxime. Id vitae modi commodi. Debitis, labore! Consequuntur, sed
          delectus, reprehenderit, porro nesciunt repellat repudiandae nulla
          amet odio eum hic blanditiis assumenda corrupti est aut rem
          consectetur nam consequatur nihil mollitia magni possimus voluptas
          totam.
        </p>

        <h3>Highlights of Pramp</h3>

        <ul>
          <li>It{"'"}s free</li>
          <li>
            The interviews are made over video chat and with a collaborative
            code editor
          </li>
          <li>
            Variety of type of mock interview: Data Structures & Algorithms,
            Product Management, System Design, Frontend, Data Science.
          </li>
          <li>Swap from an interviewer to the interviewee or vice-versa</li>
          <li>
            Learn from peer{"'"}s feedback which you can check on your dashboard
          </li>
          <li>
            You are able to set sessions to focus on areas you want to improve
            the most
          </li>
        </ul>
      </div>

      <h2>TechMockInterview</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        perferendis odit vel placeat animi minima itaque similique iure suscipit
        adipisci nesciunt possimus delectus culpa, facilis voluptatem tempore in
        labore totam! Praesentium corporis enim explicabo amet. Nihil saepe,
        vitae consequuntur repudiandae neque repellat qui! Non mollitia, quis,
        veniam pariatur error maiores eveniet sint natus, provident excepturi
        ratione aliquid enim debitis porro aspernatur repellendus accusamus!
        Voluptatum odio incidunt rerum. Eos, dolor. Aspernatur explicabo
        expedita fugit ratione ipsa! Officiis, expedita repellat. Molestias
        eligendi illo eius, qui adipisci expedita. Quisquam quasi odit,
        similique provident nisi distinctio totam temporibus neque voluptatibus
        velit optio dolor earum rem quae aspernatur nostrum cupiditate quos.
        Illo aliquam perferendis sunt animi. Cumque itaque beatae ea magnam
        atque animi placeat nulla! Incidunt non, tempore dicta modi consectetur
        quaerat quas veritatis dolore necessitatibus eum nesciunt iste
        voluptatum optio itaque illo reiciendis doloremque?
      </p>
    </article>
  );
};

export default NewsArticle;
