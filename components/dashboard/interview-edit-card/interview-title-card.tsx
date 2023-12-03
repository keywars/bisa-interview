"use client";

import TablerPencil from "@/components/icons/TablerPencil";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useReducer, useState } from "react";

interface InterviewTitleCardProps {
  title: string;
}

const InterviewTitleCard = ({ title }: InterviewTitleCardProps) => {
  const [editMode, setEditMode] = useReducer((previous) => !previous, false);
  const [interviewTitle, setInterviewTitle] = useState<string>(title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterviewTitle((interviewTitle) => event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("submitted...");
    setEditMode();
    console.log("submitted", interviewTitle);
  };

  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Interview title</h1>
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
              Edit title
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        {editMode ? (
          <Input defaultValue={interviewTitle} onChange={handleChange} />
        ) : (
          <p className="text-sm capitalize">{title}</p>
        )}
      </CardContent>
      {editMode ? (
        <CardFooter>
          <Button
            type="submit"
            size="sm"
            disabled={interviewTitle.length < 1}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default InterviewTitleCard;
