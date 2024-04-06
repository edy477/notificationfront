"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue} from "@/components/ui/select";


const formSchema = z.object({
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    category: z.string(),
})

export function ProfileForm() {
    // ...
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
            category: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {

        const JSONdata = JSON.stringify(values);

        await fetch("http://localhost:8000/api/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        })
            .then((res) => res.json())
        console.log(JSONdata)
           // .then((data) => setData(data.todo));
    }






    return (
        // @ts-ignore
        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>




                            <FormDescription>
                              Message
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField control={form.control} name="category" render={({field})=>(
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="category" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Sports">Sports</SelectItem>
                                <SelectItem value="Finance">Finance</SelectItem>
                                <SelectItem value="Movies">Movies</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>

                )}/>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}