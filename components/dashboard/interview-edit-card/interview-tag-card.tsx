"use client";

import TablerPencil from "@/components/icons/TablerPencil";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useReducer, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const InterviewTagCard = () => {
  const [editMode, setEditMode] = useReducer((previous) => !previous, false);
  const [tag, setTag] = useState<string>("");

  const handleChange = (value: string) => {
    setTag((tag) => value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setEditMode();

    // future: save to db
    // ...
  };

  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Interview tags</h1>
        <Button
          variant={editMode ? "destructive" : "ghost"}
          type="button"
          size="sm"
          onClick={setEditMode}
        >
          {editMode ? (
            "Cancel"
          ) : (
            <>
              <TablerPencil className="mr-2 w-5 h-5" />
              Edit tag
            </>
          )}
        </Button>
      </CardHeader>

      <CardContent>
        {editMode ? (
          <Select defaultValue={tag} onValueChange={handleChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nextjs">Next JS</SelectItem>
            </SelectContent>
          </Select>
        ) : !tag ? (
          <pre className="text-sm">no tag</pre>
        ) : (
          <Badge className="bg-violet-500/80 hover:bg-violet-500">{tag}</Badge>
        )}
      </CardContent>

      {editMode ? (
        <CardFooter>
          <Button type="submit" size="sm" onClick={handleClick}>
            Save
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default InterviewTagCard;
