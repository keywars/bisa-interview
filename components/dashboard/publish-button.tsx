"use client";

import { InterivewWithAuthorAndQuestion } from "@/typings";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

interface PublishButtonProps {
  interview: InterivewWithAuthorAndQuestion;
}

const PublishButton = ({ interview }: PublishButtonProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const onPublish = () => {
    startTransition(async () => {
      await fetch(`/api/interview/${interview.id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "published" }),
      })
        .then(() => {
          toast({
            title: "Publish Interview",
            description: "Publish interview successfully!!",
          });

          router.refresh();
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Publish Interview",
            description: "Publish interview successfully!!",
          });
        });
    });
  };

  return (
    <Button
      size="sm"
      variant={interview.status === "published" ? "ghost" : "default"}
      disabled={
        !(
          interview.title &&
          interview.description &&
          interview.tag &&
          interview.questions.length > 0
        ) ||
        isPending ||
        interview.status === "published"
      }
      onClick={onPublish}
    >
      {interview.status === "published"
        ? "Published"
        : isPending
        ? "Publish..."
        : "Publish"}
    </Button>
  );
};

export default PublishButton;
