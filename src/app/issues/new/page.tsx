"use client"
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const page = () => {
    return (
        <div className="space-y-4 max-w-xl pt-16">
            <TextField.Root className="" placeholder="Title"></TextField.Root>
            <SimpleMDE placeholder="Enter description..." />
            <Button>Submit New Issue</Button>
        </div>
    );
};

export default page;
