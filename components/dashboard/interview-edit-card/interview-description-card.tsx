"use client";

import TablerPencil from "@/components/icons/TablerPencil";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import React, { useReducer, useState } from "react";

interface InterviewDescriptionCardProps {
  description: string;
}

const InterviewDescriptionCard = ({
  description,
}: InterviewDescriptionCardProps) => {
  const [editMode, setEditMode] = useReducer((previous) => !previous, false);
  const [desc, setDescription] = useState(description ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription((description) => event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEditMode();
  };

  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Interview description</h1>
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
              Edit description
            </>
          )}
        </Button>
      </CardHeader>

      <CardContent>
        {editMode ? (
          <Textarea
            placeholder="description here"
            defaultValue={desc}
            onChange={handleChange}
          />
        ) : desc.length < 1 ? (
          <pre className="text-sm font-light">no description</pre>
        ) : (
          <div className="space-y-1">
            <h3 className="font-bold">Description</h3>
            <p className="font-light text-sm">{desc}</p>
          </div>
        )}
      </CardContent>

      {editMode ? (
        <CardFooter>
          <Button
            type="submit"
            size="sm"
            disabled={desc.length < 1}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default InterviewDescriptionCard;
