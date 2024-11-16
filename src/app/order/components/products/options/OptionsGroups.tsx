import { Option, OptionsGroup } from "@prisma/client";
import { Options } from "./Options";


interface OptionsGroupWithRelations extends OptionsGroup {
    options: Option[];
}

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
