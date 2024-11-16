import Image from 'next/image'
import { Option } from '@prisma/client';
import { QuantityButtons } from '../../ui/QuantityButtons';

interface Props {
    option: Option;
};

export const OptionCard = ({ option }: Props) => {
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
            {
                option.max > 1 ? (
                    <QuantityButtons
                        initialQuantity={option.min}
                        min={option.min}
                        max={option.max}
                    />
                ) : (
                    <input
                        type="checkbox"
                        className='h-6 w-6'
                    />
                )
            }


        </article>
    )
}
