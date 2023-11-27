"use client";

import { cn } from "@/lib/utils";

const Explanation = () => {
  return (
    <div>
      <h3 className="text-lg font-light  font-mono">Explanation</h3>

      <div className="relative">
        <article
          className={cn(
            "px-3 prose  dark:prose-invert prose-p:text-justify lg:prose-md border-l-2 border-violet-400/60 ml-1.5"
          )}
        >
          <p>
            Static blocks or static initializers are used to initialize static
            fields in java. we declare static blocks when we want to initialize
            static fields in our className. static blocks gets executed once
            when the className is loaded. Static blocks are executed even before
            the constructors execuret.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            vitae cum atque neque sint velit tempora tenetur nihil architecto.
            Assumenda dolor aspernatur velit est, perspiciatis porro itaque ab
            sunt vero consequatur tenetur corrupti quod dolores eveniet
            laboriosam doloremque nulla inventore minima laborum. Odit optio
            officiis qui? Aliquam et delectus repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
            iure maiores numquam labore incidunt repellendus. Id earum sequi
            enim rerum repellat magnam! Fuga, doloremque reprehenderit quibusdam
            veniam cumque officiis delectus ullam assumenda voluptatum fugit
            temporibus doloribus, explicabo nihil quo corporis veritatis dolore
            sint quod? Numquam quod itaque, possimus laudantium nesciunt
            laboriosam quidem fugiat voluptas assumenda. Nesciunt quas quisquam,
            soluta animi velit labore, dolorum id reprehenderit fuga corporis
            nam adipisci veritatis nihil veniam temporibus porro aperiam dicta.
            Natus
          </p>
        </article>
      </div>
    </div>
  );
};

export default Explanation;
