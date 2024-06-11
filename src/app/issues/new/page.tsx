import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const page = () => {
    return (
        <div className="space-y-4 max-w-xl pt-16">
            <TextField.Root
                className=""
                placeholder="Title"
            ></TextField.Root>
            <TextArea placeholder="Enter description..." />
            <Button>Submit New Issue</Button>
        </div>
    );
};

export default page;
