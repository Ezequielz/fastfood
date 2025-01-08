interface Props {

  quantotyCards?: number;
}


export const ProductsByCategoryListSkeleton = ({ quantotyCards = 10 }: Props) => {
  return (
    <section
      className=" grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-10 xl:grid-cols-5"
    >
      {
        Array.from({ length: quantotyCards }).map((card, i) => (
          <article
            key={i}
            className="flex items-center cursor-pointer flex-col border-slate-200 border-2 overflow-hidden rounded-lg shadow-elevation-down"
          >

            <div className=" md: flex flex-col  md:w-full">
              <div
                className=" bg-slate-200 animate-pulse w-full h-52 "

              />

              <div className="min-h-[32px] p-2">

                <div
                  className="animate-pulse bg-slate-200 w-40 h-4"
                />
                <div
                  className="animate-pulse bg-slate-300 w-20 h-6 mt-2"
                />


              </div>

            </div>

          </article>

        ))

      }
    </section>
  )
}
