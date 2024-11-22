export function Titulo2(props: { title: string;  }) {
  return (
<div className="px-8 mb-8 mx-auto py-5 bg-white rounded-tr-[45px] rounded-bl-[45px] shadow-sm transition-all duration-500 hover:shadow-2xl justify-center items-center  z-20 inline-flex  ">
        <div className="text-[#003368]  text-3xl md:text-3xl lg:text-5xl font-normal itim ">
          {props.title}
        </div>
      </div>
  );
}