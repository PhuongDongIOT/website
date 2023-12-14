import dynamic from 'next/dynamic';
import { CardBlogProps } from '~stories/CardBlog';
import { mainConfig } from '~configs/main.config';

const Blog = dynamic(() => import('~stories/Blog'), { ssr: false })

const cardBlogList: CardBlogProps[] = [
    {
        "width": "md:w-full",
        "date": "Dec 22, 2023",
        "cardTitle": "Meet AutoManage, the best AI management tools",
        "cardDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "image": "https://i.ibb.co/Cnwd4q6/image-01.jpg"
    },
    {
        "width": "md:w-full",
        "date": "Dec 22, 2023",
        "cardTitle": "Meet AutoManage, the best AI management tools",
        "cardDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "image": "https://i.ibb.co/Y23YC07/image-02.jpg"
    },
    {
        "width": "md:w-full",
        "date": "Dec 22, 2023",
        "cardTitle": "Meet AutoManage, the best AI management tools",
        "cardDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "image": "https://i.ibb.co/7jdcnwn/image-03.jpg"
    }
]

export function BlogComponent() {
    if (mainConfig.isDevEnv) {
        return (
            <div>
                <Blog cardBlogList={cardBlogList} />
            </div>
        )

    }
}
