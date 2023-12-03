import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MdiPlusCircleOutline from "../icons/MdiPlusCircleOutline";
import { Button } from "../ui/button";
import InterviewForm from "./interview-form";

const AddNewInterviewDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-10 capitalize">
          <MdiPlusCircleOutline className="w-5 h-5 md:mr-2" />
          <span className="hidden md:flex">Add interview</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Interview Title</DialogTitle>
          <DialogDescription>
            what would you like to name your interview? Dont{"'"}t worry, you
            can always change this later.
          </DialogDescription>
        </DialogHeader>
        <InterviewForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewInterviewDialog;
