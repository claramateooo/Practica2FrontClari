import { FreshContext, Handlers } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Pokemon } from "../../Pokemon.ts";

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        try {
            const {name} = ctx.params;
            const pokemon = await Axios<Pokemon>(`https://lospoquimones.deno.dev/${name}`)
            return new Response(JSON.stringify(pokemon.data), {
                status: 200
            }
        )
        }catch(e){
            return new Response(JSON.stringify({error: e}), {
                status: 500
            }
        )
        }
    
    },
    DELETE: async (req: Request, ctx: FreshContext) => {
        try {
            const {name} = ctx.params
            const body = await req.json();
            const response = await fetch(`https://lospoquimones.deno.dev/${name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            console.log(response)
            console.log(body)
            if(response.status === 404){
                return new Response(JSON.stringify({error: "El creador no es correcto"}), {
                        status: 404
                    }
                )
            }
            return new Response(JSON.stringify({msg: "Pokemon Borrado"}), {
                    status: 200
                }
            )
        }catch(e){
            return new Response(JSON.stringify({error: e}), {
                    status: 500
                }
            )
        }
    }
}