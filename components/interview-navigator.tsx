import Link from "next/link";

const InterviewNavigator = () => {
  return (
    <div className="flex justify-between gap-8 pb-8 lg:pb-5">
      <Link href="#prev" className="flex-1">
        <div className="border rounded-md py-2.5 px-2.5 lg:py-5 lg:px-5">
          <p className="text-xs md:text-sm italic">Previous</p>
          <p className="text-sm md:text-lg font-bold tracking-wide text-sky-500/75 line-clamp-1">
            &laquo; Getting started
          </p>
        </div>
      </Link>

      <Link href="#next" className="flex-1">
        <div className="border rounded-md py-2.5 px-2.5 lg:py-5 lg:px-5 text-right">
          <p className="text-xs md:text-sm italic">Next</p>
          <p className="text-sm md:text-lg font-bold tracking-wide text-sky-500/75 line-clamp-1">
            How to make second pencake &raquo;
          </p>
        </div>
      </Link>
    </div>
  );
};

export default InterviewNavigator;
