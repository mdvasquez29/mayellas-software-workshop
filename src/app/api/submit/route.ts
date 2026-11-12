import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const webhookUrl = "https://hook.us2.make.com/a8xyodquv8yskyfyqgid544bfnv8j4ou";

    // Server-to-server request bypasses browser CORS completely
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Make.com returned status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}