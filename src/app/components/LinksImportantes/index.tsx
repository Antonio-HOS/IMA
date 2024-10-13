import { Dot } from "lucide-react";

interface LinksImportantesProps {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}
export function LinksImportantes(props: LinksImportantesProps) {
  return (
    <div className=" mt-10   text-center flex justify-center flex-col items-center">
      <h1 className="text-4xl font-bold  itimBold  ">
        Links importantes:
      </h1>
      <div className="flex flex-col  ml-4 mt-2 ">
        <a href={props.link1} className="text-blue-600 hover:underline flex">
          <Dot className="h-4 w-4" />
          {props.link1}
        </a>

        {props.link2 != "" && (
          <a href={props.link2} className="text-blue-600 hover:underline flex">
            <Dot className="h-4 w-4" />
            {props.link2}
          </a>
        )}

        {props.link3 != "" && (
          <a href={props.link3} className="text-blue-600 hover:underline flex">
            <Dot className="h-4 w-4" />
            {props.link3}
          </a>
        )}

        {props.link4 != "" && (
          <a href={props.link4} className="text-blue-600 hover:underline flex">
            <Dot className="h-4 w-4" />
            {props.link4}
          </a>
        )}
      </div>
    </div>
  );
}
