import { auth } from "~modules/auth";
import { articles } from "~modules/articles";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";

function adapter (app: any): any {
    const App = 
    app
      .use(
        jwt({
          name: "jwt",
          secret: Bun.env.JWT_SECRET!,
        })
      )
      .use(cookie())
    App
      .use(auth)
      .use(articles)

    return App;
}

export default adapter;