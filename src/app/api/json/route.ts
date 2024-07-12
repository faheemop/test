import { NextRequest } from "next/server"

import { z } from "zod"

export const POST = async (req: NextRequest ) => {
    const body = await req.text()
    // data format

    const genericSchema = z.object({
        data: z.string(),
        format: z.object({})
    })
genericSchema.parse()
    return new Response("OK")
}