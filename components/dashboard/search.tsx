import React from "react";
import TablerSearch from "../icons/TablerSearch";
import { Button } from "../ui/button";

const Search = () => {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="justify-start border border-gray-300 text-gray-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-gray-600 lg:w-[264px]"
    >
      <TablerSearch className="h-4 w-4 lg:hidden" />
      <span className="hidden lg:block">Search...</span>
    </Button>
  );
};

export default Search;
