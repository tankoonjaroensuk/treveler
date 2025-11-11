import Image from "next/image"
import Breadcrumb from "@/app/Components/Breadcrumb"
import { notFound } from "next/navigation"
import { categories } from "../data"

interface Props {
    params: { slug: string }
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params

    const category = categories.find(c => c.slug === slug)
    if (!category) return notFound()

    return (

        <div>
            <Breadcrumb></Breadcrumb>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div>
                    <Image
                        src={category.image}
                        alt={category.title}
                        width={1440}
                        height={400}
                        className="rounded-2xl object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                </div></div>
        </div>
    )
}
