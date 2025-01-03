import { Option } from "@prisma/client"

import { OptionCard } from "./OptionCard"

interface Props {
    options: Option[]
}
export const Options = ({ options }: Props) => {
    return (
        <section className="flex flex-col gap-2">
            {
                options.map(option => (
                    <OptionCard
                        key={option.id}
                        option={option}
                    />
                ))
            }
        </section>
    )
}
