import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const page = () => {
    return (
        <div className="pt-16">
            <Button>
                <Link href="/issues/new">New Issue</Link>
            </Button>
        </div>
    );
};

export default page;
