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
import { useToast } from "@/components/ui/use-toast";
import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useReducer, useState, useTransition } from "react";

interface InterviewTitleCardProps {
  title: string;
  id: string;
}

const InterviewTitleCard = ({ title, id }: InterviewTitleCardProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editMode, setEditMode] = useReducer((previous) => !previous, false);
  const [interviewTitle, setInterviewTitle] = useState<string>(title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterviewTitle((interviewTitle) => event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(async () => {
      await fetch(`/api/interview/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ title: interviewTitle }),
      })
        .then(() => {
          toast({
            title: "Update Interview",
            description: "Update interview title successfully",
          });

          router.refresh();
        })

        .catch(() => {
          toast({
            variant: "destructive",
            title: "Update Interview",
            description: "Update interview title failed!!",
          });
        })
        .finally(() => {
          setEditMode();
        });
    });
  };

  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Interview title</h1>
        <Button
          variant={editMode ? "destructive" : "ghost"}
          type="button"
          size="sm"
          disabled={isPending}
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
          <Input
            defaultValue={interviewTitle}
            onChange={handleChange}
            disabled={isPending}
          />
        ) : (
          <p className="text-sm capitalize">{title}</p>
        )}
      </CardContent>
      {editMode ? (
        <CardFooter>
          <Button
            type="submit"
            size="sm"
            disabled={interviewTitle.length < 1 || isPending}
            onClick={handleSubmit}
          >
            {isPending ? "Saving..." : "Save"}
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default InterviewTitleCard;
