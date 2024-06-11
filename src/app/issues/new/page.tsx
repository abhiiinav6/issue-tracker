"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
type IssueInputs = {
    title: string;
    description: string;
};
const NewIssuePage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState, control } =
        useForm<IssueInputs>();

    async function handleIssueCreation(data: IssueInputs) {
        const response = await fetch("/api/issues", {
            method: "POST",
            body: JSON.stringify(data),
        });
        console.log(response);
    }

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data);
                handleIssueCreation(data);
                router.push("/issues");
            })}
            className="space-y-4 max-w-xl pt-16"
        >
            <TextField.Root
                className=""
                placeholder="Title"
                {...register("title")}
            ></TextField.Root>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <SimpleMDE placeholder="Enter description..." {...field} />
                )}
            />

            <Button>Submit New Issue</Button>
        </form>
    );
};

export default NewIssuePage;
