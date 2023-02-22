import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { i18n } from "../shared/i18n.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lng");
  if (lang) {
    await i18n.changeLanguage(lang);
  }
  const resp = await ctx.next();
  return resp;
}
