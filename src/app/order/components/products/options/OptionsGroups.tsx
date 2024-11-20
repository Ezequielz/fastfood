
import { Options } from "./Options";
import { OptionsGroupWithRelations } from "@/interfaces/order";




interface Props {
    optionsGroups: OptionsGroupWithRelations[];
}

export const OptionsGroups = ({ optionsGroups }: Props) => {
    return (
        <section>
            {optionsGroups.map(optionGoup => (
                <div className="mb-4" key={optionGoup.id}>
                    <div className="flex w-full flex-col gap-2">
                        <header className="text-sm font-bold">
                            {optionGoup.name}
                        </header>
                        <Options options={optionGoup.options} />
                    </div>
                </div>

            ))}
        </section>
    )
}
