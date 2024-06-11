"use client";
import { Button, TextField, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

type IssueInputs = {
    title: string;
    description: string;
};
const NewIssuePage = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const { register, handleSubmit, formState, control } =
        useForm<IssueInputs>();

    return (
        <div className="max-w-xl  pt-16 ">
            {error && (
                <Callout.Root color="red" className="mb-5">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form
                onSubmit={handleSubmit(async (data) => {
                    console.log(data);
                    try {
                        await axios.post("/api/issues", data);
                        router.push("/issues");
                    } catch (error) {
                        setError("An unexpected error occured");
                    }
                })}
                className="space-y-4"
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
                        <SimpleMDE
                            placeholder="Enter description..."
                            {...field}
                        />
                    )}
                />

                <Button>Submit New Issue</Button>
            </form>
        </div>
    );
};

export default NewIssuePage;
