import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'
import path from 'path'

export async function GET(req: Request, res: Response) {
  const pdfPath = path.join(process.cwd(), '/public/Resume.pdf')
  const pdfBuffer = fs.readFileSync(pdfPath)
  console.log(pdfBuffer)
  // Set response headers

  return new Response(res.body, {
    headers: {
      ...res.headers, // copy the previous headers
      'content-disposition': `attachment; filename="Resume.pdf"`,
    },
  })
}
