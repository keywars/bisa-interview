"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Interview } from "@/db/schema";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import TablerSearch from "./icons/TablerSearch";
import { Button } from "./ui/button";

const Search = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Interview[]>([]);

  const [isPending, startTransition] = useTransition();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const searchHN = () => {
      startTransition(async () => {
        let results: Interview[] = [];
        if (debouncedSearchTerm) {
          const response = await fetch(
            `http://localhost:3000/api/interview/search?search=${debouncedSearchTerm}`,
            { method: "GET" }
          );

          if (!response.ok) {
            results = [];
          }

          const { data } = await response.json();
          results = data as Interview[];
        }

        setResults((prevResults) => results);
      });
    };

    searchHN();
  }, [debouncedSearchTerm]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
          aria-label="search button"
        >
          <TablerSearch className="w-4 h-4 " />
          <span className="sr-only">Search button</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 h-screen md:h-auto">
        <Command>
          <CommandInput
            placeholder="Type to search..."
            onValueChange={(search) => {
              setSearchTerm((searchTerm) => search);
            }}
          />
          {!!results.length ? (
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup>
                {results.map((interview, index) => (
                  <CommandItem
                    key={index}
                    className="capitalize hover:cursor-pointer"
                  >
                    {interview.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          ) : null}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
