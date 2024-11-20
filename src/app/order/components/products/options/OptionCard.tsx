import Image from 'next/image'
import { Option } from '@prisma/client';
import { QuantityOptionButton } from '../../ui/QuantityOptionButton';
import { OptionInputSelect } from '../../ui/OptionInputSelect';
// import { OptionSubtotal } from './OptionSubtotal';


interface Props {
    option: Option;
};

export const OptionCard = ({ option }: Props) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { available, ...restOpt } = option




    return (
        <article
            className='flex justify-between items-center rounded-lg border px-10 border-gray-200 bg-gray-200 p-3 text-sm transition hover:border-gray-300 hover:bg-gray-300'
        >
            <div className='flex gap-2  items-center'>
                <Image
                    height={64}
                    width={64}
                    src={option.imageUrl ?? '/images/placeholder.jpg'}
                    alt={option.name}
                    quality={75}
                    unoptimized

                />
                {option.name}
            </div>
            <div>

                {
                    option.max > 1 ? (
                        <div className='flex gap-2 items-center'>
                            {/* <OptionSubtotal option={option}/> */}

                            <QuantityOptionButton
                                key={option.id}
                                option={{ ...restOpt, quantity: 0, subtotal: option.price }}

                                min={option.min}
                                max={option.max}

                            />
                        </div>

                    ) : (
                        <OptionInputSelect option={{ ...restOpt, quantity: 0, subtotal: option.price }}/>
                    )
                }
            </div>


        </article>
    )
}
