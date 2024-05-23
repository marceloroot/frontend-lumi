import { cn } from "../_lib/utils";
import { CardProps } from "../types";

const CardBoard = (props:CardProps) => {
    return ( 
        <CardContent>
          <section className="flex justify-between gap-2">
            <p>{props.label}</p>
            <props.icon className="h-4 w-4 text-gray-400" />
          </section>
          <section className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{props.amount}</h2>
            <p className="text-xs text-gray-50">{props.description}</p>
          </section>
        </CardContent>
     );
}
 
export default CardBoard;

export const CardContent =(props: React.HTMLAttributes<HTMLDivElement>)=>{
    return (
    <div
    {...props}
    className={cn(
       "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
       props.className,
    )}
    ></div>
     )
   
}