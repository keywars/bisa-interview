import React from "react";
import TablerSearch from "../icons/TablerSearch";
import { Button } from "../ui/button";

const Search = () => {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="lg:w-[264px] justify-start focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 text-gray-600 border border-gray-300"
    >
      <TablerSearch className="w-4 h-4 lg:hidden" />
      <span className="hidden lg:block">Search...</span>
    </Button>
  );
};

export default Search;
