import resume from "../../resume.json";

export function GET() {
  return new Response(JSON.stringify(resume));
}
