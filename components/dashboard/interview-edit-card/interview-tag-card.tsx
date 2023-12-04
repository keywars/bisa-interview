"use client";

import TablerPencil from "@/components/icons/TablerPencil";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useReducer, useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/db/schema";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface InterviewTagCardProps {
  initialTag: Tag | null;
  tags: Tag[] | null;
  id: string;
}

const InterviewTagCard = ({ tags, id, initialTag }: InterviewTagCardProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [editMode, setEditMode] = useReducer((previous) => !previous, false);
  const [tag, setTag] = useState<string>("");

  const handleChange = (value: string) => {
    setTag((tag) => value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(async () => {
      await fetch(`/api/interview/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ tagId: tag }),
      })
        .then(() => {
          toast({
            title: "Update Tag",
            description: "update tag successfully",
          });

          router.refresh();
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Update Tag",
            description: "update tag successfully",
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
        <h1 className="text-lg font-semibold">Interview tags</h1>
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
              Edit tag
            </>
          )}
        </Button>
      </CardHeader>

      <CardContent>
        {editMode ? (
          <Select
            defaultValue={String(initialTag?.id) ?? ""}
            onValueChange={handleChange}
          >
            <SelectTrigger disabled={isPending}>
              <SelectValue placeholder="Select Tag" />
            </SelectTrigger>
            <SelectContent>
              {tags?.map((tag, index) => (
                <SelectItem key={index} value={String(tag.id)}>
                  {tag.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : !initialTag ? (
          <pre className="text-sm">no tag</pre>
        ) : (
          <Badge className="bg-violet-500/80 hover:bg-violet-500">
            {initialTag?.name}
          </Badge>
        )}
      </CardContent>

      {editMode ? (
        <CardFooter>
          <Button
            type="submit"
            size="sm"
            disabled={isPending}
            onClick={handleClick}
          >
            {isPending ? "Saving..." : "Save"}
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default InterviewTagCard;
