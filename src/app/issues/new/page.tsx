"use client";
import { Button, TextField, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema),
    });

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
                <ErrorMessage>{errors.title?.message}</ErrorMessage>

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
                <ErrorMessage>{errors.description?.message}</ErrorMessage>

                <Button>Submit New Issue</Button>
            </form>
        </div>
    );
};

export default NewIssuePage;
